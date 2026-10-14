(() => {
'use strict';
const AIRCRAFT={ '737': window.CHECKLIST, 'a320': window.A320_CHECKLIST };
let aircraft=localStorage.getItem('flightcomp.aircraft.v04')==='a320'?'a320':'737';
let data=AIRCRAFT[aircraft];
if(!data || !Array.isArray(data.phases)) { alert('Could not load checklist-data.js'); return; }
const LEGACY_KEY='msfs737max.checklist.v0.2';
const KEY=()=>aircraft==='737'?LEGACY_KEY:'flightcomp.a320.progress.v04';
const PREV_KEY='msfs737max.checklist.v0.1';
const $=id=>document.getElementById(id);
let all=data.phases.flatMap(p=>p.items);
let IDs=new Set(all.map(x=>x.id));
let model={phase:0,completed:{},compact:false,selected:null};
try {const saved=JSON.parse(localStorage.getItem(KEY())||(aircraft==='737'?localStorage.getItem(PREV_KEY):null)||'null'); if(saved && typeof saved==='object') {
 model.phase=Number.isInteger(saved.phase)?Math.max(0,Math.min(data.phases.length-1,saved.phase)):0;
 model.compact=!!saved.compact;
 if(saved.completed && typeof saved.completed==='object') for(const [id,v] of Object.entries(saved.completed)) if(IDs.has(id)&&v===true) model.completed[id]=true;
}}catch(err){ console.warn('Could not restore saved checklist:',err); }
function save(){try{localStorage.setItem(KEY(),JSON.stringify({schemaVersion:1,phase:model.phase,completed:model.completed,compact:model.compact}));}catch(err){ console.warn('Local storage unavailable:',err); }}
function switchAircraft(next){
 if(!AIRCRAFT[next]||next===aircraft)return;
 save();aircraft=next;data=AIRCRAFT[aircraft];all=data.phases.flatMap(p=>p.items);IDs=new Set(all.map(x=>x.id));
 model={phase:0,completed:{},compact:model.compact,selected:null};
 try{const saved=JSON.parse(localStorage.getItem(KEY())||'null');if(saved){model.phase=Number.isInteger(saved.phase)?Math.max(0,Math.min(data.phases.length-1,saved.phase)):0;if(saved.completed)for(const [id,v] of Object.entries(saved.completed))if(IDs.has(id)&&v===true)model.completed[id]=true;}}catch(err){console.warn(err);}
 $('searchInput').value='';localStorage.setItem('flightcomp.aircraft.v04',aircraft);save();render();
}
$('aircraftSelect').value=aircraft;
$('aircraftSelect').addEventListener('change',e=>switchAircraft(e.target.value));
function element(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;}
function completedCount(p){return p.items.filter(i=>model.completed[i.id]).length;}
function setPhase(i){if(i<0||i>=data.phases.length)return;model.phase=i;model.selected=null;$('searchInput').value='';save();render();}
function toggle(id,checked){if(!IDs.has(id))return;if(checked)model.completed[id]=true;else delete model.completed[id];save();render();}
// Batch actions operate on every item in the selected phase, even when search is active.
function batchUpdate(scope,checked){
 const items=scope==='all'?all:data.phases[model.phase].items;
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
 document.body.classList.toggle('compact',model.compact);
 document.body.classList.toggle('details-open',!!model.selected);
 $('detailPanel').setAttribute('aria-hidden',model.selected?'false':'true');
 $('aircraftSelect').value=aircraft;document.title=(aircraft==='737'?'737 MAX':'A320neo')+' | Flight Companion';
 const phase=data.phases[model.phase];$('phaseTitle').textContent=phase.name;$('phaseSubtitle').textContent=phase.subtitle;
 $('compactBtn').innerHTML=model.compact?'▣ <span>Normal</span>':'▤ <span>Compact</span>';
 const nav=$('phaseList');nav.replaceChildren();
 data.phases.forEach((p,pi)=>{const btn=element('button','phase'+(pi===model.phase?' active':''));btn.type='button';const n=element('span','num',String(pi+1).padStart(2,'0'));const title=element('span','ptext',p.name);btn.append(n,title);if(completedCount(p)===p.items.length)btn.append(element('span','pcheck','✓'));btn.addEventListener('click',()=>setPhase(pi));nav.append(btn);});
 const count=Object.keys(model.completed).length;const pct=Math.round(100*count/all.length);$('totalCount').textContent=`${count} / ${all.length}`;$('totalBar').style.width=`${pct}%`;$('completionPercent').textContent=`${pct}%`;
 $('phaseProgress').textContent=`Phase ${model.phase+1} / ${data.phases.length} · ${completedCount(phase)} / ${phase.items.length} complete`;
 const query=$('searchInput').value.trim().toLocaleLowerCase();const list=phase.items.filter(i=>!query||[i.name,i.target,i.location,i.detail].join(' ').toLocaleLowerCase().includes(query));
 $('checkPhaseBtn').disabled=completedCount(phase)===phase.items.length;
 $('uncheckPhaseBtn').disabled=completedCount(phase)===0;
 $('checkAllBtn').disabled=count===all.length;
 $('uncheckAllBtn').disabled=count===0;
 $('itemCount').textContent=`(${list.length})`;const holder=$('items');holder.replaceChildren();
 for(const item of list){
  const card=element('div','item'+(model.completed[item.id]?' done':''));
  const row=element('button','item-toggle');row.type='button';
  row.setAttribute('role','checkbox');row.setAttribute('aria-checked',String(!!model.completed[item.id]));
  row.setAttribute('aria-label',item.name + (model.completed[item.id]?' — checked':' — unchecked'));
  const check=element('span','visual-check');check.setAttribute('aria-hidden','true');check.textContent=model.completed[item.id]?'✓':'';
  const body=element('span','item-body');
  const left=element('span','item-left');left.append(element('span','item-name',item.name),element('span','item-location',(item.kind==='CHECK'?'CHECK · ':'FLOW · ')+item.location));
  const right=element('span','item-target',item.target);
  body.append(left,right);row.append(check,body);
  row.addEventListener('click',()=>toggle(item.id,!model.completed[item.id]));
  const info=element('button','item-info','i');info.type='button';info.title='View procedure details';
  info.setAttribute('aria-label','Show details for '+item.name);
  info.setAttribute('aria-expanded',String(model.selected===item.id));
  if(model.selected===item.id)info.classList.add('active');
  info.addEventListener('click',()=>{model.selected=model.selected===item.id?null:item.id;render();});
  card.append(row,info);holder.append(card);
 }
 if(!list.length)holder.append(element('p','detail-empty','검색 결과가 없습니다.'));
 $('prevBtn').disabled=model.phase===0;$('nextBtn').disabled=model.phase===data.phases.length-1;
 renderDetails();
}
function renderDetails(){const target=$('detailContent');target.replaceChildren();const item=all.find(x=>x.id===model.selected);if(!item){const e=element('div','detail-empty');e.append(element('span','big-icon','ⓘ'),element('h3',null,'Procedure guide'),element('p',null,'항목 오른쪽의 ⓘ 버튼으로 상세 설명을 열 수 있습니다.')); target.append(e);return;}
 target.append(element('div','detail-kicker','PROCEDURE REFERENCE'),element('h2',null,item.name),element('div','detail-target',item.target));
 const block1=element('div','detail-box');block1.append(element('div','heading','COCKPIT LOCATION'),element('p',null,item.location));
 const block2=element('div','detail-box');block2.append(element('div','heading','SIM PROCEDURE'),element('p',null,item.detail));
 const block3=element('div','detail-box');block3.append(element('div','heading','SIMCONNECT MAPPING'),element('p',null,'Reserved field (unmapped). Manual checklist only; never assumes aircraft state.'));target.append(block1,block2);if(item.note){const warn=element('div','detail-box');warn.append(element('div','heading','ASOBO / PROCEDURE NOTE'),element('p',null,item.note));target.append(warn);}target.append(block3);
}
function showModal(title,html){$('modalTitle').textContent=title;$('modalBody').innerHTML=html;$('modalOverlay').classList.remove('hidden');}
function closeModal(){$('modalOverlay').classList.add('hidden');}
function settings(){showModal('Settings',`<p><strong>Active aircraft: ${data.aircraft}</strong></p><p>현재 진행 상태는 이 기기의 브라우저/PWA 로컬 저장소에 자동 저장됩니다. Windows와 iPad 상태는 자동 동기화되지 않습니다.</p><div class="modal-buttons"><button id="exportBtn">↓ Export progress</button><button id="importBtn">↑ Import progress</button><button id="resetPhaseBtn">Reset this phase</button></div><hr><p class="warning">Reset all은 완료 표시를 모두 삭제합니다. 되돌리려면 미리 Export를 사용하세요.</p><button id="resetAllBtn">Reset all progress</button><hr><p>v0.4 — Multi-aircraft manual-only procedure reference, informed by Boeing 737/MAX material. Airline/aircraft differences exist; not validated switch-by-switch in Asobo. No SimConnect connection.</p>`);
 $('exportBtn').onclick=exportProgress;$('importBtn').onclick=()=>$('importInput').click();$('resetPhaseBtn').onclick=()=>{if(confirm('현재 단계 체크를 모두 해제할까요?')){data.phases[model.phase].items.forEach(i=>delete model.completed[i.id]);save();render();closeModal();}};
 $('resetAllBtn').onclick=()=>{if(confirm('전체 체크 상태를 초기화할까요?')){model.completed={};model.phase=0;model.selected=null;save();render();closeModal();}};
}
function exportProgress(){const payload={format:'MSFS-FlightCompanion-progress',aircraft,version:1,exportedAt:new Date().toISOString(),completed:model.completed,phase:model.phase};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=(aircraft==='737'?'737-max':'a320neo')+'-progress.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('importInput').addEventListener('change',async e=>{const file=e.target.files?.[0];e.target.value='';if(!file)return;try{if(file.size>100000)throw Error('File too large');const json=JSON.parse(await file.text());if(!['MSFS737MAX-checklist-progress','MSFS-FlightCompanion-progress'].includes(json.format)||(json.format==='MSFS737MAX-checklist-progress'&&aircraft!=='737')||(json.format==='MSFS-FlightCompanion-progress'&&json.aircraft!==aircraft)||json.version!==1||!json.completed||typeof json.completed!=='object')throw Error('Unsupported progress file');if(!confirm('현재 저장 상태를 불러온 파일로 교체할까요?'))return;model.completed={};for(const [id,val] of Object.entries(json.completed))if(IDs.has(id)&&val===true)model.completed[id]=true;model.phase=Number.isInteger(json.phase)?Math.max(0,Math.min(data.phases.length-1,json.phase)):0;model.selected=null;save();render();closeModal();}catch(err){alert('Could not import progress: '+err.message);}});
$('checkPhaseBtn').onclick=()=>batchUpdate('phase',true);$('uncheckPhaseBtn').onclick=()=>batchUpdate('phase',false);$('checkAllBtn').onclick=()=>batchUpdate('all',true);$('uncheckAllBtn').onclick=()=>batchUpdate('all',false);$('prevBtn').onclick=()=>setPhase(model.phase-1);$('nextBtn').onclick=()=>setPhase(model.phase+1);$('searchInput').addEventListener('input',render);$('closeDetail').onclick=()=>{model.selected=null;render();};$('compactBtn').onclick=()=>{model.compact=!model.compact;save();render();};$('settingsBtn').onclick=settings;$('helpBtn').onclick=()=>showModal('Keyboard shortcuts','<p><code>←</code> Previous phase &nbsp; <code>→</code> Next phase</p><p><code>M</code> Toggle compact mode &nbsp; <code>/</code> Focus search</p><p><code>Esc</code> Close dialog or details</p><p>항목 행 어디든 클릭하면 체크/해제됩니다. 오른쪽 ⓘ 버튼은 상세 설명을 엽니다. 상태는 자동 저장됩니다.</p>');$('closeModal').onclick=closeModal;$('modalOverlay').onclick=e=>{if(e.target===$('modalOverlay'))closeModal();};
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.altKey||e.metaKey)return;const input=e.target instanceof HTMLInputElement;const modalOpen=!$('modalOverlay').classList.contains('hidden');if(e.key==='Escape'){closeModal();model.selected=null;render();return;}if(input||modalOpen)return;if(e.key==='ArrowRight'){e.preventDefault();setPhase(model.phase+1);}else if(e.key==='ArrowLeft'){e.preventDefault();setPhase(model.phase-1);}else if(e.key.toLowerCase()==='m'){model.compact=!model.compact;save();render();}else if(e.key==='/'){e.preventDefault();$('searchInput').focus();}});
render();
})();
