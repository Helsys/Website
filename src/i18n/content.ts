// Central content dictionary for the whole site.
//
// Every visible string lives here in both languages so the two locales can
// never drift apart. Pages read from this dictionary via getContent(lang).
// Facts are intentionally limited to what we know; nothing is invented.

export type Lang = 'nl' | 'en';

export const LANGS: Lang[] = ['nl', 'en'];

export interface Content {
  // Document level
  htmlLang: string;
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  ogLocale: string;

  // Global UI
  skipToContent: string;
  langSwitchLabel: string;
  otherLangName: string;
  otherLangPath: string;

  // Theme toggle (accessible labels for the dark/light switch)
  theme: {
    toggleLabel: string;
    toLight: string;
    toDark: string;
  };

  // Navigation
  nav: { about: string; services: string; certifications: string; contact: string };

  // Hero
  hero: {
    eyebrow: string;
    name: string;
    headline: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    location: string;
  };

  // About
  about: {
    sectionLabel: string;
    title: string;
    paragraphs: string[];
  };

  // Services
  services: {
    sectionLabel: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
    techLabel: string;
    tech: string[];
  };

  // Certifications
  certifications: {
    sectionLabel: string;
    title: string;
    intro: string;
    items: { name: string; issuer: string; year: string }[];
  };

  // Contact
  contact: {
    sectionLabel: string;
    title: string;
    intro: string;
    emailLabel: string;
    email: string;
    linkedinLabel: string;
    linkedinUrl: string;
  };

  // Footer
  footer: { tagline: string; rights: string };
}

// Shared facts that are identical across languages.
const EMAIL = 'joris@helsys.be';
const LINKEDIN = 'https://www.linkedin.com/in/jorishelsen/';

const nl: Content = {
  htmlLang: 'nl',
  siteName: 'Helsys',
  metaTitle: 'Joris Helsen, Helsys, freelance software engineer in Diepenbeek',
  metaDescription:
    'Joris Helsen (Helsys) is freelance software engineer en helpt KMO’s digitaliseren met Odoo, Python, .NET en Microsoft Azure. Gevestigd in Diepenbeek, Belgie.',
  ogLocale: 'nl_BE',

  skipToContent: 'Naar de inhoud',
  langSwitchLabel: 'Taal',
  otherLangName: 'English',
  otherLangPath: '/en/',

  theme: {
    toggleLabel: 'Thema wisselen',
    toLight: 'Schakel naar licht thema',
    toDark: 'Schakel naar donker thema',
  },

  nav: {
    about: 'Over mij',
    services: 'Diensten',
    certifications: 'Certificaten',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Helsys',
    name: 'Joris Helsen',
    headline: 'Ik help KMO’s digitaliseren.',
    intro:
      'Freelance software engineer met ruim twintig jaar ervaring. Ik vertaal bedrijfsprocessen naar werkende software, met Odoo als kloppend hart.',
    ctaPrimary: 'Neem contact op',
    ctaSecondary: 'Bekijk diensten',
    location: 'Diepenbeek, Belgie',
  },

  about: {
    sectionLabel: '01 — Over mij',
    title: 'Twintig jaar IT, nu volledig in dienst van uw bedrijf.',
    paragraphs: [
      'Ruim twintig jaar bouw ik software. De eerste jaren in loondienst, voornamelijk als .NET Developer, waar ik leerde wat het betekent om robuuste systemen te bouwen die jarenlang meegaan.',
      'Sinds 2022 werk ik als freelancer. Ik help kleine en middelgrote ondernemingen digitaliseren, vaak met Odoo als platform. Geen technologie om de technologie, maar oplossingen die uw dagelijkse werk lichter maken.',
    ],
  },

  services: {
    sectionLabel: '02 — Diensten',
    title: 'Wat ik voor u doe.',
    intro:
      'Van losse processen tot een volledig draaiend platform. Ik werk volgens KISS, Keep It Simple: ik vermijd onnodige complexiteit en bouw pragmatisch, met steeds de toegevoegde waarde voor uw bedrijfsvoering als vertrekpunt.',
    items: [
      {
        title: 'Digitalisering van bedrijfsprocessen',
        body:
          'Ik breng uw processen in kaart en zet ze om naar werkende, onderhoudbare software. Minder handwerk, minder fouten, meer overzicht.',
      },
      {
        title: 'Odoo implementatie en maatwerk',
        body:
          'Implementatie, configuratie en maatwerk in Odoo, zowel technisch als functioneel. Ik spreek de taal van het systeem en die van uw bedrijf.',
      },
      {
        title: 'Software engineering op maat',
        body:
          'Op maat gebouwde software en integraties op een fundament van solide engineering. Geen complexiteit om de complexiteit, maar de eenvoudigste oplossing die het werk doet.',
      },
    ],
    techLabel: 'Kerntechnologieen',
    tech: ['Odoo', 'Python', 'Microsoft Azure'],
  },

  certifications: {
    sectionLabel: '03 — Certificaten',
    title: 'Aantoonbaar onderlegd.',
    intro: 'Een greep uit de certificeringen die mijn werk onderbouwen.',
    items: [
      { name: 'Odoo 19 Functional Certification', issuer: 'Odoo', year: '2026' },
      { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', year: '2022' },
      { name: 'Microsoft Certified: Azure Data Fundamentals', issuer: 'Microsoft', year: '2022' },
      { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', year: '2025' },
    ],
  },

  contact: {
    sectionLabel: '04 — Contact',
    title: 'Laten we kennismaken.',
    intro:
      'Een vraag, een idee of een project dat klaarligt? Stuur gerust een bericht. Ik antwoord persoonlijk.',
    emailLabel: 'E-mail',
    email: EMAIL,
    linkedinLabel: 'LinkedIn',
    linkedinUrl: LINKEDIN,
  },

  footer: {
    tagline: 'Software engineering voor KMO’s.',
    rights: 'Alle rechten voorbehouden.',
  },
};

const en: Content = {
  htmlLang: 'en',
  siteName: 'Helsys',
  metaTitle: 'Joris Helsen, Helsys, freelance software engineer in Diepenbeek',
  metaDescription:
    'Joris Helsen (Helsys) is a freelance software engineer helping SMEs go digital with Odoo, Python, .NET and Microsoft Azure. Based in Diepenbeek, Belgium.',
  ogLocale: 'en_GB',

  skipToContent: 'Skip to content',
  langSwitchLabel: 'Language',
  otherLangName: 'Nederlands',
  otherLangPath: '/',

  theme: {
    toggleLabel: 'Toggle theme',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },

  nav: {
    about: 'About',
    services: 'Services',
    certifications: 'Certifications',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Helsys',
    name: 'Joris Helsen',
    headline: 'I help SMEs go digital.',
    intro:
      'Freelance software engineer with over twenty years of experience. I turn business processes into working software, with Odoo at the heart of it.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'See services',
    location: 'Diepenbeek, Belgium',
  },

  about: {
    sectionLabel: '01 — About',
    title: 'Twenty years in IT, now fully in service of your business.',
    paragraphs: [
      'I have been building software for over twenty years. The first years were spent in employment, mainly as a .NET developer, where I learned what it takes to build robust systems that last.',
      'Since 2022 I work as a freelancer. I help small and medium sized businesses go digital, often with Odoo as the platform. Not technology for its own sake, but solutions that make your daily work lighter.',
    ],
  },

  services: {
    sectionLabel: '02 — Services',
    title: 'What I do for you.',
    intro:
      'From single processes to a fully running platform. I work by KISS, Keep It Simple: I avoid needless complexity and build pragmatically, always starting from the added value for how your business actually works.',
    items: [
      {
        title: 'Digitalising business processes',
        body:
          'I map your processes and turn them into working, maintainable software. Less manual work, fewer errors, more oversight.',
      },
      {
        title: 'Odoo implementation and customisation',
        body:
          'Implementation, configuration and custom development in Odoo, both technical and functional. I speak the language of the system and of your business.',
      },
      {
        title: 'Bespoke software engineering',
        body:
          'Tailor made software and integrations on a foundation of solid engineering. No complexity for its own sake, just the simplest solution that does the job.',
      },
    ],
    techLabel: 'Core technologies',
    tech: ['Odoo', 'Python', 'Microsoft Azure'],
  },

  certifications: {
    sectionLabel: '03 — Certifications',
    title: 'Demonstrably qualified.',
    intro: 'A selection of the certifications that underpin my work.',
    items: [
      { name: 'Odoo 19 Functional Certification', issuer: 'Odoo', year: '2026' },
      { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', year: '2022' },
      { name: 'Microsoft Certified: Azure Data Fundamentals', issuer: 'Microsoft', year: '2022' },
      { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', year: '2025' },
    ],
  },

  contact: {
    sectionLabel: '04 — Contact',
    title: 'Let us get acquainted.',
    intro:
      'A question, an idea or a project ready to go? Feel free to send a message. I reply personally.',
    emailLabel: 'Email',
    email: EMAIL,
    linkedinLabel: 'LinkedIn',
    linkedinUrl: LINKEDIN,
  },

  footer: {
    tagline: 'Software engineering for SMEs.',
    rights: 'All rights reserved.',
  },
};

const dictionary: Record<Lang, Content> = { nl, en };

export function getContent(lang: Lang): Content {
  return dictionary[lang];
}
