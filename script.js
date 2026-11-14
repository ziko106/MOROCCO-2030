var C={
casa:{t:"🏟️ Grand Stade Hassan II (115,000 Seats)",i:"World's largest stadium in Benslimane (38 km north of Casablanca), inspired by Moroccan Moussem tents.",s:"Stay: Maarif, Racine, Casa Marina or Mohammedia (15 min away).",f:"Eat: Marché Central seafood, Maâkouda & Ain Diab tea.",h:"Hack: Take the new RER Express train from Casa-Port or Rabat directly to the stadium."},
rabat:{t:"🏟️ Prince Moulay Abdellah Stadium (68,700 Seats)",i:"Brand-new futuristic arena in Morocco's capital connected to high-speed rail and tramway.",s:"Stay: Agdal (train station) or Hassan / Kasbah des Oudayas.",f:"Eat: Traditional Rfissa, Pastilla & Bouregreg Marina fish.",h:"Hack: Only 45 min from Casablanca by Al Boraq train."},
tanger:{t:"🏟️ Grand Stade Ibn Batouta (68,000 Seats)",i:"Expanded Mediterranean arena 35 min by ferry from Spain.",s:"Stay: Malabata (beachfront & TGV) or Marshan.",f:"Eat: Kalinti, Bocadillo de pescado & Café Hafa mint tea.",h:"Hack: Book Al Boraq tickets 2 weeks early on oncf-voyages.ma."},
kech:{t:"🏟️ Grand Stade de Marrakech (45,860 Seats)",i:"Modernized FIFA 2030 stadium linked to the new Al Boraq High-Speed Rail.",s:"Stay: Gueliz (modern hotels) or authentic Medina Riads.",f:"Eat: Tanjia Marrakchia, Mechoui Alley lamb & Jemaa el-Fna juice.",h:"Hack: Sunset dinner in Agafay Stone Desert (40 min away)."},
fes:{t:"🏟️ Complexe Sportif de Fès (55,800 Seats)",i:"Upgraded arena in Morocco's cultural capital with expanded fan zones.",s:"Stay: Ville Nouvelle or historic Riads near Bab Bou Jeloud.",f:"Eat: Fassi Chicken Pastilla, Harira & Khlii.",h:"Hack: Hire an official licensed badge guide for the Medina."},
agadir:{t:"🏟️ Stade Adrar Agadir (46,000 Seats)",i:"Renovated Atlantic stadium with cool summer ocean breezes.",s:"Stay: Agadir Marina, Founty or Taghazout (20 min north).",f:"Eat: Grilled port sardines, Berber Tagine & Argan Amlou.",h:"Hack: Agadir stays mild (22°C–26°C) even in June/July."}
};
var D={
taxi:{e:"Please turn on the taxi meter.",a:"عافاك خدام الكونتور",p:'"Afak khaddem l-compteur"'},
stad:{e:"Please take me to the Official Stadium Gate.",a:"عافاك ديني للملعب الرسمي",p:'"Afak dini l-malab rasmi"'},
price:{e:"No thank you, that is too expensive.",a:"لا شكرا، غالي بزاف عليا",p:'"La shukran, ghali bzzaf aliya"'},
food:{e:"I have a severe peanut/nut allergy.",a:"عندي حساسية خطيرة من الكاوكاو والمكسرات",p:'"Andi hassasiya khatira men l-kawkaw"'}
};
var curAr="عافاك خدام الكونتور";
function go(n){
var a=['cities','rail','scam','darija','trips','sos','culture','sahara','invest','visa','iberia','voice','weather','spots','planner','souk','medcard','matchday'];
for(var i=0;i<a.length;i++){
var el=document.getElementById('sec-'+a[i]);
var bt=document.getElementById('n-'+a[i]);
if(el)el.style.display=a[i]===n?'block':'none';
if(bt)bt.className=a[i]===n?'nb active':'nb';
}
}
function rcity(){
var s=document.getElementById('csel');var box=document.getElementById('ccard');
if(!s||!box)return;var c=C[s.value];
box.innerHTML='<h3>'+c.t+'</h3><p class="sm"><strong>🏗️ 2030:</strong> '+c.i+'</p><p class="sm"><strong>🏨 Stay:</strong> '+c.s+'</p><p class="sm"><strong>🥘 Food:</strong> '+c.f+'</p><div class="tip">💡 '+c.h+'</div>';
}
function cmad(){
var inp=document.getElementById('mad');if(!inp)return;var m=parseFloat(inp.value)||0;
document.getElementById('vu').innerText='$'+(m*0.10).toFixed(1);
document.getElementById('ve').innerText='€'+(m*0.092).toFixed(1);
document.getElementById('vg').innerText='£'+(m*0.078).toFixed(1);
}
function scard(k){
var d=D[k];curAr=d.a;
document.getElementById('fe').innerText=d.e;document.getElementById('fa').innerText=d.a;document.getElementById('fp').innerText=d.p;
}
function speak(txt){if('speechSynthesis' in window){var u=new SpeechSynthesisUtterance(txt);u.lang='ar-MA';window.speechSynthesis.speak(u);}}
function buildTrip(){
var dEl=document.getElementById('p-days');var rEl=document.getElementById('p-tier');var res=document.getElementById('p-res');if(!rEl||!res)return;
var d=dEl?(parseInt(dEl.value)||7):7;var r=parseInt(rEl.value)||130;var tot=d*r;
res.innerHTML='<h3>📅 '+d+'-Day Custom 2030 Budget</h3><div class="row"><span>🏨 Hotels & Rail/Day:</span><strong>$'+r+' / day</strong></div><div class="row" style="border:none"><span>💰 Estimated Total Trip:</span><strong>$'+tot+' USD (~'+(tot*10)+' MAD)</strong></div><div class="tip">💡 Book ONCF trains 14 days ahead & flights 3 months prior.</div>';
}
function calcSouk(){
var qEl=document.getElementById('s-quote');var res=document.getElementById('s-res');if(!qEl||!res)return;
var q=parseFloat(qEl.value)||0;var fair=Math.round(q*0.45);var start=Math.round(q*0.30);
res.innerHTML='<div class="row"><span>🎯 Target Fair Local Price:</span><strong>'+fair+' MAD ($'+(fair*0.1).toFixed(1)+')</strong></div><div class="row" style="border:none"><span>🤝 Your Opening Counter-Offer:</span><strong>'+start+' MAD ($'+(start*0.1).toFixed(1)+')</strong></div><div class="tip">🗣️ Show seller: <strong>"عطيني آخر ثمن عافاك"</strong> (Give me your final price please)</div>';
}
function buildMed(){
var card=document.getElementById('m-card');if(!card)return;var list=[];
if(document.getElementById('m-nut').checked)list.push('الفول السوداني والمكسرات (Peanuts/Nuts)');
if(document.getElementById('m-glu').checked)list.push('الغلوتين والقمح (Gluten/Wheat)');
if(document.getElementById('m-sea').checked)list.push('فواكه البحر (Shellfish/Seafood)');
if(document.getElementById('m-dia').checked)list.push('مرض السكري (Diabetes)');
var txt=list.length?list.join(' • '):'لا توجد حساسية (No Allergies Selected)';
card.innerHTML='<div class="fe">MEDICAL ALERT / تنبيه طبي</div><div class="fa" style="font-size:18px">'+txt+'</div><div class="fp">Call Emergency: 15 (Ambulance) • 19 (Police)</div>';
}
rcity();cmad();buildTrip();calcSouk();buildMed();
