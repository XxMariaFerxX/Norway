/* ==========================================================
   THE NORWAY MISSION LOG — script.js
   ========================================================== */

/* ---------- CONTENT ---------- */
const MISSIONS = [
  {
    code: "MISSION 01",
    title: "History & Vikings",
    short: "History & Vikings",
    icon: "⚔️",
    badge: "Viking Navigator",
    briefing:
      "Your objective: travel back to the Viking Age, understand the ships that carried raiders, traders and explorers across the seas, and bust one of history's most famous myths.",
    questions: [
      {
        q: "The Viking Age is commonly dated to roughly which period?",
        options: ["300 – 500 AD", "800 – 1050 AD", "1200 – 1450 AD", "1600 – 1800 AD"],
        correct: 1,
        explain:
          "Between about 800 and 1050 AD, Scandinavian seafarers raided, traded, explored and settled across Europe and beyond. Norwegian Vikings were especially active in the North Atlantic: Ireland, Scotland, Iceland and Greenland."
      },
      {
        q: "What made the Viking Longship such a revolutionary design?",
        options: [
          "A heavy, deep hull built only for the open ocean",
          "A shallow, light and flexible hull that could sail the sea AND row up rivers",
          "Steam engines hidden below deck",
          "A flat bottom that could only be used in lakes"
        ],
        correct: 1,
        explain:
          "Longships were built with overlapping planks (clinker-built), making them light, strong and flexible. Their shallow draft let crews cross oceans, glide up rivers and land directly on beaches, with both sail and oars for power."
      },
      {
        q: "True or false? Vikings wore helmets with horns in battle.",
        options: [
          "True – horns scared the enemy",
          "True – but only the chiefs wore them",
          "False – it is a myth with no archaeological evidence",
          "False – they only wore horns on ships"
        ],
        correct: 2,
        explain:
          "Myth busted! The only well-preserved Viking-age helmet found so far (Gjermundbu, Norway) is a simple rounded iron cap. The horned image was popularized much later, in the 19th century, by artists and opera costume designers."
      },
      {
        q: "How were Longships moved across the water?",
        options: [
          "Only by oars",
          "Only by the wind",
          "By a combination of a square sail and oars",
          "They were towed by animals on the shore"
        ],
        correct: 2,
        explain:
          "A single large square sail used the wind on long voyages, while oars gave the crew precise control near coasts, in calm weather, in rivers and during surprise landings."
      }
    ]
  },
  {
    code: "MISSION 02",
    title: "Gastronomy",
    short: "Gastronomy",
    icon: "🐟",
    badge: "Master Fisher",
    briefing:
      "Your objective: decode the Norwegian kitchen. Discover which treasures come from the cold sea and the clever techniques that kept families fed through long, dark, extreme winters.",
    questions: [
      {
        q: "Which two kinds of seafood are the pillars of traditional Norwegian cuisine?",
        options: ["Shrimp and lobster", "Salmon and cod", "Tuna and sardines", "Octopus and squid"],
        correct: 1,
        explain:
          "Cold, clean Norwegian waters are ideal for Atlantic salmon and cod. Both are central to the national diet and are among Norway's most important food exports."
      },
      {
        q: "Why did Norwegians traditionally CURE and SMOKE fish and meat?",
        options: [
          "Only to make it look more colorful",
          "Because they did not have knives",
          "To preserve food so people could survive long winters",
          "To make food taste sweet"
        ],
        correct: 2,
        explain:
          "In winter, fishing and farming were hard or impossible. Salt-curing and smoking removed moisture and slowed spoilage, so food stayed safe to eat for months."
      },
      {
        q: "What is 'stockfish' (tørrfisk)?",
        options: [
          "Fish soup cooked for hours",
          "Cod dried outdoors on wooden racks in cold, windy air",
          "Fish frozen in a lake",
          "Fried salmon with potatoes"
        ],
        correct: 1,
        explain:
          "Cod is hung to dry on wooden racks in the cold, dry air, especially in the Lofoten Islands. Nothing is added, and the dried fish can last for months or even years."
      },
      {
        q: "Gravlaks is a famous Norwegian dish. What is it?",
        options: [
          "Salmon cured with salt, sugar and dill",
          "Boiled cod served with butter",
          "Raw whale meat",
          "Smoked cheese on bread"
        ],
        correct: 0,
        explain:
          "Gravlaks is salmon cured with salt, sugar and dill. Its name is linked to the old practice of burying fish in the ground to ferment it, a method that evolved into today's refined curing."
      }
    ]
  },
  {
    code: "MISSION 03",
    title: "Art & Culture",
    short: "Art & Culture",
    icon: "🎨",
    badge: "Culture Curator",
    briefing:
      "Your objective: enter the world of Norwegian art. From colorful decorated wood in country valleys to one of the most famous paintings on the planet.",
    questions: [
      {
        q: "Rosemaling, a famous Norwegian folk art, is characterized by...",
        options: [
          "Black and white geometric shapes",
          "Realistic portraits of kings",
          "Stylized flowers, scrolls and flowing curves painted on wood",
          "Sculptures made from ice"
        ],
        correct: 2,
        explain:
          "Rosemaling means 'rose painting'. Painters decorated furniture, bowls, chests and walls with flowing floral patterns. It flourished in rural valleys in the 1700s and early 1800s."
      },
      {
        q: "Traditionally, which objects were decorated with Rosemaling?",
        options: [
          "Wooden furniture, bowls, chests and interior walls",
          "Metal swords only",
          "Stone castle gates",
          "Glass windows"
        ],
        correct: 0,
        explain:
          "Rosemaling brought color and joy into homes during dark winters. It decorated everyday objects such as cupboards, trunks, ale bowls and even church interiors."
      },
      {
        q: "Which Norwegian painter created 'The Scream' (Skrik)?",
        options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correct: 0,
        explain:
          "Edvard Munch (1863–1944) is Norway's most famous painter. His first version of 'The Scream' dates from 1893."
      },
      {
        q: "What is the main emotion or theme behind 'The Scream'?",
        options: [
          "Joy at a summer festival",
          "Hunger after a long journey",
          "Anxiety and overwhelming inner distress",
          "Pride after a victory"
        ],
        correct: 2,
        explain:
          "Munch was inspired by a moment when the sky seemed to turn blood-red and he felt a powerful wave of anxiety. He made several versions (paintings, pastels and prints), and the work became an icon of modern human emotion."
      }
    ]
  },
  {
    code: "MISSION 04",
    title: "Sports & Lifestyle",
    short: "Sports & Lifestyle",
    icon: "⛷️",
    badge: "Friluftsliv Explorer",
    briefing:
      "Your objective: discover how Norwegians turn snow, mountains and forests into a playground, and why spending time outdoors is a way of life.",
    questions: [
      {
        q: "Norway is often called the birthplace of modern...",
        options: ["Surfing", "Skiing", "Baseball", "Skateboarding"],
        correct: 1,
        explain:
          "Skiing began as practical transport over snow thousands of years ago. The Telemark region helped create modern ski techniques, and Norway still lives and breathes cross-country and downhill skiing."
      },
      {
        q: "What does the Norwegian concept 'Friluftsliv' mean?",
        options: [
          "Fast-food life",
          "Open-air living: enjoying and connecting with nature",
          "Life inside a museum",
          "Online gaming culture"
        ],
        correct: 1,
        explain:
          "'Friluftsliv' literally means 'free air life'. It is about spending time outdoors in all seasons for wellbeing, simply to enjoy nature. A popular Scandinavian saying: there is no bad weather, only bad clothes!"
      },
      {
        q: "Which country has won the most medals in the history of the Winter Olympics?",
        options: ["Canada", "United States", "Germany", "Norway"],
        correct: 3,
        explain:
          "Norway tops the all-time Winter Olympic medal table, helped by its dominance in cross-country skiing, biathlon and other snow sports."
      },
      {
        q: "'Allemannsretten' is the Norwegian 'right to roam'. What does it allow?",
        options: [
          "Everyone may walk, ski and camp in nature, respecting the environment",
          "Only locals may enter forests",
          "Hunting any animal at any time",
          "Building houses anywhere you want"
        ],
        correct: 0,
        explain:
          "The right to roam gives everyone access to uncultivated land and nature, as long as visitors are considerate. It is a foundation of the friluftsliv lifestyle."
      }
    ]
  }
];

/* ---------- STATE ---------- */
const state = {
  m: 0,                // current mission index
  q: 0,                // current question index
  revealed: {},        // "m-q": true
  picks: {},           // "m-q": chosen option index
  scored: {},          // "m-q": true if counted
  score: 0,
  view: "mission",     // 'mission' | 'victory'
  startedAt: Date.now(),
  finishedAt: null,
  victoryShown: false
};

const TIMER_CIRC = 119.4;
let timerId = null;
let timeLeft = 0;
let timeTotal = 20;

/* ---------- DOM ---------- */
const $ = (id) => document.getElementById(id);
const el = {
  nav: $("missionNav"), missionView: $("missionView"), victoryView: $("victoryView"),
  code: $("missionCode"), icon: $("missionIcon"), title: $("missionTitle"), briefing: $("missionBriefing"),
  progressText: $("progressText"), progressFill: $("progressFill"), dots: $("questionDots"),
  qCounter: $("qCounter"), question: $("questionText"), options: $("options"),
  explain: $("explain"), explainTitle: $("explainTitle"), explainText: $("explainText"),
  prev: $("prevBtn"), next: $("nextBtn"), reveal: $("revealBtn"),
  timerBox: $("timerBox"), timerNum: $("timerNum"), ring: $("ringFg"),
  timerToggle: $("timerToggle"), timerSeconds: $("timerSeconds"),
  clock: $("sessionClock"), score: $("scoreValue"),
  finalScore: $("finalScore"), finalTime: $("finalTime"), badges: $("badges"),
  toast: $("toast")
};

const key = (m = state.m, q = state.q) => `${m}-${q}`;
const isRevealed = (m, q) => !!state.revealed[key(m, q)];
const missionDone = (m) => MISSIONS[m].questions.every((_, q) => isRevealed(m, q));
const allDone = () => MISSIONS.every((_, m) => missionDone(m));
const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

/* ---------- NAV ---------- */
function buildNav() {
  el.nav.innerHTML = "";
  MISSIONS.forEach((mi, i) => {
    const b = document.createElement("button");
    b.className = "tab";
    b.dataset.index = i;
    b.innerHTML = `
      <span class="tab-ico">${mi.icon}</span>
      <span><small>${mi.code}</small>${mi.short}</span>
      <span class="tab-check">✓</span>`;
    b.addEventListener("click", () => goTo(i, 0));
    el.nav.appendChild(b);
  });

  const v = document.createElement("button");
  v.className = "tab victory-tab locked";
  v.id = "victoryTab";
  v.innerHTML = `
    <span class="tab-ico">🏆</span>
    <span><small>FINAL</small>Victory</span>
    <span class="tab-check">✓</span>`;
  v.addEventListener("click", () => {
    if (allDone()) showVictory();
    else toast("Reveal every answer in all 4 missions to unlock the Victory screen.");
  });
  el.nav.appendChild(v);
}

function updateNav() {
  [...el.nav.querySelectorAll(".tab")].forEach((t) => {
    if (t.id === "victoryTab") {
      t.classList.toggle("locked", !allDone());
      t.classList.toggle("ready", allDone() && state.view !== "victory");
      t.classList.toggle("active", state.view === "victory");
      t.classList.toggle("done", state.victoryShown);
      return;
    }
    const i = Number(t.dataset.index);
    t.classList.toggle("active", state.view === "mission" && i === state.m);
    t.classList.toggle("done", missionDone(i));
  });
}

/* ---------- RENDER ---------- */
function render() {
  if (state.view === "victory") {
    el.missionView.hidden = true;
    el.victoryView.hidden = false;
    updateNav();
    return;
  }
  el.missionView.hidden = false;
  el.victoryView.hidden = true;

  const mi = MISSIONS[state.m];
  const total = mi.questions.length;
  const item = mi.questions[state.q];
  const revealed = isRevealed(state.m, state.q);

  el.code.textContent = mi.code;
  el.icon.textContent = mi.icon;
  el.title.textContent = mi.title;
  el.briefing.textContent = mi.briefing;
  el.qCounter.textContent = `QUESTION ${state.q + 1} / ${total}`;

  // retrigger entry animation
  el.question.style.animation = "none";
  void el.question.offsetWidth;
  el.question.style.animation = "";
  el.question.textContent = item.q;

  // options
  el.options.innerHTML = "";
  const picked = state.picks[key()];
  item.options.forEach((text, i) => {
    const b = document.createElement("button");
    b.className = "option";
    b.innerHTML = `<span class="opt-key">${"ABCD"[i]}</span><span>${text}</span>`;
    if (picked === i) b.classList.add("picked");
    if (revealed) {
      b.disabled = true;
      b.classList.remove("picked");
      if (i === item.correct) b.classList.add("correct");
      else if (picked === i) b.classList.add("wrong");
      else b.classList.add("dim");
    } else {
      b.addEventListener("click", () => pick(i));
    }
    el.options.appendChild(b);
  });

  // explanation
  if (revealed) {
    el.explain.hidden = false;
    el.explainTitle.textContent = "✔ INTEL CONFIRMED — CORRECT ANSWER: " + "ABCD"[item.correct];
    el.explainText.textContent = item.explain;
  } else {
    el.explain.hidden = true;
  }

  // progress
  const done = mi.questions.filter((_, q) => isRevealed(state.m, q)).length;
  el.progressText.textContent = `${done} / ${total}`;
  el.progressFill.style.width = `${(done / total) * 100}%`;
  el.dots.innerHTML = "";
  mi.questions.forEach((_, q) => {
    const d = document.createElement("div");
    d.className = "dot" + (isRevealed(state.m, q) ? " revealed" : "") + (q === state.q ? " current" : "");
    d.addEventListener("click", () => goTo(state.m, q));
    el.dots.appendChild(d);
  });

  // buttons
  const first = state.m === 0 && state.q === 0;
  el.prev.disabled = first;
  el.reveal.textContent = revealed ? "Answer revealed ✔" : "Reveal answer";
  el.reveal.disabled = revealed;
  const last = state.m === MISSIONS.length - 1 && state.q === total - 1;
  el.next.textContent = last ? "Finish 🏆" : "Next ▶";

  updateNav();
  scoreUI();
  startTimer();
}

function scoreUI() {
  el.score.textContent = state.score;
}

/* ---------- ACTIONS ---------- */
function goTo(m, q) {
  state.view = "mission";
  state.m = m;
  state.q = q;
  render();
}

function next() {
  if (state.view === "victory") return;
  const total = MISSIONS[state.m].questions.length;
  if (state.q < total - 1) return goTo(state.m, state.q + 1);
  if (state.m < MISSIONS.length - 1) return goTo(state.m + 1, 0);
  // end of the last mission
  if (allDone()) showVictory();
  else toast("Reveal every remaining answer to complete all missions.");
}

function prev() {
  if (state.view === "victory") return goTo(MISSIONS.length - 1, MISSIONS[MISSIONS.length - 1].questions.length - 1);
  if (state.q > 0) return goTo(state.m, state.q - 1);
  if (state.m > 0) return goTo(state.m - 1, MISSIONS[state.m - 1].questions.length - 1);
}

function pick(i) {
  if (state.view !== "mission" || isRevealed(state.m, state.q)) return;
  state.picks[key()] = i;
  [...el.options.children].forEach((b, idx) => b.classList.toggle("picked", idx === i));
}

function reveal(fromTimer = false) {
  if (state.view !== "mission" || isRevealed(state.m, state.q)) return;
  const item = MISSIONS[state.m].questions[state.q];
  stopTimer();
  state.revealed[key()] = true;

  const p = state.picks[key()];
  if (p === item.correct && !state.scored[key()]) {
    state.scored[key()] = true;
    state.score++;
  }

  render();
  stopTimer(); // render() restarts the timer for unrevealed questions only

  if (fromTimer) toast("⏱ Time's up! Here is the answer.");
  if (p === item.correct) miniBurst();

  if (missionDone(state.m)) {
    toast(`✔ ${MISSIONS[state.m].code} COMPLETE — ${MISSIONS[state.m].title}`);
    if (allDone()) setTimeout(() => toast("🏆 All missions complete! Press Finish or V for victory."), 2600);
  }
}

/* ---------- TIMER ---------- */
function startTimer() {
  stopTimer();
  const enabled = el.timerToggle.checked;
  el.timerBox.classList.toggle("off", !enabled || isRevealed(state.m, state.q));
  if (!enabled || isRevealed(state.m, state.q) || state.view !== "mission") return;

  timeTotal = Number(el.timerSeconds.value);
  timeLeft = timeTotal;
  drawTimer();
  const t0 = performance.now();
  timerId = setInterval(() => {
    timeLeft = Math.max(0, timeTotal - (performance.now() - t0) / 1000);
    drawTimer();
    if (timeLeft <= 0) {
      stopTimer();
      reveal(true);
    }
  }, 100);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function drawTimer() {
  el.timerNum.textContent = Math.ceil(timeLeft);
  el.ring.style.strokeDashoffset = TIMER_CIRC * (1 - timeLeft / timeTotal);
  el.timerBox.classList.toggle("low", timeLeft <= 5);
}

/* ---------- VICTORY ---------- */
function showVictory() {
  stopTimer();
  state.view = "victory";
  if (!state.finishedAt) state.finishedAt = Date.now();
  state.victoryShown = true;

  el.finalScore.textContent = `${state.score} / ${totalQuestions()}`;
  el.finalTime.textContent = fmt(Math.floor((state.finishedAt - state.startedAt) / 1000));
  el.badges.innerHTML = MISSIONS.map((m) => `<span class="badge">${m.icon} ${m.badge}</span>`).join("");

  render();
  bigConfetti();
}

function totalQuestions() {
  return MISSIONS.reduce((n, m) => n + m.questions.length, 0);
}

function restart() {
  stopTimer();
  state.m = 0; state.q = 0;
  state.revealed = {}; state.picks = {}; state.scored = {};
  state.score = 0; state.view = "mission";
  state.startedAt = Date.now(); state.finishedAt = null; state.victoryShown = false;
  render();
}

/* ---------- CONFETTI ---------- */
const canvas = $("confetti");
const ctx = canvas.getContext("2d");
let particles = [];
let confettiRunning = false;
const COLORS = ["#d9a066", "#f4f7fc", "#4fd6a0", "#6aa7ff", "#ff6b7a", "#f2c879", "#b97a3e"];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function spawn(n, x, y, spread = 1, power = 1) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = (4 + Math.random() * 9) * power;
    particles.push({
      x: x ?? Math.random() * canvas.width,
      y: y ?? -20,
      vx: Math.cos(a) * s * spread,
      vy: (y == null ? Math.random() * 3 : Math.sin(a) * s - 4),
      w: 6 + Math.random() * 8,
      h: 4 + Math.random() * 7,
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 14,
      color: COLORS[(Math.random() * COLORS.length) | 0],
      life: 0,
      max: 160 + Math.random() * 120
    });
  }
  if (!confettiRunning) { confettiRunning = true; requestAnimationFrame(tickConfetti); }
}

function tickConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.life++;
    p.vy += 0.18;
    p.vx *= 0.99;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    ctx.save();
    ctx.globalAlpha = Math.max(0, 1 - p.life / p.max);
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rot * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  });
  particles = particles.filter((p) => p.life < p.max && p.y < canvas.height + 40);
  if (particles.length) requestAnimationFrame(tickConfetti);
  else { confettiRunning = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
}

function bigConfetti() {
  spawn(160, canvas.width * 0.2, canvas.height * 0.75, 1.2, 1.3);
  spawn(160, canvas.width * 0.8, canvas.height * 0.75, 1.2, 1.3);
  let rounds = 0;
  const rain = setInterval(() => {
    spawn(40);
    if (++rounds >= 10) clearInterval(rain);
  }, 300);
}

function miniBurst() {
  const r = el.options.getBoundingClientRect();
  spawn(50, r.left + r.width / 2, r.top + 40, 1, 0.8);
}

/* ---------- TOAST ---------- */
let toastTimer;
function toast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.toast.classList.remove("show"), 3200);
}

/* ---------- EVENTS ---------- */
el.next.addEventListener("click", next);
el.prev.addEventListener("click", prev);
el.reveal.addEventListener("click", () => reveal(false));
el.timerToggle.addEventListener("change", startTimer);
el.timerSeconds.addEventListener("change", startTimer);
$("fullscreenBtn").addEventListener("click", toggleFullscreen);
$("backBtn").addEventListener("click", () => goTo(MISSIONS.length - 1, MISSIONS[MISSIONS.length - 1].questions.length - 1));
$("confettiBtn").addEventListener("click", bigConfetti);
$("restartBtn").addEventListener("click", restart);

function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
}

document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "SELECT") return;
  const k = e.key.toLowerCase();
  if (k === "arrowright") next();
  else if (k === "arrowleft") prev();
  else if (k === " " || k === "enter") { e.preventDefault(); reveal(false); }
  else if (["1", "2", "3", "4"].includes(k)) pick(Number(k) - 1);
  else if (k === "t") { el.timerToggle.checked = !el.timerToggle.checked; startTimer(); }
  else if (k === "f") toggleFullscreen();
  else if (k === "v") showVictory(); // presenter override
});

/* ---------- INIT ---------- */
setInterval(() => {
  if (!state.finishedAt) el.clock.textContent = fmt(Math.floor((Date.now() - state.startedAt) / 1000));
}, 1000);

buildNav();
render();