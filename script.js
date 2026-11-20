var C = {
  casa: { t: "🏟️ Grand Stade Hassan II (115,000 Seats)", i: "World's largest stadium in Benslimane (38 km north of Casablanca).", s: "Maarif, Racine, Casa Marina or Mohammedia.", f: "Marché Central seafood, Maâkouda & Ain Diab tea.", h: "Take the RER Express train from Casa-Port or Rabat directly to the stadium." },
  rabat: { t: "🏟️ Prince Moulay Abdellah Stadium (68,700 Seats)", i: "Futuristic arena in Morocco's capital connected to high-speed rail.", s: "Agdal or Hassan / Kasbah des Oudayas.", f: "Traditional Rfissa, Pastilla & Bouregreg Marina fish.", h: "Only 45 min from Casablanca by Al Boraq train." },
  tanger: { t: "🏟️ Grand Stade Ibn Batouta (68,000 Seats)", i: "Expanded Mediterranean arena 35 min by ferry from Spain.", s: "Malabata or Marshan.", f: "Kalinti, Bocadillo de pescado & Café Hafa mint tea.", h: "Book Al Boraq tickets 2 weeks early on oncf-voyages.ma." },
  kech: { t: "🏟️ Grand Stade de Marrakech (45,860 Seats)", i: "Modernized FIFA 2030 stadium linked to Al Boraq High-Speed Rail.", s: "Gueliz or authentic Medina Riads.", f: "Tanjia Marrakchia, Mechoui Alley & Jemaa el-Fna juice.", h: "Sunset dinner in Agafay Stone Desert (40 min away)." },
  fes: { t: "🏟️ Complexe Sportif de Fès (55,800 Seats)", i: "Upgraded arena in Morocco's cultural capital.", s: "Ville Nouvelle or Riads near Bab Bou Jeloud.", f: "Fassi Chicken Pastilla, Harira & Khlii.", h: "Hire an official licensed badge guide for the Medina." },
  agadir: { t: "🏟️ Stade Adrar Agadir (46,000 Seats)", i: "Renovated Atlantic stadium with cool summer ocean breezes.", s: "Agadir Marina, Founty or Taghazout.", f: "Grilled port sardines, Berber Tagine & Argan Amlou.", h: "Agadir stays mild (22°C–26°C) even in June/July." }
};

var D = {
  taxi: { e: "Please turn on the taxi meter.", a: "عافاك خدام الكونتور", p: '"Afak khaddem l-compteur"' },
  stad: { e: "Please take me to the Official Stadium Gate.", a: "عافاك ديني للملعب الرسمي", p: '"Afak dini l-malab rasmi"' },
  price: { e: "No thank you, that is too expensive.", a: "لا شكرا، غالي بزاف عليا", p: '"La shukran, ghali bzzaf aliya"' },
  food: { e: "I have a severe peanut/nut allergy.", a: "عندي حساسية خطيرة من الكاوكاو والمكسرات", p: '"Andi hassasiya khatira men l-kawkaw"' }
};

var curAr = "عافاك خدام الكونتور";
var ids = "cities,rail,scam,darija,trips,sos,culture,sahara,invest,visa,iberia,voice,weather,spots,planner,souk,medcard,matchday,hammam,dress,car,night,photo,aitrip".split(",");

function go(n) {
  for (var i = 0; i < ids.length; i++) {
    var id = ids.at(i);
    var s = document.getElementById('sec-' + id);
    var b = document.getElementById('n-' + id);
    if (s) s.style.display = id === n ? 'block' : 'none';
    if (b) b.className = id === n ? 'nb active' : 'nb';
  }
}

function rcity() {
  var s = document.getElementById('csel'), b = document.getElementById('ccard');
  if (!s || !b) return;
  var c = Reflect.get(C, s.value);
  b.innerHTML = '<h3>' + c.t + '</h3><p class="sm"><strong>🏗️ 2030:</strong> ' + c.i + '</p><p class="sm"><strong>🏨 Stay:</strong> ' + c.s + '</p><p class="sm"><strong>🥘 Food:</strong> ' + c.f + '</p><div class="tip">💡 <strong>Hack:</strong> ' + c.h + '</div>';
}

function cmad() {
  var inp = document.getElementById('mad');
  if (!inp) return;
  var m = parseFloat(inp.value) || 0;
  document.getElementById('vu').innerText = '$' + (m * 0.10).toFixed(1);
  document.getElementById('ve').innerText = '€' + (m * 0.092).toFixed(1);
  document.getElementById('vg').innerText = '£' + (m * 0.078).toFixed(1);
}

function scard(k) {
  var d = Reflect.get(D, k);
  curAr = d.a;
  document.getElementById('fe').innerText = d.e;
  document.getElementById('fa').innerText = d.a;
  document.getElementById('fp').innerText = d.p;
}

function speak(t) {
  if ('speechSynthesis' in window) {
    var u = new SpeechSynthesisUtterance(t);
    u.lang = 'ar-MA';
    window.speechSynthesis.speak(u);
  }
}

function askAi(k) {
  var a = {
    stad: "<strong>🏟️ Stadium Access:</strong> Take the ONCF RER Express train from Casa-Port or Rabat directly to Grand Stade Hassan II (Benslimane) 3.5h before kickoff. Wait 25 min inside after full-time to skip crowds.",
    food: "<strong>🥘 Best Local Food:</strong> In Casablanca, eat fresh grilled fish at Marché Central. In Marrakech, try slow-cooked Tanjia near Place des Ferblantiers. On Fridays, order Royal Couscous (50–80 MAD).",
    sim: "<strong>📶 5G SIM & Wi-Fi:</strong> Grab a Maroc Telecom (IAM) or Orange SIM at the airport (~130 MAD for 20GB) or activate an Airalo eSIM before flying so you can order Careem/InDrive immediately.",
    bud: "<strong>💰 5-Day Budget Guide:</strong> Smart Fan (~$325 total for hostels, street food & trains), Comfort Fan (~$650 total for 4★ hotels & Al Boraq TGV), VIP Royal (~$1,500+ with private driver)."
  };
  var el = document.getElementById('ai-ans');
  if (el) el.innerHTML = Reflect.get(a, k);
}

function askAiFree() {
  var q = (document.getElementById('ai-q').value || '').toLowerCase();
  if (q.indexOf('food') > -1 || q.indexOf('eat') > -1 || q.indexOf('rest') > -1 || q.indexOf('casa') > -1) return askAi('food');
  if (q.indexOf('stad') > -1 || q.indexOf('train') > -1 || q.indexOf('rabat') > -1 || q.indexOf('match') > -1) return askAi('stad');
  if (q.indexOf('sim') > -1 || q.indexOf('wifi') > -1 || q.indexOf('net') > -1 || q.indexOf('5g') > -1) return askAi('sim');
  if (q.indexOf('bud') > -1 || q.indexOf('cost') > -1 || q.indexOf('price') > -1 || q.indexOf('day') > -1) return askAi('bud');
  var el = document.getElementById('ai-ans');
  if (el) el.innerHTML = "<strong>🤖 AI Tip:</strong> Use Al Boraq TGV between cities, always insist on the Petit Taxi meter ('Compteur'), and carry 20 & 50 MAD notes for local tips.";
}

function calcSplit() {
  var totEl = document.getElementById('sb-tot'), pplEl = document.getElementById('sb-ppl'), tipEl = document.getElementById('sb-tip'), res = document.getElementById('sb-res');
  if (!totEl || !pplEl || !tipEl || !res) return;
  var tot = parseFloat(totEl.value) || 0;
  var ppl = Math.max(parseInt(pplEl.value) || 1, 1);
  var tip = parseFloat(tipEl.value) || 0;
  var grand = tot * (1 + tip / 100);
  var perMad = grand / ppl;
  res.innerHTML =
    '<div class="row"><span>🧾 Total With Tip (' + tip + '%):</span><strong>' + Math.round(grand) + ' MAD</strong></div>' +
    '<div class="row" style="border:none"><span>👤 Each Person Pays:</span><strong style="color:#34D399">' + perMad.toFixed(1) + ' MAD ($' + (perMad * 0.10).toFixed(2) + ' / €' + (perMad * 0.092).toFixed(2) + ')</strong></div>';
}

function buildTrip() {
  var dE = document.getElementById('p-days'), rE = document.getElementById('p-tier'), res = document.getElementById('p-res');
  if (!rE || !res) return;
  var d = dE ? (parseInt(dE.value) || 7) : 7, r = parseInt(rE.value) || 130, tot = d * r;
  res.innerHTML = '<h3>📅 ' + d + '-Day Custom 2030 Budget</h3><div class="row"><span>🏨 Hotels & Rail/Day:</span><strong>$' + r + ' / day</strong></div><div class="row" style="border:none"><span>💰 Estimated Total Trip:</span><strong>$' + tot + ' USD (~' + (tot * 10) + ' MAD)</strong></div><div class="tip">💡 Book ONCF trains 14 days ahead & flights 3 months prior.</div>';
}

function calcSouk() {
  var qE = document.getElementById('s-quote'), res = document.getElementById('s-res');
  if (!qE || !res) return;
  var q = parseFloat(qE.value) || 0, f = Math.round(q * 0.45), st = Math.round(q * 0.30);
  res.innerHTML = '<div class="row"><span>🎯 Target Fair Local Price:</span><strong>' + f + ' MAD ($' + (f * 0.1).toFixed(1) + ')</strong></div><div class="row" style="border:none"><span>🤝 Your Opening Counter-Offer:</span><strong>' + st + ' MAD ($' + (st * 0.1).toFixed(1) + ')</strong></div><div class="tip">🗣️ Show seller: <strong>"عطيني آخر ثمن عافاك"</strong></div>';
}

function buildMed() {
  var c = document.getElementById('m-card');
  if (!c) return;
  var l = [];
  if (document.getElementById('m-nut').checked) l.push('الفول السوداني والمكسرات (Peanuts/Nuts)');
  if (document.getElementById('m-glu').checked) l.push('الغلوتين والقمح (Gluten/Wheat)');
  if (document.getElementById('m-sea').checked) l.push('فواكه البحر (Shellfish/Seafood)');
  if (document.getElementById('m-dia').checked) l.push('مرض السكري (Diabetes)');
  var txt = l.length ? l.join(' • ') : 'لا توجد حساسية (No Allergies Selected)';
  c.innerHTML = '<div class="fe">MEDICAL ALERT / تنبيه طبي</div><div class="fa" style="font-size:18px">' + txt + '</div><div class="fp">Call Emergency: 15 (Ambulance) • 19 (Police)</div>';
}

function genAiRoute() {
  var hub = document.getElementById('ai-hub'), dur = document.getElementById('ai-dur'), box = document.getElementById('ai-route-out');
  if (!hub || !dur || !box) return;
  var h = hub.value, d = dur.value;
  var r = {
    casa: "<strong>Day 1–2:</strong> Arrive Casablanca (CMN), Hassan II Mosque & Match at Grand Stade Hassan II.<br><strong>Day 3–4:</strong> Al Boraq TGV to Rabat (45m) — Oudayas & Moulay Abdellah Stadium.<br><strong>Day 5+:</strong> High-speed train to Marrakech & Agafay Desert dinner.",
    tanger: "<strong>Day 1–2:</strong> Ferry/Flight to Tangier, Café Hafa & Match at Ibn Batouta Stadium.<br><strong>Day 3–4:</strong> Day trip to Chefchaouen Blue Pearl (2h) & Asilah.<br><strong>Day 5+:</strong> Al Boraq TGV south to Rabat & Casablanca.",
    kech: "<strong>Day 1–2:</strong> Marrakech Medina, Jemaa el-Fna & Match at Grand Stade de Marrakech.<br><strong>Day 3–4:</strong> Agafay Stone Desert & Essaouira coast (2h30).<br><strong>Day 5+:</strong> Al Boraq train north to Casablanca or flight to Dakhla."
  };
  box.innerHTML = '<div class="card" style="margin-top:10px;margin-bottom:0"><h3>🗺️ Custom ' + d + '-Day Route from ' + hub.options.item(hub.selectedIndex).text + '</h3><p class="sm">' + Reflect.get(r, h) + '</p><div class="tip">🚄 <strong>Transport Tip:</strong> Use ONCF Al Boraq Rail Pass for city-to-stadium connections.</div></div>';
}
var appBox = document.querySelector('.app');
var endLine = document.querySelector('.app .line:last-of-type');
if (appBox && endLine && !document.getElementById('sec-iberia')) {
  var d11 = document.createElement('div'); d11.id = 'sec-iberia'; d11.className = 'sec'; d11.style.display = 'none';
  d11.innerHTML = '<div class="card"><h3>🤖 Morocco 2030 AI Local Concierge</h3><p class="sm">Tap any instant topic below:</p><div class="dg"><button type="button" class="db" onclick="askAi(\'stad\')">🏟️ Stadium Access</button><button type="button" class="db" onclick="askAi(\'food\')">🥘 Best Local Food</button><button type="button" class="db" onclick="askAi(\'sim\')">📶 5G SIM & Wi-Fi</button><button type="button" class="db" onclick="askAi(\'bud\')">💰 5-Day Budget</button></div><div class="tip" id="ai-ans" style="margin-top:8px">Tap a topic above for an instant local insider answer.</div></div>';
  var d12 = document.createElement('div'); d12.id = 'sec-voice'; d12.className = 'sec'; d12.style.display = 'none';
  d12.innerHTML = '<div class="card"><h3>⚖️ Group Bill & Tipping Splitter (MAD / USD / EUR)</h3><label>Total Bill Amount (in MAD):</label><input type="number" id="sb-tot" value="400" oninput="calcSplit()" /><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div><label>Number of People:</label><input type="number" id="sb-ppl" value="4" min="1" oninput="calcSplit()" /></div><div><label>Tipping Level:</label><select id="sb-tip" onchange="calcSplit()"><option value="0">0% (No Tip)</option><option value="5">5% (Local Café)</option><option value="10" selected>10% (Restaurant)</option></select></div></div><div id="sb-res" style="margin-top:8px"></div></div>';
  appBox.insertBefore(d11, endLine);
  appBox.insertBefore(d12, endLine);
  calcSplit();
}

