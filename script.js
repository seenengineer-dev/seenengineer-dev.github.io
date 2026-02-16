document.addEventListener("DOMContentLoaded", () => {

  const FR_DOMAIN = "seen-ingenierie.ca";
  const EN_DOMAIN = "seen-engineering.com";

  const hostname = window.location.hostname.toLowerCase();

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
      footer_sub: "Engineering with Vision",
      footer_legal: "Operating in Québec as SEEN Ingénierie S.E.N.C.R.L.",
      cta_header: "Contact",
      thanks_h2: "Thank you",
      thanks_p: "Your message has been sent successfully.",
      thanks_btn: "Back to home",
      seo_title: "SEEN Engineering | Electrical Engineering Services in Canada",
      seo_desc: "SEEN Engineering provides electrical engineering services across Québec and Canada."
    },
    fr: {
      brand_name: "SEEN Ingénierie",
      brand_sub: "Services d’ingénierie",
      brand_legal: "SEEN Ingénierie S.E.N.C.R.L.",
      footer_sub: "L’ingénierie avec vision",
      footer_legal: "Exerçant au Québec sous le nom SEEN Ingénierie S.E.N.C.R.L.",
      cta_header: "Nous joindre",
      thanks_h2: "Merci",
      thanks_p: "Votre message a été envoyé avec succès.",
      thanks_btn: "Retour à l’accueil",
      seo_title: "SEEN Ingénierie | Services d’ingénierie électrique au Québec",
      seo_desc: "SEEN Ingénierie offre des services d’ingénierie électrique au Québec et au Canada."
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

  function applyI18n() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    document.title = i18n[lang].seo_title;
    setMetaDescription(i18n[lang].seo_desc);

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
      toggleBtn.textContent = (lang === "en") ? "FR" : "EN";
    }
  }

  const toggleBtn = document.getElementById("langToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {

      const currentPath = window.location.pathname +
                          window.location.search +
                          window.location.hash;

      if (lang === "en") {
        window.location.href = `https://${FR_DOMAIN}${currentPath}`;
      } else {
        window.location.href = `https://${EN_DOMAIN}${currentPath}`;
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
