737 MAX Flight Companion v0.3 Universal Edition
================================================
MSFS 2024 Asobo Boeing 737 MAX 8 시뮬레이션용 비공식 체크리스트

[Windows / 보조 모니터]
1. START_CHECKLIST.bat 실행 (Microsoft Edge 설치 권장)
2. 앱 창을 원하는 모니터로 이동
3. 데이터는 기존 v0.2.x와 같은 브라우저 저장 키를 사용하지만 file:// 경로 및 브라우저 프로필에 따라 저장 공간이 달라질 수 있음. 기존 버전에서 Export 후 새 버전 Import 권장.

[iPad / PWA 설치]
1. 이 폴더 내용 전체(index.html, js, css, manifest, sw.js, icons)를 HTTPS 정적 사이트로 배포 (예: GitHub Pages / Netlify).
2. iPad Safari에서 배포한 HTTPS URL 열기.
3. 공유 버튼 > 홈 화면에 추가 > 웹 앱으로 열기(표시되는 경우)를 선택.
4. 최초 온라인 로드가 완료된 뒤, 다음부터는 오프라인으로 사용할 수 있음. 오프라인 사용을 위해 한번 실행 후 비행기 모드로 테스트 권장.
주의: ZIP이나 index.html을 iPad Files 앱에서 직접 열면 PWA 설치/오프라인 캐시가 작동하지 않습니다.

[GitHub Pages 간편 배포]
1. GitHub에서 새 repository 생성. 공개 배포 시 체크리스트 파일도 공개됨.
2. ZIP 압축 해제 후 폴더 '내부의 모든 파일'을 repository 최상위에 올리기.
3. Settings > Pages > Deploy from a branch > main / (root) > Save.
4. 생성된 https://계정.github.io/저장소/ URL을 Safari에서 방문.
(회사/개인 정보 또는 민감한 자료는 공개 저장소에 업로드하지 마세요.)

[진행 데이터]
저장 상태는 기기별/사이트별로 별도 관리됩니다. Windows -> iPad는 Settings > Export progress로 JSON 파일을 내보내 iPad에서 Import progress로 불러옵니다. 자동 동기화는 없습니다.

[제한사항]
- SimConnect 자동 체크 미구현. 모든 체크는 수동.
- 실제 항공 운항용 아님. Asobo 737 MAX 스위치 동작은 전 항목 검증되지 않음.
- 이 버전에서는 클라우드 호스팅이나 App Store 배포가 자동으로 이뤄지지 않음.
- 브라우저 데이터 삭제 시 상태가 사라질 수 있으므로 정기적으로 Export 권장.
