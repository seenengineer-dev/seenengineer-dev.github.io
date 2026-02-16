document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     LANGUAGE DETECTION BY DOMAIN
     =========================== */

  const hostname = window.location.hostname;

  function detectDomainLanguage() {
    if (hostname.includes("ingenierie")) return "fr";
    if (hostname.includes("engineering")) return "en";
    return "en";
  }

  let lang = localStorage.getItem("seen_lang") || detectDomainLanguage();

  if (lang !== "en" && lang !== "fr") {
    lang = detectDomainLanguage();
  }

  /* ===========================
     i18n DICTIONARY
     =========================== */

  const i18n = {
    en: {
      brand_name: "SEEN Engineering",
      brand_legal: "SEEN Engineering L.L.P.",
      cta_header: "Contact",
      footer_legal: "SEEN Engineering L.L.P.",
      thanks_h2: "Thank you",
      thanks_p: "Your message has been sent successfully. We will get back to you shortly.",
      thanks_btn: "Back to home"
    },
    fr: {
      brand_name: "SEEN Ingénierie",
      brand_legal: "SEEN Ingénierie S.E.N.C.R.L.",
      cta_header: "Nous joindre",
      footer_legal: "SEEN Ingénierie S.E.N.C.R.L.",
      thanks_h2: "Merci",
      thanks_p: "Votre message a été envoyé avec succès. Nous vous répondrons sous peu.",
      thanks_btn: "Retour à l’accueil"
    }
  };

  /* ===========================
     APPLY LANGUAGE
     =========================== */

  function applyI18n() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    localStorage.setItem("seen_lang", lang);

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
      toggleBtn.textContent = (lang === "en") ? "FR" : "EN";
    }
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
     EMAIL OBFUSCATION
     =========================== */

  const email = "info@seen-ingenierie.ca";
  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }

  /* ===========================
     FORM SUBMISSION
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
          return;
        }

        if (statusEl) {
          statusEl.textContent = (lang === "fr")
            ? "Échec de l’envoi."
            : "Submission failed.";
        }

      } catch {
        if (statusEl) {
          statusEl.textContent = (lang === "fr")
            ? "Erreur réseau."
            : "Network error.";
        }
      }
    });
  }

  applyI18n();
});
