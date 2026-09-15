/* 인쇄 지면 실측. PDF 폭(A4 210mm - 좌우 마진 26mm = 184mm)으로 뷰포트를 맞춰야
   줄바꿈이 실제와 같아진다. 넓은 뷰포트로 재면 높이가 과소 측정된다. */
import { chromium } from "playwright";
const lang = process.argv[2] || "en";
const MM = 96 / 25.4;
const PAGE = Math.round(273 * MM); // 297mm - 상하 24mm
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: Math.round(184 * MM), height: PAGE } });
await p.goto(`http://127.0.0.1:4173/resume.html?lang=${lang}`, { waitUntil: "networkidle" });
await p.emulateMedia({ media: "print" });
await p.waitForTimeout(600);
const rows = await p.evaluate(() => {
  const secs = Array.from(document.querySelectorAll(".sec")).map((s) => ({
    section: s.querySelector("h2").textContent,
    px: Math.round(s.getBoundingClientRect().height)
  }));
  secs.push({ section: "SHEET TOTAL", px: Math.round(document.querySelector(".sheet").getBoundingClientRect().height) });
  return secs;
});
for (const r of rows) console.log(String(r.px).padStart(6), r.section);
const total = rows[rows.length - 1].px;
console.log(`\n페이지 ${PAGE}px 기준: ${(total / PAGE).toFixed(2)}장 분량 (여유 ${PAGE * Math.ceil(total / PAGE) - total}px)`);
await b.close();
