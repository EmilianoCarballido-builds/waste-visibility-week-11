export const CRITICAL = 20;
export const fixtures = {
  declining: {name:'Baja gradual', levels:[68,62,56,50,44,38,32], reference:31, age:0},
  low: {name:'Nivel bajo', levels:[43,39,35,31,27,23,19], reference:18, age:0},
  stable: {name:'Nivel estable', levels:[61,60,61,60,61,60,61], reference:60, age:0},
  refill: {name:'Recarga reciente', levels:[35,30,25,20,75,73,70], reference:69, age:0},
  stale: {name:'Sensor sin señal', levels:[68,62,56,50,44,38,32], reference:19, age:180},
  missed: {name:'Lectura equivocada', levels:[70,69,68,67,66,65,64], reference:15, age:0}
};
export function readings(key, now=Date.now()) {
  const f=fixtures[key]; if(!f) throw Error('Escenario inválido');
  return f.levels.map((level,i)=>({level,time:now-(f.levels.length-1-i)*3600000-f.age*60000}));
}
export function fitTrend(points, now=Date.now()) {
  if(points.length<4 || points.some(p=>!Number.isFinite(p.level)||p.level<0||p.level>100||!Number.isFinite(p.time))) return {ok:false,reason:'Datos insuficientes o inválidos'};
  if(now-points.at(-1).time>60*60000) return {ok:false,reason:'Lectura antigua: verifica por separado'};
  if(points.some((p,i)=>i>0&&(p.time<=points[i-1].time||p.level-points[i-1].level>15))) return {ok:false,reason:'Recarga o tiempos inválidos: espera un nuevo historial'};
  const xs=points.map(p=>(p.time-points[0].time)/3600000), ys=points.map(p=>p.level), n=xs.length;
  const mx=xs.reduce((a,b)=>a+b)/n,my=ys.reduce((a,b)=>a+b)/n;
  const slope=xs.reduce((s,x,i)=>s+(x-mx)*(ys[i]-my),0)/xs.reduce((s,x)=>s+(x-mx)**2,0);
  const intercept=my-slope*mx;
  const rmse=Math.sqrt(xs.reduce((s,x,i)=>s+(ys[i]-(intercept+slope*x))**2,0)/n);
  return {ok:true,n,slope,intercept,rmse,prediction:Math.max(0,Math.min(100,intercept+slope*(xs.at(-1)+6)))};
}
export function warning(points, now=Date.now()) {
  const last=points.at(-1); return !!last&&now-last.time<=3600000&&last.level<=CRITICAL;
}
export function classify(reference, alerted) {
  const low=reference<=CRITICAL;
  return {low,missed:low&&!alerted,falseAlarm:!low&&alerted};
}
export const offers=[
  {id:'support',name:'Orientación del organizador',cost:0,available:true,detail:'Acordar una verificación segura desde el suelo.'},
  {id:'refill',name:'Recarga comunitaria de ejemplo',cost:120,available:true,detail:'Consultar disponibilidad y costo reales antes de decidir.'},
  {id:'delivery',name:'Entrega de ejemplo',cost:300,available:false,detail:'Sin disponibilidad en este escenario.'}
];
export function matchOffers(budget, needsWater=false) {
  if(!Number.isFinite(budget)||budget<0||budget>10000) return [];
  return offers.filter(o=>o.available&&o.cost<=budget&&(!needsWater||o.id!=='support'));
}
export function validateEntry(raw) {
  const allowed={house:['H01','H02','H03','H04','H05','H06'],condition:['manual','digital'],useful:['yes','no'],alerted:['yes','no'],disruption:['yes','no'],supply:['same','changed']};
  for(const [k,v] of Object.entries(allowed)) if(!v.includes(raw[k])) throw Error('Selecciona una opción válida: '+k);
  const result={...raw};
  for(const [key,max] of [['reference',100],['checking',240],['support',240]]) {
    if(raw[key]===null || raw[key]===undefined || (typeof raw[key]!=='string'&&typeof raw[key]!=='number') || String(raw[key]).trim()==='') throw Error('Completa el campo '+key+'; si no hubo tiempo, escribe 0.');
    const value=Number(raw[key]);
    if(!Number.isFinite(value)||value<0||value>max) throw Error('Revisa el valor de '+key+' (0–'+max+').');
    result[key]=value;
  }
  return result;
}
export function summarize(rows,condition) {
  const selected=rows.filter(r=>r.condition===condition);
  return selected.reduce((s,r)=>{const c=classify(r.reference,r.alerted==='yes');return {n:s.n+1,useful:s.useful+(r.useful==='yes'),minutes:s.minutes+r.checking+r.support,low:s.low+c.low,missed:s.missed+c.missed,falseAlarm:s.falseAlarm+c.falseAlarm,disruptions:s.disruptions+(r.disruption==='yes'),supplyChanges:s.supplyChanges+(r.supply==='changed')};},{n:0,useful:0,minutes:0,low:0,missed:0,falseAlarm:0,disruptions:0,supplyChanges:0});
}
