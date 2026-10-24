// Flight Companion v0.6.1 — text-only procedures and FMC/MCDU guides.
window.FC_GUIDE = {
  "version": "0.6.1",
  "computers": {
    "737": [
      {
        "key": "position",
        "title": "01 · IDENT / POS INIT",
        "page": "INIT REF → IDENT / POS INIT",
        "where": "CDU / lower center pedestal",
        "steps": [
          "CDU의 INIT REF를 눌러 IDENT 페이지에서 기종과 NAV DATA 유효기간을 확인한다.",
          "POS INIT 화면으로 이동한다. GPS POS 또는 현재 위치 좌표를 확인한다.",
          "필요 시 표시된 현재 위치를 scratchpad에 복사해 SET IRS POS 필드로 입력한다.",
          "IRS 정렬이 완료되었는지 확인한다."
        ],
        "verify": "IRS / FMC 위치 경고가 없는지 확인",
        "tip": "현재 위치는 공항/게이트 위치에 따라 달라진다. 임의의 좌표를 입력하지 않는다."
      },
      {
        "key": "route",
        "title": "02 · RTE / Route",
        "page": "RTE → ORIGIN / DEST → ACTIVATE → EXEC",
        "where": "CDU",
        "steps": [
          "RTE 키를 눌러 RTE 1 페이지를 연다.",
          "ORIGIN에 출발 공항 ICAO, DEST에 도착 공항 ICAO를 각각 scratchpad + LSK로 넣는다.",
          "필요하다면 FLT NO와 VIA/TO 항로·웨이포인트를 추가한다.",
          "ACTIVATE가 표시되는 경우 선택하고 EXEC로 활성화한다."
        ],
        "verify": "RTE 상단의 ORIGIN/DEST와 활성 경로를 확인",
        "tip": "SimBrief 또는 MSFS EFB 자동 전송을 사용한 경우 중복 입력하지 말고 먼저 LEGS를 검토한다."
      },
      {
        "key": "departure",
        "title": "03 · DEP/ARR / Departure & Arrival",
        "page": "DEP ARR → DEP / ARR → EXEC",
        "where": "CDU",
        "steps": [
          "DEP ARR 키를 눌러 출발 공항의 DEP 페이지를 연다.",
          "허가된 활주로와 SID, 필요하면 전이 구간을 선택한다.",
          "도착 공항 ARR 페이지에서 STAR 및 ILS/RNAV 접근을 계획대로 선택한다.",
          "변경사항에 EXEC가 필요하면 실행하고 LEGS 페이지를 재확인한다."
        ],
        "verify": "차트의 SID/STAR/Approach, 활주로와 FMC 선택이 일치",
        "tip": "접근 방식은 ATC 허가에 따라 변경될 수 있다."
      },
      {
        "key": "legs",
        "title": "04 · LEGS / Route Review",
        "page": "LEGS → NEXT PAGE / ND PLAN",
        "where": "CDU + navigation display",
        "steps": [
          "LEGS 키를 눌러 차례로 웨이포인트·고도·속도 제한을 확인한다.",
          "ND PLAN 모드와 STEP(지원 시)을 사용해 경로를 살펴본다.",
          "ROUTE DISCONTINUITY가 있는 경우 절차상 필요한 불연속인지 먼저 확인한다.",
          "수정 시 EXEC 후 경로/고도 제한을 재검토한다."
        ],
        "verify": "의도하지 않은 경로 누락, 불연속, 이상한 회항 구간 없음",
        "tip": "벡터 구간의 불연속을 무조건 삭제하지 않는다."
      },
      {
        "key": "perf",
        "title": "05 · PERF INIT",
        "page": "INIT REF → PERF INIT → EXEC",
        "where": "CDU",
        "steps": [
          "INIT REF / PERF INIT 페이지를 연다.",
          "운항계획서와 실제 탑재 상태를 바탕으로 ZFW, RESERVES를 입력·확인한다.",
          "COST INDEX와 CRZ ALT를 입력한다.",
          "연료/중량을 다시 검토하고 EXEC가 요청되면 실행한다."
        ],
        "verify": "PERF INIT 필수 박스가 해결되고 예상 총중량/연료가 타당",
        "tip": "ZFW와 GROSS WT는 다르다. 실제 성능 계산 없이 숫자를 임의로 넣지 않는다."
      },
      {
        "key": "n1",
        "title": "06 · N1 LIMIT",
        "page": "N1 LIMIT",
        "where": "CDU",
        "steps": [
          "N1 LIMIT 페이지에서 TO/CLB 추력 모드를 확인한다.",
          "승인된 이륙 성능 데이터가 있으면 TO / TO-1 / TO-2 또는 SEL TEMP를 해당 조건에 맞게 설정한다.",
          "추력 제한 표시가 계획한 값과 일치하는지 확인한다."
        ],
        "verify": "선택된 N1 limit 및 이륙 설정 확인",
        "tip": "추력 감쇄, 가정 온도는 활주로/기상/중량과 연결된다. 고정값 사용 금지."
      },
      {
        "key": "takeoff",
        "title": "07 · TAKEOFF REF",
        "page": "INIT REF → TAKEOFF REF",
        "where": "CDU + MCP",
        "steps": [
          "TAKEOFF REF 페이지를 열어 이륙 FLAPS를 입력한다.",
          "CG/트림 값은 기체 또는 성능 자료에서 확인한다.",
          "성능 계산으로 얻은 V1 / VR / V2를 FMC에 입력/확정한다.",
          "MCP의 속도 및 이륙 고도, 실제 트림, 플랩 설정과 교차 확인한다."
        ],
        "verify": "필수 속도 표시와 MCP·플랩·트림의 일치",
        "tip": "V 속도는 활주로, 무게, 온도에 따라 달라진다."
      },
      {
        "key": "approach",
        "title": "08 · Approach / Re-approach",
        "page": "DEP ARR → ARR / LEGS → APPROACH REF",
        "where": "CDU / MCP / PFD",
        "steps": [
          "도착 공항 DEP ARR에서 ATC 허가된 접근 절차를 선택한다.",
          "LEGS에서 마지막 구간의 고도·속도·미스드 어프로치 경로를 검토한다.",
          "APPROACH REF에서 착륙 설정·기준 속도·미니멈을 확인한다.",
          "ILS라면 로컬라이저/글라이드슬로프, RNAV라면 지원되는 실제 수직 유도 모드와 미니멈을 별도로 확인한다."
        ],
        "verify": "PFD FMA, 미니멈, 접근 고도, 차트가 일치",
        "tip": "기본 Asobo MAX의 표시·수평/수직 유도 구현은 업데이트별로 확인한다."
      }
    ],
    "a320": [
      {
        "key": "init-a",
        "title": "01 · INIT A",
        "page": "INIT → FROM/TO · CI · CRZ FL",
        "where": "MCDU / pedestal",
        "steps": [
          "MCDU INIT 키를 눌러 INIT A를 연다.",
          "FROM/TO에 출발/도착 ICAO를 AAAA/BBBB 형식으로 입력한다.",
          "FLIGHT NUMBER, COST INDEX, CRZ FL을 운항계획서에 맞춰 설정한다.",
          "IRS INIT / 정렬 상태와 항로 초기화를 확인한다."
        ],
        "verify": "FROM/TO, COST INDEX, CRZ FL 입력 확인",
        "tip": "INIT REQUEST는 SimBrief 연동/기체 설정에 따라 제공된다. 수동 입력도 가능."
      },
      {
        "key": "fpln",
        "title": "02 · F-PLN / Flight Plan",
        "page": "F-PLN → DEPARTURE / ARRIVAL → INSERT*",
        "where": "MCDU + ND",
        "steps": [
          "F-PLN 키를 누르고 출발 공항 줄의 LSK를 선택해 DEPARTURE 페이지를 연다.",
          "활주로와 SID를 선택하고 INSERT*로 반영한다.",
          "필요한 항로·웨이포인트를 추가한다.",
          "도착 공항에서 ARRIVAL을 선택하고 STAR/Approach를 설정한다.",
          "ND와 MCDU에서 경로, 불연속, 고도 제한을 검토한다."
        ],
        "verify": "F-PLN 활성 경로와 차트가 일치",
        "tip": "일부 벡터 구간 불연속은 의도적이다. 근거 없이 연결하지 않는다."
      },
      {
        "key": "radnav",
        "title": "03 · RAD NAV",
        "page": "RAD NAV",
        "where": "MCDU",
        "steps": [
          "RAD NAV 페이지를 열어 자동 선택된 무선항법 장비를 확인한다.",
          "ILS 접근에서는 지정된 활주로의 ILS 주파수·식별자/코스와 비교한다.",
          "수동 튜닝이 필요한 경우에만 입력하고 PFD의 LS 표시와 일치하는지 확인한다."
        ],
        "verify": "접근 차트 및 PFD 표시와 일치",
        "tip": "지원되는 자동 튜닝을 덮어쓰기 전에 현재 상태를 확인한다."
      },
      {
        "key": "init-b",
        "title": "04 · INIT B / Fuel prediction",
        "page": "INIT → → (right arrow) → ZFW/ZFWCG · BLOCK",
        "where": "MCDU",
        "steps": [
          "엔진 시동 전 INIT A에서 오른쪽 화살표 키로 INIT B를 연다.",
          "실제 탑재자료의 ZFW/ZFWCG 값을 올바른 단위로 입력한다.",
          "EFB 또는 운항계획서의 BLOCK FUEL을 입력하고 실제 기내 연료와 비교한다.",
          "예상 연료/중량 계산이 가능한지 확인한다."
        ],
        "verify": "ZFW/ZFWCG, BLOCK, 예상 TOW와 실제 탑재자료 교차 확인",
        "tip": "엔진 시동 후에는 FUEL PRED 페이지가 나타날 수 있다."
      },
      {
        "key": "perf-to",
        "title": "05 · PERF TAKEOFF",
        "page": "PERF → T.O",
        "where": "MCDU",
        "steps": [
          "PERF 키로 T.O 페이지를 연다.",
          "실제 이륙 성능자료의 V1, VR, V2를 입력한다.",
          "FLAPS/THS를 이륙 구성 및 트림과 일치시킨다.",
          "적용할 경우 계산된 FLEX TEMP와 THR RED/ACC 고도를 확인한다.",
          "FCU의 이륙 고도·항법 모드와 교차 확인한다."
        ],
        "verify": "PFD 속도 마커, FLAPS/THS 및 이륙 구성 확인",
        "tip": "FLEX와 V 속도는 고정값이 아니다. EFB의 계산 결과를 사용한다."
      },
      {
        "key": "sec",
        "title": "06 · SEC F-PLN",
        "page": "SEC F-PLN",
        "where": "MCDU",
        "steps": [
          "SEC F-PLN을 열어 현재 항로 복사 또는 대체 항로 설정 여부를 확인한다.",
          "필요할 때만 보조 비행계획을 준비한다.",
          "활성 F-PLN을 의도치 않게 교체하지 않았는지 확인한다."
        ],
        "verify": "활성 F-PLN은 유지되고 보조 항로는 별도 표시",
        "tip": "선택 사항이다. 초보자는 활성 항로 검토를 우선한다."
      },
      {
        "key": "perf-appr",
        "title": "07 · PERF APPR",
        "page": "PERF → APPR",
        "where": "MCDU",
        "steps": [
          "PERF 키를 눌러 APPR 페이지로 이동한다.",
          "접근 차트/ATIS에 따라 QNH, TEMP, WIND, TRANS ALT를 입력한다.",
          "선택한 접근에 적절한 미니멈을 입력하고 VAPP를 확인한다.",
          "ILS/RNAV 경로, FMA 및 접근 구성과 교차 확인한다."
        ],
        "verify": "QNH, 접근 미니멈, VAPP, 선택된 접근의 일치",
        "tip": "DA/MDA의 값과 단위는 접근 방식 및 차트에 따라 달라진다."
      },
      {
        "key": "go-around",
        "title": "08 · Missed approach review",
        "page": "F-PLN / PERF GO AROUND",
        "where": "MCDU / FCU",
        "steps": [
          "GO AROUND가 발생하면 우선 비행 자세·추력·경로를 안정시킨다.",
          "차트 또는 ATC 지시에 따라 복행 고도와 수평 경로를 따라간다.",
          "MCDU F-PLN의 MISSED 경로를 검토하고 재접근 절차를 브리핑한다."
        ],
        "verify": "FMA, 복행 고도, ATC 허가 및 MCDU 경로 일치",
        "tip": "접근/복행 단계 전환 동작은 iniBuilds 기체 버전에 따라 확인한다."
      }
    ]
  },
  "computerItems": {
    "737": {
      "fmc-ident": "position",
      "fmc-route": "route",
      "fmc-departure": "departure",
      "fmc-arrival": "departure",
      "fmc-legs": "legs",
      "fmc-perf": "perf",
      "fmc-n1": "n1",
      "fmc-takeoff": "takeoff",
      "arrival": "approach",
      "landing-data": "approach",
      "ga-737-reapproach": "approach",
      "smart-737-ils-tune": "approach",
      "smart-737-rnav-leg": "legs"
    },
    "a320": {
      "a320-02-00": "init-a",
      "a320-02-01": "fpln",
      "a320-02-02": "radnav",
      "a320-02-03": "init-b",
      "a320-02-04": "perf-to",
      "a320-02-05": "sec",
      "a320-09-00": "fpln",
      "a320-09-01": "perf-appr",
      "ga-a320-reapproach": "go-around",
      "smart-a320-rnav-legs": "fpln",
      "smart-a320-ils-ident": "radnav"
    }
  },
  "procedures": {
    "737": {
      "battery": [
        "OVERHEAD Electrical에서 BATTERY 스위치를 찾는다.",
        "스위치 가드를 열고 BATTERY를 ON으로 놓는다.",
        "전원 관련 표시 및 디스플레이의 반응을 확인한다."
      ],
      "standby": [
        "OVERHEAD Electrical의 STANDBY POWER를 찾는다.",
        "AUTO 위치인지 확인한다.",
        "비정상 표시가 남는지 감시한다."
      ],
      "ground-power": [
        "외부 전원 연결 상태를 확인한다.",
        "OVERHEAD Electrical의 GRD PWR 선택 스위치 및 AVAIL 표시를 찾는다.",
        "사용 가능한 외부 전원을 연결한 후 표시를 확인한다."
      ],
      "irs": [
        "OVERHEAD 후방/상단 IRS selector 영역을 찾는다.",
        "필요한 IRS selector를 NAV로 설정한다.",
        "정렬에는 시간이 필요할 수 있다. 위치/FMC 메시지를 감시한다."
      ],
      "apu-start": [
        "OVERHEAD의 APU 스위치를 찾는다.",
        "START 위치로 조작해 APU 시동을 시작한다.",
        "EGT 및 APU AVAIL 표시로 정상 기동을 확인한다."
      ],
      "apu-gen": [
        "APU AVAIL을 먼저 확인한다.",
        "OVERHEAD Electrical의 APU GEN 스위치를 선택한다.",
        "발전기와 전원 버스 표시가 적절한지 확인한다."
      ],
      "apu-bleed-pre": [
        "APU 가동 중임을 확인한다.",
        "OVERHEAD Air Conditioning / Bleed 영역에서 APU BLEED를 찾는다.",
        "필요 시 APU BLEED를 ON으로 하고 덕트/계통을 확인한다."
      ],
      "mcp": [
        "GLARESHIELD 중앙 MCP에서 SPD, HDG, ALT, 모드를 찾는다.",
        "SID/ATC 허가에 맞는 초기 고도, 속도, 헤딩을 설정한다.",
        "PFD FMA에서 무장/활성 모드를 구별해 확인한다."
      ],
      "fd-at": [
        "MCP의 양쪽 Flight Director 스위치와 A/T ARM을 찾는다.",
        "출발 계획에 맞게 FD와 A/T을 준비한다.",
        "PFD Flight Director 지시, FMA 및 A/T arm 표시를 확인한다."
      ],
      "beacon": [
        "OVERHEAD의 Exterior lights에서 BEACON을 찾는다.",
        "엔진 시동 전 BEACON을 켠다.",
        "외부 안전 구역이 확보되었는지 확인한다."
      ],
      "engine2-startsw": [
        "OVERHEAD ENGINE START에서 ENG 2 selector를 찾는다.",
        "적절한 공기 공급 및 시동 허가를 확인한 뒤 GRD로 돌린다.",
        "N2 상승과 시동 관련 엔진 표시를 감시한다."
      ],
      "engine2-fuel": [
        "ENGINE 2 N2가 기체/절차에서 지정한 시동 지점에 도달하는지 확인한다.",
        "Pedestal의 ENG 2 start lever를 IDLE로 이동한다.",
        "연료 흐름, EGT 상승, 안정된 idle을 감시한다."
      ],
      "engine1-startsw": [
        "OVERHEAD ENGINE START에서 ENG 1 selector를 찾는다.",
        "시동 조건과 허가를 확인한 뒤 GRD로 돌린다.",
        "N2 상승과 시동 관련 엔진 표시를 감시한다."
      ],
      "engine1-fuel": [
        "ENGINE 1 N2 상승을 확인한다.",
        "Pedestal의 ENG 1 start lever를 IDLE로 이동한다.",
        "연료 흐름, EGT 상승, 안정된 idle을 감시한다."
      ],
      "gen": [
        "양쪽 엔진의 안정된 운전을 확인한다.",
        "OVERHEAD Electrical의 GEN 1, GEN 2 선택 스위치를 사용한다.",
        "양쪽 전원 및 발전기 상태를 확인한다."
      ],
      "flaps-to": [
        "Pedestal 오른쪽 FLAP lever를 찾는다.",
        "FMC TAKEOFF REF에 입력한 이륙 FLAP 설정으로 이동한다.",
        "플랩 위치 표시가 선택값과 일치하는지 확인한다."
      ],
      "gear-down": [
        "메인 계기판의 LANDING GEAR lever를 찾는다.",
        "착륙 허가/위치에 맞춰 DOWN으로 이동한다.",
        "3 green 및 기어 표시를 확인한다."
      ],
      "autopilot": [
        "MCP에서 CMD/AP 선택 영역을 확인한다.",
        "계획에 맞게 AP를 사용하고 LNAV/VNAV 등 실제 활성 모드를 확인한다.",
        "FMA의 active/armed 구분을 계속 감시한다."
      ],
      "ga-737-toga": [
        "추력 레버의 TO/GA 스위치를 누른다.",
        "엔진 추력 및 FMA 복행 표시를 확인한다.",
        "FD 지시에 따라 자세를 유지하고 비행 경로를 감시한다."
      ]
    },
    "a320": {
      "a320-00-03": [
        "OVERHEAD Electrical에서 BAT 1 / BAT 2 pushbutton을 찾는다.",
        "배터리 상태를 확인하고 필요한 전원 조작을 수행한다.",
        "관련 전원/ECAM 표시를 확인한다."
      ],
      "a320-00-04": [
        "전원 공급 가능 상태를 확인한다.",
        "OVERHEAD Electrical에서 EXT PWR pushbutton을 찾는다.",
        "AVAIL 표시 시 필요에 따라 ON으로 선택하고 전원 표시를 확인한다."
      ],
      "a320-00-05": [
        "OVERHEAD 상단 ADIRS 영역을 찾는다.",
        "ADIRS 1/2/3을 NAV 위치로 설정한다.",
        "정렬 상태와 MCDU 입력/위치 안내를 확인한다."
      ],
      "a320-01-00": [
        "OVERHEAD APU 패널의 MASTER SW를 찾는다.",
        "MASTER SW를 ON으로 선택한다.",
        "APU system이 시동을 허용하는 상태인지 확인한다."
      ],
      "a320-01-01": [
        "APU MASTER SW가 ON인지 확인한다.",
        "APU START pushbutton을 누른다.",
        "ECAM/APU 표시와 AVAIL 점등을 확인한다."
      ],
      "a320-01-02": [
        "APU가 사용 가능 상태인지 확인한다.",
        "OVERHEAD AIR COND의 APU BLEED pushbutton을 찾는다.",
        "필요에 따라 ON으로 선택하고 ECAM에서 계통 상태 확인한다."
      ],
      "a320-04-00": [
        "Pedestal의 ENG MODE selector를 찾는다.",
        "시동 준비 후 IGN/START를 선택한다.",
        "Engine page가 표시되는지 확인한다."
      ],
      "a320-04-01": [
        "ENG MODE selector가 IGN/START인지 확인한다.",
        "ENG MASTER 2를 ON으로 선택한다.",
        "ECAM에서 엔진 2 시동/파라미터를 감시한다."
      ],
      "a320-04-03": [
        "엔진 2가 안정된 상태인지 확인한다.",
        "ENG MASTER 1을 ON으로 선택한다.",
        "ECAM에서 엔진 1 시동/파라미터를 감시한다."
      ],
      "a320-05-01": [
        "Pedestal 오른쪽 Flap lever를 찾는다.",
        "MCDU PERF에 입력된 이륙 설정과 동일하게 선택한다.",
        "ECAM 위치 표시 및 T.O CONFIG을 확인한다."
      ],
      "a320-07-06": [
        "Thrust levers를 찾는다.",
        "계산된 이륙 성능에 따라 FLEX/MCT 또는 TOGA detent를 선택한다.",
        "PFD FMA에서 추력 및 lateral/vertical mode를 확인한다."
      ],
      "a320-10-01": [
        "Glareshield FCU의 APPR pushbutton을 찾는다.",
        "관제 허가 및 해당 접근 방식/지원 모드에 맞춰 선택한다.",
        "PFD FMA의 무장/포착 모드를 확인한다. ILS와 RNAV를 혼동하지 않는다."
      ],
      "a320-10-04": [
        "메인 패널 LANDING GEAR lever를 찾는다.",
        "필요한 위치에서 DOWN을 선택한다.",
        "ECAM landing gear indication을 확인한다."
      ],
      "a320-13-02": [
        "주기 중임을 확인하고 필요 전원을 확보한다.",
        "Pedestal ENG MASTER 1 / 2를 OFF로 선택한다.",
        "ECAM의 엔진 종료 상태와 비컨 해제 조건을 확인한다."
      ],
      "ga-a320-toga": [
        "Thrust levers를 TOGA detent로 이동한다.",
        "PFD FMA에서 MAN TOGA / SRS / GA TRK 또는 NAV 등을 확인한다.",
        "Flight Director 지시 및 상승 상태를 감시한다."
      ]
    }
  },
  "sources": {
    "737": [
      {
        "title": "Microsoft Flight Simulator Forums — Asobo MAX FMC examples",
        "url": "https://forums.flightsimulator.com/t/request-a-complete-guide-to-737-fmc/692847"
      },
      {
        "title": "Boeing licensed FCOM/FCTM overview",
        "url": "https://services.boeing.com/training-solutions/flight-training/licensed-manuals"
      }
    ],
    "a320": [
      {
        "title": "Official Microsoft Flight Simulator aircraft manuals",
        "url": "https://www.flightsimulator.com/aircraft-manuals/"
      },
      {
        "title": "iniBuilds support — managed mode prerequisites",
        "url": "https://forum.inibuilds.com/topic/23376-speed-and-heading-button-push-and-pull-not-possible/"
      }
    ]
  }
};
