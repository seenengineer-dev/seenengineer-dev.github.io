document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     LANGUAGE STORAGE
  =========================== */

  let lang = localStorage.getItem("seen_lang") || "en";
  if (lang !== "en" && lang !== "fr") lang = "en";

  /* ===========================
     i18n DICTIONARY
  =========================== */

  const i18n = {
    en: {
      brand_name: "SEEN Engineering",
      brand_sub: "Engineering Services",
      brand_legal: "SEEN Engineering L.L.P.",
      footer_sub: "Engineering with Vision",
      footer_legal: "Operating in Québec as SEEN Ingénierie S.E.N.C.R.L.",

      cta_header: "Contact",
      cta_primary: "Explore Services",
      cta_secondary: "Contact",
      cta_capability: "Download Capability Statement",

      pill: "Professional Engineering • Québec & Canada",
      h1: "Engineering with Vision.",
      lead: "SEEN Engineering provides clear, code-compliant and constructible engineering solutions with a strong focus on electrical systems and power distribution.",

      trust1_title: "Bilingual",
      trust1_text: "FR / EN deliverables",
      trust2_title: "Compliant",
      trust2_text: "Code-driven engineering",
      trust3_title: "Practical",
      trust3_text: "Buildable designs",

      card_title: "What we do",
      card_li1: "Electrical engineering consulting & design",
      card_li2: "Power distribution & service entrance studies",
      card_li3: "Single-line diagrams & technical deliverables",
      card_li4: "Utility coordination (Hydro-Québec)",
      card_li5: "Engineering support for contractors & owners",

      services_h2: "Services",
      services_p: "Clear scope, clean deliverables, and code-compliant engineering.",
      s1_h3: "Electrical Engineering",
      s1_p: "Design, calculations and documentation.",
      s2_h3: "Power Distribution",
      s2_p: "Service entrance, distribution and metering strategy.",
      s3_h3: "Utility Coordination",
      s3_p: "Hydro-Québec requests and technical follow-ups.",

      contact_h2: "Contact",
      contact_p: "Contact us using the form below.",
      contact_alt_label: "Or email us directly",

      f_name: "Name",
      f_email: "Email",
      f_project_type: "Project type",
      f_province: "Province",
      f_msg: "Message",
      f_submit: "Send",
      f_select_one: "Select one",

      opt_electrical: "Electrical engineering",
      opt_power: "Power distribution / Service entrance",
      opt_utility: "Utility coordination (Hydro-Québec)",
      opt_contractor: "Contractor support",
      opt_other: "Other"
    },

    fr: {
      brand_name: "SEEN Ingénierie",
      brand_sub: "Services d’ingénierie",
      brand_legal: "SEEN Ingénierie S.E.N.C.R.L.",
      footer_sub: "L’ingénierie avec vision",
      footer_legal: "Exerçant au Québec sous le nom SEEN Ingénierie S.E.N.C.R.L.",

      cta_header: "Nous joindre",
      cta_primary: "Voir les services",
      cta_secondary: "Nous joindre",
      cta_capability: "Télécharger la fiche de capacités",

      pill: "Génie professionnel • Québec & Canada",
      h1: "L’ingénierie avec vision.",
      lead: "SEEN Ingénierie offre des solutions claires, conformes aux codes et constructibles, avec un fort accent sur les systèmes électriques et la distribution de puissance.",

      trust1_title: "Bilingue",
      trust1_text: "Livrables FR / EN",
      trust2_title: "Conforme",
      trust2_text: "Ingénierie basée sur les codes",
      trust3_title: "Pratique",
      trust3_text: "Conceptions constructibles",

      card_title: "Nos services",
      card_li1: "Conseil et conception en génie électrique",
      card_li2: "Distribution électrique et études d’entrée de service",
      card_li3: "Schémas unifilaires et livrables techniques",
      card_li4: "Coordination avec Hydro-Québec",
      card_li5: "Support d’ingénierie aux entrepreneurs et propriétaires",

      services_h2: "Services",
      services_p: "Portée claire, livrables précis et ingénierie conforme aux codes.",
      s1_h3: "Génie électrique",
      s1_p: "Conception, calculs et documentation.",
      s2_h3: "Distribution électrique",
      s2_p: "Entrée de service, distribution et stratégie de mesurage.",
      s3_h3: "Coordination utilités",
      s3_p: "Demandes et suivis techniques avec Hydro-Québec.",

      contact_h2: "Contact",
      contact_p: "Communiquez avec nous à l’aide du formulaire ci-dessous.",
      contact_alt_label: "Ou écrivez-nous directement",

      f_name: "Nom",
      f_email: "Courriel",
      f_project_type: "Type de projet",
      f_province: "Province",
      f_msg: "Message",
      f_submit: "Envoyer",
      f_select_one: "Sélectionner",

      opt_electrical: "Génie électrique",
      opt_power: "Distribution / Entrée de service",
      opt_utility: "Coordination (Hydro-Québec)",
      opt_contractor: "Support entrepreneur",
      opt_other: "Autre"
    }
  };

  /* ===========================
     APPLY LANGUAGE
  =========================== */

  function applyLanguage() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });

    document.title = (lang === "fr")
      ? "SEEN Ingénierie | Services d’ingénierie"
      : "SEEN Engineering | Engineering Services";

    document.querySelector('meta[name="description"]').setAttribute(
      "content",
      (lang === "fr")
        ? "SEEN Ingénierie — Services d’ingénierie au Québec et au Canada."
        : "SEEN Engineering — Engineering Services in Québec and Canada."
    );

    localStorage.setItem("seen_lang", lang);

    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = (lang === "en") ? "FR" : "EN";
  }

  /* ===========================
     TOGGLE BUTTON
  =========================== */

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      lang = (lang === "en") ? "fr" : "en";
      applyLanguage();
    });
  }

  /* ===========================
     EMAIL INJECTION
  =========================== */

  const email = "info@seen-ingenierie.ca";
  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }

  /* ===========================
     FORM
  =========================== */

  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (form) {
    form.reset();

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (statusEl) {
        statusEl.style.display = "block";
        statusEl.textContent = (lang === "fr") ? "Envoi en cours…" : "Sending…";
      }

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });

        if (res.ok) {
          form.reset();
          window.location.href = (lang === "fr") ? "merci.html" : "thanks.html";
        } else {
          statusEl.textContent = (lang === "fr") ? "Échec de l’envoi." : "Submission failed.";
        }

      } catch {
        statusEl.textContent = (lang === "fr") ? "Erreur réseau." : "Network error.";
      }
    });
  }

  applyLanguage();
});
