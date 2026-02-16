document.addEventListener("DOMContentLoaded", () => {
  /* ===========================
     LANGUAGE DETECTION BY DOMAIN
     =========================== */
  const hostname = window.location.hostname.toLowerCase();

  function detectDomainLanguage() {
    if (hostname.includes("seen-ingenierie") || hostname.includes("ingenierie")) return "fr";
    if (hostname.includes("seen-engineering") || hostname.includes("engineering")) return "en";
    return "en";
  }

  let lang = localStorage.getItem("seen_lang") || detectDomainLanguage();
  if (lang !== "en" && lang !== "fr") lang = detectDomainLanguage();

  /* ===========================
     i18n DICTIONARY
     =========================== */
  const i18n = {
    en: {
      // Brand
      brand_name: "SEEN Engineering",
      // ✅ Header subtext you asked for
      brand_sub: "Engineering Services",
      // Legal
      brand_legal: "SEEN Engineering L.L.P.",

      // Header / CTAs
      cta_header: "Contact",
      cta_primary: "Explore Services",
      cta_secondary: "Contact",

      // Hero
      pill: "Professional Engineering • Québec & Canada",
      h1: "Engineering with Vision.",
      lead:
        "SEEN Engineering provides clear, code-compliant and constructible engineering solutions with a strong focus on electrical systems and power distribution.",

      // Trust
      trust1_title: "Bilingual",
      trust1_text: "FR / EN deliverables",
      trust2_title: "Compliant",
      trust2_text: "Code-driven engineering",
      trust3_title: "Practical",
      trust3_text: "Buildable designs",

      // Card
      card_title: "What we do",
      card_li1: "Electrical engineering consulting & design",
      card_li2: "Power distribution & service entrance studies",
      card_li3: "Single-line diagrams & technical deliverables",
      card_li4: "Utility coordination (Hydro-Québec)",
      card_li5: "Engineering support for contractors & owners",

      // Services
      services_h2: "Services",
      services_p: "Clear scope, clean deliverables, and code-compliant engineering.",
      s1_h3: "Electrical Engineering",
      s1_p: "Design, calculations and documentation.",
      s2_h3: "Power Distribution",
      s2_p: "Service entrance, distribution and metering strategy.",
      s3_h3: "Utility Coordination",
      s3_p: "Hydro-Québec requests and technical follow-ups.",

      // Contact
      contact_h2: "Contact",
      contact_p: "Contact us using the form below.",
      f_name: "Name",
      f_email: "Email",
      f_project_type: "Project type",
      f_province: "Province",
      f_select_one: "Select one",
      opt_electrical: "Electrical engineering",
      opt_power: "Power distribution / Service entrance",
      opt_utility: "Utility coordination (Hydro-Québec)",
      opt_contractor: "Contractor support",
      opt_other: "Other",
      f_msg: "Message",
      f_submit: "Send",
      contact_alt_label: "Or email us directly",

      // Footer
      footer_sub: "Engineering with Vision",
      footer_legal: "Operating in Québec as SEEN Ingénierie S.E.N.C.R.L.",

      // Form status
      sending: "Sending…",
      sent: "Message sent. Redirecting…",
      error_generic: "Submission failed. Please try again.",
      error_network: "Network error. Please try again."
    },

    fr: {
      // Brand
      brand_name: "SEEN Ingénierie",
      // ✅ French header subtext you asked for
      brand_sub: "Services d’ingénierie",
      // Legal
      brand_legal: "SEEN Ingénierie S.E.N.C.R.L.",

      // Header / CTAs
      cta_header: "Nous joindre",
      cta_primary: "Voir les services",
      cta_secondary: "Nous joindre",

      // Hero
      pill: "Génie professionnel • Québec & Canada",
      h1: "L’ingénierie avec vision.",
      lead:
        "SEEN Ingénierie offre des solutions d’ingénierie claires, conformes aux codes et constructibles, avec un fort accent sur les systèmes électriques et la distribution de puissance.",

      // Trust
      trust1_title: "Bilingue",
      trust1_text: "Livrables FR / EN",
      trust2_title: "Conforme",
      trust2_text: "Approche axée sur les codes",
      trust3_title: "Pratique",
      trust3_text: "Designs constructibles",

      // Card
      card_title: "Ce que nous faisons",
      card_li1: "Conseil et conception en génie électrique",
      card_li2: "Distribution et études d’entrée de service",
      card_li3: "Schémas unifilaires et livrables techniques",
      card_li4: "Coordination des utilités (Hydro-Québec)",
      card_li5: "Support d’ingénierie pour entrepreneurs et clients",

      // Services
      services_h2: "Services",
      services_p: "Une portée claire, des livrables propres et une ingénierie conforme.",
      s1_h3: "Génie électrique",
      s1_p: "Conception, calculs et documentation.",
      s2_h3: "Distribution de puissance",
      s2_p: "Entrée de service, distribution et stratégie de mesurage.",
      s3_h3: "Coordination des utilités",
      s3_p: "Demandes Hydro-Québec et suivis techniques.",

      // Contact
      contact_h2: "Nous joindre",
      contact_p: "Contactez-nous à l’aide du formulaire ci-dessous.",
      f_name: "Nom",
      f_email: "Courriel",
      f_project_type: "Type de projet",
      f_province: "Province",
      f_select_one: "Choisir",
      opt_electrical: "Génie électrique",
      opt_power: "Distribution / entrée de service",
      opt_utility: "Coordination des utilités (Hydro-Québec)",
      opt_contractor: "Support entrepreneur",
      opt_other: "Autre",
      f_msg: "Message",
      f_submit: "Envoyer",
      contact_alt_label: "Ou écrivez-nous directement",

      // Footer
      footer_sub: "L’ingénierie avec vision",
      footer_legal: "Exerçant au Québec sous le nom SEEN Ingénierie S.E.N.C.R.L.",

      // Form status
      sending: "Envoi en cours…",
      sent: "Message envoyé. Redirection…",
      error_generic: "Échec de l’envoi. Veuillez réessayer.",
      error_network: "Erreur réseau. Veuillez réessayer."
    }
  };

  /* ===========================
     APPLY LANGUAGE
     =========================== */
  function applyI18n() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = i18n?.[lang]?.[key];
      if (val) el.textContent = val;
    });

    localStorage.setItem("seen_lang", lang);

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) toggleBtn.textContent = (lang === "en") ? "FR" : "EN";
  }

  /* ===========================
     TOGGLE
     =========================== */
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      lang = (lang === "en") ? "fr" : "en";
      applyI18n();
    });
  }

  /* ===========================
     FOOTER YEAR
     =========================== */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===========================
     EMAIL LINK (obfuscated in JS)
     =========================== */
  const emailUser = "info";
  const emailDomain = "seen-ingenierie";
  const emailTld = "ca";
  const email = `${emailUser}@${emailDomain}.${emailTld}`;

  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }

  /* ===========================
     FORM SUBMISSION (AJAX)
     Redirect based on current language
     =========================== */
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (form) {
    form.reset(); // clear on load/back

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (statusEl) {
        statusEl.style.display = "block";
        statusEl.textContent = i18n[lang].sending;
      }

      const name = (form.querySelector('[name="name"]')?.value || "").trim();
      const projectType = (document.getElementById("projectType")?.value || "").trim();
      const province = (document.getElementById("province")?.value || "").trim();
      const who = name || "Client";

      const subjectField = document.getElementById("subjectField");
      if (subjectField) {
        subjectField.value = `SEEN Inquiry | ${projectType || "General"} | ${province || "NA"} | ${who}`;
      }

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });

        if (res.ok) {
          form.reset();
          if (statusEl) statusEl.textContent = i18n[lang].sent;
          window.location.href = (lang === "fr") ? "merci.html" : "thanks.html";
          return;
        }

        if (statusEl) statusEl.textContent = i18n[lang].error_generic;
      } catch {
        if (statusEl) statusEl.textContent = i18n[lang].error_network;
      }
    });
  }

  /* ===========================
     INITIAL RENDER
     =========================== */
  applyI18n();
});
