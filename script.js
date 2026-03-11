let typingTimer = null;
let activeFilter = "all";
/*let heroTimer = null;*/



const i18n = {
  fr: {
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_about: "À propos",
    nav_contact: "Contact",
    hero_eyebrow: "Data Scientist • Statistiques • NLP • Prédictif",
    hero_title_1: "Je transforme des données techniques en",
    hero_title_2: "décisions",
    hero_title_3: "et",
    hero_title_4: "prévisions",
    /*hero_subtitle: "Focus : maintenance prédictive (aéronautique), extraction d’informations (NLP), modélisation (GLM/RF), séries temporelles, dashboards Power BI, et projets actuariat (pricing).",*/
    hero_now: "Actuellement :",
    hero_cta_projects: "Voir les projets",
    hero_cta_contact: "Me contacter",
    hero_role: "Data Scientist • Statistiques",
    kv_specialties_k: "Spécialités",
    kv_specialties_v: "Prédictif • NLP • QA data • Time series • Pricing",
    kv_domains_k: "Domaines",
    kv_domains_v: "Aéronautique • Risk/Assurance • Industrie",
    kv_stack_k: "Stack",
    link_linkedin: "LinkedIn",
    link_email: "Email",
    stat_projects_k: "Projets",
    stat_focus_k: "Focus",
    stat_focus_v: "Predictive / Actuarial",
    stat_avail_k: "Disponibilité",
    stat_avail_v: "CDI / CDD / VIE",
    projects_title: "Projets",
    projects_sub: "Chaque projet est présenté comme un “case study” : objectif → méthode → résultat → impact.",
    filter_all: "Tous",
    filter_predictive: "Prédictif",
    filter_nlp: "NLP",
    filter_risk: "Actuariat / Risk",
    filter_bi: "Power BI",
    search_placeholder: "Rechercher un projet (ex: random forest, pricing...)",
    skills_title: "Compétences",
    skills_sub: "Un mix stats + ML + actuariat + dataviz.",
    skills_modeling_title: "Data & Modélisation",
    skills_modeling_1: "GLM (logistique, Poisson), tests (χ², Fisher), interprétation",
    skills_modeling_2: "Random Forest, encodage catégoriel, calibration, métriques",
    skills_modeling_3: "Séries temporelles : décomposition, stationnarité, SARIMA",
    skills_act_title: "Actuariat / Pricing",
    skills_act_1: "Fréquence / sévérité : distributions, prime pure, segmentation",
    skills_act_2: "Ratemaking : experience rating, ajustements, hypothèses",
    skills_act_3: "Reporting clair : résultats + limites + recommandations",
    skills_nlp_title: "NLP technique",
    skills_nlp_1: "Extraction d’entités (PART / ACTION / OBS / QTY)",
    skills_nlp_2: "spaCy + Transformers (xlm-roberta), pipelines, évaluation",
    skills_nlp_3: "Structuration de logs de réparation → variables exploitables",
    skills_tools_title: "Outils",
    about_title: "À propos",
    about_sub: "Profil stats orienté impact et opérationnel.",
    about_p1: "Diplômée d’un master en statistique, je construis des solutions data end-to-end : exploration, dashboards (Power BI) → modèles (Python/R) → restitution actionnable. Mes projets couvrent la maintenance prédictive (aéronautique) et des cas actuariat/pricing.",
    about_hint: "Astuce : on peut remplacer ce texte par une version “recruteur-friendly” en 6–8 lignes.",
    contact_title: "Contact",
    contact_sub: "On peut échanger sur un poste, un projet, ou une collaboration.",
    contact_reach_title: "Me joindre",
    contact_reach_sub: "Remplace les liens ci-dessous par les tiens :",
    cv_sub: "Ajoute ton CV en PDF dans le repo (ex: assets/CV_Audrey_Muaka.pdf)",
    cv_download: "Télécharger le CV",
  },
  en: {
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_about: "About",
    nav_contact: "Contact",
    hero_eyebrow: "Data Scientist • Statistics • NLP • Predictive",
    hero_title_1: "I turn technical data into",
    hero_title_2: "decisions",
    hero_title_3: "and",
    hero_title_4: "forecasts",
    hero_subtitle: "Focus: predictive maintenance (aerospace), NLP information extraction, modeling (GLM/RF), time series, Power BI dashboards, and actuarial pricing projects.",
    hero_now: "Currently:",
    hero_cta_projects: "See projects",
    hero_cta_contact: "Contact me",
    hero_role: "Data Scientist • Statistics",
    kv_specialties_k: "Specialties",
    kv_specialties_v: "Predictive • NLP • Data QA • Time series • Pricing",
    kv_domains_k: "Domains",
    kv_domains_v: "Aerospace • Risk/Insurance • Industry",
    kv_stack_k: "Stack",
    link_linkedin: "LinkedIn",
    link_email: "Email",
    stat_projects_k: "Projects",
    stat_focus_k: "Focus",
    stat_focus_v: "Predictive / Actuarial",
    stat_avail_k: "Availability",
    stat_avail_v: "Full-time / Fixed-term / VIE",
    projects_title: "Projects",
    projects_sub: "Each project is a mini case study: goal → method → results → impact.",
    filter_all: "All",
    filter_predictive: "Predictive",
    filter_nlp: "NLP",
    filter_risk: "Actuarial / Risk",
    filter_bi: "Power BI",
    search_placeholder: "Search a project (e.g., random forest, pricing...)",
    skills_title: "Skills",
    skills_sub: "A mix of statistics, ML, actuarial pricing, and data viz.",
    skills_modeling_title: "Data & Modeling",
    skills_modeling_1: "GLMs (logistic, Poisson), hypothesis tests, interpretation",
    skills_modeling_2: "Random Forest, categorical encoding, calibration, metrics",
    skills_modeling_3: "Time series: decomposition, stationarity, SARIMA",
    skills_act_title: "Actuarial / Pricing",
    skills_act_1: "Frequency/severity: distributions, pure premium, segmentation",
    skills_act_2: "Ratemaking: experience rating, adjustments, assumptions",
    skills_act_3: "Clear reporting: results + limits + recommendations",
    skills_nlp_title: "Technical NLP",
    skills_nlp_1: "Entity extraction (PART / ACTION / OBS / QTY)",
    skills_nlp_2: "spaCy + Transformers (xlm-roberta), pipelines, evaluation",
    skills_nlp_3: "Turn repair logs into usable structured features",
    skills_tools_title: "Tools",
    about_title: "About",
    about_sub: "Impact-driven, hands-on statistics profile.",
    about_p1: "MSc in Statistics. I build end-to-end data solutions: exploration, Power BI dashboards → models (Python/R) → actionable insights. My work spans predictive maintenance (aerospace) and actuarial/pricing case studies.",
    about_hint: "Tip: we can rewrite this into a recruiter-friendly 6–8 line summary.",
    contact_title: "Contact",
    contact_sub: "Happy to discuss roles, projects, or collaborations.",
    contact_reach_title: "Get in touch",
    contact_reach_sub: "Replace the links below with yours:",
    cv_sub: "Add your resume PDF to the repo (e.g., assets/CV_Audrey_Muaka.pdf)",
    cv_download: "Download resume",
  }
};

const projects = [
  {
    id: "pred-maint-aero",
    tags: ["predictive"],
    fr: {
      title: "Maintenance prédictive — analyse de la casse (aéronautique)",
      desc: "Prévision des demandes de réparation et identification des facteurs de casse (site, client, catégorie…). Modèles + métriques + recommandations.",
      bullets: ["Features catégorielles", "GLM / Random Forest", "Time-series (SARIMA)"],
      linkLabel: "Voir le repo",
      link: "#"
    },
    en: {
      title: "Predictive maintenance — breakage analytics (aerospace)",
      desc: "Forecast repair requests and identify breakage drivers (site, customer, category…). Models + metrics + business recommendations.",
      bullets: ["Categorical features", "GLM / Random Forest", "Time-series (SARIMA)"],
      linkLabel: "View repo",
      link: "#"
    }
  },
  {
    id: "nlp-ner-parts",
    tags: ["nlp", "predictive"],
    fr: {
      title: "NLP — extraction de pièces cassées (NER spaCy/Transformers)",
      desc: "Extraction d’entités (PART/ACTION/OBS/QTY) depuis des descriptions techniques pour structurer les données et alimenter l’analytique.",
      bullets: ["spaCy + xlm-roberta", "Évaluation & erreurs", "Structuration logs → variables"],
      linkLabel: "Voir le repo",
      link: "#"
    },
    en: {
      title: "NLP — parts extraction from technical logs (spaCy/Transformers NER)",
      desc: "Extract entities (PART/ACTION/OBS/QTY) from technical text to structure data and enable analytics.",
      bullets: ["spaCy + xlm-roberta", "Evaluation & error analysis", "Logs → structured features"],
      linkLabel: "View repo",
      link: "#"
    }
  },
  {
    id: "bi-dashboard",
    tags: ["bi"],
    fr: {
      title: "Power BI — dashboards SAV / qualité",
      desc: "KPIs, exploration, tendances, segments (client/site/produit) pour aider la décision opérationnelle.",
      bullets: ["Storytelling KPI", "Filtres & drill-down", "Pilotage opérationnel"],
      linkLabel: "Voir aperçu",
      link: "#"
    },
    en: {
      title: "Power BI — after-sales / quality dashboards",
      desc: "KPIs, exploration, trends, segmentation (customer/site/product) to support operational decisions.",
      bullets: ["KPI storytelling", "Filters & drill-down", "Operational monitoring"],
      linkLabel: "View preview",
      link: "#"
    }
  },
  {
    id: "marine-liability-pricing",
    tags: ["risk"],
    fr: {
      title: "Actuariat — tarification Marine Liability (case study)",
      desc: "Analyse de sinistres (patterns/anomalies), approche fréquence×sévérité, prime pure, segmentation et hypothèses de pricing.",
      bullets: ["Frequency/Severity", "Experience rating", "Rapport de pricing"],
      linkLabel: "Voir le rapport",
      link: "#"
    },
    en: {
      title: "Actuarial — Marine Liability pricing (case study)",
      desc: "Claims analysis (patterns/anomalies), frequency×severity framework, pure premium, segmentation and pricing assumptions.",
      bullets: ["Frequency/Severity", "Experience rating", "Pricing report"],
      linkLabel: "View report",
      link: "#"
    }
  }
];

function setLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.dataset.lang = lang;

  // text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][k]) el.textContent = i18n[lang][k];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const k = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang] && i18n[lang][k]) el.setAttribute("placeholder", i18n[lang][k]);
  });

  // projects render
  renderProjects();

  // typing line
  /*startHeroTyping(lang);*/
  startHeroLoop(lang);
  startTyping(lang);
  localStorage.setItem("portfolio_lang", lang);
}

/* let typingTimer = null;*/
function startTyping(lang) {
  const target = document.getElementById("typeTarget");
  if (!target) return;

  const lines = lang === "fr"
    ? ["analyse de casse & prévision SAV", "NLP sur logs techniques", "tarification actuariat / pricing"]
    : ["breakage analytics & repair forecasting", "NLP on technical logs", "actuarial pricing / ratemaking"];

  let i = 0, j = 0, deleting = false;
  clearInterval(typingTimer);

  typingTimer = setInterval(() => {
    const cur = lines[i];
    if (!deleting) {
      j++;
      target.textContent = cur.slice(0, j);
      if (j >= cur.length) { deleting = true; }
    } else {
      j--;
      target.textContent = cur.slice(0, j);
      if (j <= 0) { deleting = false; i = (i + 1) % lines.length; }
    }
  }, 60);
}

/*let activeFilter = "all";*/
function renderProjects() {
  const lang = document.documentElement.dataset.lang || "fr";
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const q = (document.getElementById("searchInput")?.value || "").toLowerCase();

  const items = projects.filter(p => {
    const okFilter = activeFilter === "all" || p.tags.includes(activeFilter);
    const t = p[lang].title.toLowerCase();
    const d = p[lang].desc.toLowerCase();
    const okSearch = !q || t.includes(q) || d.includes(q) || p.tags.join(" ").includes(q);
    return okFilter && okSearch;
  });

  grid.innerHTML = items.map(p => {
    const data = p[lang];
    const bullets = data.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");
    const tags = p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const link = data.link && data.link !== "#"
      ? `<a class="btn btn-glass" href="${data.link}" target="_blank" rel="noreferrer">${escapeHtml(data.linkLabel)}</a>`
      : `<button class="btn btn-glass" type="button" onclick="alert('${lang === "fr" ? "Ajoute ton lien (repo, rapport, dashboard) dans script.js 🙂" : "Add your link (repo, report, dashboard) in script.js 🙂"}')">${escapeHtml(data.linkLabel)}</button>`;

    return `
      <article class="card glass project">
        <h3>${escapeHtml(data.title)}</h3>
        <p>${escapeHtml(data.desc)}</p>
        <ul class="list">${bullets}</ul>
        <div class="tags">${tags}</div>
        <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
          ${link}
        </div>
      </article>
    `;
  }).join("");

  const stat = document.getElementById("statProjects");
  if (stat) stat.textContent = String(projects.length);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".pill");
  if (!btn) return;
  document.querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter || "all";
  renderProjects();
});

document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "searchInput") renderProjects();
});

document.getElementById("year")?.append(new Date().getFullYear());

document.getElementById("langBtn")?.addEventListener("click", () => {
  const cur = document.documentElement.dataset.lang || "fr";
  setLang(cur === "fr" ? "en" : "fr");
});

// init
// init
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("portfolio_lang");
  setLang(saved === "en" ? "en" : "fr");
});
/*let heroTimer = null;*/

/*function heroLines(lang){
  if (lang === "en") {
    return [
      "Hi,",
      "I’m Audrey Muaka.",
      "Data Scientist.",
      "Data Analyst.",
      "Statistician.",
      "Actuary.",
      "",
      "I love creative work —",
      "turning ideas into clear, useful solutions.",
      "",
      "I turn technical data into decisions and forecasts."
    ];
  }

  return [
    "Salut,",
    "Je suis Audrey Muaka.",
    "Data Scientist.",
    "Data Analyste.",
    "Statisticienne.",
    "Actuaire.",
    "",
    "J’aime les métiers créatifs —",
    "transformer des idées en solutions claires et utiles.",
    "",
    "Je transforme des données techniques en décisions et prévisions."
  ];
}

function startHeroTyping(lang){
  const el = document.getElementById("heroType");
  if (!el) return;

  clearInterval(heroTimer);

  const lines = heroLines(lang);
  const fullText = lines.join("\n");

  let i = 0;               // index caractères
  let deleting = false;    // option si tu veux effacer à la fin (ici non)
  el.textContent = "";

  heroTimer = setInterval(() => {
    // écrire petit à petit
    i++;
    el.textContent = fullText.slice(0, i);

    // stop quand fini
    if (i >= fullText.length) {
      clearInterval(heroTimer);
    }
  }, 22); // vitesse (plus petit = plus rapide)
}
*/
// ===== HERO: phrase par phrase (écrire -> pause -> effacer -> suivante) =====
let heroTimeout = null;

function heroPhrases(lang) {
  return (lang === "en")
    ? [
       "Hello 👋",
       "I'm Audrey",
       "Data Scientist",
       "Statistician",
       "I explore data",
       "discover patterns",
       "and build models that support better decisions"
      ]
    : [
        "Hello 👋",
        "Je suis Audrey",
        "Data Scientist",
        //"Data Analyste",
        "Statisticienne",
        "Exploratrice de données",
        "J'aime découvrir des patterns", 
        "et construire des modèles qui aident à prendre de meilleures décisions",
        
        
      ];
}

function stopHeroLoop() {
  if (heroTimeout) clearTimeout(heroTimeout);
  heroTimeout = null;
}

function startHeroLoop(lang) {
  const el = document.getElementById("heroType");
  if (!el) return;

  stopHeroLoop();
  el.textContent = "";

  const phrases = heroPhrases(lang);

  // réglages (tu peux ajuster)
  const typeSpeed = 45;     // vitesse écriture (ms)
  const deleteSpeed = 28;   // vitesse effacement
  const holdAfterType = 900;  // pause après phrase écrite
  const holdAfterDelete = 250; // pause après effacement

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      // écrire
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);

      if (charIndex >= phrase.length) {
        // phrase terminée -> pause -> passer en mode effacement
        heroTimeout = setTimeout(() => {
          deleting = true;
          tick();
        }, holdAfterType);
        return;
      }

      heroTimeout = setTimeout(tick, typeSpeed);

    } else {
      // effacer
      charIndex--;
      el.textContent = phrase.slice(0, Math.max(0, charIndex));

      if (charIndex <= 0) {
        // phrase effacée -> pause -> prochaine phrase
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;

        heroTimeout = setTimeout(tick, holdAfterDelete);
        return;
      }

      heroTimeout = setTimeout(tick, deleteSpeed);
    }
  }

  tick();
}

/*window.addEventListener("load", () => {

  setTimeout(() => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(()=>{
      preloader.style.display = "none";
    },600);

  },1800);

});*/
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  }, 2400);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });

    document.addEventListener("click", (e) => {
      const clickedInsideMenu = navLinks.contains(e.target);
      const clickedToggle = toggle.contains(e.target);

      if (!clickedInsideMenu && !clickedToggle) {
        navLinks.classList.remove("active");
      }
    });
  }
});



