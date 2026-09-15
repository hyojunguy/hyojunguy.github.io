/* 이력서 콘텐츠 데이터. 사실·수치는 assets/js/data.js와 2icorp-work/cases.json을 정본으로 한다.
   마크업과 카피를 분리해 둔다. 문구 수정은 이 파일만 고치면 된다. */

export const ko = {
  meta: {
    name: "한효정",
    nameEn: "Hyojung Han",
    title: "AI Systems Engineer",
    location: "서울시 송파구 잠실동",
    email: "hyojunguy@gmail.com",
    github: "github.com/hyojunguy",
    blog: "thakicloud.com/tech-blog",
    hf: "huggingface.co/ThakiCloud",
    updated: "2026-09"
  },

  summary: [
    "2007년부터 공백 없이 19년째 컴퓨터 비전, 추천, 생성 AI, 엔터프라이즈 AI 플랫폼을 만들어 온 AI 시스템 엔지니어입니다.",
    "현재 ThakiCloud에서 추론, 학습, 에이전트 자동화 세 플랫폼의 제품 전략과 아키텍처를 설계하고 팀을 이끕니다.",
    "한국어 27B 정렬, 온디바이스 경량화, 서빙 양자화를 직접 학습하고 측정해 HuggingFace 공개 모델 34종과 단독 저자 논문 5편(arXiv)을 냈습니다.",
    "생성 AI 콘텐츠 플랫폼을 직접 창업해 일본·대만·홍콩 3개 시장에서 유료 사용자 5만 명, 누적 매출 4억 원을 만든 경험이 있습니다.",
    "한국어·영어 기술 블로그를 운영하며 2,260편을 쓰고 1,328편을 공개했습니다. 동작하는 구현 사례 42건을 독립 연구로 축적했습니다.",
    "모델부터 인프라, 제품까지 직접 만들어 본 경험을 바탕으로 방향을 정하고, 필요한 부분은 지금도 직접 구현합니다."
  ],

  skills: [
    {
      group: "에이전트 하네스 · 오케스트레이션",
      items: [
        "하네스 엔지니어링", "루프 엔지니어링", "그래프 엔지니어링", "MCP 툴 연동",
        "스킬 라우팅 · 검색증강", "LangGraph", "Human-in-the-Loop 승인", "정책 · 감사 추적",
        "결정론 검증 게이트", "멀티에이전트 합의"
      ]
    },
    {
      group: "학습 · 파인튜닝 · 증류",
      items: [
        "SFT", "CPT", "DPO", "GRPO", "GKD", "LoRA · QLoRA", "지식 증류",
        "FSDP · DDP", "TRL", "Unsloth", "MLflow", "평가셋 · 회귀 테스트"
      ]
    },
    {
      group: "추론 · 서빙 · 압축",
      items: [
        "vLLM", "NVIDIA Dynamo", "LMCache", "Prefill-Decode 분리", "NVFP4 · W4A16",
        "LLM Compressor", "MoE 압축 · 프루닝", "Scale-to-Zero", "KServe", "모델 라우팅"
      ]
    },
    {
      group: "음성 · 비전 · 생성 모델",
      items: [
        "VoxCPM2 TTS", "Qwen3-TTS", "Qwen3-ASR", "화자 분리(pyannote)", "VLM 영상 이해",
        "Stable Diffusion", "DreamBooth", "GPT Image", "Text-to-Video", "EmbeddingGemma",
        "AdaFace · ArcFace", "OpenCV · ViT"
      ]
    },
    {
      group: "플랫폼 · GPU 인프라",
      items: [
        "Kubernetes", "Kueue · MultiKueue", "ArgoCD · GitOps", "Helm", "Keycloak",
        "SeaweedFS", "CloudNativePG", "NATS", "Prometheus · Grafana", "CUDA", "Docker"
      ]
    },
    {
      group: "언어 · 프레임워크",
      items: [
        "Python", "Go (Fiber)", "TypeScript", "C++", "React 19", "Next.js",
        "FastAPI", "PyTorch", "PostgreSQL", "Redis"
      ]
    },
    {
      group: "고전 ML · 최적화",
      items: [
        "LightGBM", "CatBoost", "XGBoost", "scikit-learn", "Google OR-Tools",
        "Airflow", "선형계획 · 제약 최적화", "시계열 · 랭킹"
      ]
    }
  ],

  experience: [
    {
      org: "ThakiCloud",
      period: "2025.04 ~ 현재",
      role: "AI 플랫폼 기획 · 설계 · 리딩",
      where: "서울 역삼",
      intro:
        "추론 · 학습 · 에이전트 플랫폼 세 축을 기획하고 설계하며 팀을 이끕니다. 동시에 한국어 모델 정렬, 온디바이스 경량화, 서빙 압축을 직접 학습하고 측정해 공개 모델 34종과 논문 5편으로 냈습니다.",
      projects: [
        {
          name: "AI 플랫폼 3종 기획 · 아키텍처 설계 · 리딩",
          bullets: [
            "추론 · 학습 · 에이전트 자동화 세 축의 제품 방향과 기본 아키텍처를 설계하고, 실험 우선순위를 정해 개발팀을 리딩",
            "Kubernetes GPU 스케줄링 · 멀티테넌시 · GitOps 배포 체계의 설계 방향을 잡고 구축을 총괄",
            "에이전트 빌더를 사내 시스템과 연동해 실제 업무를 에이전트로 조립 · 실행하는 경로를 직접 설계하고 구현"
          ]
        },
        {
          name: "한국어 27B 응답 스타일 정렬과 부작용 교정 (Human-KO)",
          bullets: [
            "Qwen3.8-27B를 LoRA SFT로 정렬해 불릿 사용률 97.3% → 0.6%, 중앙 응답 길이 1,329자 → 152자로 줄이고 사람다움 선호 승률을 1.1% → 94.9%(n=175)로 끌어올림. 학습 데이터를 2,992건에서 선별 519건으로 줄였을 때 비로소 모델이 움직였음",
            "스타일 정렬이 목표하지 않은 행동까지 바꾼다는 것을 발견하고 DPO로 교정: KoBBQ 모호 맥락 기권율 81.5% → 92.8%, 고정관념 응답 16.1% → 6.7%, KMMLU는 오히려 +4.2pp",
            "전체 가중치와 서빙 양자화본, 안전성 · 금융 변형까지 HuggingFace에 공개하고 결과를 arXiv 논문으로 발표"
          ]
        },
        {
          name: "한국어 방언 모델과 합성데이터 평가 함정 규명 (Satoori-KO)",
          bullets: [
            "5개 권역 3개 축 1,000문항 방언 벤치마크(KoDialectBench)를 만들고 실데이터 · 합성데이터 두 갈래로 27B를 학습해 공개",
            "평가 지표의 채점 어휘가 합성 데이터 생성 어휘와 겹치면 성능이 부풀려진다는 것을 정량화: 구성을 분리한 대조군에서 방언성 회복이 91.8% → 8.1%로 붕괴하는 반면 파이프라인 독립 지표는 거의 움직이지 않음",
            "오염 게이트를 코드로 강제해 홀드아웃 누수 17/400(4.2%)과 지문 생성 버그를 학습 전에 차단"
          ]
        },
        {
          name: "에이전트 스킬 검색 임베딩 경량화 (SKILLRET-Edge)",
          bullets: [
            "0.6B 교사 모델을 22M · 109M 학생으로 지식 증류해 NDCG@10을 44.37 → 75.26으로 끌어올리고, GPU 없이 CPU에서 도는 스킬 라우터 임베딩을 확보",
            "int4 · g16 양자화로 17.07MB까지 줄이면서 NDCG 75.14로 fp32와 통계적 동률을 유지 (109M 모델은 교사 성능의 98.0%)",
            "임베딩 테이블은 사실상 무손실인데 FFN이 취약하다는 모듈별 지도를 4개 임베더 계열에서 측정해 논문화"
          ]
        },
        {
          name: "온디바이스 의도추론 SLM과 연합학습 광고 (PLAT.AID)",
          bullets: [
            "421MB 한국어 문장 임베더를 1.92MB 정적 임베딩으로 자기증류해 220배 축소하면서 교사 성능의 78~87%를 유지",
            "3MiB 페이로드 · 20ms 예산 안에서 iPhone Tier-0 p95 3.67ms를 실측하고, 원문 · 임베딩 · 식별자가 단말을 떠나지 않도록 타입 기반 출구 경계를 설계해 유출 카나리 7/7 미검출을 확인",
            "연합학습 개인화 헤드(FedPer)로 클라이언트 30% 이탈에도 수렴을 유지하고, 실제 한국어 커머스 리뷰 22,900건으로 상품명 top-5 75.0%를 검증"
          ]
        },
        {
          name: "서빙 양자화 · 압축과 측정 신뢰도",
          bullets: [
            "텍스트 · MoE · 비전언어 모델에 NVFP4 · W4A16 · MXFP4 · GPTQ · AWQ를 적용하고 MoE 프루닝까지 검증해 서빙 가능한 것만 공개",
            "서빙 설정만 바꿔 단일 스트림 18.8배 · 포화 17.9배 차이를 실측해 플랫폼 기본값 문제를 제품 이슈로 제기",
            "같은 레시피를 다시 빌드하기만 해도 GSM8K에서 3.56pp가 흔들린다는 노이즈 바닥을 측정해, 1대1 체크포인트 비교만으로는 실재하지 않는 레시피 효과를 만들어낼 수 있음을 보이고 데이터셋으로 공개"
          ]
        },
        {
          name: "학습 파이프라인과 에이전트 트래젝토리 학습",
          bullets: [
            "Kubeflow 기반 학습 플랫폼에 SFT · CPT · DPO · GRPO · GKD 5종과 학습 체인 6종을 얹어 사내 파인튜닝 작업의 공통 백본으로 운영",
            "에이전트 실행 기록을 학습 데이터로 바꾸는 파이프라인을 만들고, 툴콜 턴 감독 비율을 13% → 100%로 올려 홀드아웃 툴 실행을 41/52 → 52/52로 개선",
            "오라클 검증 기반 선호쌍 생성기를 Rust로 구현해 거절 데이터 혼합의 트레이드오프(거절 정확도 +82.7pp, 호출 정확도 −6.0pp)를 정량화"
          ]
        },
        {
          name: "기술 블로그 운영과 다국어 발행 파이프라인",
          bullets: [
            "초안 생성부터 사실 검증, 번역, 배포까지 이어지는 발행 파이프라인을 구축해 2024년 5월부터 2,260편을 작성하고 1,328편(한국어 664 · 영어 664)을 공개 운영",
            "11개 카테고리에 걸쳐 품질 게이트를 코드로 강제하고, 한 번 게시한 주소는 죽지 않도록 URL 래칫을 CI에 걸어 유지"
          ]
        }
      ]
    },
    {
      org: "2i Studio (창업)",
      period: "2024.03 ~ 2025.04",
      role: "창업자",
      where: "경기 용인",
      intro:
        "생성 AI 콘텐츠 플랫폼을 직접 창업해 기획부터 개발, 운영까지 전 과정을 담당했습니다.",
      projects: [
        {
          name: "얼굴 기반 생성 AI 콘텐츠 플랫폼",
          bullets: [
            "DreamBooth 파인튜닝 기반 동일인물성 보존 생성 파이프라인을 설계해 누적 매출 4억 원, 유료 결제 사용자 5만 명을 달성",
            "FastAPI · RabbitMQ 생성 큐와 Expo · Next.js 앱 · 웹을 직접 구현해 일본 · 대만 · 홍콩 3개 시장에 출시"
          ]
        }
      ]
    },
    {
      org: "Toss",
      period: "2021.01 ~ 2024.02",
      role: "시니어 머신러닝 엔지니어",
      where: "서울",
      intro:
        "CDP 개인화, 생성 AI 도구, 얼굴 인증, 근무 스케줄링까지 여러 도메인을 넘나들며 머신러닝 시스템을 설계하고 구현했습니다.",
      projects: [
        {
          name: "고객 데이터 플랫폼과 개인화 예측",
          bullets: [
            "서비스별 · 유저별 CTR · CVR 예측 모델을 구축해 SQL 세그먼트 수작업을 확률 기반 자동화로 전환",
            "A/B 테스트 조기 종료 판단 모델을 별도로 설계해 테스트 기간을 75% 단축"
          ]
        },
        {
          name: "디자이너용 그래픽 생성 도구 Tosst",
          bullets: [
            "토스 스타일 템플릿을 얹은 Stable Diffusion 프롬프트 엔진을 구축해 캐릭터 제작 주기를 수 주에서 2~3일로 단축",
            "외주 비용 수천만 원을 절감하고 토스 블로그 · 웹 · 앱 전반의 그래픽 제작에 적용"
          ]
        },
        {
          name: "UI 코드 생성기와 RAG 검색 시스템",
          bullets: [
            "사내 UI 시스템에 맞춰 LLaMA를 파인튜닝해 YAML 입력만으로 프로토타입 코드를 생성",
            "LangChain · ChromaDB 기반 자연어 검색을 붙여 프로토타입 제작 시간을 수 시간에서 수 분으로 단축"
          ]
        },
        {
          name: "얼굴 결제와 스마트도어락 인증",
          bullets: [
            "3D 깊이 기반 위조 방지와 AdaFace · ArcFace 커스터마이징으로 실시간 얼굴 인증 정확도를 개선",
            "JNI로 안드로이드 · iOS 네이티브 모듈에 직접 연동해 카드 · 비밀번호 없는 결제 · 출입 인증을 구현"
          ]
        },
        {
          name: "고객센터 근무 스케줄 자동 편성",
          bullets: [
            "근무 · 휴가 · 교대 제약을 선형계획으로 모델링하고 Google OR-Tools로 풀어 편성 시간을 2주에서 5분으로 단축",
            "동일 엔진을 수천 명 규모 워크숍 숙소 배정에도 재사용해 확장성을 검증"
          ]
        }
      ]
    },
    {
      org: "삼성전자",
      period: "2011.09 ~ 2020.12",
      role: "시니어 소프트웨어 엔지니어 · ML 리서처 · 개발 매니저",
      where: "수원",
      intro:
        "ML 플랫폼과 5G 네트워크 자동화, 음악 인식 엔진을 만들며 조직의 기술 방향에도 관여했습니다.",
      projects: [
        {
          name: "사내 클라우드 머신러닝 플랫폼",
          bullets: [
            "Kubernetes 기반 ML 플랫폼을 설계해 모델 배포 리드타임을 수 일에서 수 시간으로 단축",
            "WaveNet · DeepVoice2 · SRGAN · CycleGAN · SSD를 자동 배포 체계에 얹어 여러 팀의 PoC를 실서비스로 전환"
          ]
        },
        {
          name: "5G vRAN GPU 자동화와 통계 분석",
          bullets: [
            "CUDA 기반 병렬 처리를 최적화하고 실시간 통계 시스템을 설계해 5G 조기 런칭의 병목 구간을 자동 탐지",
            "NVIDIA 본사와의 기술 워크숍을 직접 주관해 글로벌 협업 창구 역할을 수행"
          ]
        },
        {
          name: "300만 곡 실시간 음악 인식 엔진",
          bullets: [
            "Compact Sub-Fingerprint Hashing 기반 자체 오디오 지문 엔진을 설계해 외부 API 의존 없이 300만 곡 이상을 실시간 인식",
            "고속 해시 인덱싱 구조와 안드로이드 앱을 직접 구현해 삼성전자 논문상 최종 후보에 선정"
          ]
        }
      ]
    },
    {
      org: "Daum",
      period: "2008.09 ~ 2011.08",
      role: "머신러닝 엔지니어",
      where: "제주",
      intro:
        "사물 인식과 이미지 검색 시스템을 만들며 컴퓨터 비전 경력을 시작했습니다.",
      projects: [
        {
          name: "사물 인식과 이미지 검색 시스템",
          bullets: [
            "Histogram 기반 Hamming Embedding과 LIS 인덱싱으로 700만 장 규모 실시간 이미지 매칭 시스템을 설계",
            "이미지 해시 중복 제거 · 얼굴 검출 · 카테고리 분류기를 함께 구현해 쇼핑 검색 대표 이미지 추천 로직에 적용"
          ]
        }
      ]
    },
    {
      org: "비전 스타트업",
      period: "2007.01 ~ 2008.08",
      role: "소프트웨어 엔지니어",
      where: "서울",
      intro:
        "영상 처리와 패턴 인식으로 커리어를 시작했습니다. 여기서 다룬 문제들이 이후 이미지 검색으로 이어졌습니다.",
      projects: [
        {
          name: "영상 처리 · 패턴 인식 모듈",
          bullets: [
            "카메라 입력에서 특징을 추출하고 매칭하는 비전 모듈을 C++로 구현",
            "영상 전처리와 인식 정확도 개선을 반복하며 컴퓨터 비전 기본기를 축적"
          ]
        }
      ]
    }
  ],

  rnd: {
    intro:
      "비전, 신호 처리, 최적화, 추천처럼 제가 오래 다뤄 온 영역을 에이전트로 더 넓게 확장하며 직접 구현합니다. 무엇을 재야 답이 나오는지 이미 알기 때문에 논문을 읽는 자리에서 곧바로 실측 가능한 구현으로 넘어갑니다. 저장소 173개를 만들어 운영하며 그중 42건은 측정값이 붙은 완성 구현입니다.",
    groups: [
      {
        name: "최적화 · 스케줄링",
        items: [
          "근무표가 안 풀리는 이유를 제약 완화 트레이드오프로 정량화하는 인력 스케줄링 엔진",
          "증원 없이 시프트 구조 재설계만으로 SLA를 끌어올린 인력 배치 최적화 엔진",
          "이동거리와 연속 원정 일수를 함께 최소화하는 다목적 일정 최적화",
          "배차 최적화로 동일 라이더 수에서 배달 처리량을 증대",
          "배정 · 편성 문제 3건에서 실현 가능성을 감이 아닌 증명으로 확인하는 검증 엔진",
          "LLM 생성-수정 최적화 루프를 조합최적화 벤치마크 3개에 적용해 2승 1패로 검증"
        ]
      },
      {
        name: "인프라 · 배포",
        items: [
          "복제본 3벌로는 못 잡는 데이터 부식(bit rot)을 온프렘 스토리지에서 실측",
          "스토리지 검증 도구를 자사 인프라에 먼저 겨눠 결함을 스스로 찾아내는 진단 하네스",
          "클라우드 대비 온프렘 전환의 손익분기점을 TCO로 계산",
          "인터넷이 없는 폐쇄망 설비에도 AI 모델을 안전하게 전달하는 배포 경로 설계",
          "테스트는 전부 통과했지만 실제 클라이언트 연동에서 1분 만에 죽는 결함을 재현 · 검증"
        ]
      },
      {
        name: "데이터 · 추천",
        items: [
          "부서별로 흩어진 엑셀을 표준 ETL로 통합해 경영 현황 조회를 반나절에서 즉시로 단축",
          "결품과 악성재고를 동시에 줄이는 수요예측 기반 재고 최적화",
          "제안 골든타임을 놓치지 않는 영업 인텔리전스 레이더",
          "인기순 대조군을 세워 추천 모델의 실제 개선폭을 재는 GPU 벤치마크 하네스",
          "위치 정보를 넣어 도달 불가능한 매장 추천을 걸러내는 로컬 커머스 시맨틱 ID 인덱서"
        ]
      },
      {
        name: "비전",
        items: [
          "검사원마다 다르던 판정 기준을 통일하는 24시간 제조 비전 검사 AI",
          "이미지 분할 오류를 찾아 스스로 고치는 연구 도구 자동화 폐루프",
          "GPU 서버 없이 소비자용 실리콘에서 영상 이해 AI 성능을 실측"
        ]
      },
      {
        name: "에이전트 · 자동화 하네스",
        items: [
          "견적 · 발주 수기입력을 자동화해 담당자는 예외 건만 처리하는 문서 자동화",
          "반복 문의는 AI가 처리하고 사람은 진짜 상담에 집중하는 AI 상담 에이전트",
          "20년 베테랑의 노하우를 질문 한 번으로 꺼내는 RAG 지식 자산화",
          "제품 정보만 넣으면 채널별 홍보영상과 온라인 존재감을 자동으로 만드는 마케팅 자동화",
          "\"부산 출장 준비해줘\" 한마디로 앱 여러 개를 대신 실행하는 대화형 에이전트 오케스트레이션",
          "백지 도면에서 비판 가능한 초안까지 열 분 만에 도달하는 설계 자동화 폐루프",
        "스킬 1,600여 개를 BM25와 임베딩 하이브리드로 라우팅하는 에이전트 하네스",
        "무인 스케줄 파이프라인 13종을 운영하며 실패를 회고로 되먹여 모델 등급을 자동 조정"
        ]
      },
      {
        name: "신호 · 음향",
        items: [
          "무선망을 멈추는 원인 불명 전파를 실시간으로 지목하는 신호 지문 분석",
          "여분의 스마트폰 한 대로 통행량을 세는 무설치 음향 센싱",
          "전파도 빛도 못 쓰는 방에서 소리로 데이터를 넘기는 에어갭 음향 통신"
        ]
      },
      {
        name: "제품 · 도구",
        items: [
          "파일을 서버로 보내지 않는 한글 문서 변환기를 웹과 데스크탑 앱으로 출시(MIT 공개, 무업로드를 검사 40개로 상시 검증)",
          "모델이 내 GPU에 올라가는지와 자체 호스팅이 API보다 싼지를 브라우저에서 계산하는 도구"
        ]
      }
    ]
  },

  research: {
    intro:
      "ThakiCloud에서 직접 학습하고 측정한 결과를 논문으로 냅니다. 모두 단독 저자이고, 측정값과 재현 코드가 붙어 있습니다.",
    items: [
      {
        title: "Off-Target Effects of Response-Style Alignment in a Korean 27B Language Model",
        status: "arXiv:2609.11291 (2026.09 공개)",
        url: "https://arxiv.org/abs/2609.11291",
        note: "한국어 응답 스타일만 정렬했는데 사회적 편향 질문의 기권과 금융 안내의 고지 행동까지 함께 바뀐다는 것을 두 개의 독립 검출기로 측정"
      },
      {
        title:
          "On-Device Commercial Intent Retrieval Under Size, Latency, and Privacy Constraints: A 3 MiB Retrieval System with Typed Egress Boundaries",
        status: "arXiv 제출 (공개 예정)",
        note: "3MiB · 20ms · 무유출이라는 세 제약을 동시에 걸었을 때 검색 품질이 어디서 비용을 내는지 실기기에서 측정"
      },
      {
        title: "Rewrite Locality and Cache Provenance: Two Axes That Govern Prefix Reuse in Multi-Turn LLM Agents",
        status: "arXiv 제출 (공개 예정)",
        note: "멀티턴 에이전트의 프리픽스 캐시 재사용을 지배하는 것은 남은 히스토리 양이 아니라 가장 이른 무효화 지점과 서버의 캐시 상태임을 27개 엔진 조건에서 검증"
      },
      {
        title: "Metric-Construction Coupling Inflates Measured Synthetic Dialect Recovery",
        status: "arXiv 제출 (공개 예정)",
        note: "합성 데이터의 생성 어휘와 평가 지표의 채점 어휘가 겹치면 방언 회복률이 부풀려진다는 것을 구성 분리 대조군으로 분리 측정"
      },
      {
        title: "Where Post-Training Quantization Breaks Text Embedders: A Measured Map Across Four Embedder Families",
        status: "arXiv 제출 (공개 예정)",
        note: "임베딩 테이블 보호 · 모듈별 비트 배분 같은 통념을 4개 임베더 계열에서 검증해, 재구성 오차가 모듈 선택 지표로는 쓸 수 없음을 보임"
      }
    ]
  },

  models: {
    intro:
      "학습 · 압축한 모델을 <a href=\"https://huggingface.co/ThakiCloud\">HuggingFace ThakiCloud</a> 조직에 34종 공개해 운영합니다. 모델 카드에 측정 조건과 재현 절차를 함께 싣습니다.",
    groups: [
      {
        name: "Human-KO · 한국어 스타일 정렬 27B (6종)",
        items: [
          "전체 가중치, 안전성 · 금융 변형, NVFP4 · W4A16 서빙 양자화본"
        ]
      },
      {
        name: "Satoori-KO · 한국어 방언 27B (2종)",
        items: ["실데이터 갈래와 합성데이터 갈래를 나눠 공개해 지표 부풀림을 대조 가능하게 함"]
      },
      {
        name: "SKILLRET-Edge · 에이전트 스킬 검색 임베더 (7종)",
        items: ["22M · 109M 증류 모델과 int3 · int4 양자화본, 17MB에서 fp32와 동률"]
      },
      {
        name: "Language Confusion Suppression · 어휘 프루닝 (6종)",
        items: ["한국어 · 일본어 · 아랍어 · 베트남어 · 광둥어 · 대만 중국어 출력 어휘 억제 레시피"]
      },
      {
        name: "Serving Quantization · 서빙 양자화 (13종)",
        items: [
          "Qwen3.8-27B · Qwen3-30B-A3B · Qwen3-Coder-30B-A3B · 비전언어 모델에 NVFP4 · W4A16 · MXFP4 · 프루닝 적용"
        ]
      }
    ]
  },

  education: [
    { school: "연세대학교", degree: "컴퓨터과학과 석사", year: "2007" }
  ]
};

export const en = {
  meta: {
    name: "Hyojung Han",
    nameEn: "Hyojung Han",
    title: "AI Systems Engineer",
    location: "Jamsil-dong, Songpa-gu, Seoul, South Korea",
    email: "hyojunguy@gmail.com",
    github: "github.com/hyojunguy",
    blog: "thakicloud.com/tech-blog",
    hf: "huggingface.co/ThakiCloud",
    updated: "2026-09"
  },

  summary: [
    "AI systems engineer with 19 years of continuous experience (2007-present) spanning computer vision, recommendation systems, generative AI, and enterprise AI platforms.",
    "Currently leads product strategy and architecture for three AI platforms at ThakiCloud: inference, training, and enterprise agent automation.",
    "Personally trains and measures Korean 27B alignment, on-device compression, and serving quantization, shipping 34 open models on HuggingFace and 5 sole-authored arXiv papers.",
    "Founded and ran a generative AI content platform that reached 50K paying users and KRW 400M in cumulative revenue across Japan, Taiwan, and Hong Kong, and runs a bilingual technical blog with 1,328 published posts."
  ],

  skills: [
    {
      group: "Agent Harness & Orchestration",
      items: [
        "Harness Engineering", "Loop Engineering", "Graph Engineering", "MCP Tool Integration",
        "Skill Routing / RAG", "LangGraph", "Human-in-the-Loop Approval", "Policy & Audit Trail",
        "Deterministic Verification Gates", "Multi-Agent Consensus"
      ]
    },
    {
      group: "Training, Fine-tuning & Distillation",
      items: [
        "SFT", "CPT", "DPO", "GRPO", "GKD", "LoRA / QLoRA", "Knowledge Distillation",
        "FSDP / DDP", "TRL", "Unsloth", "MLflow", "Eval Sets & Regression Testing"
      ]
    },
    {
      group: "Inference, Serving & Compression",
      items: [
        "vLLM", "NVIDIA Dynamo", "LMCache", "Prefill-Decode Disaggregation", "NVFP4 / W4A16",
        "LLM Compressor", "MoE Compression / Pruning", "Scale-to-Zero", "KServe", "Model Routing"
      ]
    },
    {
      group: "Speech, Vision & Generative Models",
      items: [
        "VoxCPM2 TTS", "Qwen3-TTS", "Qwen3-ASR", "Speaker Diarization (pyannote)", "VLM Video Understanding",
        "Stable Diffusion", "DreamBooth", "GPT Image", "Text-to-Video", "EmbeddingGemma",
        "AdaFace / ArcFace", "OpenCV / ViT"
      ]
    },
    {
      group: "Platform & GPU Infrastructure",
      items: [
        "Kubernetes", "Kueue / MultiKueue", "ArgoCD / GitOps", "Helm", "Keycloak",
        "SeaweedFS", "CloudNativePG", "NATS", "Prometheus / Grafana", "CUDA", "Docker"
      ]
    },
    {
      group: "Languages & Frameworks",
      items: [
        "Python", "Go (Fiber)", "TypeScript", "C++", "React 19", "Next.js",
        "FastAPI", "PyTorch", "PostgreSQL", "Redis"
      ]
    },
    {
      group: "Classical ML & Optimization",
      items: [
        "LightGBM", "CatBoost", "XGBoost", "scikit-learn", "Google OR-Tools",
        "Airflow", "Linear Programming / Constraint Optimization", "Time Series / Ranking"
      ]
    }
  ],

  experience: [
    {
      org: "ThakiCloud",
      period: "Apr 2025 ~ Present",
      role: "AI Platform Strategy, Architecture & Team Lead",
      where: "Seoul, South Korea",
      intro:
        "Leads strategy, architecture, and delivery across three AI platforms, and personally trains and measures the Korean alignment, on-device compression, and serving-quantization work behind 34 open model releases and 5 papers.",
      projects: [
        {
          name: "Led strategy and architecture for three AI platforms",
          bullets: [
            "Set product direction and core architecture for inference, training, and agent automation, and led the engineering team by setting experiment priorities",
            "Directed GPU scheduling, multi-tenancy, and GitOps deployment on Kubernetes, and personally wired the agent builder into internal systems"
          ]
        },
        {
          name: "Korean 27B response-style alignment and its off-target effects (Human-KO)",
          bullets: [
            "LoRA-SFT aligned Qwen3.8-27B for Korean response style: bullet usage 97.3% to 0.6%, median length 1,329 to 152 characters, human-likeness win rate 1.1% to 94.9% (n=175); the model only moved once the training set was cut from 2,992 records to 519 curated ones",
            "Found that style alignment shifts behaviors the objective never targeted, then corrected them with DPO: KoBBQ ambiguous-context abstention 81.5% to 92.8%, stereotyped answers 16.1% to 6.7%, with KMMLU up 4.2pp",
            "Released full weights, serving quantizations, and safety/finance variants on HuggingFace; published the findings on arXiv"
          ]
        },
        {
          name: "Korean dialect model and a measurement trap in synthetic data (Satoori-KO)",
          bullets: [
            "Built KoDialectBench (1,000 items, 5 regions, 3 axes) and trained the 27B on both real and synthetic lanes",
            "Quantified how a metric inflates results when its scoring inventory overlaps the synthetic-construction inventory: on a construction-disjoint arm, measured dialect recovery collapses from 91.8% to 8.1% while pipeline-independent metrics barely move",
            "Enforced a contamination gate in code, catching 17/400 (4.2%) holdout leakage before training"
          ]
        },
        {
          name: "Compressing the agent skill-retrieval embedder (SKILLRET-Edge)",
          bullets: [
            "Distilled a 0.6B teacher into 22M and 109M students, raising NDCG@10 from 44.37 to 75.26 and putting the skill-router embedder on CPU with no GPU",
            "Quantized to 17.07MB (int4/g16) while holding NDCG at 75.14, statistically tied with fp32; the 109M student retains 98.0% of teacher quality",
            "Measured a module-level map across four embedder families showing embedding tables quantize nearly free while FFNs are fragile, and published it"
          ]
        },
        {
          name: "On-device intent inference and federated advertising (PLAT.AID)",
          bullets: [
            "Self-distilled a 421MB Korean sentence embedder into a 1.92MB static embedding, 220x smaller while keeping 78-87% of teacher quality",
            "Held a 3MiB payload and 20ms budget with measured p95 of 3.67ms on iPhone, and designed typed egress boundaries so no raw text, embedding, or identifier leaves the device (7/7 exfiltration canaries undetected)",
            "Kept federated convergence (FedPer personal head) under 30% client dropout and validated top-5 product-name retrieval at 75.0% on 22,900 real Korean commerce reviews"
          ]
        },
        {
          name: "Serving quantization, compression, and measurement integrity",
          bullets: [
            "Applied NVFP4, W4A16, MXFP4, GPTQ, and AWQ across text, MoE, and vision-language models, plus MoE pruning, shipping only builds that actually serve",
            "Measured an 18.8x single-stream and 17.9x saturation gap driven by serving configuration alone, and raised it as a product defect",
            "Measured a rebuild-noise floor of 3.56pp on GSM8K from rebuilding the same recipe, showing one-versus-one checkpoint comparison can manufacture a recipe effect; released as a public dataset"
          ]
        },
        {
          name: "Training pipeline and agent-trajectory fine-tuning",
          bullets: [
            "Ran a Kubeflow-based training platform with five methods (SFT, CPT, DPO, GRPO, GKD) and six training chains as the shared backbone for in-house fine-tuning",
            "Built the pipeline that turns agent execution traces into training data; raising tool-call turn supervision from 13% to 100% lifted held-out tool execution from 41/52 to 52/52",
            "Implemented an oracle-verified preference-pair generator in Rust and quantified the reject-mixing tradeoff (refusal accuracy +82.7pp, call accuracy -6.0pp)"
          ]
        },
        {
          name: "Built and operated a multilingual technical blog publishing pipeline",
          bullets: [
            "Built an end-to-end pipeline from drafting through fact-checking, translation, and deployment, writing 2,260 posts since May 2024 with 1,328 currently public (664 Korean, 664 English)",
            "Enforced quality gates in code across 11 categories and a URL ratchet in CI so a published address never dies"
          ]
        }
      ]
    },
    {
      org: "2i Studio (Founder)",
      period: "Mar 2024 ~ Apr 2025",
      role: "Founder",
      where: "Yongin, South Korea",
      intro:
        "Founded and ran a generative AI content platform end to end, from product to engineering to operations.",
      projects: [
        {
          name: "Built a face-based generative AI content platform",
          bullets: [
            "Designed an identity-preserving generation pipeline on DreamBooth fine-tuning, growing to KRW 400M cumulative revenue and 50K paying users",
            "Shipped the full stack (FastAPI/RabbitMQ generation queue, Expo/Next.js app and web) and launched in Japan, Taiwan, and Hong Kong"
          ]
        }
      ]
    },
    {
      org: "Toss",
      period: "Jan 2021 ~ Feb 2024",
      role: "Senior Machine Learning Engineer",
      where: "Seoul, South Korea",
      intro:
        "Designed and shipped machine learning systems across CDP personalization, generative AI tooling, face authentication, and workforce scheduling.",
      projects: [
        {
          name: "Customer data platform and personalization prediction",
          bullets: [
            "Built per-service, per-user CTR/CVR prediction models, replacing manual SQL segment queries with automated probability scores",
            "Designed a separate early-stopping model for A/B tests, cutting test duration by 75%"
          ]
        },
        {
          name: "Tosst, a generative graphic design tool for designers",
          bullets: [
            "Built a Stable Diffusion prompt engine with Toss style templates, cutting character asset production from weeks to 2-3 days",
            "Saved tens of millions of KRW in outsourcing costs; adopted across Toss blog, web, and app graphics"
          ]
        },
        {
          name: "UI code generator and RAG search system",
          bullets: [
            "Fine-tuned LLaMA on internal UI system data to generate prototype code directly from YAML input",
            "Added natural-language search over docs and components with LangChain/ChromaDB, cutting prototyping time from hours to minutes"
          ]
        },
        {
          name: "Face payment and smart door lock authentication",
          bullets: [
            "Improved real-time face authentication accuracy with 3D depth-based anti-spoofing and customized AdaFace/ArcFace",
            "Integrated natively into Android and iOS via JNI, enabling card-free and password-free payment and door access"
          ]
        },
        {
          name: "Automated workforce scheduling for customer support",
          bullets: [
            "Modeled shift, leave, and rotation constraints as a linear program solved with Google OR-Tools, cutting scheduling time from 2 weeks to 5 minutes",
            "Reused the same engine for lodging assignment at workshops with thousands of attendees, validating its generality"
          ]
        }
      ]
    },
    {
      org: "Samsung Electronics",
      period: "Sep 2011 ~ Dec 2020",
      role: "Senior Software Engineer, ML Researcher, Development Manager",
      where: "Suwon, South Korea",
      intro:
        "Built an ML platform, 5G network automation, and a music recognition engine, while also shaping the organization's technical direction.",
      projects: [
        {
          name: "Built an internal cloud machine learning platform",
          bullets: [
            "Designed a Kubernetes-based ML platform, cutting model deployment lead time from days to hours",
            "Auto-deployed WaveNet, DeepVoice2, SRGAN, CycleGAN, and SSD models, moving multiple teams' PoCs into production"
          ]
        },
        {
          name: "5G vRAN GPU automation and statistical analysis",
          bullets: [
            "Optimized CUDA-based parallel processing and designed a real-time statistics system, auto-detecting bottlenecks during an early 5G launch",
            "Ran technical workshops directly with NVIDIA HQ, serving as the point of contact for global collaboration"
          ]
        },
        {
          name: "Real-time music recognition engine at 3M-track scale",
          bullets: [
            "Designed a proprietary audio fingerprinting engine on Compact Sub-Fingerprint Hashing, recognizing 3M+ tracks in real time with no external API dependency",
            "Built the high-speed hash indexing structure and Android app end to end; selected as a finalist for Samsung Electronics' internal paper award"
          ]
        }
      ]
    },
    {
      org: "Daum",
      period: "Sep 2008 ~ Aug 2011",
      role: "Machine Learning Engineer",
      where: "Jeju, South Korea",
      intro:
        "Started in computer vision, building object recognition and image search systems.",
      projects: [
        {
          name: "Object recognition and image search system",
          bullets: [
            "Designed a real-time image matching system at 7M-image scale using histogram-based Hamming embedding and LIS indexing",
            "Built image hash deduplication, face detection, and category classifiers, applied to representative-image recommendation in shopping search"
          ]
        }
      ]
    },
    {
      org: "Vision Startup",
      period: "Jan 2007 ~ Aug 2008",
      role: "Software Engineer",
      where: "Seoul, South Korea",
      intro:
        "Began my career in image processing and pattern recognition, the groundwork for later image search systems.",
      projects: [
        {
          name: "Image processing and pattern recognition modules",
          bullets: [
            "Implemented C++ vision modules that extracted and matched features from camera input",
            "Iterated on preprocessing and recognition accuracy, building the computer vision fundamentals used later at Daum"
          ]
        }
      ]
    }
  ],

  rnd: {
    intro:
      "Extends long-held domains, computer vision, signal processing, combinatorial optimization, and recommendation, through agent-driven development. Knowing the field is what makes the speed possible: I know which measurement settles the question, so a paper becomes a measured implementation rather than a summary. Owns and operates 173 repositories, 42 of them completed implementations with measured results.",
    groups: [
      {
        name: "Optimization & Scheduling",
        items: [
          "Workforce scheduling engine that quantifies exactly which constraint trade-offs unblock an infeasible roster",
          "Redesigned shift structure before recommending headcount increases to fix staffing shortfalls",
          "Multi-objective schedule optimization minimizing travel distance and consecutive road trips together",
          "Dispatch optimization that increased delivery throughput with the same rider headcount",
          "Verification engine proving feasibility of 3 assignment/rostering problems with math instead of gut feel",
          "Applied an LLM generate-and-repair optimization loop to 3 combinatorial optimization benchmarks, winning 2 of 3"
        ]
      },
      {
        name: "Infrastructure & Deployment",
        items: [
          "Measured bit rot that 3-way replication alone cannot catch, on real on-prem storage",
          "Pointed a storage validation tool at its own infrastructure first, and it found its own defects",
          "Calculated the real break-even point for on-prem vs. cloud storage using TCO",
          "Designed a deployment path for safely delivering AI models into air-gapped facilities with no internet",
          "Reproduced and diagnosed a defect that passed every test but killed a real client integration in under a minute"
        ]
      },
      {
        name: "Data & Recommendation",
        items: [
          "Unified scattered department spreadsheets into a standard ETL pipeline, cutting executive status checks from half a day to instant",
          "Demand-forecast-driven inventory optimization that reduces stockouts and dead stock together",
          "Sales intelligence radar that catches the golden window for a proposal before it closes",
          "Evaluation framework that checks whether a recommendation model actually beats popularity ranking before buying one",
          "Semantic ID design for local commerce recommendations, fixing the case where a suggestion is semantically right but physically unreachable"
        ]
      },
      {
        name: "Vision",
        items: [
          "24/7 manufacturing vision inspection AI that unifies judgment criteria that used to vary by inspector",
          "Self-correcting research-tool automation loop that finds and fixes its own image segmentation errors",
          "Measured whether video-understanding AI is viable on consumer-grade silicon with no GPU server"
        ]
      },
      {
        name: "Agents & Automation Harness",
        items: [
          "Document automation that lets staff review only exceptions instead of manually keying quotes and purchase orders",
          "AI support agent that handles repetitive inquiries so staff focus on real conversations",
          "RAG-based knowledge capture that surfaces a 20-year veteran's expertise in a single query",
          "Marketing automation that generates channel-specific promo videos from nothing but product info",
          "Conversational agent orchestration that runs a dozen apps from a single instruction like planning a business trip",
          "Design automation loop that goes from a blank drawing to a critiquable draft in ten minutes"
        ]
      },
      {
        name: "Signal & Acoustic Sensing",
        items: [
          "Signal fingerprinting that pinpoints unidentified RF interference disrupting a wireless network in real time",
          "Installation-free acoustic sensing that counts foot traffic with a single spare phone",
          "Air-gapped acoustic data link that moves data by sound in a room where RF and light are unavailable"
        ]
      },
      {
        name: "Shipped Products & Tooling",
        items: [
          "Shipped a Korean document converter that never uploads files, as both a web and a desktop app (MIT, no-upload claim re-proven by 40 checks per run)",
          "Browser-side calculator for whether a model fits a given GPU and whether self-hosting beats the API"
        ]
      }
    ]
  },

  research: {
    intro:
      "Sole-authored papers from work trained and measured in-house, each with reported numbers and reproduction code.",
    items: [
      {
        title: "Off-Target Effects of Response-Style Alignment in a Korean 27B Language Model",
        status: "arXiv:2609.11291 (Sep 2026)",
        url: "https://arxiv.org/abs/2609.11291",
        note: "Aligning only Korean response style also shifts abstention on ambiguous social questions and disclosure in securities guidance, measured with two independent detectors"
      },
      {
        title:
          "On-Device Commercial Intent Retrieval Under Size, Latency, and Privacy Constraints: A 3 MiB Retrieval System with Typed Egress Boundaries",
        status: "arXiv (submitted)",
        note: "Where a 3 MiB payload, 20ms budget, and a no-egress boundary each cost retrieval quality, measured on real devices"
      },
      {
        title: "Rewrite Locality and Cache Provenance: Two Axes That Govern Prefix Reuse in Multi-Turn LLM Agents",
        status: "arXiv (submitted)",
        note: "Prefix-cache reuse is governed by where the earliest invalidating edit lands and what cache state the server holds, not by how much history survives; verified across 27 engine cells"
      },
      {
        title: "Metric-Construction Coupling Inflates Measured Synthetic Dialect Recovery",
        status: "arXiv (submitted)",
        note: "When a metric's scoring inventory overlaps the synthetic-construction inventory, measured dialect recovery inflates; isolated with a construction-disjoint control arm"
      },
      {
        title: "Where Post-Training Quantization Breaks Text Embedders: A Measured Map Across Four Embedder Families",
        status: "arXiv (submitted)",
        note: "Tests textbook PTQ advice across four embedder families and shows reconstruction error fails as a standalone module-selection proxy"
      }
    ]
  },

  models: {
    intro:
      "Alongside them, 34 trained and compressed models are released under the <a href=\"https://huggingface.co/ThakiCloud\">HuggingFace ThakiCloud</a> organization across five collections: Human-KO, Satoori-KO, SKILLRET-Edge, vocabulary pruning, and serving quantization.",
    groups: [
      {
        name: "Human-KO, Korean style-aligned 27B (6)",
        items: ["Full weights, safety and finance variants, and NVFP4/W4A16 serving quantizations"]
      },
      {
        name: "Satoori-KO, Korean dialect 27B (2)",
        items: ["Real-data and synthetic-data lanes released separately so the inflation effect stays inspectable"]
      },
      {
        name: "SKILLRET-Edge, agent skill-retrieval embedders (7)",
        items: ["22M and 109M distilled students plus int3/int4 builds, tied with fp32 at 17MB"]
      },
      {
        name: "Language Confusion Suppression, vocabulary pruning (6)",
        items: ["Output-vocabulary suppression recipes for Korean, Japanese, Arabic, Vietnamese, Cantonese, and Taiwanese Chinese"]
      },
      {
        name: "Serving quantization (13)",
        items: ["NVFP4, W4A16, MXFP4, and pruning across Qwen3.8-27B, Qwen3-30B-A3B, Qwen3-Coder-30B-A3B, and vision-language models"]
      }
    ]
  },

  education: [
    { school: "Yonsei University", degree: "M.S. in Computer Science", year: "2007" }
  ]
};
