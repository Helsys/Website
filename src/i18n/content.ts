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

  // Certifications. A single, deliberately curated credential: the Odoo
  // certification, shown as a brand badge with the real scan one click away.
  certifications: {
    sectionLabel: string;
    title: string;
    intro: string;
    badge: { issuer: string; name: string; year: string; certNo: string };
    proofLabel: string;
    proofAlt: string;
    modalTitle: string;
    modalClose: string;
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
    'Joris Helsen (Helsys) is freelance software engineer en helpt KMO’s digitaliseren met Odoo, Python en AI. Gevestigd in Diepenbeek, Belgie.',
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
    title: 'Twintig jaar IT en nog steeds alive and kicking :-)',
    paragraphs: [
      'Ruim twintig jaar bouw ik software. De eerste jaren in loondienst, bij ondernemingen klein en groot, waar ik leerde robuuste systemen te bouwen die jarenlang meegaan.',
      'Sinds 2022 werk ik als freelancer. Ik help KMO’s digitaliseren, vaak met Odoo. Geen technologie om de technologie, maar oplossingen die je dagelijkse werk beter maken.',
      'Ik bied toegevoegde waarde zonder het nodeloos complex te maken: bewust eenvoudig, met je prioriteiten en data hygiëne voorop, want een systeem is maar zo betrouwbaar als de gegevens erin. AI-tools zet ik daarbij pragmatisch in als hefboom, voor sneller een werkende oplossing met minder gedoe. Zo krijg je het tempo en de scherpte van moderne tooling, zonder de complexiteit die er vaak bij hoort.',
    ],
  },

  services: {
    sectionLabel: '02 — Diensten',
    title: 'Wat ik voor je doe.',
    intro:
      'Ik implementeer Odoo van A tot Z. Vaak komt hier naast het technische luik ook een proces van change management aan te pas. Daarnaast bouw ik maatsoftware die kan praten met Odoo maar er ook echt goed uit ziet. Zoals een klantenportaal of een corporate website. Waar het loont, zet ik AI-tools in om sneller en slimmer tot een oplossing te komen.',
    items: [
      {
        title: 'Digitalisering van bedrijfsprocessen',
        body:
          'Ik breng je processen in kaart en zet ze om naar werkende, onderhoudbare software. Minder handwerk, minder fouten, meer overzicht.',
      },
      {
        title: 'Odoo implementatie en maatwerk',
        body:
          'Implementatie, configuratie en maatwerk in Odoo, zowel technisch als functioneel. Ik spreek de taal van het systeem en die van je bedrijf.',
      },
      {
        title: 'Software engineering op maat',
        body:
          'Op maat gebouwde software en integraties op een fundament van solide engineering.',
      },
    ],
    techLabel: 'Kerntechnologieen',
    tech: ['Odoo', 'Python', 'AI', 'Postgres', 'SQL', '.NET', 'React'],
  },

  certifications: {
    sectionLabel: '03 — Certificaten',
    title: 'Aantoonbaar onderlegd.',
    intro:
      'Officieel gecertificeerd door Odoo S.A. Het bewijs ligt klaar, een klik op de badge toont het certificaat.',
    badge: {
      issuer: 'Odoo',
      name: 'Odoo 19 Functional Certified',
      year: '2026',
      certNo: 'Certificaatnr. 0000988353',
    },
    proofLabel: 'Bekijk certificaat',
    proofAlt:
      'Odoo Certificaat van Prestatie, Odoo 19 Functional Certification, op naam van Joris Helsen, 3 januari 2026, certificaatnummer 0000988353.',
    modalTitle: 'Odoo 19 Functional Certification',
    modalClose: 'Sluiten',
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
    'Joris Helsen (Helsys) is a freelance software engineer helping SMEs go digital with Odoo, Python and AI. Based in Diepenbeek, Belgium.',
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
    title: 'Twenty years in IT and still alive and kicking :-)',
    paragraphs: [
      'I have been building software for over twenty years. The first years were in employment, for companies large and small, where I learned to build robust systems that last.',
      'Since 2022 I work as a freelancer. I help SMEs go digital, often with Odoo. Not technology for its own sake, but solutions that make your daily work better.',
      'I add value without making things needlessly complex: deliberately simple, with your priorities and data hygiene up front, because a system is only as reliable as the data that goes into it. AI tools I apply pragmatically as a lever, for a working solution faster and with less hassle. That way you gain the pace and sharpness of modern tooling, without the complexity that usually comes with it.',
    ],
  },

  services: {
    sectionLabel: '02 — Services',
    title: 'What I do for you.',
    intro:
      'I implement Odoo from A to Z. On top of the technical side, this usually comes with a process of change management. I also build custom software that talks to Odoo and genuinely looks the part, like a customer portal or a corporate website. Where it pays off, I bring in AI tools to reach a solution faster and smarter.',
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
          'Tailor made software and integrations on a foundation of solid engineering.',
      },
    ],
    techLabel: 'Core technologies',
    tech: ['Odoo', 'Python', 'AI', 'Postgres', 'SQL', '.NET', 'React'],
  },

  certifications: {
    sectionLabel: '03 — Certifications',
    title: 'Demonstrably qualified.',
    intro:
      'Officially certified by Odoo S.A. The proof is ready, one click on the badge shows the certificate.',
    badge: {
      issuer: 'Odoo',
      name: 'Odoo 19 Functional Certified',
      year: '2026',
      certNo: 'Certificate no. 0000988353',
    },
    proofLabel: 'View certificate',
    proofAlt:
      'Odoo Certificate of Achievement, Odoo 19 Functional Certification, issued to Joris Helsen, 3 January 2026, certificate number 0000988353.',
    modalTitle: 'Odoo 19 Functional Certification',
    modalClose: 'Close',
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
