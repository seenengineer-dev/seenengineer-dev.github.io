document.addEventListener("DOMContentLoaded", () => {
  // Language default: FR on .ca, otherwise EN
  const host = window.location.hostname.toLowerCase();
  const defaultLang = host.includes("ingenierie") ? "fr" : "en";

  let lang = localStorage.getItem("seen_lang") || defaultLang;
  if (lang !== "en" && lang !== "fr") lang = defaultLang;

  // Cookie consent: "accepted" | "declined" | null
  const consentKey = "seen_cookie_consent";
  const consent = localStorage.getItem(consentKey);

  const i18n = {
    en: {
      brand_name: "SEEN Engineering",
      brand_sub: "Engineering Services",
      brand_legal: "SEEN Engineering L.L.P.",
      footer_sub: "Engineering with Vision",
      footer_legal: "Operating in Québec as SEEN Ingénierie S.E.N.C.R.L.",
      footer_privacy: "Privacy",

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
      opt_other: "Other",

      sending: "Sending…",
      sent: "Message sent. Redirecting…",
      error_generic: "Submission failed. Please try again.",
      error_network: "Network error. Please try again.",

      // Privacy page
      privacy_title: "Privacy Policy",
      privacy_updated: "Last updated: 2026-02-21",
      privacy_h2_1: "1. Who we are",
      privacy_p_1: "SEEN Engineering / SEEN Ingénierie provides engineering services in Québec and across Canada. This policy explains how we handle personal information on our website.",
      privacy_h2_2: "2. What we collect",
      privacy_li_2a: "Contact form details (name, email, project details, message).",
      privacy_li_2b: "Technical data (IP address, browser/device info) for security and analytics, when consent is given.",
      privacy_h2_3: "3. How we use it",
      privacy_li_3a: "To respond to inquiries and provide services/quotes.",
      privacy_li_3b: "To improve the website and measure performance (analytics), only if you accept cookies.",
      privacy_h2_4: "4. Sharing",
      privacy_p_4: "We do not sell personal information. We may use service providers (e.g., Formspree for form delivery, Google Analytics if consent is given) to operate the website.",
      privacy_h2_5: "5. Retention",
      privacy_p_5: "We retain information only as long as needed for the purposes above, or as required by law.",
      privacy_h2_6: "6. Your choices",
      privacy_li_6a: "You can decline analytics cookies using the cookie banner.",
      privacy_li_6b: "You can request access/correction/deletion of your personal information.",
      privacy_h2_7: "7. Contact",
      privacy_contact_line: "For privacy requests, contact:",

      // Cookie banner
      cookie_title: "Cookies",
      cookie_text: "We use cookies for analytics to improve the site. You can accept or decline.",
      cookie_accept: "Accept",
      cookie_decline: "Decline",

      // SEO
      seo_title: "SEEN Engineering | Electrical Engineering Services in Canada",
      seo_desc: "SEEN Engineering provides electrical engineering services across Québec and Canada: power distribution, utility coordination, and technical deliverables."
    },

    fr: {
      brand_name: "SEEN Ingénierie",
      brand_sub: "Services d’ingénierie",
      brand_legal: "SEEN Ingénierie S.E.N.C.R.L.",
      footer_sub: "L’ingénierie avec vision",
      footer_legal: "Exerçant au Québec sous le nom SEEN Ingénierie S.E.N.C.R.L.",
      footer_privacy: "Confidentialité",

      cta_header: "Nous joindre",
      cta_primary: "Voir les services",
      cta_secondary: "Nous joindre",
      cta_capability: "Télécharger la fiche de capacités",

      pill: "Génie professionnel • Québec & Canada",
      h1: "L’ingénierie avec vision.",
      lead: "SEEN Ingénierie offre des services d’ingénierie clairs, conformes aux codes et constructibles, avec un fort accent sur les systèmes électriques et la distribution de puissance.",

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
      contact_alt_label: "Ou écrivez-nous directement",

      f_name: "Nom",
      f_email: "Courriel",
      f_project_type: "Type de projet",
      f_province: "Province",
      f_msg: "Message",
      f_submit: "Envoyer",
      f_select_one: "Choisir",

      opt_electrical: "Génie électrique",
      opt_power: "Distribution / entrée de service",
      opt_utility: "Coordination (Hydro-Québec)",
      opt_contractor: "Support entrepreneur",
      opt_other: "Autre",

      sending: "Envoi en cours…",
      sent: "Message envoyé. Redirection…",
      error_generic: "Échec de l’envoi. Veuillez réessayer.",
      error_network: "Erreur réseau. Veuillez réessayer.",

      // Privacy page
      privacy_title: "Politique de confidentialité",
      privacy_updated: "Dernière mise à jour : 2026-02-21",
      privacy_h2_1: "1. Qui nous sommes",
      privacy_p_1: "SEEN Engineering / SEEN Ingénierie offre des services d’ingénierie au Québec et au Canada. Cette politique décrit la gestion des renseignements personnels sur notre site.",
      privacy_h2_2: "2. Ce que nous recueillons",
      privacy_li_2a: "Détails du formulaire (nom, courriel, détails du projet, message).",
      privacy_li_2b: "Données techniques (adresse IP, navigateur/appareil) à des fins de sécurité et d’analytique, si consentement.",
      privacy_h2_3: "3. Comment nous les utilisons",
      privacy_li_3a: "Répondre aux demandes et fournir nos services/devis.",
      privacy_li_3b: "Améliorer le site et mesurer la performance (analytique), seulement si vous acceptez les cookies.",
      privacy_h2_4: "4. Partage",
      privacy_p_4: "Nous ne vendons pas vos renseignements. Nous pouvons utiliser des fournisseurs (ex. Formspree pour l’envoi du formulaire, Google Analytics si consentement) pour opérer le site.",
      privacy_h2_5: "5. Conservation",
      privacy_p_5: "Nous conservons les renseignements seulement le temps nécessaire aux fins ci-dessus ou selon la loi.",
      privacy_h2_6: "6. Vos choix",
      privacy_li_6a: "Vous pouvez refuser les cookies d’analytique via la bannière.",
      privacy_li_6b: "Vous pouvez demander l’accès/la correction/la suppression de vos renseignements.",
      privacy_h2_7: "7. Contact",
      privacy_contact_line: "Pour les demandes de confidentialité, contactez :", 

      // Cookie banner
      cookie_title: "Cookies",
      cookie_text: "Nous utilisons des cookies d’analytique pour améliorer le site. Vous pouvez accepter ou refuser.",
      cookie_accept: "Accepter",
      cookie_decline: "Refuser",

      // SEO
      seo_title: "SEEN Ingénierie | Services d’ingénierie électrique au Québec",
      seo_desc: "SEEN Ingénierie offre des services d’ingénierie électrique au Québec et au Canada : distribution, coordination utilités et livrables techniques."
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
      "areaServed": { "@type": "Country", "name": "Canada" },
      "url": "https://seen-ingenierie.ca/"
    };

    const schema =
      lang === "fr"
        ? { ...base, name: "SEEN Ingénierie", legalName: "SEEN Ingénierie S.E.N.C.R.L." }
        : { ...base, name: "SEEN Engineering", legalName: "SEEN Engineering L.L.P." };

    schemaEl.textContent = JSON.stringify(schema, null, 2);
  }

  function applyI18n() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = i18n?.[lang]?.[key];
      if (val) el.textContent = val;
    });

    document.title = i18n[lang].seo_title;
    setMetaDescription(i18n[lang].seo_desc);
    updateSchemaForLanguage();

    const btn = document.getElementById("langToggle");
    if (btn) btn.textContent = (lang === "en") ? "FR" : "EN";

    localStorage.setItem("seen_lang", lang);
  }

  // Toggle language (same domain)
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      lang = (lang === "en") ? "fr" : "en";
      applyI18n();
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Email link (assembled in JS)
  const emailUser = "info";
  const emailDomain = "seen-ingenierie";
  const emailTld = "ca";
  const email = `${emailUser}@${emailDomain}.${emailTld}`;
  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }

  // Cookie banner logic
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("cookieAccept");
  const declineBtn = document.getElementById("cookieDecline");

  function hideBanner() {
    if (banner) banner.style.display = "none";
  }

  function showBanner() {
    if (banner) banner.style.display = "block";
  }

  // If GA is present, optionally set consent updates (no break if GA not loaded)
  function setAnalyticsConsent(granted) {
    try {
      if (typeof gtag === "function") {
        gtag("consent", "update", {
          analytics_storage: granted ? "granted" : "denied"
        });
      }
    } catch {}
  }

  if (!consent) {
    showBanner();
  } else {
    setAnalyticsConsent(consent === "accepted");
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem(consentKey, "accepted");
      setAnalyticsConsent(true);
      hideBanner();
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener("click", () => {
      localStorage.setItem(consentKey, "declined");
      setAnalyticsConsent(false);
      hideBanner();
    });
  }

  // Form submission (AJAX) + redirect
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
