/* =========================================================
   Arzoo Mansuri · Portfolio — script.js
   ========================================================= */

/* ---------------------------------------------------------
   1. SITE CONFIG — edit these when you have your real links
   --------------------------------------------------------- */
const CONFIG = {
  // Contact form opens the visitor's email app addressed to this email.
  contactEmail: "your.email@example.com"
};

/* ---------------------------------------------------------
   2. PROJECT DATA
   - demo: your live demo URL (leave "#" until you have it)
   - repo: your GitHub repo URL (optional, shown as a second link when set)
   - tags: technologies shown on the card. Edit to match each project.
   - categories: used by the filter buttons.
   --------------------------------------------------------- */
const FILTERS = ["All Projects", "JavaScript", "HTML & CSS", "UI Design", "Interactive Apps"];

const studysync = "https://arzoomansuri18.github.io/StudySync-Clone/";
const bmi = "https://arzoomansuri18.github.io/BMI-Calculator/";
const dashboard = " https://arzoomansuri18.github.io/Dashboard-Page/";
const cook_game = "https://arzoomansuri18.github.io/Omellete-Cooking-Game/";
const tip_calc = "https://arzoomansuri18.github.io/Tip-Calculator/";
const color_pick = "https://arzoomansuri18.github.io/Color-Picker/";
const todo_list = "https://arzoomansuri18.github.io/To-Do-List/";
const weather_app = "https://arzoomansuri18.github.io/Weather-App/";
const FAQ = "https://arzoomansuri18.github.io/FAQ-Accordion/";
const landing = "https://arzoomansuri18.github.io/Landing-Page/";
const img_slide = "https://arzoomansuri18.github.io/Slide-Image/";
const prod_page = "https://arzoomansuri18.github.io/Product-Page/";
const hover_eff = "https://arzoomansuri18.github.io/Hover-Effect/";
const survey_form = " https://arzoomansuri18.github.io/Survey-Form/";


const PROJECTS = [
  {
    icon: "🧮", name: "BMI Calculator", desc: "A calculator that estimates Body Mass Index from height and weight.",
    tags: ["HTML", "CSS", "JavaScript"], categories: ["JavaScript", "Interactive Apps"], demo: bmi, repo: ""
  },
  {
    icon: "📊", name: "Dashboard Page", desc: "A dashboard interface featuring organized information and data visualization elements.",
    tags: ["HTML", "CSS"], categories: ["HTML & CSS", "UI Design"], demo: dashboard, repo: ""
  },
  {
    icon: "💰", name: "Tip Calculator", desc: "A simple tool to calculate tips and split bills.",
    tags: ["HTML", "CSS", "JavaScript"], categories: ["JavaScript", "Interactive Apps"], demo: tip_calc, repo: ""
  },
  {
    icon: "🎨", name: "Color Picker", desc: "An interactive color selection tool for exploring colors.",
    tags: ["HTML", "CSS", "JavaScript"], categories: ["JavaScript", "Interactive Apps"], demo: color_pick, repo: ""
  },
  {
    icon: "📝", name: "To-Do List", desc: "A task management application for adding and tracking daily tasks.",
    tags: ["HTML", "CSS", "JavaScript"], categories: ["JavaScript", "Interactive Apps"], demo: todo_list, repo: ""
  },
  {
    icon: "❓", name: "FAQ Accordion", desc: "An interactive FAQ section with expandable and collapsible answers.",
    tags: ["HTML", "CSS", "JavaScript"], categories: ["JavaScript", "UI Design"], demo: FAQ, repo: ""
  },
  {
    icon: "🌦️", name: "Weather App", desc: "A weather application that displays weather information.",
    tags: ["HTML", "CSS", "JavaScript"], categories: ["JavaScript", "Interactive Apps"], demo: weather_app, repo: ""
  },
  {
    icon: "🌷", name: "Landing Page", desc: "A beautifully designed landing page with an attractive layout.",
    tags: ["HTML", "CSS"], categories: ["HTML & CSS", "UI Design"], demo: landing, repo: ""
  },
  {
    icon: "🛍️", name: "Product Page", desc: "A product showcase page with a clean and attractive UI.",
    tags: ["HTML", "CSS"], categories: ["HTML & CSS", "UI Design"], demo: prod_page, repo: ""
  },
  {
    icon: "✨", name: "Hover Effect", desc: "A creative collection of CSS hover interactions and animations.",
    tags: ["HTML", "CSS"], categories: ["HTML & CSS", "UI Design"], demo: hover_eff, repo: ""
  },
  {
    icon: "🖼️", name: "Image Slider", desc: "An interactive image slider with smooth transitions.",
    tags: ["HTML", "CSS", "JavaScript"], categories: ["JavaScript", "Interactive Apps", "UI Design"], demo: img_slide, repo: ""
  },
  {
    icon: "📋", name: "Survey Form", desc: "A user-friendly form interface for collecting responses.",
    tags: ["HTML", "CSS"], categories: ["HTML & CSS", "UI Design"], demo: survey_form, repo: ""
  },
  {
    icon: "📚", name: "StudySync Clone", desc: "A clone of the StudySync educational website focusing on its layout and responsive design.",
    tags: ["HTML", "CSS"], categories: ["HTML & CSS", "UI Design"], demo: studysync, repo: ""
  },
  {
    icon: "🍳", name: "Omelette Cooking Game", desc: "A fun interactive cooking-themed game where users can explore the process of preparing an omelette.",
    tags: ["HTML", "CSS", "JavaScript"], categories: ["JavaScript", "Interactive Apps"], demo: cook_game, repo: ""
  }
];

const TINTS = ["pink", "lavender", "peach", "cream"];
const SHAPES = ["♡", "✦", "★", "✿", "✧"];

/* ---------------------------------------------------------
   3. Helpers
   --------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const toastEl = $("#toast");
let toastTimer;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}

const isPlaceholder = (url) => !url || url === "#";

/* ---------------------------------------------------------
   4. Project card component + rendering + filters
   --------------------------------------------------------- */
function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.tint = TINTS[index % TINTS.length];
  card.dataset.categories = project.categories.join("|");
  card.style.animationDelay = `${Math.min(index, 8) * 50}ms`;

  const num = String(index + 1).padStart(2, "0");
  const s1 = SHAPES[index % SHAPES.length];
  const s2 = SHAPES[(index + 2) % SHAPES.length];

  const art = document.createElement("div");
  art.className = "card-art";
  art.setAttribute("aria-hidden", "true");
  art.innerHTML = `
    <span class="card-num">${num}</span>
    <span class="shape s1">${s1}</span>
    <span class="shape s2">${s2}</span>
    <span class="card-icon">${project.icon}</span>`;

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.textContent = project.name;

  const desc = document.createElement("p");
  desc.textContent = project.desc;

  const tags = document.createElement("ul");
  tags.className = "tags";
  tags.setAttribute("role", "list");
  tags.setAttribute("aria-label", "Technologies used");
  project.tags.forEach((t) => {
    const li = document.createElement("li");
    li.className = "tag";
    li.textContent = t;
    tags.appendChild(li);
  });

  const link = document.createElement("a");
  link.className = "card-btn";
  link.href = project.demo || "#";
  link.innerHTML = `View Project <span aria-hidden="true">→</span>`;
  link.setAttribute("aria-label", `View project: ${project.name}`);

  if (isPlaceholder(project.demo)) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showToast(`Link for “${project.name}” coming soon ♡`);
    });
  } else {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  body.append(title, desc, tags, link);
  card.append(art, body);
  return card;
}

function initProjects() {
  const grid = $("#projectGrid");
  const filterWrap = $("#filters");
  const status = $("#filterStatus");
  if (!grid || !filterWrap) return;

  grid.innerHTML = "";
  const cards = PROJECTS.map((p, i) => {
    const card = createProjectCard(p, i);
    grid.appendChild(card);
    return card;
  });

  function applyFilter(filter) {
    let visible = 0;
    cards.forEach((card) => {
      const match = filter === "All Projects" || card.dataset.categories.split("|").includes(filter);
      card.classList.toggle("is-hidden", !match);
      if (match) {
        visible++;
        // restart the pop-in animation
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.animation = "";
        card.style.animationDelay = `${Math.min(visible, 8) * 40}ms`;
      }
    });
    status.textContent = `Showing ${visible} ${visible === 1 ? "project" : "projects"} in ${filter}.`;
  }

  FILTERS.forEach((name, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn";
    btn.textContent = name;
    btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    btn.addEventListener("click", () => {
      $$(".filter-btn", filterWrap).forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      applyFilter(name);
    });
    filterWrap.appendChild(btn);
  });
}

/* ---------------------------------------------------------
   5. Mobile navigation + sticky header + active link
   --------------------------------------------------------- */
function initNav() {
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  const header = $(".site-header");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("open", open);
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (menu.classList.contains("open") && !menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // highlight the link of the section in view
  const links = $$(".nav-link");
  const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => {
              const active = l.getAttribute("href") === `#${entry.target.id}`;
              l.classList.toggle("active", active);
              if (active) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }
}

/* ---------------------------------------------------------
   6. Scroll reveal
   --------------------------------------------------------- */
function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  // small stagger for siblings that share a parent
  items.forEach((el) => {
    const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal"));
    el.style.setProperty("--delay", `${siblings.indexOf(el) * 90}ms`);
  });
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------
   7. Contact form (validation + opens the visitor's email app)
   --------------------------------------------------------- */
function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  const status = $("#formStatus");

  const fields = {
    name: { el: $("#name"), err: $("#nameError"), check: (v) => (v.trim().length >= 2 ? "" : "Please tell me your name.") },
    email: { el: $("#email"), err: $("#emailError"), check: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email address.") },
    message: { el: $("#message"), err: $("#messageError"), check: (v) => (v.trim().length >= 10 ? "" : "Your message should be at least 10 characters.") }
  };

  function validateField(f) {
    const msg = f.check(f.el.value);
    f.err.textContent = msg;
    f.el.closest(".field").classList.toggle("invalid", Boolean(msg));
    f.el.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }

  Object.values(fields).forEach((f) => {
    f.el.addEventListener("blur", () => validateField(f));
    f.el.addEventListener("input", () => { if (f.el.closest(".field").classList.contains("invalid")) validateField(f); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    const results = Object.values(fields).map(validateField);
    if (results.includes(false)) {
      const firstBad = Object.values(fields).find((f) => f.el.getAttribute("aria-invalid") === "true");
      if (firstBad) firstBad.el.focus();
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${fields.name.el.value.trim()}`);
    const body = encodeURIComponent(`${fields.message.el.value.trim()}\n\n— ${fields.name.el.value.trim()} (${fields.email.el.value.trim()})`);
    window.location.href = `mailto:${CONFIG.contactEmail}?subject=${subject}&body=${body}`;

    status.textContent = "Thank you! Your email app should open with your message ready to send ♡";
    form.reset();
  });
}

/* ---------------------------------------------------------
   8. Init
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initProjects();
  initNav();
  initContactForm();
  initReveal();
});
