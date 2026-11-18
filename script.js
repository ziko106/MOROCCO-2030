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
var ids = "cities,rail,scam,darija,trips,sos,culture,sahara,invest,visa,iberia,voice,weather,spots,planner,souk,medcard,matchday".split(",");

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

rcity(); cmad(); buildTrip(); calcSouk(); buildMed();
