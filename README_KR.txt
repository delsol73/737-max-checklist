Flight Companion v0.5 — Smart Checklist (MSFS 2024)

Windows: START_CHECKLIST.bat 실행.
iPad: GitHub Pages 저장소 루트에 ZIP 안의 모든 파일을 업로드하고 새 배포 완료 후 앱 재실행.

SMART CHECKLIST:
- Start State: Cold & Dark / Turnaround (Powered) / Runway Ready
- Approach: ILS / RNAV
- 기존 체크리스트 ID 및 v0.4 저장 키 그대로 유지. 프로파일은 기체별로 별도 저장.
- 숨겨진 Phase는 저장된 체크 상태가 유지되며 활성 프로파일의 진행률/일괄 체크에서 제외.
- 'Show skipped phases'로 이전 단계 확인 가능. 숨겨진 단계는 일괄 체크에서 제외됨.
- 접근 단계에 ILS/RNAV별 확인 항목이 추가되며 절차는 시뮬레이터용 참고사항임.
- 기체 설정과 항공편 준비 정도에 따라 건너뛸 수 있는 항목이 달라짐. 특히 Runway Ready는 해당 상태로 이미 준비된 상황에서만 선택.

IMPORTANT: No actual MSFS state detection. This is a profile filter, not automatic aircraft configuration. All procedures simulation-only.


v0.5.1 Go-Around / Missed Approach:
- Smart Checklist 아래 GO-AROUND 버튼으로 언제든 복행 체크리스트로 진입합니다.
- 기체별 별도 절차를 제공합니다.
- GO-AROUND를 종료하면 Approach 단계로 이동합니다.
- 복행 절차는 평소 완료율에서 제외되고, 복행 활성화 중에만 포함됩니다.
- 기존 기체별 체크 상태 및 Phase 인덱스 저장 키를 유지합니다.
- 본 절차는 일반적인 정상 복행의 시뮬레이션 참고용이며 엔진 고장/특수 상황 절차가 아닙니다.
- 출처: Airbus Safety First 'The Go-Around Procedure'; Boeing 737 MAX FCTM/FCOM excerpts; sim implementation unverified.


v0.5.2 Compact Flight Profile
- Flight Profile defaults to collapsed; tap to open Start State / Approach settings.
- Changing a profile value auto-collapses settings; Done also closes them.
- GO-AROUND stays visible separately.
- Existing storage keys, progress, PWA installation and checklist data unchanged.
