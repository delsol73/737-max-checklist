FLIGHT COMPANION v0.7 — PDF-BASED CHECKLIST REBUILD
MSFS 2024 · Windows + iPad PWA · GitHub Pages

WHAT CHANGED
- Retyped/reorganized the aircraft-specific checklists from the TWO PDFs uploaded in this conversation:
  • PMDG_737NG_Checklist_Dark_Mode_v1.1.pdf (ElectroxSoldier, 2022, 4 pages)
  • TalkFile_A20NX_Checklist_KoreanAir.pdf (FBW A320neoX, KE1.0.0, 2021, 3 pages)
- Boeing: 16 normal phases, 236 PDF-derived checklist items.
- Airbus: 16 normal phases, 186 PDF-derived checklist items.
- A separate Go-Around phase is available for each aircraft and is NOT counted above.
- The 737NG source includes a missed approach list (PDF p.4); the previous Go-Around flow adds simulator details.
- The uploaded A320 PDF contains NO Go-Around section; the existing supplemental Go-Around guide has been retained, explicitly labeled.
- Existing iPad/Windows UI: tap whole item row; large inline ON/OFF/SET values; tap i for PDF page and compatibility warning.
- Smart start-state filters and approach-type additions updated for new phase locations.
- FMC/MCDU extra guide remains a separate authored guide, not a verbatim transcription of the two PDFs.
- No cockpit diagrams, no SimConnect.
- reference_tables/ includes source-page-linked CSV checklists for inspection.

MOST IMPORTANT AIRCRAFT-COMPATIBILITY WARNING
These two uploaded PDF references do not describe the exact aircraft currently selected in the app.
- PMDG BOEING 737NG PDF is NOT an ASOBO 737 MAX 8 procedure manual.
- 2021 FBW A32NX PDF is NOT the INIBUILDS A320neo V2 procedure manual.
Some source procedures are simulator-specific (e.g. PMDG FS ACTIONS), configuration-specific or operator-specific. Their exact targets and order have been preserved for comparison rather than silently presented as validated controls for other aircraft. Cross-check the installed aircraft and its own checklist.
SIMULATION ONLY — NEVER USE FOR REAL FLIGHT.

SOURCE REVIEW
PDF page numbers appear next to each item in the app’s i detail panel.
The included CSV files show every imported item, source page, target, and important compatibility note. Autoland limits and weight limit tables on PMDG PDF p.4 were not transformed into action checkboxes (they are reference tables, not sequential actions).

HOW TO UPDATE IPAD GITHUB PAGES
1. Before replacing files, open existing v0.6.1 app Settings > Export progress to save a JSON backup.
2. Extract this v0.7 ZIP.
3. Upload the full CONTENTS of the extracted folder to the ROOT of the existing GitHub repository (index.html at top level), replacing matching files.
4. Commit changes, then wait until Actions → Pages deploy completes.
5. On iPad, close/reopen the installed home-screen web app after deployment; check app version v0.7.
6. If outdated due to PWA cache, check the GitHub Pages site in Safari first. Avoid clearing Safari site data without backup.

WINDOWS
Run START_CHECKLIST.bat after extracting the ZIP. Microsoft Edge is required.

LOCAL STORAGE / LEGACY COMPATIBILITY
737 saved key: msfs737max.checklist.v0.2
A320 saved key: flightcomp.a320.progress.v04
Start/approach preferences and aircraft selection keep previous keys.
Before first migration, a backup of the previous stored JSON is created under flightcomp.archive.v061.<aircraft>.
Old completed entry IDs are retained, and exact semantic ID matches are carried forward. Since the new checklists contain many NEW items, completed marks cannot all be mapped 1:1; for new items you will need to re-check manually.
Export/import accepts the prior format, and maps old phase positions to relevant new phase positions.
Windows and iPad states are NOT automatically synchronized.

TECHNICAL
No external dependencies. HTML/CSS/JS; manifest.webmanifest and sw.js for PWA.
Service Worker cache is bumped to flightcomp-universal-v0.7.
