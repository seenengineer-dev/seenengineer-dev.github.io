document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     LANGUAGE CONTENT (i18n)
     =========================== */
  const i18n = {
    en: {
      // Header / Footer
      brand_sub: "Engineering Services",
      cta_header: "Contact",
      footer_sub: "Engineering with Vision",
      footer_legal: "Operating in Québec as SEEN Services d’ingénierie",

      // Hero
      pill: "Professional Engineering • Québec & Canada",
      h1: "Engineering with Vision.",
      lead: "SEEN Engineering Services provides clear, code-compliant and constructible engineering solutions with a strong focus on electrical systems and power distribution.",

      trust1_title: "Bilingual",
      trust1_text: "FR/EN deliverables",
      trust2_title: "Compliant",
      trust2_text: "Code-driven engineering",
      trust3_title: "Practical",
      trust3_text: "Buildable designs",

      // Cards / Services
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

      // Contact
      contact_h2: "Contact",
      contact_p: "Contact us using the form below.",
      contact_alt_email: "Or email us directly: info@seen-ingenierie.ca",


      // Form fields
      f_name: "Name",
      f_email: "Email",
      f_company: "Company (optional)",
      f_phone: "Phone (optional)",
      f_project_type: "Project type",
      f_province: "Province / Territory",
      f_select_one: "Select one",
      opt_electrical: "Electrical engineering",
      opt_power: "Power distribution / Service entrance",
      opt_utility: "Utility coordination (Hydro-Québec)",
      opt_contractor: "Contractor support",
      opt_other: "Other",
      f_msg: "Message",
      f_files: "Attach files (PDF, drawings, images)",
      f_files_hint: "Tip: If uploads don’t work on your Formspree plan, remove this field and email attachments directly.",
      f_submit: "Send",

      // Status messages
      sending: "Sending…",
      sent: "Message sent. Redirecting…",
      error_generic: "Submission failed. Please try again.",
      error_network: "Network error. Please try again."
    },

    fr: {
      // Header / Footer
      brand_sub: "Services d’ingénierie",
      cta_header: "Nous joindre",
      footer_sub: "Ingénierie avec vision",
      footer_legal: "Exerçant au Québec sous le nom SEEN Services d’ingénierie",

      // Hero
      pill: "Génie professionnel • Québec & Canada",
      h1: "L’ingénierie avec vision.",
      lead: "SEEN Ingénierie offre des solutions d’ingénierie claires, conformes aux codes et constructibles, avec un fort accent sur les systèmes électriques et la distribution de puissance.",

      trust1_title: "Bilingue",
      trust1_text: "Livrables FR/EN",
      trust2_title: "Conforme",
      trust2_text: "Approche axée sur les codes",
      trust3_title: "Pratique",
      trust3_text: "Designs constructibles",

      // Cards / Services
      card_title: "Ce que nous faisons",
      card_li1: "Conseil et conception en génie électrique",
      card_li2: "Distribution & études d’entrée de service",
      card_li3: "Schémas unifilaires & livrables techniques",
      card_li4: "Coordination utilités (Hydro-Québec)",
      card_li5: "Support d’ingénierie pour entrepreneurs et clients",

      services_h2: "Services",
      services_p: "Une portée claire, des livrables propres et une ingénierie conforme.",
      s1_h3: "Génie électrique",
      s1_p: "Conception, calculs et documentation.",
      s2_h3: "Distribution de puissance",
      s2_p: "Entrée de service, distribution et stratégie de mesurage.",
      s3_h3: "Coordination utilités",
      s3_p: "Demandes Hydro-Québec et suivis techniques.",

      // Contact
      contact_h2: "Nous joindre",
      contact_p: "Contactez-nous via le formulaire ci-dessous.",
      contact_alt_email: "Ou écrivez-nous directement : info@seen-ingenierie.ca",


      // Form fields
      f_name: "Nom",
      f_email: "Courriel",
      f_company: "Entreprise (optionnel)",
      f_phone: "Téléphone (optionnel)",
      f_project_type: "Type de projet",
      f_province: "Province / territoire",
      f_select_one: "Choisir",
      opt_electrical: "Génie électrique",
      opt_power: "Distribution / entrée de service",
      opt_utility: "Coordination utilités (Hydro-Québec)",
      opt_contractor: "Support entrepreneur",
      opt_other: "Autre",
      f_msg: "Message",
      f_files: "Joindre des fichiers (PDF, plans, images)",
      f_files_hint: "Astuce : si le téléversement ne fonctionne pas avec votre forfait Formspree, retirez ce champ et envoyez les fichiers par courriel.",
      f_submit: "Envoyer",

      // Status messages
      sending: "Envoi en cours…",
      sent: "Message envoyé. Redirection…",
      error_generic: "Échec de l’envoi. Veuillez réessayer.",
      error_network: "Erreur réseau. Veuillez réessayer."
    }
  };

  /* ===========================
     LANGUAGE TOGGLE
     =========================== */
  let lang = "en";
  const toggleBtn = document.getElementById("langToggle");

  function applyI18n() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    if (toggleBtn) toggleBtn.textContent = (lang === "en") ? "FR" : "EN";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      lang = (lang === "en") ? "fr" : "en";
      applyI18n();
    });
  }

  /* ===========================
     FORM SUBMISSION (AJAX)
     =========================== */
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (form) {
    // Clear on load (covers back-navigation)
    form.reset();

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (statusEl) {
        statusEl.style.display = "block";
        statusEl.textContent = i18n[lang].sending;
      }

      const name = (form.querySelector('[name="name"]')?.value || "").trim();
      const company = (form.querySelector('[name="company"]')?.value || "").trim();
      const projectType = (document.getElementById("projectType")?.value || "").trim();
      const province = (document.getElementById("province")?.value || "").trim();
      const who = company || name || "Client";

      const subjectField = document.getElementById("subjectField");
      if (subjectField) {
        subjectField.value = `SEEN Inquiry | ${projectType || "General"} | ${province || "NA"} | ${who}`;
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          form.reset(); // clear before redirect
          if (statusEl) statusEl.textContent = i18n[lang].sent;

          // Relative redirect (best for GitHub Pages)
          window.location.href = "thanks.html";
          return;
        }

        if (statusEl) statusEl.textContent = i18n[lang].error_generic;

      } catch (err) {
        if (statusEl) statusEl.textContent = i18n[lang].error_network;
      }
    });
  }

  /* ===========================
     FOOTER YEAR
     =========================== */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyI18n();

  console.log("SEEN script loaded — header/footer bilingual ✅");
});
