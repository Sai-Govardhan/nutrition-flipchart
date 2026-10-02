const pages = [
{
 label:"Welcome", kicker:"WELCOME", title:"Nutritional Counselling Kiosk",
 telugu:"గిరిజన అంగన్‌వాడీల కోసం పోషకాహార సలహా",
 lead:"Healthy food • Healthy mother • Healthy child",
 type:"cover",
 note:"A friendly guide for Anganwadi Workers, mothers and caregivers."
},
{
 label:"Why nutrition matters", kicker:"PAGE 02 · THE BASICS", title:"Why Does Good Nutrition Matter?",
 telugu:"మంచి పోషకాహారం ఎందుకు ముఖ్యం?",
 lead:"Nutritious food supports mothers and children every day.",
 cards:[
 ["🌱","Healthy growth","Helps children grow and develop.","పిల్లల ఎదుగుదలకు తోడ్పడుతుంది."],
 ["🛡️","Body protection","Supports the body's normal functions.","శరీరం ఆరోగ్యంగా ఉండేందుకు సహాయపడుతుంది."],
 ["🧠","Learning & play","Provides energy for daily activities.","ఆడుకోవడానికి, నేర్చుకోవడానికి శక్తినిస్తుంది."],
 ["👩🏽‍🍼","Mother & child","Nutrition matters at every stage.","తల్లి, బిడ్డ ఇద్దరికీ పోషకాహారం ముఖ్యం."]
 ],
 message:"Good nutrition is built from a variety of foods and caring daily habits.",
 question:"Ask the mother: “What foods does your family usually eat in a day?”"
},
{
 label:"Balanced diet", kicker:"PAGE 03 · FOOD GROUPS", title:"Build a Balanced Plate",
 telugu:"సమతుల ఆహార పళ్లెం తయారు చేద్దాం",
 lead:"Different foods provide different nutrients.",
 type:"plate",
 foods:[["🌾","Rice / millets","బియ్యం / చిరుధాన్యాలు"],["🫘","Dal / beans","పప్పులు"],["🥬","Vegetables","కూరగాయలు"],["🍌","Fruits","పండ్లు"],["🥛","Milk / curd","పాలు / పెరుగు"],["🥚","Egg / other protein","గుడ్డు / ప్రోటీన్ ఆహారం"]],
 message:"Include a variety of locally available foods across the day. The right amount depends on age and individual needs.",
 question:"Ask: “Which of these foods can we include in a meal at home?”"
},
{
 label:"Pregnancy nutrition", kicker:"PAGE 04 · CARE FOR MOTHERS", title:"Nutrition During Pregnancy",
 telugu:"గర్భధారణ సమయంలో పోషకాహారం",
 lead:"A pregnant woman needs care, variety and regular support.",
 cards:[
 ["🥗","Eat a variety","Choose different nutritious foods when available.","వివిధ రకాల పోషకాహారం తీసుకోండి."],
 ["🍲","Regular meals","Try not to skip meals; follow individual health advice.","సమయానికి భోజనం చేయండి."],
 ["💧","Safe fluids","Drink safe water and suitable fluids.","సురక్షితమైన నీరు తాగండి."],
 ["🏥","Health check-ups","Attend recommended antenatal check-ups.","సూచించిన ఆరోగ్య పరీక్షలకు వెళ్లండి."]
 ],
 message:"For supplements, symptoms or personal diet advice, speak with a qualified health professional.",
 question:"Ask: “What nutritious foods are available at home or in your village?”"
},
{
 label:"Lactation & breastfeeding", kicker:"PAGE 05 · MOTHER & BABY", title:"Care for the Mother & Breastfeeding",
 telugu:"బాలింత తల్లి పోషణ మరియు తల్లిపాలు",
 lead:"Support the mother's nutrition and the baby's feeding.",
 cards:[
 ["🍛","Nutritious meals","Eat a variety of foods as available and suitable.","వివిధ రకాల పోషకాహారం తీసుకోండి."],
 ["💧","Safe fluids","Drink to thirst and keep safe water available.","దాహానికి తగినంత సురక్షిత నీరు తాగండి."],
 ["🤱🏽","Breastfeeding","Breast milk provides important nutrition for babies.","తల్లిపాలు శిశువుకు ముఖ్యమైన పోషణను అందిస్తాయి."],
 ["🩺","Get support","Ask for help with pain or feeding concerns.","ఇబ్బందులు ఉంటే ఆరోగ్య సిబ్బందిని సంప్రదించండి."]
 ],
 message:"Exclusive breastfeeding is recommended for the first 6 months. From around 6 months, add appropriate complementary foods and continue breastfeeding.",
 question:"Ask: “Would you like to discuss any breastfeeding or feeding concerns?”"
},
{
 label:"Child feeding 6–24 months", kicker:"PAGE 06 · GROWING CHILDREN", title:"Feeding Children 6–24 Months",
 telugu:"6–24 నెలల పిల్లలకు ఆహారం",
 lead:"As children grow, they need age-appropriate complementary foods.",
 type:"timeline",
 timeline:[
 ["Around 6 months","🥣","Begin suitable complementary foods while continuing breastfeeding.","సుమారు 6 నెలలకు తగిన అదనపు ఆహారం ప్రారంభించండి."],
 ["6–8 months","🥄","Offer soft, thick foods suited to the child.","మెత్తని, చిక్కని ఆహారం ఇవ్వండి."],
 ["9–11 months","🍲","Gradually add variety and suitable textures.","వివిధ రకాల తగిన ఆహారం ఇవ్వండి."],
 ["12–24 months","🍛","Offer family foods adapted for the child's age and safety.","వయస్సుకు తగిన కుటుంబ ఆహారం ఇవ్వండి."]
 ],
 message:"Feed patiently and responsively. Needs vary; follow guidance from your Anganwadi Worker or health professional.",
 question:"Ask: “What foods does your child eat now, and what is difficult?”"
},
{
 label:"Local affordable foods", kicker:"PAGE 07 · FOODS AROUND US", title:"Nutritious Foods Around Us",
 telugu:"మన చుట్టూ లభించే పోషకాహారం",
 lead:"Local, seasonal foods can help make meals varied.",
 type:"foods",
 foods:[["🌾","Millets","చిరుధాన్యాలు"],["🍚","Rice","బియ్యం"],["🫘","Dal / beans","పప్పులు"],["🥜","Groundnuts","వేరుశెనగ"],["🥬","Leafy greens","ఆకుకూరలు"],["🥕","Seasonal vegetables","కాలానుగుణ కూరగాయలు"],["🍌","Seasonal fruits","కాలానుగుణ పండ్లు"],["🥚","Eggs, where used","గుడ్లు"],["🥛","Milk / curd, if available","పాలు / పెరుగు"]],
 message:"Choose from foods that are locally available, affordable and suitable for the family.",
 question:"Ask the mother: “Which of these foods are available in your home or village?”"
},
{
 label:"Anganwadi services", kicker:"PAGE 08 · FIND SUPPORT", title:"Nutrition Support Through Anganwadi Services",
 telugu:"అంగన్‌వాడీ ద్వారా పోషకాహార సహాయం",
 lead:"Your Anganwadi Worker can explain services available in your area.",
 type:"path",
 nodes:[["👨‍👩‍👧","Family"],["🏡","Anganwadi Centre"],["💬","Ask about nutrition support"],["🏥","Health worker / referral if needed"]],
 cards:[
 ["📏","Growth monitoring","Ask how your child's growth is monitored.","పిల్లల ఎదుగుదల పర్యవేక్షణ గురించి అడగండి."],
 ["🥗","Nutrition guidance","Ask about available nutrition counselling and services.","అందుబాటులో ఉన్న పోషకాహార సేవల గురించి అడగండి."]
 ],
 message:"Ask your local Anganwadi Worker which services, schemes and eligibility rules currently apply. Details vary by location and programme.",
 question:"Add verified local scheme names and contact details here before printing."
},
{
 label:"Healthy habits", kicker:"PAGE 09 · EVERYDAY PRACTICES", title:"Healthy Food + Healthy Habits",
 telugu:"ఆరోగ్యకరమైన ఆహారం మరియు అలవాట్లు",
 lead:"Clean hands, safe food and safe water help protect the family.",
 foods:[["👐","Wash hands","Before preparing food and before eating.","ఆహారం ముందు చేతులు కడుక్కోండి."],["💧","Safe water","Use water that is safe to drink.","సురక్షితమైన నీరు వాడండి."],["🍲","Clean utensils","Keep food covered and utensils clean.","పాత్రలను శుభ్రంగా ఉంచండి."],["🥗","Food variety","Offer different nutritious foods.","వివిధ రకాల ఆహారం ఇవ్వండి."],["👶","Patient feeding","Encourage the child without force.","ఓపికగా పిల్లలకు ఆహారం పెట్టండి."]],
 message:"Small daily habits can support the health of the whole family.",
 question:"Ask: “Which one habit would be easiest to practise starting today?”"
},
{
 label:"Checklist & takeaways", kicker:"PAGE 10 · LET'S REMEMBER", title:"Healthy Habits Checklist",
 telugu:"ఆరోగ్యకరమైన అలవాట్ల జాబితా",
 lead:"Choose one practical step to try with your family.",
 type:"checklist",
 checklist:[
 "Am I eating a variety of nutritious foods?",
 "Are we using safe water and clean food practices?",
 "Is my child getting age-appropriate complementary food?",
 "Are we continuing breastfeeding as recommended?",
 "Do I know where to ask about my child's growth?",
 "Do I know how to contact our Anganwadi Worker?"
 ],
 message:"5 key messages: eat a variety of foods; support breastfeeding and complementary feeding; keep food and water safe; monitor child growth; ask trained workers for help.",
 question:"Ask: “Which one healthy habit will you start today?”"
}
];

let current = 0;
let teluguOn = false;
const slide = document.getElementById('slide');
const pageCounter = document.getElementById('pageCounter');
const pageLabel = document.getElementById('pageLabel');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.getElementById('dots');
const languageToggle = document.getElementById('languageToggle');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function renderCards(cards) {
  return `<div class="visual-grid">${cards.map(c => `<div class="visual-card"><div class="emoji" aria-hidden="true">${c[0]}</div><div><h3>${escapeHtml(c[1])}</h3><p>${escapeHtml(c[2])}</p>${c[3] ? `<p class="translated">${escapeHtml(c[3])}</p>` : ''}</div></div>`).join('')}</div>`;
}
function renderFoods(foods) {
  return `<div class="food-list">${foods.map(f => `<div class="food-item"><span aria-hidden="true">${f[0]}</span><strong>${escapeHtml(f[1])}</strong><small class="translated">${escapeHtml(f[2] || '')}</small></div>`).join('')}</div>`;
}
function renderPage(p) {
  let body = '';
  if (p.type === 'cover') {
    body = `<div class="hero-illustration" aria-hidden="true"><div class="sun"></div><div class="food-bowl">🥗</div><div class="mother-child">👩🏽‍🍼</div><div class="leaf leaf-one">🌿</div><div class="leaf leaf-two">🌱</div></div><p class="bottom-note">${escapeHtml(p.note)}</p>`;
  } else if (p.type === 'plate') {
    body = `<div class="plate-layout"><div class="plate" aria-label="Illustration of a varied meal">🍚🥬</div><div class="plate-legend">${p.foods.map(f=>`<div class="legend-item"><span aria-hidden="true">${f[0]}</span>${escapeHtml(f[1])}<small class="translated">${escapeHtml(f[2])}</small></div>`).join('')}</div></div>`;
  } else if (p.type === 'timeline') {
    body = `<div class="timeline">${p.timeline.map(t=>`<div class="timeline-item"><strong>${escapeHtml(t[0])}</strong><span aria-hidden="true">${t[1]}</span><p>${escapeHtml(t[2])}</p><p class="translated">${escapeHtml(t[3])}</p></div>`).join('')}</div>`;
  } else if (p.type === 'foods') {
    body = renderFoods(p.foods);
  } else if (p.type === 'path') {
    body = `<div class="pathway">${p.nodes.map((n,i)=>`${i?'<div class="path-arrow" aria-hidden="true">→</div>':''}<div class="path-node"><span aria-hidden="true">${n[0]}</span><strong>${escapeHtml(n[1])}</strong></div>`).join('')}</div>${renderCards(p.cards)}`;
  } else if (p.type === 'checklist') {
    body = `<ul class="checklist">${p.checklist.map(c=>`<li>${escapeHtml(c)}</li>`).join('')}</ul><div class="visual-grid"><div class="visual-card"><div class="emoji">🥗</div><div><h3>Variety</h3><p>Include different food groups.</p><p class="translated">వివిధ రకాల ఆహారం తీసుకోండి.</p></div></div><div class="visual-card"><div class="emoji">🤝</div><div><h3>Ask for support</h3><p>Talk with your Anganwadi Worker.</p><p class="translated">అంగన్‌వాడీ కార్యకర్తను సంప్రదించండి.</p></div></div></div>`;
  } else if (p.cards) {
    body = renderCards(p.cards);
  }
  return `<div class="slide-content"><p class="slide-kicker">${escapeHtml(p.kicker)}</p><h2>${escapeHtml(p.title)}</h2><p class="telugu-text">${escapeHtml(p.telugu || '')}</p><p class="lead">${escapeHtml(p.lead || '')}</p>${body}${p.message?`<div class="message">${escapeHtml(p.message)}</div>`:''}${p.question?`<p class="question">💬 ${escapeHtml(p.question)}</p>`:''}</div>`;
}
function renderDots() {
  dots.innerHTML = pages.map((p,i)=>`<button class="dot ${i===current?'active':''}" type="button" aria-label="Go to page ${i+1}: ${escapeHtml(p.label)}" aria-current="${i===current?'step':'false'}" data-page="${i}"></button>`).join('');
  dots.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>goTo(Number(btn.dataset.page))));
}
function goTo(index) {
  current = Math.max(0,Math.min(pages.length-1,index));
  slide.innerHTML = renderPage(pages[current]);
  slide.classList.toggle('lang-on',teluguOn);
  pageCounter.textContent = `Page ${current+1} of ${pages.length}`;
  pageLabel.textContent = pages[current].label;
  progressFill.style.width = `${((current+1)/pages.length)*100}%`;
  prevBtn.disabled = current===0;
  nextBtn.disabled = current===pages.length-1;
  nextBtn.textContent = current===pages.length-1 ? 'Finished ✓' : 'Next →';
  renderDots();
}
prevBtn.addEventListener('click',()=>goTo(current-1));
nextBtn.addEventListener('click',()=>goTo(current+1));
document.getElementById('printBtn').addEventListener('click',()=>window.print());
languageToggle.addEventListener('click',()=>{
  teluguOn=!teluguOn;
  document.body.classList.toggle('lang-on',teluguOn);
  languageToggle.setAttribute('aria-pressed',String(teluguOn));
  languageToggle.textContent=teluguOn?'Hide Telugu':'తెలుగు చూపించు';
  goTo(current);
});
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight') goTo(current+1);
  if(e.key==='ArrowLeft') goTo(current-1);
});
goTo(0);
