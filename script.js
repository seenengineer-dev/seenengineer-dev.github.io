document.addEventListener("DOMContentLoaded", () => {

  const i18n = {
    en: {
      // Header/footer
      brand_sub: "Engineering Services",
      cta_header: "Contact",
      footer_sub: "Engineering with Vision",
      footer_legal: "Operating in Québec as SEEN Services d’ingénierie",

      // Hero
      pill: "Professional Engineering • Québec & Canada",
      h1: "Engineering with Vision.",
      lead: "SEEN Engineering Services provides clear, code-compliant and constructible engineering solutions with a strong focus on electrical systems and power distribution.",
      cta_primary: "Explore Services",
      cta_secondary: "Contact",
      trust1_title: "Bilingual",
      trust1_text: "FR / EN deliverables",
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

      sending: "Sending…",
      sent: "Message sent. Redirecting…",
      error_generic: "Submission failed. Please try again.",
      error_network: "Network error. Please try again."
    },

    fr: {
      // Header/footer
      brand_sub: "Services d’ingénierie",
      cta_header: "Nous joindre",
      footer_sub: "L’ingénierie avec vision",
      footer_legal: "Exerçant au Québec sous le nom SEEN Services d’ingénierie",

      // Hero
      pill: "Génie professionnel • Québec & Canada",
      h1: "L’ingénierie avec vision.",
      lead: "SEEN Engineering Services offre des solutions d’ingénierie claires, conformes aux codes et constructibles, avec un fort accent sur les systèmes électriques et la distribution de puissance.",
      cta_primary: "Voir les services",
      cta_secondary: "Nous joindre",
      trust1_title: "Bilingue",
      trust1_text: "Livrables FR / EN",
      trust2_title: "Conforme",
      trust2_text: "Approche axée sur les codes",
      trust3_title: "Pratique",
      trust3_text: "Designs constructibles",

      // Cards / Services
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

      sending: "Envoi en cours…",
      sent: "Message envoyé. Redirection…",
      error_generic: "Échec de l’envoi. Veuillez réessayer.",
      error_network: "Erreur réseau. Veuillez réessayer."
    }
  };

  // ----- Language toggle -----
  let lang = "en";
  const toggleBtn = document.getElementById("langToggle");

  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    if (toggleBtn) toggleBtn.textContent = (lang === "en") ? "FR" : "EN";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      lang = (lang === "en") ? "fr" : "en";
      applyI18n();
      // update copy status language if visible
      const copyStatus = document.getElementById("copyStatus");
      if (copyStatus && copyStatus.style.display !== "none") {
        // leave current text; user already saw it
      }
    });
  }

  // ----- Year -----
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // (Email is never written as a single string in HTML source.)
  // ----- Email obfuscation (clean & professional) -----
const emailUser = "info";
const emailDomain = "seen-ingenierie";
const emailTld = "ca";
const email = `${emailUser}@${emailDomain}.${emailTld}`;

const emailLink = document.getElementById("emailLink");
if (emailLink) {
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;
}


  async function copyEmail() {
    if (!copyStatus) return;
    copyStatus.style.display = "block";

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.style.top = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (!ok) throw new Error("execCommand failed");
      }
      copyStatus.textContent = i18n[lang].copied;
    } catch {
      copyStatus.textContent = i18n[lang].copy_fail;
    }
  }

  if (copyBtn) copyBtn.addEventListener("click", copyEmail);

  // ----- Form submission (AJAX) + clear -----
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (form) {
    form.reset(); // clears on load / back navigation

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (statusEl) {
        statusEl.style.display = "block";
        statusEl.textContent = i18n[lang].sending;
      }

      // Subject formatting
      const name = (form.querySelector('[name="name"]')?.value || "").trim();
      const projectType = document.getElementById("projectType")?.value || "";
      const province = document.getElementById("province")?.value || "";
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
          window.location.href = "thanks.html";
          return;
        }

        if (statusEl) statusEl.textContent = i18n[lang].error_generic;
      } catch {
        if (statusEl) statusEl.textContent = i18n[lang].error_network;
      }
    });
  }

  // initial render
  applyI18n();

  console.log("SEEN script loaded ✅ (email obfuscated + copy button)");
});
