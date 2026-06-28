// FR/EN content for the F10 Consulting landing page.
// Ported verbatim from the Claude Design prototype (F10 Consulting.dc.html, renderVals()).

export type Lang = "fr" | "en";

export interface NavLink {
  label: string;
  href: string;
}
export interface Stat {
  num: string;
  label: string;
}
export interface Destination {
  code: string;
  name: string;
  note: string;
}
export interface Step {
  n: string;
  title: string;
  desc: string;
}
export interface Advantage {
  icon: string;
  title: string;
  desc: string;
}
export interface Partner {
  name: string;
  tag: string;
  /** Logo file in /public/partners; falls back to a wordmark when absent. */
  logo?: string;
}
export interface Testimonial {
  initials: string;
  name: string;
  place: string;
  quote: string;
}
export interface Faq {
  q: string;
  a: string;
}

export interface Strings {
  navCta: string;
  heroEyebrow: string;
  heroSince: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustText: string;
  badgeDest: string;
  badgeYear: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutBadge: string;
  aboutExp: string;
  dirEyebrow: string;
  dirQuote: string;
  dirName: string;
  dirRole: string;
  servEyebrow: string;
  servTitle: string;
  servSub: string;
  serv1Title: string;
  serv1Desc: string;
  serv2Title: string;
  serv2Desc: string;
  serv3Title: string;
  serv3Desc: string;
  destEyebrow: string;
  destTitle: string;
  destSub: string;
  stepsEyebrow: string;
  stepsTitle: string;
  whyEyebrow: string;
  whyTitle: string;
  partnersEyebrow: string;
  partnersTitle: string;
  partnersSub: string;
  partnersIntLabel: string;
  partnersExtLabel: string;
  testiTitle: string;
  contactEyebrow: string;
  contactTitle: string;
  contactSub: string;
  waLabel: string;
  waValue: string;
  emailLabel: string;
  emailValue: string;
  phoneLabel: string;
  phoneValue: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formDest: string;
  formMsg: string;
  formChoose: string;
  formSubmit: string;
  formNote: string;
  footerTagline: string;
  footerRights: string;
  footerCol1: string;
  footerCol2: string;
  footerCol3: string;
  faqEyebrow: string;
  faqTitle: string;
  faqSub: string;
}

export interface Content {
  c: Strings;
  nav: NavLink[];
  stats: Stat[];
  serv1: string[];
  serv2: string[];
  serv3: string[];
  destinations: Destination[];
  steps: Step[];
  advantages: Advantage[];
  partnersInt: Partner[];
  partnersExt: Partner[];
  testimonials: Testimonial[];
  faq: Faq[];
  aboutBullets: string[];
}

export const WHATSAPP_NUMBER = "2250702028189";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "dispartners10@gmail.com";
export const PHONE = "+2252722283643";

const FR: Strings = {
  navCta: "WhatsApp",
  heroEyebrow: "Placement universitaire à l'étranger",
  heroSince: "Depuis 2023",
  heroTitle1: "Vos études à",
  heroTitle2: "l'étranger,",
  heroTitle3: "enfin simples et sûres.",
  heroSub:
    "F10 Consulting accompagne étudiants et professionnels, de l'orientation à l'inscription, dans les meilleures universités du monde. Un seul interlocuteur, de votre première question jusqu'à votre départ.",
  ctaPrimary: "Discuter sur WhatsApp",
  ctaSecondary: "Demander une consultation",
  trustText: "Plus de 130 étudiants accompagnés depuis 2023",
  badgeDest: "Destinations",
  badgeYear: "Année de création",
  aboutEyebrow: "À propos",
  aboutTitle: "Votre facilitateur de mobilité internationale.",
  aboutP1:
    "F10 Consulting est une entreprise ivoirienne spécialisée dans le placement universitaire à l'étranger. Notre mission : simplifier la mobilité internationale, tout en garantissant un service de qualité, personnalisé et fiable.",
  aboutP2:
    "Depuis sa création en 2023, nous accompagnons des dizaines d'étudiants et de professionnels — en quête de formation continue ou de reconversion — dans toutes leurs démarches d'inscription auprès d'établissements à l'étranger.",
  aboutBadge: "by DIS PARTNERS",
  aboutExp: "Une équipe à votre écoute",
  dirEyebrow: "Mot du Directeur",
  dirQuote:
    "Étudier à l'étranger ne devrait jamais être un parcours du combattant. Chez F10 Consulting, nous mettons notre expérience, notre réseau et notre rigueur au service d'un seul objectif : transformer votre projet en réalité, sereinement.",
  dirName: "Le Directeur Général",
  dirRole: "Fondateur · F10 Consulting",
  servEyebrow: "Nos Services",
  servTitle: "Un accompagnement complet, à chaque étape.",
  servSub:
    "Du premier conseil jusqu'à votre inscription, nous prenons en charge ce qui vous freine.",
  serv1Title: "Placement universitaire",
  serv1Desc:
    "Nous identifions les programmes et établissements qui correspondent à votre profil, votre budget et vos ambitions, puis nous déposons vos candidatures.",
  serv2Title: "Accompagnement administratif",
  serv2Desc:
    "Constitution du dossier, lettres, traductions, visa : nous gérons chaque démarche avec vous, sans stress et sans erreur.",
  serv3Title: "Conseil en orientation",
  serv3Desc:
    "Un bilan personnalisé pour choisir la filière, le pays et l'université réellement faits pour vous.",
  destEyebrow: "Destinations",
  destTitle: "10 destinations, un monde d'opportunités.",
  destSub:
    "Nous plaçons nos étudiants dans des établissements reconnus à travers le monde.",
  stepsEyebrow: "Comment ça marche",
  stepsTitle: "Votre projet en 4 étapes simples.",
  whyEyebrow: "Pourquoi F10",
  whyTitle: "Pourquoi les étudiants nous font confiance.",
  partnersEyebrow: "Partenaires & Témoignages",
  partnersTitle: "Ils nous font confiance.",
  partnersSub:
    "Nous collaborons avec des institutions et réseaux reconnus, en Côte d’Ivoire et à l’international.",
  partnersIntLabel: "Partenaires internes",
  partnersExtLabel: "Partenaires externes",
  testiTitle: "Portraits d'étudiants placés",
  contactEyebrow: "Contact",
  contactTitle: "Parlons de votre projet d'études.",
  contactSub:
    "Une consultation gratuite, sans engagement. Réponse rapide sur WhatsApp.",
  waLabel: "WhatsApp",
  waValue: "+225 07 02 02 81 89",
  emailLabel: "Email",
  emailValue: "dispartners10@gmail.com",
  phoneLabel: "Téléphone",
  phoneValue: "+225 27 22 28 36 43",
  formName: "Nom complet",
  formEmail: "Email",
  formPhone: "Téléphone / WhatsApp",
  formDest: "Destination souhaitée",
  formMsg: "Votre projet en quelques mots",
  formChoose: "Sélectionnez…",
  formSubmit: "Envoyer ma demande sur WhatsApp",
  formNote:
    "En cliquant, votre demande s’ouvre dans WhatsApp, prête à envoyer.",
  footerTagline:
    "Votre facilitateur de mobilité internationale. Placement universitaire à l'étranger depuis 2023.",
  footerRights: "Tous droits réservés.",
  footerCol1: "Navigation",
  footerCol2: "Services",
  footerCol3: "Contact",
  faqEyebrow: "Questions fréquentes",
  faqTitle: "Vos questions, nos réponses.",
  faqSub:
    "L’essentiel à savoir avant de lancer votre projet d’études à l’étranger.",
};

const EN: Strings = {
  navCta: "WhatsApp",
  heroEyebrow: "University placement abroad",
  heroSince: "Since 2023",
  heroTitle1: "Studying abroad,",
  heroTitle2: "finally",
  heroTitle3: "simple and secure.",
  heroSub:
    "F10 Consulting guides students and professionals from orientation to enrollment in the world’s best universities. One single contact, from your first question to your departure.",
  ctaPrimary: "Chat on WhatsApp",
  ctaSecondary: "Request a consultation",
  trustText: "130+ students supported since 2023",
  badgeDest: "Destinations",
  badgeYear: "Year founded",
  aboutEyebrow: "About",
  aboutTitle: "Your gateway to international mobility.",
  aboutP1:
    "F10 Consulting is an Ivorian company specialised in university placement abroad. Our mission: to simplify international mobility while guaranteeing a quality, personalised and reliable service.",
  aboutP2:
    "Since 2023, we have supported dozens of students and professionals — seeking continuing education or a career change — through every step of enrolling with institutions abroad.",
  aboutBadge: "by DIS PARTNERS",
  aboutExp: "A team that listens",
  dirEyebrow: "A word from the Director",
  dirQuote:
    "Studying abroad should never feel like a battle. At F10 Consulting, we put our experience, network and rigour to work toward one goal: turning your project into reality, with peace of mind.",
  dirName: "The Managing Director",
  dirRole: "Founder · F10 Consulting",
  servEyebrow: "Our Services",
  servTitle: "Complete support, at every step.",
  servSub: "From the first advice to your enrollment, we handle what holds you back.",
  serv1Title: "University placement",
  serv1Desc:
    "We identify the programs and institutions that match your profile, budget and ambitions, then submit your applications.",
  serv2Title: "Administrative support",
  serv2Desc:
    "File preparation, letters, translations, visa: we handle every step with you, stress-free and error-free.",
  serv3Title: "Guidance counselling",
  serv3Desc:
    "A personalised assessment to choose the field, country and university truly right for you.",
  destEyebrow: "Destinations",
  destTitle: "10 destinations, a world of opportunity.",
  destSub: "We place our students in recognised institutions across the globe.",
  stepsEyebrow: "How it works",
  stepsTitle: "Your project in 4 simple steps.",
  whyEyebrow: "Why F10",
  whyTitle: "Why students trust us.",
  partnersEyebrow: "Partners & Testimonials",
  partnersTitle: "They trust us.",
  partnersSub:
    "We work with recognised institutions and networks, in Côte d’Ivoire and abroad.",
  partnersIntLabel: "Internal partners",
  partnersExtLabel: "External partners",
  testiTitle: "Stories from placed students",
  contactEyebrow: "Contact",
  contactTitle: "Let’s talk about your study project.",
  contactSub: "A free, no-commitment consultation. Fast reply on WhatsApp.",
  waLabel: "WhatsApp",
  waValue: "+225 07 02 02 81 89",
  emailLabel: "Email",
  emailValue: "dispartners10@gmail.com",
  phoneLabel: "Phone",
  phoneValue: "+225 27 22 28 36 43",
  formName: "Full name",
  formEmail: "Email",
  formPhone: "Phone / WhatsApp",
  formDest: "Preferred destination",
  formMsg: "Tell us about your project",
  formChoose: "Select…",
  formSubmit: "Send my request on WhatsApp",
  formNote: "When you click, your request opens in WhatsApp, ready to send.",
  footerTagline:
    "Your gateway to international mobility. University placement abroad since 2023.",
  footerRights: "All rights reserved.",
  footerCol1: "Navigation",
  footerCol2: "Services",
  footerCol3: "Contact",
  faqEyebrow: "FAQ",
  faqTitle: "Your questions, answered.",
  faqSub: "The essentials to know before starting your study-abroad project.",
};

// Logo files expected in /public/partners (drop the supplied brand logos here).
// Absent files fall back to a styled wordmark, so the build never breaks.
const PARTNER_LOGOS = {
  institutFrancais: "/partners/institut-francais.svg",
  ensea: "/partners/ensea.png",
  campusFrance: "/partners/campus-france.png",
  galileo: "/partners/galileo.png",
} as const;

export function getContent(lang: Lang): Content {
  const isFr = lang === "fr";
  const c = isFr ? FR : EN;

  const nav: NavLink[] = isFr
    ? [
        { label: "Accueil", href: "#accueil" },
        { label: "À propos", href: "#apropos" },
        { label: "Services", href: "#services" },
        { label: "Destinations", href: "#destinations" },
        { label: "Partenaires", href: "#partenaires" },
        { label: "Contact", href: "#contact" },
      ]
    : [
        { label: "Home", href: "#accueil" },
        { label: "About", href: "#apropos" },
        { label: "Services", href: "#services" },
        { label: "Destinations", href: "#destinations" },
        { label: "Partners", href: "#partenaires" },
        { label: "Contact", href: "#contact" },
      ];

  const stats: Stat[] = isFr
    ? [
        { num: "2023", label: "Année de création" },
        { num: "10", label: "Destinations dans le monde" },
        { num: "130+", label: "étudiants accompagnés" },
        { num: "A → Z", label: "Accompagnement personnalisé" },
      ]
    : [
        { num: "2023", label: "Year founded" },
        { num: "10", label: "Destinations worldwide" },
        { num: "130+", label: "students supported" },
        { num: "A → Z", label: "Personalised support" },
      ];

  const serv1 = isFr
    ? ["Sélection d’universités ciblée", "Candidatures & admissions", "Suivi jusqu’à l’acceptation"]
    : ["Targeted university selection", "Applications & admissions", "Follow-up until acceptance"];
  const serv2 = isFr
    ? ["Dossier & pièces justificatives", "Préparation au visa", "Logement & départ"]
    : ["File & supporting documents", "Visa preparation", "Housing & departure"];
  const serv3 = isFr
    ? ["Bilan d’orientation", "Choix du pays & filière", "Financement & bourses"]
    : ["Orientation assessment", "Country & field selection", "Funding & scholarships"];

  const dFr: Destination[] = [
    { code: "fr", name: "France", note: "Universités publiques & grandes écoles" },
    { code: "es", name: "Espagne", note: "Programmes en anglais & espagnol" },
    { code: "ca", name: "Canada", note: "Permis d’études & immigration" },
    { code: "be", name: "Belgique", note: "Diplômes reconnus, coût maîtrisé" },
    { code: "lu", name: "Luxembourg", note: "Cursus multilingues, débouchés" },
    { code: "us", name: "États-Unis", note: "Campus de renommée mondiale" },
    { code: "cn", name: "Chine", note: "Bourses & filières techniques" },
    { code: "in", name: "Inde", note: "IT, ingénierie & médecine" },
    { code: "my", name: "Malaisie", note: "Qualité internationale, coût abordable" },
    { code: "tr", name: "Turquie", note: "Pont entre l’Europe et l’Asie" },
  ];
  const dEn: Destination[] = [
    { code: "fr", name: "France", note: "Public universities & grandes écoles" },
    { code: "es", name: "Spain", note: "Programs in English & Spanish" },
    { code: "ca", name: "Canada", note: "Study permits & immigration" },
    { code: "be", name: "Belgium", note: "Recognised degrees, fair cost" },
    { code: "lu", name: "Luxembourg", note: "Multilingual programs, careers" },
    { code: "us", name: "United States", note: "World-renowned campuses" },
    { code: "cn", name: "China", note: "Scholarships & technical fields" },
    { code: "in", name: "India", note: "IT, engineering & medicine" },
    { code: "my", name: "Malaysia", note: "International quality, affordable" },
    { code: "tr", name: "Türkiye", note: "A bridge between Europe & Asia" },
  ];
  const destinations = isFr ? dFr : dEn;

  const steps: Step[] = isFr
    ? [
        { n: "01", title: "Consultation gratuite", desc: "On écoute votre projet et on évalue vos options." },
        { n: "02", title: "Orientation & sélection", desc: "On cible les filières, pays et universités faits pour vous." },
        { n: "03", title: "Dossier & inscription", desc: "On monte votre candidature et on la dépose pour vous." },
        { n: "04", title: "Visa & départ", desc: "On vous accompagne jusqu’à l’embarquement." },
      ]
    : [
        { n: "01", title: "Free consultation", desc: "We listen to your project and assess your options." },
        { n: "02", title: "Guidance & selection", desc: "We target the fields, countries and universities for you." },
        { n: "03", title: "File & enrollment", desc: "We build your application and submit it for you." },
        { n: "04", title: "Visa & departure", desc: "We support you all the way to boarding." },
      ];

  const advantages: Advantage[] = isFr
    ? [
        { icon: "M20 6L9 17l-5-5", title: "Service 100% personnalisé", desc: "Un accompagnement adapté à votre profil, jamais standardisé." },
        { icon: "M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 20l-4.9 2.6.9-5.5-4-3.9 5.5-.8z", title: "Réseau de partenaires", desc: "Un accès direct à des universités et écoles à l’étranger." },
        { icon: "M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z", title: "Transparence & fiabilité", desc: "Des conseils honnêtes, des coûts clairs, aucune surprise." },
        { icon: "M3 12h18M12 3v18", title: "Accompagnement de A à Z", desc: "De votre première question jusqu’à votre arrivée sur le campus." },
      ]
    : [
        { icon: "M20 6L9 17l-5-5", title: "100% personalised", desc: "Support tailored to your profile, never one-size-fits-all." },
        { icon: "M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 20l-4.9 2.6.9-5.5-4-3.9 5.5-.8z", title: "Partner network", desc: "Direct access to universities and schools abroad." },
        { icon: "M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z", title: "Transparency & trust", desc: "Honest advice, clear costs, no surprises." },
        { icon: "M3 12h18M12 3v18", title: "End-to-end support", desc: "From your first question to your arrival on campus." },
      ];

  const partnersInt: Partner[] = isFr
    ? [
        { name: "Institut Français", tag: "Partenaire institutionnel", logo: PARTNER_LOGOS.institutFrancais },
        { name: "ENSEA", tag: "École partenaire", logo: PARTNER_LOGOS.ensea },
        { name: "Campus France", tag: "Mobilité étudiante", logo: PARTNER_LOGOS.campusFrance },
      ]
    : [
        { name: "Institut Français", tag: "Institutional partner", logo: PARTNER_LOGOS.institutFrancais },
        { name: "ENSEA", tag: "Partner school", logo: PARTNER_LOGOS.ensea },
        { name: "Campus France", tag: "Student mobility", logo: PARTNER_LOGOS.campusFrance },
      ];
  const partnersExt: Partner[] = isFr
    ? [
        { name: "Groupe 33", tag: "Partenaire externe" },
        { name: "Groupe Galileo France", tag: "Réseau d’écoles", logo: PARTNER_LOGOS.galileo },
        { name: "École Val d’Or", tag: "Établissement partenaire" },
      ]
    : [
        { name: "Groupe 33", tag: "External partner" },
        { name: "Groupe Galileo France", tag: "School network", logo: PARTNER_LOGOS.galileo },
        { name: "École Val d’Or", tag: "Partner institution" },
      ];

  const testimonials: Testimonial[] = isFr
    ? [
        { initials: "AK", name: "Awa K.", place: "Étudiante · Canada", quote: "F10 a géré tout mon dossier pour le Canada. Je n’aurais jamais réussi seule, et tout est allé bien plus vite que prévu." },
        { initials: "YT", name: "Yann T.", place: "Étudiant · France", quote: "Une équipe disponible et honnête. On m’a expliqué chaque étape, du choix de la filière jusqu’au visa." },
        { initials: "MD", name: "Mariam D.", place: "Reconversion · Espagne", quote: "Après 10 ans de travail, je voulais une reconversion. F10 m’a trouvé le bon master en Espagne." },
      ]
    : [
        { initials: "AK", name: "Awa K.", place: "Student · Canada", quote: "F10 handled my entire file for Canada. I could never have done it alone, and everything went faster than expected." },
        { initials: "YT", name: "Yann T.", place: "Student · France", quote: "An available, honest team. They explained every step, from choosing my field to the visa." },
        { initials: "MD", name: "Mariam D.", place: "Career change · Spain", quote: "After 10 years of work, I wanted a career change. F10 found me the right master’s in Spain." },
      ];

  const faq: Faq[] = isFr
    ? [
        { q: "Combien coûte l’accompagnement de F10 Consulting ?", a: "La première consultation est gratuite. Nos forfaits sont ensuite modulaires : vous ne payez que les services dont vous avez besoin, du simple conseil à l’accompagnement complet jusqu’au visa. Écrivez-nous sur WhatsApp pour un devis adapté." },
        { q: "Dans quels pays pouvez-vous me placer ?", a: "Nous plaçons des étudiants dans 10 destinations : France, Espagne, Canada, Belgique, Luxembourg, États-Unis, Chine, Inde, Malaisie et Turquie, auprès d’établissements reconnus." },
        { q: "Faut-il déjà avoir une admission pour vous contacter ?", a: "Non. Nous intervenons dès l’orientation : nous vous aidons à choisir la filière, le pays et l’université, puis nous montons et déposons vos candidatures pour vous." },
        { q: "Aidez-vous aussi pour le visa étudiant ?", a: "Oui. L’accompagnement administratif couvre le dossier, les traductions, la préparation au visa ainsi que l’organisation du logement et du départ." },
        { q: "Combien de temps prend la procédure ?", a: "Selon le pays et la période d’admission, comptez généralement de 1 à 6 mois. Plus vous commencez tôt, plus nous avons de marge pour viser les meilleures options et les bourses." },
        { q: "Accompagnez-vous les professionnels en reconversion ?", a: "Oui. Nous accompagnons aussi bien les étudiants que les professionnels en formation continue ou en reconversion, avec des programmes adaptés à leur parcours." },
      ]
    : [
        { q: "How much does F10 Consulting cost?", a: "The first consultation is free. Our packages are then modular: you only pay for the services you need, from one-off advice to full support through to the visa. Message us on WhatsApp for a tailored quote." },
        { q: "Which countries can you place me in?", a: "We place students in 10 destinations: France, Spain, Canada, Belgium, Luxembourg, the United States, China, India, Malaysia and Türkiye, with recognised institutions." },
        { q: "Do I need an admission offer before contacting you?", a: "No. We start at the orientation stage: we help you choose the field, country and university, then build and submit your applications for you." },
        { q: "Do you help with the student visa?", a: "Yes. Administrative support covers the file, translations, visa preparation and organising your housing and departure." },
        { q: "How long does the process take?", a: "Depending on the country and admission window, usually 1 to 6 months. The earlier you start, the more room we have to target the best options and scholarships." },
        { q: "Do you work with professionals changing careers?", a: "Yes. We support both students and professionals in continuing education or career change, with programs suited to their background." },
      ];

  const aboutBullets = isFr
    ? ["Solution tout-en-un ou modulaire", "Un interlocuteur unique", "Réseau d’établissements partenaires", "Conseils transparents et honnêtes"]
    : ["All-in-one or modular solution", "One single point of contact", "Network of partner institutions", "Transparent, honest advice"];

  return {
    c,
    nav,
    stats,
    serv1,
    serv2,
    serv3,
    destinations,
    steps,
    advantages,
    partnersInt,
    partnersExt,
    testimonials,
    faq,
    aboutBullets,
  };
}
