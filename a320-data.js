/* Simulation-only reference. No live aircraft validation. */
window.A320_CHECKLIST = {
  "schemaVersion": 2,
  "aircraft": "iniBuilds Airbus A320neo V2",
  "simulator": "Microsoft Flight Simulator 2024",
  "sources": [
    {
      "title": "iniBuilds A320neo simulator manual",
      "url": "https://aviationlib.com/manuals/aircraft/airbus/pilot-introduction-simulator/a320neo-msfs-manual-inibuilds-2024/"
    },
    {
      "title": "A320neo MSFS 2024 checklist reference",
      "url": "https://flightchecklist.app/msfs/a320-neo"
    }
  ],
  "phases": [
    {
      "id": "a320-phase-00",
      "name": "COLD & DARK",
      "subtitle": "기체 상태 및 전원 공급",
      "items": [
        {
          "id": "a320-00-00",
          "name": "PARKING BRAKE",
          "target": "SET",
          "location": "Pedestal · Parking brake",
          "detail": "주기 브레이크를 확인하고 기체가 움직이지 않도록 한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-01",
          "name": "ENGINE MASTERS 1 / 2",
          "target": "OFF",
          "location": "Pedestal · Engine masters",
          "detail": "두 엔진 마스터 스위치가 OFF인지 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-02",
          "name": "ENG MODE SELECTOR",
          "target": "NORM",
          "location": "Pedestal · Engine mode",
          "detail": "시동 모드 선택기가 NORM 위치인지 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-03",
          "name": "BAT 1 / BAT 2",
          "target": "ON",
          "location": "Overhead · ELEC",
          "detail": "배터리 버튼을 켜고 전기 표시를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-04",
          "name": "EXTERNAL POWER",
          "target": "ON IF AVAIL",
          "location": "Overhead · ELEC",
          "detail": "EXT PWR AVAIL 표시 시 외부 전원을 연결한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-05",
          "name": "ADIRS 1 / 2 / 3",
          "target": "NAV",
          "location": "Overhead · ADIRS",
          "detail": "세 IR selector를 NAV로 두고 위치 정렬을 시작한다. 정렬 완료 전 이동하지 않는다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-06",
          "name": "NAV & LOGO LIGHTS",
          "target": "ON",
          "location": "Overhead · EXT LT",
          "detail": "위치등을 켠다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-07",
          "name": "EMER EXIT LT",
          "target": "ARM",
          "location": "Overhead · SIGNS",
          "detail": "비상구 조명을 ARM 상태로 둔다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-08",
          "name": "CREW OXYGEN",
          "target": "ON / CHECK",
          "location": "Overhead · OXYGEN",
          "detail": "승무원 산소 공급 상태를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-00-09",
          "name": "SEAT BELTS",
          "target": "ON",
          "location": "Overhead · SIGNS",
          "detail": "탑승 전 좌석벨트 표시등 ON.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-01",
      "name": "APU & SYSTEMS",
      "subtitle": "APU 기동 • 전원 • 공조",
      "items": [
        {
          "id": "a320-01-00",
          "name": "APU MASTER SW",
          "target": "ON",
          "location": "Overhead · APU",
          "detail": "APU MASTER 스위치를 ON.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-01-01",
          "name": "APU START",
          "target": "ON / AVAIL",
          "location": "Overhead · APU",
          "detail": "START 스위치를 누른 뒤 APU AVAIL 표시를 기다린다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-01-02",
          "name": "APU BLEED",
          "target": "ON AS NEEDED",
          "location": "Overhead · AIR COND",
          "detail": "엔진 시동을 위해 APU BLEED를 ON으로 둔다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-01-03",
          "name": "EXT PWR",
          "target": "OFF IF APU SUPPLIES",
          "location": "Overhead · ELEC",
          "detail": "APU 전원으로 전환했으면 외부 전원을 해제한다. 버스 공급을 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-01-04",
          "name": "FUEL PUMPS",
          "target": "ON AS REQUIRED",
          "location": "Overhead · FUEL",
          "detail": "탱크 연료량과 절차에 맞게 펌프 상태를 설정한다. 센터탱크 운용은 연료 상태에 따름.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-01-05",
          "name": "AIR COND / PACKS",
          "target": "CHECK",
          "location": "Overhead · AIR COND",
          "detail": "공조 및 BLEED 설정을 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-01-06",
          "name": "HYDRAULICS",
          "target": "CHECK",
          "location": "Overhead · HYD",
          "detail": "유압 계통 표시와 관련 버튼 상태를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-01-07",
          "name": "ECAM STATUS",
          "target": "REVIEW",
          "location": "ECAM · Lower display",
          "detail": "ECAM 경고/주의 메시지와 STATUS를 점검한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-02",
      "name": "MCDU / FMGS",
      "subtitle": "항로 • 중량 • 성능 설정",
      "items": [
        {
          "id": "a320-02-00",
          "name": "INIT A",
          "target": "FROM / TO / FLT NO",
          "location": "MCDU · INIT",
          "detail": "INIT 페이지에서 출발/도착, 편명, COST INDEX, CRZ FL 등을 입력한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-01",
          "name": "F-PLN",
          "target": "ROUTE / SID",
          "location": "MCDU · F-PLN",
          "detail": "F-PLN에서 SID, airway/waypoint, STAR/approach를 점검하고 DISCONTINUITY를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-02",
          "name": "RAD NAV",
          "target": "AS REQUIRED",
          "location": "MCDU · RAD NAV",
          "detail": "ILS/수동 주파수 설정이 필요할 때만 적용. 자동 튜닝 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-03",
          "name": "INIT B / FUEL PRED",
          "target": "ZFW / ZFWCG / BLOCK",
          "location": "MCDU · INIT / FUEL PRED",
          "detail": "로드시트/EFB의 ZFW, ZFWCG, BLOCK fuel을 참고해 해당 필드를 입력한다. 화면은 버전에 따라 다를 수 있다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-04",
          "name": "PERF TAKEOFF",
          "target": "FLAPS / V SPEEDS",
          "location": "MCDU · PERF",
          "detail": "V1/VR/V2, FLAPS, FLEX TO TEMP 또는 TOGA, THS 값을 성능 계산 결과에 따라 입력한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-05",
          "name": "SEC F-PLN",
          "target": "OPTIONAL",
          "location": "MCDU · SEC F-PLN",
          "detail": "필요하면 alternate 또는 예상 변경 항로를 준비한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-06",
          "name": "FCU ALTITUDE",
          "target": "SET",
          "location": "FCU · Glareshield",
          "detail": "허가 받은 초기 고도를 FCU에 설정한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-07",
          "name": "FD 1 / 2",
          "target": "ON",
          "location": "FCU · Glareshield",
          "detail": "Flight Director 표시를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-08",
          "name": "ND / PFD",
          "target": "VERIFY",
          "location": "Captain/FO displays",
          "detail": "항로 표시, 활주로, 성능 및 PFD/ND 상태를 양쪽에서 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-02-09",
          "name": "TAKEOFF BRIEFING",
          "target": "COMPLETE",
          "location": "Flight deck",
          "detail": "이륙 활주로, SID, 장애물, 초기 고도, 엔진 고장 후 계획을 브리핑한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-03",
      "name": "BEFORE START",
      "subtitle": "도어 닫힘 • 출발 승인 • 푸시백",
      "items": [
        {
          "id": "a320-03-00",
          "name": "LOADSHEET / FUEL",
          "target": "CONFIRM",
          "location": "EFB / ECAM",
          "detail": "승객·화물·연료 총량, ZFW, TOW를 확인한다.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-03-01",
          "name": "DOORS / CARGO",
          "target": "CLOSED",
          "location": "ECAM · DOOR/OXY",
          "detail": "객실/화물 도어 표시를 확인한다.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-03-02",
          "name": "BEACON",
          "target": "ON",
          "location": "Overhead · EXT LT",
          "detail": "엔진 시동 및 푸시백 전에 비컨 표시등을 켠다.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-03-03",
          "name": "PUSHBACK CLEARANCE",
          "target": "OBTAIN",
          "location": "ATC / GSX",
          "detail": "푸시백 승인과 주변 안전을 확인한다.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-03-04",
          "name": "PARKING BRAKE",
          "target": "RELEASE ON CLEARANCE",
          "location": "Pedestal",
          "detail": "푸시백 지시에 따라 해제. 푸시백 완료 뒤 재설정.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-03-05",
          "name": "APU BLEED / APU AVAIL",
          "target": "CHECK",
          "location": "Overhead / ECAM",
          "detail": "시동용 공기원과 APU 가용 상태를 확인한다.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-04",
      "name": "ENGINE START",
      "subtitle": "일반적인 엔진 2 → 1 시동",
      "items": [
        {
          "id": "a320-04-00",
          "name": "ENG MODE SELECTOR",
          "target": "IGN/START",
          "location": "Pedestal · ENG MODE",
          "detail": "ENG MODE를 IGN/START에 둔다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-04-01",
          "name": "ENG MASTER 2",
          "target": "ON",
          "location": "Pedestal · ENG 2",
          "detail": "ENG 2 MASTER를 ON으로 하고 N2 상승·연료 유입·EGT·오일 압력을 관찰한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-04-02",
          "name": "ENGINE 2",
          "target": "STABLE",
          "location": "ECAM · ENG",
          "detail": "엔진 2 안정화 및 경고 부재를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-04-03",
          "name": "ENG MASTER 1",
          "target": "ON",
          "location": "Pedestal · ENG 1",
          "detail": "ENG 1 MASTER를 ON으로 하고 정상 시동을 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-04-04",
          "name": "ENGINE 1",
          "target": "STABLE",
          "location": "ECAM · ENG",
          "detail": "엔진 1 안정화 및 경고 부재를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-04-05",
          "name": "ENG MODE SELECTOR",
          "target": "NORM",
          "location": "Pedestal · ENG MODE",
          "detail": "두 엔진 정상 시동 뒤 NORM으로 복귀.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-04-06",
          "name": "APU BLEED",
          "target": "OFF",
          "location": "Overhead · AIR COND",
          "detail": "엔진 공기 공급으로 전환한 후 APU BLEED OFF.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-04-07",
          "name": "APU MASTER",
          "target": "OFF AS REQUIRED",
          "location": "Overhead · APU",
          "detail": "엔진 전원 공급 정상 확인 후 필요 없으면 APU 종료.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-05",
      "name": "AFTER START",
      "subtitle": "기체 구성 • 조종면 점검",
      "items": [
        {
          "id": "a320-05-00",
          "name": "ANTI-ICE",
          "target": "AS REQUIRED",
          "location": "Overhead · ANTI ICE",
          "detail": "기상에 따라 엔진/날개 방빙 설정을 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-05-01",
          "name": "FLAPS",
          "target": "TAKEOFF CONFIG",
          "location": "Pedestal · Flap lever",
          "detail": "성능 계산된 이륙 플랩 위치로 설정.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-05-02",
          "name": "GROUND SPOILERS",
          "target": "ARM",
          "location": "Pedestal · Speed brake",
          "detail": "스피드브레이크 레버를 ARM.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-05-03",
          "name": "PITCH TRIM",
          "target": "SET",
          "location": "Pedestal · Pitch trim",
          "detail": "계산된 THS 값을 맞추고 표시 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-05-04",
          "name": "RUDDER TRIM",
          "target": "ZERO",
          "location": "Pedestal · Rudder trim",
          "detail": "러더 트림 0 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-05-05",
          "name": "FLIGHT CONTROLS",
          "target": "CHECK",
          "location": "Sidestick / ECAM F/CTL",
          "detail": "ECAM F/CTL 표시로 전 방향 조종면 점검.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-05-06",
          "name": "ECAM STATUS",
          "target": "CHECK",
          "location": "ECAM",
          "detail": "시동 후 이상 메시지를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-06",
      "name": "TAXI",
      "subtitle": "지상 이동",
      "items": [
        {
          "id": "a320-06-00",
          "name": "TAXI LIGHT",
          "target": "ON",
          "location": "Overhead · EXT LT",
          "detail": "NOSE 라이트를 TAXI 위치로 설정.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-06-01",
          "name": "BRAKES",
          "target": "CHECK",
          "location": "Pedals / ECAM WHEEL",
          "detail": "저속에서 브레이크 효과를 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-06-02",
          "name": "FLIGHT INSTRUMENTS",
          "target": "CHECK",
          "location": "PFD / ND",
          "detail": "택시 중 속도·방향 표시 및 계기 교차 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-06-03",
          "name": "ATC / TAXI ROUTE",
          "target": "CONFIRM",
          "location": "ATC / EFB",
          "detail": "허가된 유도로와 활주로 대기 위치를 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-06-04",
          "name": "T.O CONFIG TEST",
          "target": "NORMAL",
          "location": "ECAM · T.O CONFIG",
          "detail": "T.O CONFIG 버튼을 이용해 이륙 구성 경고가 없는지 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-06-05",
          "name": "ECAM T.O MEMO",
          "target": "NO BLUE",
          "location": "Upper ECAM",
          "detail": "이륙 메모에서 미완료 항목이 없는지 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-07",
      "name": "BEFORE TAKEOFF",
      "subtitle": "활주로 진입 및 이륙",
      "items": [
        {
          "id": "a320-07-00",
          "name": "TAKEOFF DATA",
          "target": "RECHECK",
          "location": "MCDU PERF / PFD",
          "detail": "V1/VR/V2, FLAPS, FLEX/TOGA, THS 재확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-07-01",
          "name": "RUNWAY / SID",
          "target": "CONFIRM",
          "location": "ND / ATC",
          "detail": "활주로와 SID 일치 여부를 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-07-02",
          "name": "CABIN",
          "target": "READY",
          "location": "ECAM / Cabin",
          "detail": "승객·객실 상태를 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-07-03",
          "name": "EXTERIOR LIGHTS",
          "target": "SET",
          "location": "Overhead · EXT LT",
          "detail": "활주로 진입 시 STROBE/NOSE TO/착륙등을 필요에 따라 설정.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-07-04",
          "name": "TCAS",
          "target": "TA/RA",
          "location": "Pedestal · ATC",
          "detail": "이륙 전 트랜스폰더/TCAS 상태 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-07-05",
          "name": "AUTOBRAKE",
          "target": "MAX IF REQUIRED",
          "location": "ECAM WHEEL / Brake panel",
          "detail": "해당 이륙 절차에서 RTO/자동브레이크 구성 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-07-06",
          "name": "TAKEOFF THRUST",
          "target": "FLEX OR TOGA",
          "location": "Thrust levers",
          "detail": "FLEX/MCT 또는 TOGA detent로 이륙 추력을 설정하고 FMA를 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-07-07",
          "name": "FMA / SPEED",
          "target": "MONITOR",
          "location": "PFD",
          "detail": "FMA 추력/유도 모드 및 속도 증가를 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-08",
      "name": "CLIMB / CRUISE",
      "subtitle": "이륙 후 상승 • 순항",
      "items": [
        {
          "id": "a320-08-00",
          "name": "POSITIVE CLIMB",
          "target": "GEAR UP",
          "location": "Gear lever",
          "detail": "양(+) 상승 확인 후 착륙장치를 올린다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-08-01",
          "name": "THRUST LEVERS",
          "target": "CL DETENT",
          "location": "Thrust levers",
          "detail": "LVR CLB 지시에 따라 CL detent로 이동.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-08-02",
          "name": "FLAPS",
          "target": "RETRACT ON SCHEDULE",
          "location": "Flap lever / PFD",
          "detail": "F/S 속도와 조건에 따라 플랩 순차 복귀.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-08-03",
          "name": "AP 1 / 2",
          "target": "AS REQUIRED",
          "location": "FCU",
          "detail": "안전한 시점에 오토파일럿 사용. FMA로 모드 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-08-04",
          "name": "BARO / ALTITUDE",
          "target": "SET / MONITOR",
          "location": "PFD / FCU",
          "detail": "전환고도/전환레벨에 맞춰 QNH/STD 전환.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-08-05",
          "name": "CRUISE MONITOR",
          "target": "CHECK",
          "location": "ECAM / MCDU",
          "detail": "연료, 시간, 항로, 기상, 엔진 상태를 주기적으로 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-09",
      "name": "DESCENT",
      "subtitle": "도착 계획 • 강하",
      "items": [
        {
          "id": "a320-09-00",
          "name": "ARRIVAL / APPROACH",
          "target": "VERIFY",
          "location": "MCDU · F-PLN",
          "detail": "STAR, TRANSITION, 활주로와 접근 방식을 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-09-01",
          "name": "PERF APPR",
          "target": "QNH / TEMP / WIND",
          "location": "MCDU · PERF APPR",
          "detail": "목적지 기압, 기온, 바람, 최소치, 착륙 구성과 VAPP를 입력/확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-09-02",
          "name": "DESCENT BRIEFING",
          "target": "COMPLETE",
          "location": "Flight deck",
          "detail": "접근 유형, 고도 제한, 복행 경로를 브리핑한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-09-03",
          "name": "FCU ALT",
          "target": "CLEARED ALT",
          "location": "FCU",
          "detail": "허가 받은 고도 설정 후 유도 모드를 FMA에서 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-09-04",
          "name": "BARO",
          "target": "QNH AT TRANSITION",
          "location": "PFD / FCU",
          "detail": "전환 레벨 이후 로컬 QNH로 전환.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-09-05",
          "name": "SEAT BELTS",
          "target": "ON",
          "location": "Overhead · SIGNS",
          "detail": "강하 중 착석 표시를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-10",
      "name": "APPROACH",
      "subtitle": "ILS / RNAV 접근 • 착륙 구성",
      "items": [
        {
          "id": "a320-10-00",
          "name": "APPROACH GUIDANCE",
          "target": "CONFIRM",
          "location": "MCDU / PFD",
          "detail": "ILS이면 LS/LOC/GS, RNAV면 FINAL APP 또는 기체 지원 안내 모드를 확인한다. 자동 가정 금지.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-10-01",
          "name": "APP BUTTON",
          "target": "IF APPLICABLE",
          "location": "FCU · APPR",
          "detail": "선택한 접근 종류와 기체 구현에 따라 APPR을 사용. RNAV 모드는 상황에 따라 다르다.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-10-02",
          "name": "SPEED",
          "target": "MANAGED / SELECTED",
          "location": "FCU / PFD",
          "detail": "감속 계획과 VAPP를 확인한다.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-10-03",
          "name": "FLAPS",
          "target": "PROGRESSIVE",
          "location": "Flap lever",
          "detail": "속도 제한과 안정 접근 기준에 맞춰 플랩을 단계적으로 전개.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-10-04",
          "name": "LANDING GEAR",
          "target": "DOWN",
          "location": "Gear lever",
          "detail": "착륙장치 내려 3 GREEN 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-10-05",
          "name": "GROUND SPOILERS",
          "target": "ARM",
          "location": "Pedestal",
          "detail": "스포일러 ARM 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-10-06",
          "name": "AUTOBRAKE",
          "target": "AS REQUIRED",
          "location": "Brake panel",
          "detail": "활주로 상태와 계획에 따라 착륙 자동브레이크 설정.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-10-07",
          "name": "LANDING MEMO",
          "target": "NO BLUE",
          "location": "Upper ECAM",
          "detail": "ECAM LANDING MEMO에 미완료 항목이 없는지 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-10-08",
          "name": "STABILIZED APPROACH",
          "target": "CHECK",
          "location": "PFD / ECAM",
          "detail": "속도, 경로, 추력, 착륙 구성 및 안정 접근 여부를 확인.",
          "kind": "CHECK",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-11",
      "name": "LANDING",
      "subtitle": "접지 • 감속 • 활주로 이탈",
      "items": [
        {
          "id": "a320-11-00",
          "name": "LANDING CLEARANCE",
          "target": "CONFIRMED",
          "location": "ATC",
          "detail": "착륙 허가 및 활주로를 확인한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-11-01",
          "name": "AUTOPILOT",
          "target": "DISCONNECT AS PLANNED",
          "location": "FCU / Sidestick",
          "detail": "계획된 시점에 AP 해제 또는 자동착륙 모드 감시.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-11-02",
          "name": "FLARE / THRUST",
          "target": "IDLE AT RETARD",
          "location": "Thrust levers",
          "detail": "RETARD 콜아웃에 맞춰 추력레버 IDLE.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-11-03",
          "name": "REVERSE THRUST",
          "target": "AS REQUIRED",
          "location": "Thrust levers",
          "detail": "접지 후 리버스와 브레이킹을 사용해 감속.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-11-04",
          "name": "RUNWAY EXIT",
          "target": "VACATE SAFELY",
          "location": "ATC / Taxiway",
          "detail": "활주로 이탈 뒤 속도/조명을 지상 이동 상태로 전환.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-12",
      "name": "AFTER LANDING",
      "subtitle": "활주로 이탈 후",
      "items": [
        {
          "id": "a320-12-00",
          "name": "SPOILERS",
          "target": "DISARM",
          "location": "Pedestal",
          "detail": "스포일러 디스암 및 상태 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-12-01",
          "name": "FLAPS",
          "target": "UP",
          "location": "Pedestal",
          "detail": "플랩 완전 복귀.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-12-02",
          "name": "STROBE / LANDING LT",
          "target": "OFF AS APPROPRIATE",
          "location": "Overhead · EXT LT",
          "detail": "활주로 이탈 후 조명 전환.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-12-03",
          "name": "APU",
          "target": "START AS REQUIRED",
          "location": "Overhead · APU",
          "detail": "게이트에서 필요한 경우 APU를 기동한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-12-04",
          "name": "TRANSPONDER / TCAS",
          "target": "SET",
          "location": "Pedestal · ATC",
          "detail": "현지 절차에 맞는 지상 모드 설정.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-12-05",
          "name": "BRAKE TEMP",
          "target": "MONITOR",
          "location": "ECAM WHEEL",
          "detail": "브레이크 온도와 냉각 필요 여부 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    },
    {
      "id": "a320-phase-13",
      "name": "PARKING / SHUTDOWN",
      "subtitle": "주기 • 종료 • 전원 해제",
      "items": [
        {
          "id": "a320-13-00",
          "name": "PARKING BRAKE",
          "target": "SET",
          "location": "Pedestal",
          "detail": "주기 위치에서 브레이크를 설정한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-13-01",
          "name": "EXT PWR / APU",
          "target": "AVAILABLE",
          "location": "Overhead · ELEC",
          "detail": "엔진 정지 전 전원 공급원을 확보한다.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-13-02",
          "name": "ENGINE MASTERS 1 / 2",
          "target": "OFF",
          "location": "Pedestal",
          "detail": "두 엔진 MASTER OFF; N1/N2 감소 확인.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-13-03",
          "name": "BEACON",
          "target": "OFF WHEN SAFE",
          "location": "Overhead · EXT LT",
          "detail": "엔진 완전 정지 후 비컨 OFF.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-13-04",
          "name": "FUEL PUMPS",
          "target": "OFF AS APPROPRIATE",
          "location": "Overhead · FUEL",
          "detail": "연료 펌프 설정을 지상 정지 구성으로 변경.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-13-05",
          "name": "SEAT BELTS",
          "target": "OFF",
          "location": "Overhead · SIGNS",
          "detail": "주기 후 안전한 시점에 좌석벨트 표시 OFF.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-13-06",
          "name": "ADIRS 1 / 2 / 3",
          "target": "OFF",
          "location": "Overhead · ADIRS",
          "detail": "비행 종료 후 ADIRS를 OFF.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-13-07",
          "name": "APU / EXT PWR",
          "target": "SHUT DOWN / DISCONNECT",
          "location": "Overhead · APU / ELEC",
          "detail": "완전 종료시 APU OFF 및 외부 전원 해제.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        },
        {
          "id": "a320-13-08",
          "name": "BAT 1 / BAT 2",
          "target": "OFF",
          "location": "Overhead · ELEC",
          "detail": "최종 종료 절차에서 배터리 OFF.",
          "kind": "FLOW",
          "note": "Simulator adaptation for iniBuilds A320neo V2. Verify actual cockpit indications and current aircraft software; not a certified real-world checklist.",
          "simconnect": null
        }
      ]
    }
  ]
};
