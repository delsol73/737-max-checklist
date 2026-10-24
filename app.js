(() => {
'use strict';
const AIRCRAFT={ '737': window.CHECKLIST, 'a320': window.A320_CHECKLIST };

// Optional branch is appended to preserve all v0.5 phase indices in saved progress.
const GO_AROUND_PHASES = {"737": {"id": "go-around", "name": "GO-AROUND / MISSED APPROACH", "subtitle": "복행 개시 · 상승 · 미스드 어프로치 · 재접근", "items": [{"id": "ga-737-command", "name": "GO-AROUND", "target": "ANNOUNCE", "location": "Flight deck", "detail": "복행 결정. 비행 경로, 추력, 고도 확보를 최우선으로 한다.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-toga", "name": "TO/GA SWITCH / THRUST", "target": "PRESS / VERIFY", "location": "Thrust levers / TO/GA switches", "detail": "TO/GA 스위치를 누르고 복행 추력이 증가하는지 N1 및 FMA로 확인. 오토스로틀 미작동 시 복행 추력을 수동으로 설정. 필요 시 해당 절차에 따른 추가 TO/GA 선택.", "kind": "FLOW", "note": "Asobo 737 MAX 8의 TO/GA 매핑과 모드 전환은 기체 버전별로 확인.", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-pitch", "name": "PITCH / FLIGHT DIRECTOR", "target": "FOLLOW FD", "location": "PFD / Flight director", "detail": "복행 자세로 부드럽게 피치업한 뒤 Flight Director 지시를 따르고 속도 추세를 감시.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-flap15", "name": "FLAPS", "target": "15", "location": "Pedestal / Flap lever", "detail": "일반적인 양발 복행에서 FLAPS 15 선택 후 표시 확인. 엔진 고장 등 특수 상황은 별도 절차 적용.", "kind": "FLOW", "note": "현재 랜딩 플랩과 비정상 상황에 따라 별도 기준이 적용될 수 있음.", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-positive", "name": "POSITIVE RATE", "target": "VERIFY", "location": "PFD / Vertical speed and altitude", "detail": "상승 고도 및 수직속도로 양의 상승률을 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-gear", "name": "LANDING GEAR", "target": "UP", "location": "Main panel / Landing gear lever", "detail": "양의 상승률 확인 후 기어 UP, 기어 수납 표시 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-alt", "name": "MISSED APPROACH ALTITUDE", "target": "SET / VERIFY", "location": "MCP / Altitude selector", "detail": "차트와 ATC 허가에 맞는 복행 고도가 MCP에 설정되어 있는지 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-lateral", "name": "LATERAL GUIDANCE", "target": "VERIFY", "location": "MCP LNAV / HDG SEL, PFD FMA", "detail": "400 ft AFE 이후 계획/관제 허가에 맞는 수평 모드(LNAV 또는 HDG SEL 등)를 선택하고 FMA 확인.", "kind": "FLOW", "note": "ATC 지시와 발표된 미스드 어프로치 경로가 우선.", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-atc", "name": "ATC / MISSED ROUTE", "target": "ADVISE / FOLLOW", "location": "COM radio / FMC LEGS", "detail": "관제에 복행을 알리고 미스드 어프로치 경로 및 고도 제한을 따라 비행. FMC LEGS 연결과 불연속 구간을 검토.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-clean", "name": "ACCELERATION / FLAPS", "target": "RETRACT ON SCHEDULE", "location": "PFD speed tape / Flap lever", "detail": "적절한 가속 고도에서 속도 및 플랩 기동 속도표에 따라 15→5→1→UP 등 단계적 수납. 속도 제한 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-climb", "name": "CLIMB / FMA", "target": "VERIFY", "location": "MCP / PFD FMA", "detail": "상승 추력과 LVL CHG/VNAV 등 허용되는 상승 모드를 확인하고 고도 포착 감시.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-737-reapproach", "name": "FMC RE-APPROACH", "target": "REPROGRAM / BRIEF", "location": "FMC DEP/ARR, LEGS, PERF / MCP", "detail": "재접근 허가를 받으면 STAR/APP 또는 vectors를 갱신하고 LEGS, 접근 주파수·코스, 미니멈, 속도/플랩, MCP와 브리핑을 재확인. 복행 후 접근 단계로 이동해 항목 재확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}]}, "a320": {"id": "go-around", "name": "GO-AROUND / MISSED APPROACH", "subtitle": "TOGA · SRS · GA TRK/NAV · 복행 경로 · 재접근", "items": [{"id": "ga-a320-command", "name": "GO-AROUND", "target": "ANNOUNCE", "location": "Flight deck", "detail": "복행 결정을 선언하고 즉시 복행 자세와 추력 확보.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-toga", "name": "THRUST LEVERS", "target": "TOGA", "location": "Pedestal / Thrust levers", "detail": "두 추력 레버를 TOGA detent로 밀고 엔진 추력 증가를 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-fma", "name": "FMA / GO-AROUND MODES", "target": "VERIFY", "location": "PFD / Flight Mode Annunciator", "detail": "MAN TOGA / SRS / GA TRK 또는 NAV 등 실제 FMA를 확인하며 Flight Director 지시를 따른다.", "kind": "FLOW", "note": "A320neo V2의 모드 활성화 및 FMA 구현은 실제 기체 설정과 다를 수 있음.", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-flaps", "name": "FLAPS", "target": "RETRACT ONE STEP", "location": "Pedestal / Flap lever", "detail": "착륙 구성에서 복행 시 플랩을 일반적으로 한 단계 수납하고 PFD 속도·플랩 제한 확인. 예: FULL→3.", "kind": "FLOW", "note": "초기 접근 플랩 상태/엔진 고장 여부에 따라 절차가 달라짐.", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-positive", "name": "POSITIVE CLIMB", "target": "VERIFY", "location": "PFD / Vertical indication", "detail": "양의 상승률과 안전한 상승 자세 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-gear", "name": "LANDING GEAR", "target": "UP", "location": "Main panel / Gear lever", "detail": "Positive climb 확인 후 기어 UP 및 수납 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-missedalt", "name": "GO-AROUND ALTITUDE", "target": "VERIFY", "location": "FCU / Altitude window", "detail": "접근 차트·ATC 지시에 맞는 Missed Approach altitude 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-lateral", "name": "NAV / HDG GUIDANCE", "target": "SELECT / VERIFY", "location": "FCU / MCDU F-PLN / PFD FMA", "detail": "GA TRK을 그대로 유지할지 NAV/HDG로 전환할지 미스드 어프로치 및 관제 지시에 따라 결정하고 FMA 확인.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-atc", "name": "ATC / MISSED F-PLN", "target": "ADVISE / MONITOR", "location": "COM / MCDU F-PLN / ND", "detail": "관제에 복행 보고. 활성화된 미스드 어프로치 경로와 제한 고도/방향을 검토하고 필요 시 수정.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-clb", "name": "THRUST LEVERS", "target": "CLB AT PROMPT", "location": "PFD FMA / Thrust levers", "detail": "복행 추력 감소 고도에서 FMA의 LVR CLB 지시 등 적절한 타이밍에 CLB detent로 이동.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-clean", "name": "ACCELERATION / FLAPS", "target": "CLEAN UP ON SCHEDULE", "location": "PFD speed tape / Flap lever", "detail": "복행 가속 고도에서 S/F/Green Dot 등 속도 기준에 맞춰 플랩을 단계적으로 수납. 속도와 상승 경로 감시.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}, {"id": "ga-a320-reapproach", "name": "MCDU RE-APPROACH", "target": "REPROGRAM / BRIEF", "location": "MCDU F-PLN / PERF APPR / FCU", "detail": "재접근 승인 후 MCDU F-PLN에 접근 및 경로 연결, PERF APPR의 기압·기상·최저고도, FCU, 브리핑과 착륙 구성을 다시 점검.", "kind": "FLOW", "note": "", "simconnect": {"status": "unmapped", "readback": null, "control": null}}]}};
for(const [key,entry] of Object.entries(GO_AROUND_PHASES)){
 entry.subtitle+=(key==='737'?' · 737NG PDF p.4 참조 (추가 재접근 항목 포함)':' · A320 PDF에 없는 기존 시뮬레이션 가이드');
 entry.items.forEach(i=>{i.note=(i.note?i.note+' ':'')+(key==='737'?'Go-around outline appears in uploaded PMDG 737NG PDF p.4; expanded MAX simulation guidance is supplemental.':'The uploaded FBW A32NX PDF has no Go-Around section; this is retained from v0.6.1.');});
 AIRCRAFT[key].phases.push(entry);
}
const normalLastIndex=()=>data.phases.length-2;
const gaIndex=()=>data.phases.length-1;
const isGA=(pi)=>pi===gaIndex();

let aircraft=localStorage.getItem('flightcomp.aircraft.v04')==='a320'?'a320':'737';
let data=AIRCRAFT[aircraft];
if(!data || !Array.isArray(data.phases)) { alert('Could not load checklist-data.js'); return; }
const LEGACY_KEY='msfs737max.checklist.v0.2';
const KEY=()=>aircraft==='737'?LEGACY_KEY:'flightcomp.a320.progress.v04';
const PREV_KEY='msfs737max.checklist.v0.1';
const EDITION_KEY=()=>`flightcomp.migration.v07.${aircraft}`;
const OLD_PHASE_MAP={
 '737':[0,1,2,3,4,6,7,9,10,11,12,13,15,16],
 'a320':[0,1,1,2,3,4,5,6,9,11,12,12,13,14,16]
};
function migratedPhase(saved){
 const isOld=!(saved?.edition==='v0.7')&&!localStorage.getItem(EDITION_KEY());
 return isOld?(OLD_PHASE_MAP[aircraft][saved?.phase] ?? 0):saved?.phase;
}
function legacyCompleted(saved){
 const retained={};
 if(saved?.completed && typeof saved.completed==='object')for(const [key,value] of Object.entries(saved.completed)) {
   if(typeof key==='string' && /^[a-zA-Z0-9_-]{1,100}$/.test(key) && value===true)retained[key]=true;
 }
 return retained;
}
function archivePreviousProgress(){
 const key=KEY();if(localStorage.getItem(EDITION_KEY()))return;
 try{const raw=localStorage.getItem(key);if(raw)localStorage.setItem(`flightcomp.archive.v061.${aircraft}`,raw);}catch(e){console.warn('Archive failed',e);}
}

const SMART_KEY=()=>`flightcomp.smart.v05.${aircraft}`;
const defaultSmart=()=>({start:'cold',approach:'ils',showSkipped:false,goAround:false});
function loadSmart(){try{const j=JSON.parse(localStorage.getItem(SMART_KEY())||'null');return {start:['cold','turnaround','runway'].includes(j?.start)?j.start:'cold',approach:['ils','rnav'].includes(j?.approach)?j.approach:'ils',showSkipped:!!j?.showSkipped,goAround:!!j?.goAround};}catch(e){return defaultSmart();}}
let smart=loadSmart();
function saveSmart(){try{localStorage.setItem(SMART_KEY(),JSON.stringify(smart));}catch(e){console.warn('Could not save profile',e);}}
const phaseIndexById=(id)=>Math.max(0,data.phases.findIndex(p=>p.id===id));
const startIndex=()=>smart.start==='cold'?0:smart.start==='runway'?phaseIndexById('before-takeoff'):(aircraft==='737'?phaseIndexById('atc-fmc'):phaseIndexById('cockpit-preparation'));
const approachIndex=()=>phaseIndexById(aircraft==='737'?'approach':'landing');
const sourceLabel=()=>aircraft==='737'?'PMDG 737NG v1.1 PDF → Asobo 737 MAX':'FBW A32NX KE1.0.0 PDF → iniBuilds A320neo V2';
const sourceWarning=()=>aircraft==='737'?'원본은 PMDG 737NG용 시뮬레이션 체크리스트입니다. Asobo 737 MAX의 스위치·절차·구현과 일치하지 않을 수 있습니다.':'원본은 2021년 FBW A32NX용 시뮬레이션 체크리스트입니다. iniBuilds A320neo V2와 일부 패널·절차가 다를 수 있습니다.';
function visiblePhaseIndex(pi){return isGA(pi)?smart.goAround:pi>=startIndex();}
function smartAddedItems(){
 const is737=aircraft==='737';const ils=smart.approach==='ils';
 const prefix=is737?'smart-737-':'smart-a320-';
 const approachPhase=approachIndex();
 const common=(id,name,target,location,detail,note='')=>({id:prefix+id,name,target,location,detail,note,kind:'FLOW',smartOnly:true});
 const items=is737?(ils?[
  common('ils-tune','ILS FREQUENCY / COURSE','VERIFY','FMC / NAV RADIO / MCP','Verify ILS frequency/course from the approach chart and confirm correct runway and localizer. Asobo avionics may auto-tune; verify indications.'),
  common('ils-arm','LOC / APP MODE','ARM WHEN CLEARED','MCP / PFD FMA','Intercept published localizer and glideslope from below using the cleared procedure. Verify LOC and G/S FMA capture; never assume arming equals capture.')
 ]:[
  common('rnav-leg','RNAV APPROACH LEGS','VERIFY','FMC LEGS / ND','Confirm correctly loaded RNAV procedure, sequencing and altitude restrictions; resolve discontinuities only when appropriate.'),
  common('rnav-guidance','RNAV VERTICAL GUIDANCE','VERIFY CAPABILITY','PFD FMA / FMC','Verify available RNAV minima and approach mode supported by Asobo MAX. Do not assume ILS APP / glideslope indications apply to RNAV. Use published approach minima.')
 ]):(ils?[
  common('ils-ident','ILS IDENT / FREQUENCY','VERIFY','MCDU RAD NAV / PFD','Verify ILS selection and approach runway against charts; verify LS indications / localizer and glideslope where supported.'),
  common('ils-app','ILS APP / LOC G/S','MONITOR FMA','FCU / PFD FMA','Arm APPR when appropriate and verify LOC / G/S capture on FMA. Verify altitude and landing configuration before descent on glidepath.')
 ]:[
  common('rnav-legs','RNAV F-PLN / CONSTRAINTS','VERIFY','MCDU F-PLN / ND','Review RNAV final approach legs, vertical constraints, minima and discontinuities against the chart.'),
  common('rnav-final','RNAV FINAL APP MODE','VERIFY FMA','FCU / PFD FMA','Use applicable RNAV guidance supported by iniBuilds A320neo V2. Verify actual FMA guidance (e.g. FINAL APP when available), and published minima. Do not assume ILS G/S guidance.')
 ]);
 return {[approachPhase]:items};
}
function itemsForPhase(pi){const p=data.phases[pi];return p.items.concat((smartAddedItems()[pi]||[]));}
function visibleItemsForPhase(pi){return visiblePhaseIndex(pi)?itemsForPhase(pi):[];}
function activeItems(){return data.phases.flatMap((p,pi)=>visibleItemsForPhase(pi));}
function profileText(){return `${smart.start==='cold'?'COLD & DARK':smart.start==='turnaround'?'TURNAROUND':'RUNWAY READY'} · ${smart.approach.toUpperCase()}`;}
function syncSmartControls(){ $('startSelect').value=smart.start;$('approachSelect').value=smart.approach;$('showSkipped').checked=smart.showSkipped;$('profileTag').textContent=profileText()+(smart.goAround?' · GO-AROUND ACTIVE':'');$('gaBtn').classList.toggle('ga-active',smart.goAround);$('gaBtn').textContent=smart.goAround?'↩ Return to approach':'↗ GO-AROUND';let hidden=data.phases.slice(0,startIndex()).reduce((n,p)=>n+p.items.length,0);$('smartSummary').textContent=hidden?`${hidden} earlier items excluded from this flight profile. Saved checks are preserved.`:'Full-flight checklist selected.';}
function changeProfile(){$('profileDetails').open=false;saveSmart();model.selected=null;const visible=visiblePhaseIndex(model.phase);if(!visible&&!smart.showSkipped)model.phase=startIndex();save();render();}

const $=id=>document.getElementById(id);
let all=data.phases.flatMap(p=>p.items);
let IDs=new Set(all.map(x=>x.id));
let model={phase:0,completed:{},compact:false,selected:null};
let guideView="item";let guidePage={"737":0,"a320":0};let returnToItem=null;
try {
 archivePreviousProgress();
 const saved=JSON.parse(localStorage.getItem(KEY())||(aircraft==='737'?localStorage.getItem(PREV_KEY):null)||'null');
 if(saved && typeof saved==='object'){
  model.phase=Number.isInteger(saved.phase)?Math.max(0,Math.min(data.phases.length-1,migratedPhase(saved))):0;
  model.compact=!!saved.compact;
  model.completed=legacyCompleted(saved);
  if(!localStorage.getItem(EDITION_KEY()))localStorage.setItem(EDITION_KEY(),'1');
 }
}catch(err){console.warn('Could not restore saved checklist:',err);}
function save(){try{localStorage.setItem(KEY(),JSON.stringify({schemaVersion:1,edition:'v0.7',phase:model.phase,completed:model.completed,compact:model.compact}));}catch(err){ console.warn('Local storage unavailable:',err); }}
// Commit migrated phase numbering immediately so it cannot remap a second time.
save();
function switchAircraft(next){
 if(!AIRCRAFT[next]||next===aircraft)return;
 guideView='item';returnToItem=null;
 save();aircraft=next;data=AIRCRAFT[aircraft];all=data.phases.flatMap(p=>p.items);IDs=new Set(all.map(x=>x.id));smart=loadSmart();
 model={phase:0,completed:{},compact:model.compact,selected:null};
 try{
  archivePreviousProgress();
  const saved=JSON.parse(localStorage.getItem(KEY())||'null');
  if(saved){model.phase=Number.isInteger(saved.phase)?Math.max(0,Math.min(data.phases.length-1,migratedPhase(saved))):0;model.completed=legacyCompleted(saved);model.compact=!!saved.compact;}
  if(!localStorage.getItem(EDITION_KEY()))localStorage.setItem(EDITION_KEY(),'1');
 }catch(e){console.warn('Could not load aircraft progress',e);}
 $('searchInput').value='';localStorage.setItem('flightcomp.aircraft.v04',aircraft);if(!visiblePhaseIndex(model.phase)&&!smart.showSkipped)model.phase=startIndex();save();render();
}
$('aircraftSelect').value=aircraft;
$('aircraftSelect').addEventListener('change',e=>switchAircraft(e.target.value));
function element(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;}
function completedCount(p){const ix=data.phases.indexOf(p);return visibleItemsForPhase(ix).filter(i=>model.completed[i.id]).length;}
function setPhase(i){if(i<0||i>=data.phases.length||(!visiblePhaseIndex(i)&&!smart.showSkipped))return;model.phase=i;model.selected=null;$('searchInput').value='';save();render();}
function toggle(id,checked){if(!IDs.has(id)&&!Object.values(smartAddedItems()).flat().some(x=>x.id===id))return;if(checked)model.completed[id]=true;else delete model.completed[id];save();render();}
// Batch actions operate on every item in the selected phase, even when search is active.
function batchUpdate(scope,checked){
 const items=scope==='all'?activeItems():visibleItemsForPhase(model.phase);
 const already=items.filter(item=>!!model.completed[item.id]===checked).length;
 if(already===items.length)return;
 if(scope==='all'){
  const label=checked?'전체 체크리스트를 완료 표시할까요?':'전체 체크리스트의 완료 표시를 모두 해제할까요?';
  if(!confirm(`${label}\n(${items.length}개 항목에 적용됩니다.)`))return;
 }
 for(const item of items){if(checked)model.completed[item.id]=true;else delete model.completed[item.id];}
 save();render();
}
function render(){
 syncSmartControls();document.body.classList.toggle('compact',model.compact);
 document.body.classList.toggle('details-open',!!model.selected);
 $('detailPanel').setAttribute('aria-hidden',model.selected?'false':'true');
 $('aircraftSelect').value=aircraft;document.title=(aircraft==='737'?'737 MAX':'A320neo')+' | Flight Companion';document.querySelector('.eyebrow').textContent='MICROSOFT FLIGHT SIMULATOR 2024 / '+(aircraft==='737'?'ASOBO 737 MAX':'INIBUILDS A320neo V2');
 const phase=data.phases[model.phase];$('phaseTitle').textContent=phase.name;$('phaseSubtitle').textContent=phase.subtitle; $('referenceSource').textContent=sourceLabel(); $('referenceWarning').textContent=sourceWarning();
 $('compactBtn').innerHTML=model.compact?'▣ <span>Normal</span>':'▤ <span>Compact</span>';
 const nav=$('phaseList');nav.replaceChildren();
 data.phases.forEach((p,pi)=>{if(!visiblePhaseIndex(pi)&&!smart.showSkipped)return;const btn=element('button','phase'+(pi===model.phase?' active':'')+(!visiblePhaseIndex(pi)?' skipped':''));btn.type='button';const n=element('span','num',String(pi+1).padStart(2,'0'));const title=element('span','ptext',p.name);btn.append(n,title);if(visiblePhaseIndex(pi)&&completedCount(p)===itemsForPhase(pi).length)btn.append(element('span','pcheck','✓'));btn.addEventListener('click',()=>setPhase(pi));nav.append(btn);});
 const active=activeItems();const count=active.filter(x=>model.completed[x.id]).length;const pct=active.length?Math.round(100*count/active.length):0;$('totalCount').textContent=`${count} / ${active.length}`;$('totalBar').style.width=`${pct}%`;$('completionPercent').textContent=`${pct}%`;
 $('phaseProgress').textContent=`Phase ${model.phase+1} / ${data.phases.length} · ${completedCount(phase)} / ${visibleItemsForPhase(model.phase).length} complete`;
 const query=$('searchInput').value.trim().toLocaleLowerCase();const list=visibleItemsForPhase(model.phase).filter(i=>!query||[i.name,i.target,i.location,i.detail].join(' ').toLocaleLowerCase().includes(query));
 $('checkPhaseBtn').disabled=completedCount(phase)===visibleItemsForPhase(model.phase).length;
 $('uncheckPhaseBtn').disabled=completedCount(phase)===0;
 $('checkAllBtn').disabled=count===active.length;
 $('uncheckAllBtn').disabled=count===0;
 $('itemCount').textContent=`(${list.length})`;const holder=$('items');holder.replaceChildren();
 for(const item of list){
  const card=element('div','item'+(model.completed[item.id]?' done':''));
  const row=element('button','item-toggle');row.type='button';
  row.setAttribute('role','checkbox');row.setAttribute('aria-checked',String(!!model.completed[item.id]));
  row.setAttribute('aria-label',item.name + ', target '+item.target + (model.completed[item.id]?' — checked':' — unchecked'));
  const check=element('span','visual-check');check.setAttribute('aria-hidden','true');check.textContent=model.completed[item.id]?'✓':'';
  const body=element('span','item-body');
  // Keep target state visually attached to the item title, not in a distant right column.
  const left=element('span','item-left');
  const heading=element('span','item-heading');
  heading.append(element('span','item-name',item.name));
  const targetText=String(item.target ?? '').trim();
  if(targetText){heading.append(element('span','item-target',targetText));}
  left.append(heading,element('span','item-location',(item.kind==='CHECK'?'CHECK · ':'FLOW · ')+item.location));
  body.append(left);row.append(check,body);
  row.addEventListener('click',()=>toggle(item.id,!model.completed[item.id]));
  const info=element('button','item-info','i');info.type='button';info.title='View procedure details';
  info.setAttribute('aria-label','Show details for '+item.name);
  info.setAttribute('aria-expanded',String(model.selected===item.id));
  if(model.selected===item.id)info.classList.add('active');
  info.addEventListener('click',()=>{guideView='item';returnToItem=null;model.selected=model.selected===item.id?null:item.id;render();});
  card.append(row,info);holder.append(card);
 }
 if(!list.length)holder.append(element('p','detail-empty','검색 결과가 없습니다.'));
 $('prevBtn').disabled=isGA(model.phase)||model.phase<=(!smart.showSkipped?startIndex():0);$('nextBtn').disabled=isGA(model.phase)||model.phase===normalLastIndex();
 renderDetails();
}
// v0.6 guide: independent presentation layer, never modifies checklist or its stored IDs.
function guideBox(title,body,cls=''){
 const section=element('section','guide-card '+cls);
 section.append(element('h3','guide-card-title',title));
 if(Array.isArray(body)){
  const list=element('ol','guide-steps');for(const value of body){list.append(element('li',null,value));}section.append(list);
 }else{section.append(element('p',null,body));}
 return section;
}
function guideButton(label,action,cls='guide-pill'){
 const btn=element('button',cls,label);btn.type='button';btn.addEventListener('click',action);return btn;
}
function openGuide(view){guideView=view;returnToItem=null;model.selected='__'+view+'__';render();}
function renderItemGuide(target,item){
 target.append(element('div','detail-kicker',item.source_page?'PDF REFERENCE ITEM · SIMULATION ONLY':'SUPPLEMENTAL PROCEDURE GUIDE · NOT FROM UPLOADED PDF'),element('h2',null,item.name),element('div','detail-target',item.target));
 const mapping=window.FC_GUIDE.computerItems[aircraft][item.id];
 const proc=window.FC_GUIDE.procedures[aircraft][item.id];
 // Only source-provided textual location: inaccurate conceptual diagrams removed.
 if(!item.source_page)target.append(guideBox('GENERAL LOCATION (TEXT)',item.location||'Refer to cockpit system displays.'));
 if(!item.source_page)target.append(element('div','guide-section-title','ACTION SEQUENCE'));
 const steps=proc||[item.detail];
 if(item.source_page){
   target.append(guideBox(`SOURCE · PDF PAGE ${item.source_page}`,`${item.name} — ${item.target}`, 'guide-keypath'));
   target.append(guideBox('REFERENCE NOTE',item.note||sourceWarning(),'guide-warning'));
   target.append(element('p','guide-small-note','출처 PDF의 항목명/목표 상태를 정리했습니다. 원문에 없는 스위치의 실제 위치나 상세 조작법은 추정하지 않았습니다.'));
 }else{
   target.append(guideBox(proc?'STEP-BY-STEP':'CHECKLIST REFERENCE',steps,proc?'':'guide-generic'));
   if(!proc)target.append(element('p','guide-small-note','기존 버전에서 유지된 시뮬레이션용 가이드이며 업로드한 PDF에는 이 항목이 없을 수 있습니다.'));
 }
 if(mapping){
  const guides=window.FC_GUIDE.computers[aircraft];const page=Math.max(0,guides.findIndex(g=>g.key===mapping));
  target.append(guideButton('▦  Open relevant '+(aircraft==='737'?'FMC':'MCDU')+' page  →',()=>{
   returnToItem=item.id;guidePage[aircraft]=page;guideView='computer';model.selected='__computer__';render();
  },'guide-open-button'));
 }
 if(item.note&&!item.source_page)target.append(guideBox('AIRCRAFT / VERSION NOTE',item.note,'guide-warning'));
 target.append(element('p','guide-disclaimer','Simulation only · Manual guide · No live switch sensing. Not a certified flight checklist.'));
}
function renderComputerGuide(target){
 const pages=window.FC_GUIDE.computers[aircraft], pi=Math.max(0,Math.min(guidePage[aircraft],pages.length-1)), current=pages[pi];
 target.append(element('div','detail-kicker',aircraft==='737'?'BOEING 737 MAX · FMC':'AIRBUS A320neo V2 · MCDU'));
 target.append(element('h2',null,'Flight Computer Guide'));
 target.append(element('p','guide-lead','별도 제작된 FMC/MCDU 참고 가이드입니다(업로드된 체크리스트 PDF의 원문이 아님). 수치는 현재 항공편의 EFB, 운항계획서 및 차트를 따르세요.'));
 target.append(element('p','guide-swipe-hint','← 페이지 버튼을 좌우로 스크롤해 다른 입력 단계를 볼 수 있어요 →'));
 const strip=element('div','guide-page-strip');
 pages.forEach((page,i)=>strip.append(guideButton(page.title.replace(/^\d+ · /,''),()=>{guidePage[aircraft]=i;renderDetails();},'guide-page-btn'+(i===pi?' active':''))));
 target.append(strip);
 const stephead=element('div','guide-section-title',`PAGE ${pi+1} / ${pages.length} · ${current.title}`);target.append(stephead);
 target.append(guideBox('BUTTON PATH',current.page,'guide-keypath'));
 target.append(guideBox('INPUT ORDER',current.steps));
 target.append(guideBox('VERIFY',current.verify,'guide-success'));
 target.append(guideBox('IMPORTANT',current.tip,'guide-warning'));
 const controls=element('div','guide-nav');
 const prev=guideButton('← Previous',()=>{guidePage[aircraft]=pi-1;renderDetails();});prev.disabled=pi===0;
 const next=guideButton('Next →',()=>{guidePage[aircraft]=pi+1;renderDetails();});next.disabled=pi===pages.length-1;
 controls.append(prev,next);target.append(controls);
 if(returnToItem){target.append(guideButton('← Back to checklist item',()=>{model.selected=returnToItem;guideView='item';returnToItem=null;render();},'guide-open-button'));}
 const sources=element('div','guide-source-links');sources.append(element('div','guide-section-title','REFERENCE MATERIAL'));for(const source of window.FC_GUIDE.sources[aircraft]){const link=element('a','guide-source',source.title+' ↗');link.href=source.url;link.target='_blank';link.rel='noopener noreferrer';sources.append(link);}target.append(sources);
 target.append(element('p','guide-disclaimer','Button labels and available automation can differ from the installed aircraft version. Cross-check the actual FMC/MCDU.'));
}
function renderDetails(){
 const target=$('detailContent');target.replaceChildren();
 if(guideView==='computer'&&model.selected){renderComputerGuide(target);return;}
 const item=all.concat(Object.values(smartAddedItems()).flat()).find(x=>x.id===model.selected);
 if(!item){const e=element('div','detail-empty');e.append(element('span','big-icon','ⓘ'),element('h3',null,'Cockpit Guide'),element('p',null,'항목의 ⓘ 를 누르면 텍스트 조작 순서를 볼 수 있습니다. 상단 FMC/MCDU 버튼에서 입력 가이드를 바로 열 수 있습니다.')); target.append(e);return;}
 renderItemGuide(target,item);
}
function showModal(title,html){$('modalTitle').textContent=title;$('modalBody').innerHTML=html;$('modalOverlay').classList.remove('hidden');}
function closeModal(){$('modalOverlay').classList.add('hidden');}
function settings(){showModal('Settings',`<p><strong>Active aircraft: ${data.aircraft}</strong></p><p>현재 진행 상태는 이 기기의 브라우저/PWA 로컬 저장소에 자동 저장됩니다. Windows와 iPad 상태는 자동 동기화되지 않습니다.</p><div class="modal-buttons"><button id="exportBtn">↓ Export progress</button><button id="importBtn">↑ Import progress</button><button id="resetPhaseBtn">Reset this phase</button></div><hr><p class="warning">Reset all은 완료 표시를 모두 삭제합니다. 되돌리려면 미리 Export를 사용하세요.</p><button id="resetAllBtn">Reset all progress</button><hr><p>v0.7 — PDF-based phase/item rebuild (PMDG 737NG and FBW A32NX), clear enlarged target values, Smart Checklist and separate Go-Around. Existing storage and old progress archive preserved. No SimConnect.</p>`);
 $('exportBtn').onclick=exportProgress;$('importBtn').onclick=()=>$('importInput').click();$('resetPhaseBtn').onclick=()=>{if(confirm('현재 단계 체크를 모두 해제할까요?')){itemsForPhase(model.phase).forEach(i=>delete model.completed[i.id]);save();render();closeModal();}};
 $('resetAllBtn').onclick=()=>{if(confirm('전체 체크 상태를 초기화할까요?')){model.completed={};model.phase=startIndex();model.selected=null;save();render();closeModal();}};
}
function exportProgress(){const payload={format:'MSFS-FlightCompanion-progress',aircraft,version:1,exportedAt:new Date().toISOString(),completed:model.completed,phase:model.phase,edition:'v0.7'};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=(aircraft==='737'?'737-max':'a320neo')+'-progress.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('importInput').addEventListener('change',async e=>{const file=e.target.files?.[0];e.target.value='';if(!file)return;try{if(file.size>100000)throw Error('File too large');const json=JSON.parse(await file.text());if(!['MSFS737MAX-checklist-progress','MSFS-FlightCompanion-progress'].includes(json.format)||(json.format==='MSFS737MAX-checklist-progress'&&aircraft!=='737')||(json.format==='MSFS-FlightCompanion-progress'&&json.aircraft!==aircraft)||json.version!==1||!json.completed||typeof json.completed!=='object')throw Error('Unsupported progress file');if(!confirm('현재 저장 상태를 불러온 파일로 교체할까요?'))return;model.completed=legacyCompleted(json);model.phase=Number.isInteger(json.phase)?Math.max(0,Math.min(data.phases.length-1,json.edition==='v0.7'?json.phase:(OLD_PHASE_MAP[aircraft][json.phase]??0))):0;model.selected=null;save();render();closeModal();}catch(err){alert('Could not import progress: '+err.message);}});
$('profileDoneBtn').addEventListener('click',()=>{$('profileDetails').open=false;});
$('gaBtn').addEventListener('click',()=>{if(!smart.goAround){smart.goAround=true;model.phase=gaIndex();}else{smart.goAround=false;model.phase=approachIndex();}model.selected=null;saveSmart();save();render();});$('startSelect').addEventListener('change',e=>{smart.start=e.target.value;changeProfile();});$('approachSelect').addEventListener('change',e=>{smart.approach=e.target.value;changeProfile();});$('showSkipped').addEventListener('change',e=>{smart.showSkipped=e.target.checked;changeProfile();});
$('checkPhaseBtn').onclick=()=>batchUpdate('phase',true);$('uncheckPhaseBtn').onclick=()=>batchUpdate('phase',false);$('checkAllBtn').onclick=()=>batchUpdate('all',true);$('uncheckAllBtn').onclick=()=>batchUpdate('all',false);$('prevBtn').onclick=()=>setPhase(Math.max(smart.showSkipped?0:startIndex(),model.phase-1));$('nextBtn').onclick=()=>setPhase(Math.min(normalLastIndex(),model.phase+1));$('searchInput').addEventListener('input',render);$('closeDetail').onclick=()=>{model.selected=null;returnToItem=null;guideView='item';render();};$('detailBackdrop').onclick=()=>{model.selected=null;returnToItem=null;guideView='item';render();};$('fmcGuideBtn').onclick=()=>openGuide('computer');$('compactBtn').onclick=()=>{model.compact=!model.compact;save();render();};$('settingsBtn').onclick=settings;$('helpBtn').onclick=()=>showModal('Keyboard shortcuts','<p><code>←</code> Previous phase &nbsp; <code>→</code> Next phase</p><p><code>M</code> Toggle compact mode &nbsp; <code>/</code> Focus search</p><p><code>Esc</code> Close dialog or details</p><p>항목 행 어디든 클릭하면 체크/해제됩니다. 오른쪽 ⓘ 버튼은 상세 설명을 엽니다. 상태는 자동 저장됩니다.</p>');$('closeModal').onclick=closeModal;$('modalOverlay').onclick=e=>{if(e.target===$('modalOverlay'))closeModal();};
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.altKey||e.metaKey)return;const input=e.target instanceof HTMLInputElement;const modalOpen=!$('modalOverlay').classList.contains('hidden');if(e.key==='Escape'){closeModal();model.selected=null;returnToItem=null;guideView='item';render();return;}if(input||modalOpen)return;if(e.key==='ArrowRight'){e.preventDefault();setPhase(model.phase+1);}else if(e.key==='ArrowLeft'){e.preventDefault();setPhase(Math.max(smart.showSkipped?0:startIndex(),model.phase-1));}else if(e.key.toLowerCase()==='m'){model.compact=!model.compact;save();render();}else if(e.key==='/'){e.preventDefault();$('searchInput').focus();}});
if(!visiblePhaseIndex(model.phase)&&!smart.showSkipped){model.phase=startIndex();save();}render();
})();
