document.addEventListener("DOMContentLoaded", () => {

  const hostname = window.location.hostname.toLowerCase();

  const FR_DOMAIN = "seen-ingenierie.ca";
  const EN_DOMAIN = "seen-engineering.com";

  function detectDomainLanguage() {
    if (hostname.includes("ingenierie")) return "fr";
    if (hostname.includes("engineering")) return "en";
    return "en";
  }

  let lang = detectDomainLanguage();

  const i18n = {
    en: {
      brand_name: "SEEN Engineering",
      brand_sub: "Engineering Services",
      brand_legal: "SEEN Engineering L.L.P.",
      cta_header: "Contact",
      footer_sub: "Engineering with Vision",
      footer_legal: "Operating in Québec as SEEN Ingénierie S.E.N.C.R.L.",
      thanks_h2: "Thank you",
      thanks_p: "Your message has been sent successfully.",
      thanks_btn: "Back to home"
    },
    fr: {
      brand_name: "SEEN Ingénierie",
      brand_sub: "Services d’ingénierie",
      brand_legal: "SEEN Ingénierie S.E.N.C.R.L.",
      cta_header: "Nous joindre",
      footer_sub: "L’ingénierie avec vision",
      footer_legal: "Exerçant au Québec sous le nom SEEN Ingénierie S.E.N.C.R.L.",
      thanks_h2: "Merci",
      thanks_p: "Votre message a été envoyé avec succès.",
      thanks_btn: "Retour à l’accueil"
    }
  };

  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });
  }

  const toggleBtn = document.getElementById("langToggle");

  if (toggleBtn) {
    toggleBtn.textContent = (lang === "en") ? "FR" : "EN";

    toggleBtn.addEventListener("click", () => {
      if (lang === "en") {
        window.location.href = `https://${FR_DOMAIN}`;
      } else {
        window.location.href = `https://${EN_DOMAIN}`;
      }
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const emailUser = "info";
  const emailDomain = "seen-ingenierie";
  const emailTld = "ca";
  const email = `${emailUser}@${emailDomain}.${emailTld}`;

  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }

  applyI18n();
});
