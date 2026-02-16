document.addEventListener("DOMContentLoaded", () => {
  const FR_DOMAIN = "seen-ingenierie.ca";
  const EN_DOMAIN = "seen-engineering.com";
  const hostname = window.location.hostname.toLowerCase();

  function detectDomainLanguage() {
    if (hostname.includes("ingenierie")) return "fr";
    if (hostname.includes("engineering")) return "en";
    return "en";
  }

  // We still remember the user's preference on a given domain,
  // but the toggle will switch domains (premium UX you requested).
  let lang = localStorage.getItem("seen_lang") || detectDomainLanguage();
  if (lang !== "en" && lang !== "fr") lang = detectDomainLanguage();

  const i18n = {
    en: {
      brand_name: "SEEN Engineering",
      brand_sub: "Engineering Services",
      brand_legal: "SEEN Engineering L.L.P.",

      cta_header: "Contact",
      cta_primary: "Explore Services",
      cta_secondary: "Contact",

      pill: "Professional Engineering • Québec & Canada",
      h1: "Engineering with Vision.",
      lead:
        "SEEN Engineering provides clear, code-compliant and constructible engineering solutions with a strong focus on electrical systems and power distribution.",

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

      footer_sub: "Engineering with Vision",
      footer_legal: "Operating in Québec as SEEN Ingénierie S.E.N.C.R.L.",

      sending: "Sending…",
      sent: "Message sent. Redirecting…",
      error_generic: "Submission failed. Please try again.",
      error_network: "Network error. Please try again.",

      // STEP 3: per-language SEO
      seo_title: "SEEN Engineering | Electrical Engineering Services in Canada",
      seo_desc:
        "SEEN Engineering provides electrical engineering services across Québec and Canada: power distribution, utility coordination, and technical deliverables."
    },

    fr: {
      brand_name: "SEEN Ingénierie",
      brand_sub: "Services d’ingénierie",
      brand_legal: "SEEN Ingénierie S.E.N.C.R.L.",

      cta_header: "Nous joindre",
      cta_primary: "Voir les services",
      cta_secondary: "Nous joindre",

      pill: "Génie professionnel • Québec & Canada",
      h1: "L’ingénierie avec vision.",
      lead:
        "SEEN Ingénierie offre des services d’ingénierie clairs, conformes aux codes et constructibles, avec un fort accent sur les systèmes électriques et la distribution de puissance.",

      trust1_title: "Bilingue",
      trust1_text: "Livrables FR / EN",
      trust2_title: "Conforme",
      trust2_text: "Approche axée sur les codes",
      trust3_title: "Pratique",
      trust3_text: "Designs constructibles",

      card_title: "Ce que nous faisons",
      card_li1: "Conseil et conception en génie électrique",
      card_li2: "Distribution et études d’entrée de service",
      card_li3: "Schémas unifilaires et livrables techniques",
      card_li4: "Coordination des utilités (Hydro-Québec)",
      card_li5: "Support d’ingénierie pour entrepreneurs et clients",

      services_h2: "Services",
      services_p: "Une portée claire, des livrables propres et une ingénierie conforme.",
      s1_h3: "Génie électrique",
      s1_p: "Conception, calculs et documentation.",
      s2_h3: "Distribution de puissance",
      s2_p: "Entrée de service, distribution et stratégie de mesurage.",
      s3_h3: "Coordination des utilités",
      s3_p: "Demandes Hydro-Québec et suivis techniques.",

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

      footer_sub: "L’ingénierie avec vision",
      footer_legal: "Exerçant au Québec sous le nom SEEN Ingénierie S.E.N.C.R.L.",

      sending: "Envoi en cours…",
      sent: "Message envoyé. Redirection…",
      error_generic: "Échec de l’envoi. Veuillez réessayer.",
      error_network: "Erreur réseau. Veuillez réessayer.",

      // STEP 3: per-language SEO
      seo_title: "SEEN Ingénierie | Services d’ingénierie électrique au Québec",
      seo_desc:
        "SEEN Ingénierie offre des services d’ingénierie électrique au Québec et au Canada : distribution, coordination utilités et livrables techniques."
    }
  };

  function setMetaDescription(content) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  function updateSchemaForLanguage() {
    const schemaEl = document.getElementById("orgSchema");
    if (!schemaEl) return;

    const base = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "email": "info@seen-ingenierie.ca",
      "areaServed": { "@type": "Country", "name": "Canada" }
    };

    const schema =
      lang === "fr"
        ? {
            ...base,
            name: "SEEN Ingénierie",
            legalName: "SEEN Ingénierie S.E.N.C.R.L.",
            url: `https://${FR_DOMAIN}/`
          }
        : {
            ...base,
            name: "SEEN Engineering",
            legalName: "SEEN Engineering L.L.P.",
            url: `https://${EN_DOMAIN}/`
          };

    schemaEl.textContent = JSON.stringify(schema, null, 2);
  }

  function applyI18n() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = i18n?.[lang]?.[key];
      if (val) el.textContent = val;
    });

    // STEP 3: language-based SEO title + meta description
    document.title = i18n[lang].seo_title;
    setMetaDescription(i18n[lang].seo_desc);

    // STEP 4 companion: keep schema consistent with language
    updateSchemaForLanguage();

    localStorage.setItem("seen_lang", lang);

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) toggleBtn.textContent = (lang === "en") ? "FR" : "EN";
  }

  // Premium behavior: toggle switches DOMAINS (no domain buttons shown)
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const toFR = lang === "en";
      const currentPath = window.location.pathname + window.location.search + window.location.hash;
      localStorage.setItem("seen_lang", toFR ? "fr" : "en");
      window.location.href = `https://${toFR ? FR_DOMAIN : EN_DOMAIN}${currentPath}`;
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Email (obfuscated; not written as plain string in HTML source)
  const emailUser = "info";
  const emailDomain = "seen-ingenierie";
  const emailTld = "ca";
  const email = `${emailUser}@${emailDomain}.${emailTld}`;

  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }

  // Form submission (AJAX) + redirect to thank-you pages
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (form) {
    form.reset();

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

  applyI18n();
});
