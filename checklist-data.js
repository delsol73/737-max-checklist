/* Simulation adaptation; not certified for real flight. Stable item IDs for future SimConnect mapping. */
window.CHECKLIST = {
  "schemaVersion": 2,
  "aircraft": "Asobo Boeing 737 MAX 8",
  "simulator": "Microsoft Flight Simulator 2024",
  "sources": [
    {
      "title": "737 MAX FCOM-related procedures, FAA attachment",
      "url": "https://downloads.regulations.gov/FAA-2020-0686-0002/attachment_17.pdf"
    },
    {
      "title": "737 MAX simulated checklist, FlyUVA",
      "url": "https://crew.flyuva.org/lib/downloads/737MAXChecklist.pdf"
    },
    {
      "title": "737 MAX FCOM reference (third-party copy)",
      "url": "https://studylib.net/doc/27328400/b737-max-8-fcom"
    },
    {
      "title": "Asobo implementation status research",
      "url": "https://github.com/noscapect/MSFS2024_AI/blob/main/PROJECT.md"
    }
  ],
  "phases": [
    {
      "id": "power",
      "name": "COLD & DARK",
      "subtitle": "전원 공급 • 초기 시스템 설정",
      "items": [
        {
          "id": "parking-initial",
          "name": "PARKING BRAKE",
          "target": "SET",
          "location": "Pedestal / Parking brake",
          "detail": "기체가 게이트에서 완전히 정지해 있는지 확인하고 주차 브레이크를 건다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "battery",
          "name": "BATTERY",
          "target": "ON",
          "location": "Overhead / Electrical, 상단 전원 패널",
          "detail": "BATTERY 스위치를 ON으로. 전원 공급 후 기본 전기 표시를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "standby",
          "name": "STANDBY POWER",
          "target": "AUTO",
          "location": "Overhead / Electrical / STANDBY POWER",
          "detail": "스위치를 AUTO 위치로 둔다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "ground-power",
          "name": "GROUND POWER",
          "target": "ON IF AVAILABLE",
          "location": "Overhead / Electrical / GRD PWR",
          "detail": "GPU가 AVAIL이면 GRD PWR을 ON. GPU가 없으면 다음 APU 단계로 전원을 확보한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "emergency-lights",
          "name": "EMER EXIT LIGHTS",
          "target": "ARMED",
          "location": "Overhead / Emergency exit lights",
          "detail": "비상 출구등을 ARMED에 설정한다. 시뮬레이터 모델에 구현되었는지 확인.",
          "kind": "FLOW",
          "note": "Asobo 조작 지원 여부는 버전별 확인 필요.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "irs",
          "name": "IRS SELECTORS",
          "target": "NAV (L/R)",
          "location": "Overhead / IRS selectors",
          "detail": "좌우 IRS를 NAV로 설정하고 FMC POS INIT에 위치를 입력한 뒤 정렬 완료를 기다린다. 정렬 시간은 시뮬레이터 설정에 따라 다를 수 있다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fuel-initial",
          "name": "FUEL QUANTITY",
          "target": "VERIFY",
          "location": "Lower DU / Fuel indication",
          "detail": "탑재 연료량이 계획한 값과 맞는지 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "apu-start",
          "name": "APU",
          "target": "START → RUNNING",
          "location": "Overhead / APU switch",
          "detail": "APU 스위치를 START 후 놓는다. APU가 안정되고 발전기가 이용 가능해질 때까지 기다린다. APU를 쓸 경우 GRD PWR과 전원 전환 상태 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "apu-gen",
          "name": "APU GENERATORS",
          "target": "ON (WHEN AVAILABLE)",
          "location": "Overhead / Electrical / APU GEN",
          "detail": "APU GEN 전원을 연결하고 공급 상태를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "apu-bleed-pre",
          "name": "APU BLEED",
          "target": "ON FOR PNEUMATIC START",
          "location": "Overhead / Air conditioning / APU BLEED",
          "detail": "APU 공기압으로 엔진을 시동할 경우 APU BLEED ON. PACK과 ISOLATION VALVE 구성은 다음 엔진 시동 절차를 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "preflight",
      "name": "PREFLIGHT / FMC",
      "subtitle": "경로 입력 • 성능 • MCP",
      "items": [
        {
          "id": "fmc-ident",
          "name": "FMC IDENT / POS INIT",
          "target": "VERIFY / ENTER",
          "location": "CDU / MENU → FMC → IDENT / POS INIT",
          "detail": "CDU의 FMC 페이지에서 기체/데이터베이스를 확인하고 POS INIT에서 현재 GPS/공항 기준 위치를 입력한다. 정확한 CDU 메뉴 이름과 세부 동작은 Asobo 구현에 따라 다를 수 있다.",
          "kind": "FLOW",
          "note": "CDU 버튼 순서는 Asobo 빌드에서 실기 검증 필요.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fmc-route",
          "name": "FMC RTE",
          "target": "ORIGIN / DEST / FLIGHT NO",
          "location": "CDU / RTE",
          "detail": "RTE 페이지에서 ORIGIN, DEST 및 사용 가능한 경우 FLIGHT NO 입력. 항로는 VIA/TO 또는 LEGS 방식으로 입력한다.",
          "kind": "FLOW",
          "note": "RTE 형식과 지원 필드는 기체 구현에 따라 다를 수 있다.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fmc-departure",
          "name": "DEP / ARR → DEPARTURE",
          "target": "RUNWAY / SID",
          "location": "CDU / DEP ARR → DEP",
          "detail": "출발공항 DEPARTURE에서 사용 활주로와 SID를 선택. 선택 항로와 서로 일치하는지 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fmc-arrival",
          "name": "DEP / ARR → ARRIVAL",
          "target": "STAR / APPROACH",
          "location": "CDU / DEP ARR → ARR",
          "detail": "도착 예정 STAR와 접근 활주로/절차를 입력. ATC 변경 가능성이 있으므로 착륙 전 재검토한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fmc-legs",
          "name": "LEGS / PLAN REVIEW",
          "target": "NO UNEXPECTED GAPS",
          "location": "CDU / LEGS / ND PLAN",
          "detail": "LEGS 페이지를 순서대로 넘기며 불필요한 DISCONTINUITY, 비정상적인 기동 및 고도/속도 제한을 확인한다. 필요한 수정 후 EXEC.",
          "kind": "FLOW",
          "note": "DISCONTINUITY는 절차상 의도된 경우도 있어 무조건 삭제하지 않는다.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fmc-perf",
          "name": "PERF INIT",
          "target": "MASS / FUEL / CRZ ALT",
          "location": "CDU / PERF INIT",
          "detail": "현재 기체 중량, 연료 및 순항 고도를 입력하고 계산값을 검토한다. 단위(KG/LB)를 먼저 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fmc-n1",
          "name": "N1 LIMIT",
          "target": "VERIFY",
          "location": "CDU / N1 LIMIT",
          "detail": "필요하다면 이륙 추력 가정 온도나 감추력 값을 설정하고 표시 추력이 성능 계산에 부합하는지 확인한다. 임의 값을 사용하지 않는다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fmc-takeoff",
          "name": "TAKEOFF REF",
          "target": "FLAP / CG / V-SPEEDS",
          "location": "CDU / TAKEOFF REF",
          "detail": "선택한 이륙 플랩과 CG/트림을 확인하고 V1, VR, V2를 성능 계산에 맞게 입력/검증한다. 실제 입력 순서는 기체 버전에 따라 다를 수 있다.",
          "kind": "FLOW",
          "note": "V속도와 트림은 비행마다 다르며 고정 수치 금지.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "mcp",
          "name": "MCP SETUP",
          "target": "V2 / HDG / ALT",
          "location": "Glare Shield / MCP",
          "detail": "속도창에 해당 V2, 헤딩창에 출발 활주로/지시 헤딩, 고도창에 승인된 초기 고도를 설정한다. 출발 방식에 따라 달라질 수 있다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fd-at",
          "name": "FLIGHT DIRECTORS / A/T",
          "target": "FD ON / A/T ARM",
          "location": "MCP / FD switches and A/T ARM",
          "detail": "좌우 FD 및 A/T ARM을 준비. LNAV/VNAV 사전 ARM은 계획 및 시뮬레이터 지원 상태에 따라 수행한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fuel",
          "name": "FUEL PUMPS",
          "target": "SET FOR START",
          "location": "Overhead / Fuel",
          "detail": "연료 펌프를 탱크 상태에 맞게 설정한다. 센터 탱크 연료량이 적은 경우 펌프 사용 제한에 주의한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "bleed-press",
          "name": "AIR / PRESSURIZATION",
          "target": "CHECK",
          "location": "Overhead / Air cond / Pressurization",
          "detail": "PACK, BLEED, 항공기 가압 AUTO 및 목적지 착륙 고도 설정을 확인한다. 실제 항공기 절차는 운영사별 차이가 있다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "window-heat",
          "name": "WINDOW HEAT",
          "target": "ON",
          "location": "Overhead / Window heat",
          "detail": "윈도우 히트 스위치를 ON으로 두고 표시 상태를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "doors",
          "name": "DOORS / GROUND SERVICES",
          "target": "CLOSED / CLEAR",
          "location": "Doors / EFB / Ground handling",
          "detail": "승객 문, 화물 문, 지상 장비 및 탑승 서비스 종료를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "before-start",
      "name": "BEFORE START",
      "subtitle": "푸시백 • 시동 준비",
      "items": [
        {
          "id": "brief",
          "name": "DEPARTURE BRIEFING",
          "target": "COMPLETE",
          "location": "FMC / ND / MCP",
          "detail": "이륙 활주로, SID/초기 유도, 초기 고도, 이륙 플랩/속도, 실패 시 대처 계획을 검토한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fmc-review",
          "name": "FMC / MCP REVIEW",
          "target": "COMPLETE",
          "location": "CDU / MCP",
          "detail": "RTE 활성화, LEGS, PERF INIT, TAKEOFF REF, MCP 고도와 모드를 마지막으로 교차 검토한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "signs",
          "name": "PASSENGER SIGNS",
          "target": "ON / AUTO",
          "location": "Overhead / Passenger signs",
          "detail": "시동/택시 전 안전벨트 표시를 설정한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "brake-start",
          "name": "PARKING BRAKE",
          "target": "AS REQUIRED",
          "location": "Pedestal / Brake handle",
          "detail": "푸시백 전 브레이크 및 견인차 연결 상태를 확인하고 담당 지시/시뮬레이터 절차에 맞춰 해제한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "beacon",
          "name": "ANTI-COLLISION BEACON",
          "target": "ON",
          "location": "Overhead / Exterior lights / BEACON",
          "detail": "엔진 시동 또는 푸시백 전 비컨 라이트를 켠다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "start-config",
          "name": "START AIR CONFIG",
          "target": "CHECK",
          "location": "Overhead / Packs / Isolation / APU bleed",
          "detail": "APU 공기압 시동: APU BLEED 공급을 확인하고 PACK/ISOLATION VALVE를 해당 운용 절차에 맞게 설정한다. 예시로 PACK OFF, ISOLATION OPEN 구성을 사용하기도 하나 버전별 시뮬레이터 동작 확인.",
          "kind": "FLOW",
          "note": "시동 계통의 상세 스위치 흐름은 Asobo 기체에서 재확인.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "engine-start",
      "name": "ENGINE START",
      "subtitle": "엔진 2 → 엔진 1 / 모니터",
      "items": [
        {
          "id": "engine2-startsw",
          "name": "ENGINE 2 START SWITCH",
          "target": "GRD",
          "location": "Overhead / ENG START / No.2",
          "detail": "오른쪽 엔진 시동 스위치를 GRD로 돌리고 N2 회전이 증가하는지 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "engine2-fuel",
          "name": "ENGINE 2 START LEVER",
          "target": "IDLE AT APPROPRIATE N2",
          "location": "Throttle Quadrant / Start lever 2",
          "detail": "엔진 N2가 시동 연료 투입에 적절한 값에 도달하면 우측 START LEVER를 IDLE로. EGT/N1/N2/오일압을 모니터하며 안정화 확인.",
          "kind": "FLOW",
          "note": "일반적으로 약 25% N2 부근을 참고하나 정확한 조건은 구현 및 절차에 따라 검증.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "engine1-startsw",
          "name": "ENGINE 1 START SWITCH",
          "target": "GRD",
          "location": "Overhead / ENG START / No.1",
          "detail": "왼쪽 엔진 시동 스위치를 GRD로 돌리고 N2 회전이 증가하는지 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "engine1-fuel",
          "name": "ENGINE 1 START LEVER",
          "target": "IDLE AT APPROPRIATE N2",
          "location": "Throttle Quadrant / Start lever 1",
          "detail": "왼쪽 START LEVER를 적절한 N2에서 IDLE로. EGT/N1/N2/오일압의 안정화 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "engine-status",
          "name": "ENGINE INDICATIONS",
          "target": "STABLE",
          "location": "Engine display / Upper DU",
          "detail": "두 엔진 모두 안정적인 아이들 상태인지, 관련 경고는 없는지 확인한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "gen",
          "name": "ENGINE GENERATORS",
          "target": "ON / VERIFY",
          "location": "Overhead / Electrical / GEN 1, GEN 2",
          "detail": "엔진 발전기 전원 연결 및 전기 공급 상태를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "apu-after",
          "name": "APU BLEED / APU",
          "target": "OFF AS APPROPRIATE",
          "location": "Overhead / APU and BLEED",
          "detail": "엔진 공기압으로 전환 후 APU BLEED를 정리하고 불필요하면 APU를 정지한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "taxi",
      "name": "BEFORE TAXI / TAXI",
      "subtitle": "지상 이동 • 이륙 구성",
      "items": [
        {
          "id": "probe-heat",
          "name": "PROBE HEAT",
          "target": "ON",
          "location": "Overhead / Probe heat",
          "detail": "프로브 히트를 ON으로 설정하고 관련 이상 표시를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "hydraulics",
          "name": "HYDRAULICS",
          "target": "NORMAL",
          "location": "Overhead / Hydraulic / System displays",
          "detail": "유압 계통 설정과 상태를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "flight-controls",
          "name": "FLIGHT CONTROLS",
          "target": "FREE / CORRECT",
          "location": "Yoke / Rudder pedals / Flight controls indicator",
          "detail": "엘리베이터, 에일러론, 러더 조작을 확인한다. 게임 컨트롤 입력과 반응을 함께 확인한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "flaps-to",
          "name": "TAKEOFF FLAPS",
          "target": "SET AS CALCULATED",
          "location": "Throttle quadrant / Flap lever",
          "detail": "TAKEOFF REF에서 선택한 이륙 플랩으로 설정하고 위치 표시 및 일치 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "trim",
          "name": "STABILIZER TRIM",
          "target": "SET AS CALCULATED",
          "location": "Throttle quadrant / Stabilizer trim indicator",
          "detail": "이륙 성능 계산에 따른 트림 값을 설정. 단순히 임의 고정값을 넣지 않는다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "autobrake-rto",
          "name": "AUTOBRAKE",
          "target": "RTO",
          "location": "Main panel / Autobrake selector",
          "detail": "이륙 전 AUTO BRAKE를 RTO로 설정한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "flight-instruments",
          "name": "FLIGHT INSTRUMENTS",
          "target": "CHECK",
          "location": "PFD / ND / EFIS",
          "detail": "방위, 기압, 표시 모드와 출발 항로 표시를 확인한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "taxi-lights",
          "name": "TAXI LIGHT",
          "target": "ON AS REQUIRED",
          "location": "Overhead / External lights",
          "detail": "택시 중 적절한 조명을 사용한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "config-check",
          "name": "TAKEOFF CONFIG CHECK",
          "target": "COMPLETE",
          "location": "Flight deck / Engine indication",
          "detail": "플랩, 트림, 스포일러, 브레이크, 이륙 속도, 지상 항법 모드 및 관련 경고를 확인한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "takeoff",
      "name": "BEFORE TAKEOFF / TAKEOFF",
      "subtitle": "활주로 진입 • 이륙",
      "items": [
        {
          "id": "runway",
          "name": "RUNWAY / CLEARANCE",
          "target": "VERIFY",
          "location": "ND / ATC / Airport chart",
          "detail": "실제 진입 활주로와 FMC 선택 활주로, ATC 허가 사항을 재확인한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "to-modes",
          "name": "TAKEOFF FLIGHT MODES",
          "target": "VERIFY FMA",
          "location": "MCP / PFD FMA",
          "detail": "선택한 출발 유도 모드, FD 및 A/T 상태를 확인한다. LNAV/VNAV 활성 조건은 비행 경로에 따라 다르다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "landing-lights",
          "name": "LANDING / STROBE LIGHTS",
          "target": "ON AS REQUIRED",
          "location": "Overhead / Exterior lights",
          "detail": "활주로 진입 전 착륙등, 스트로브 라이트를 적절히 사용한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "engine-start-cont",
          "name": "ENGINE START SWITCHES",
          "target": "CONT AS REQUIRED",
          "location": "Overhead / Engine start",
          "detail": "운항 절차에 따라 CONT 또는 적절한 점화 설정을 확인한다. 구현별 상태 확인.",
          "kind": "FLOW",
          "note": "기본 Asobo 기체 지원 여부 확인.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "thrust",
          "name": "TAKEOFF THRUST",
          "target": "SET / VERIFY",
          "location": "Thrust levers / Engine indications",
          "detail": "엔진 안정 확인 후 적절한 이륙 추력을 설정하고 양쪽 엔진의 추력 증가 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "v-speeds",
          "name": "V1 / VR / V2",
          "target": "MONITOR",
          "location": "PFD / Airspeed tape",
          "detail": "속도 콜아웃: V1 이후 이륙 계속, VR에서 Rotate, V2 근방 목표 상승 속도를 표시 기준으로 확인한다. 값은 매 비행 달라진다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "rotate",
          "name": "ROTATE / POSITIVE RATE",
          "target": "PERFORM",
          "location": "PFD / Yoke",
          "detail": "VR에서 부드럽게 Rotate하고 상승률 양(+) 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "climb",
      "name": "AFTER TAKEOFF / CLIMB",
      "subtitle": "상승 • 자동비행",
      "items": [
        {
          "id": "gear-up",
          "name": "LANDING GEAR",
          "target": "UP",
          "location": "Main panel / Landing gear lever",
          "detail": "양(+)의 상승 확인 후 GEAR UP, 표시 변화 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "flap-up",
          "name": "FLAPS RETRACTION",
          "target": "ON SCHEDULE",
          "location": "Flap lever / PFD speed tape",
          "detail": "플랩 제한 속도와 표시되는 단계별 수축 속도를 확인하면서 순서대로 UP.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "autopilot",
          "name": "AUTOPILOT / FMA",
          "target": "MONITOR",
          "location": "MCP / PFD FMA",
          "detail": "오토파일럿 연결은 적절한 고도와 조건에서 수행. FMA의 실제 수직·수평 모드와 FMC 항로 추적 확인.",
          "kind": "FLOW",
          "note": "Asobo 737 MAX의 LNAV/VNAV 특성은 MSFS 업데이트마다 달라질 수 있다.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "baro-std",
          "name": "ALTIMETER TRANSITION",
          "target": "STD WHEN APPROPRIATE",
          "location": "EFIS / BARO",
          "detail": "관제/지역 전이고도에 도달하면 표준기압으로 전환한다. 전이고도는 지역마다 다르다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "climb-check",
          "name": "AFTER TAKEOFF CHECK",
          "target": "COMPLETE",
          "location": "Gear / Flaps / Pressurization",
          "detail": "착륙장치와 플랩이 정상 수납되고 가압/공조 및 표시 상태가 정상인지 점검.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "cruise",
      "name": "CRUISE",
      "subtitle": "연료 • FMC 관리",
      "items": [
        {
          "id": "cruise-fuel",
          "name": "FUEL / BALANCE",
          "target": "MONITOR",
          "location": "Fuel indication / FMC",
          "detail": "계획 연료와 실제 연료, 불균형 여부 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "cruise-route",
          "name": "ROUTE / FMA",
          "target": "MONITOR",
          "location": "ND / FMC LEGS / PFD FMA",
          "detail": "항로 단절, 예상 도착, 항속 및 자동비행 모드를 점검.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "top-of-descent",
          "name": "TOP OF DESCENT",
          "target": "PLAN",
          "location": "ND / FMC PROG",
          "detail": "TOD와 예상 STAR/접근 허가를 고려하여 강하 준비를 한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "descent",
      "name": "DESCENT PREPARATION",
      "subtitle": "STAR • 접근 • 강하",
      "items": [
        {
          "id": "arrival",
          "name": "ARRIVAL / APPROACH FMC",
          "target": "VERIFY",
          "location": "CDU / DEP ARR, LEGS",
          "detail": "최신 도착 활주로, STAR와 접근 절차를 선택하고 LEGS 제약 및 경로 단절을 확인. 수정 시 EXEC.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "landing-data",
          "name": "LANDING PERFORMANCE",
          "target": "VREF / FLAP / MINIMUMS",
          "location": "CDU / APPROACH REF / EFIS",
          "detail": "착륙 중량과 플랩에 따른 VREF 및 실제 최종 접근 목표 속도를 확인하고 최소고도를 설정한다. 바람 보정과 속도는 절차에 맞춰 계산.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "landing-brief",
          "name": "APPROACH / GO-AROUND BRIEF",
          "target": "COMPLETE",
          "location": "ND / CDU / Charts",
          "detail": "ILS 또는 RNAV 접근유도 방식, 복행 경로, minima와 taxi-in을 검토한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "autobrake-landing",
          "name": "AUTOBRAKE",
          "target": "SET FOR LANDING",
          "location": "Main instrument panel / Autobrake",
          "detail": "착륙 활주로 길이와 상태에 맞는 자동브레이크 설정을 선택한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "descent-alt",
          "name": "MCP ALTITUDE",
          "target": "SET AS CLEARED",
          "location": "MCP / Altitude selector",
          "detail": "허가받은 하강 고도로 설정. VNAV를 사용한다면 FMC 경로와 ALT 표시 및 FMA를 모니터한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "altimeter",
          "name": "LOCAL QNH",
          "target": "AT TRANSITION LEVEL",
          "location": "EFIS / BARO",
          "detail": "해당 지역 전이레벨 통과 시 현지 QNH로 변경한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "approach",
      "name": "APPROACH",
      "subtitle": "ILS / RNAV 공통 • 모드별 유의",
      "items": [
        {
          "id": "approach-mode",
          "name": "APPROACH GUIDANCE",
          "target": "VERIFY FMA",
          "location": "MCP / PFD FMA / CDU LEGS",
          "detail": "ILS: ILS 주파수와 코스(자동 튜닝 여부 포함), LOC/GS 표시를 확인하고 조건 충족 시 APP 모드를 사용한다. RNAV: 절차 종류와 지원하는 FMC 수직 모드(VNAV 등)를 확인하며 ILS APP 모드를 무조건 사용하지 않는다.",
          "kind": "FLOW",
          "note": "Asobo RNAV 지원 범위·FMA 표시는 게임 내 검증 필요.",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "approach-speed",
          "name": "APPROACH SPEED",
          "target": "SET",
          "location": "MCP / PFD / FMC",
          "detail": "VREF 및 바람 보정에 맞는 접근 속도를 설정하고 감속을 시작한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "speedbrake-arm",
          "name": "SPEEDBRAKE",
          "target": "ARM",
          "location": "Throttle quadrant / Speedbrake lever",
          "detail": "착륙 전 스피드브레이크 ARM 및 표시 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "gear-down",
          "name": "LANDING GEAR",
          "target": "DOWN / 3 GREEN",
          "location": "Main panel / Gear lever",
          "detail": "착륙장치 DOWN, 정상 전개 표시 3개 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "landing-flaps",
          "name": "LANDING FLAPS",
          "target": "SET / INDICATED",
          "location": "Throttle quadrant / Flap lever",
          "detail": "계획 착륙 플랩까지 단계적으로 설정하고 위치 표시를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "landing-check",
          "name": "LANDING CHECK",
          "target": "COMPLETE",
          "location": "PFD / Gear / Flaps / Speedbrake",
          "detail": "착륙 장치, 플랩, 감속장치, 최종 속도, 안정 접근 경로와 접근 허가 확인.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "landing",
      "name": "LANDING / ROLLOUT",
      "subtitle": "착륙 • 활주로 이탈",
      "items": [
        {
          "id": "stabilized",
          "name": "STABILIZED APPROACH",
          "target": "VERIFY",
          "location": "PFD / Engine / Flight path",
          "detail": "적절한 게이트 고도에서 활주로 정렬, 감속/착륙 구성, 하강률, 추진력, 체크리스트 완료를 확인. 불안정하면 복행 고려.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "landing-roll",
          "name": "TOUCHDOWN / ROLLOUT",
          "target": "DECELERATE",
          "location": "Thrust lever / Spoilers / Brakes",
          "detail": "착륙 후 스포일러 전개, 오토브레이크/수동 브레이크, 필요 시 역추력 등을 확인하며 감속한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "rollout",
          "name": "RUNWAY EXIT",
          "target": "SAFE TAXI SPEED",
          "location": "Taxiway / Exterior lights",
          "detail": "안전한 속도로 활주로를 이탈하고 관제 허가에 따라 주기장으로 이동한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "after-landing",
      "name": "AFTER LANDING",
      "subtitle": "택시 인 • 주기장 접근",
      "items": [
        {
          "id": "lights-exit",
          "name": "LANDING / STROBE LIGHTS",
          "target": "OFF AS APPROPRIATE",
          "location": "Overhead / Exterior lighting",
          "detail": "활주로 이탈 후 착륙등/스트로브를 정리하고 택시 라이트를 설정한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "flaps-retract",
          "name": "FLAPS",
          "target": "UP",
          "location": "Throttle quadrant / Flaps",
          "detail": "착륙 플랩을 UP으로 한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "speedbrake-disarm",
          "name": "SPEEDBRAKE",
          "target": "DOWN",
          "location": "Throttle quadrant / Speedbrake",
          "detail": "감속장치 레버를 정리한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "apu-restart",
          "name": "APU START",
          "target": "AS REQUIRED",
          "location": "Overhead / APU",
          "detail": "주기장에서 자체 전원이 필요하면 APU를 시동하고 발전기 상태를 확인한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "after-landing-check",
          "name": "AFTER LANDING CHECK",
          "target": "COMPLETE",
          "location": "Overhead / Main panel",
          "detail": "플랩, 라이트, 기타 지상 이동 구성을 확인한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    },
    {
      "id": "shutdown",
      "name": "SHUTDOWN / SECURE",
      "subtitle": "주기 • 엔진 정지",
      "items": [
        {
          "id": "parking",
          "name": "PARKING BRAKE",
          "target": "SET AS REQUIRED",
          "location": "Pedestal / Parking brake",
          "detail": "주기장 정차 후 안전한 브레이크 상태를 확인한다. 지상 장비 사용 시 절차를 우선한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "power-shutdown",
          "name": "APU / GROUND POWER",
          "target": "ESTABLISH BEFORE CUTOFF",
          "location": "Overhead / Electrical",
          "detail": "필요 시 엔진 정지 전에 APU GEN 또는 GRD PWR를 통해 전원을 확보한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "engine-cutoff",
          "name": "ENGINE START LEVERS",
          "target": "CUTOFF BOTH",
          "location": "Throttle quadrant / Engine start levers",
          "detail": "엔진 스타트 레버 1, 2를 CUTOFF로 하고 엔진 표시의 감소와 정지 확인.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "beacon-off",
          "name": "ANTI-COLLISION BEACON",
          "target": "OFF AFTER ENGINE STOP",
          "location": "Overhead / Exterior lights",
          "detail": "엔진 정지 후 비컨 라이트를 끈다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "fuel-pumps-off",
          "name": "FUEL PUMPS",
          "target": "OFF",
          "location": "Overhead / Fuel",
          "detail": "필요한 종료 절차에 따라 연료 펌프를 OFF 한다.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "probe-heat-off",
          "name": "PROBE HEAT",
          "target": "OFF",
          "location": "Overhead / Probe heat",
          "detail": "지상 종료 단계에서 PROBE HEAT OFF.",
          "kind": "FLOW",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        },
        {
          "id": "secure",
          "name": "AIRCRAFT SECURE",
          "target": "COMPLETE",
          "location": "Overhead / IRS / Electrical",
          "detail": "운항을 마치고 항공기 전원을 완전히 종료할 경우 IRS OFF, 외부 조명/비상등/전원 상태를 확인한다.",
          "kind": "CHECK",
          "note": "",
          "simconnect": {
            "status": "unmapped",
            "readback": null,
            "control": null,
            "aircraft": "Asobo_B737MAX8"
          }
        }
      ]
    }
  ]
};
