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
      'Freelance software engineer met ruim twintig jaar ervaring. Ik vertaal bedrijfsprocessen naar goed werkende software.',
    ctaPrimary: 'Neem contact op',
    ctaSecondary: 'Bekijk diensten',
    location: 'Diepenbeek, Belgie',
  },

  about: {
    sectionLabel: '01 — Over mij',
    title: 'Twintig jaar IT en nog steeds alive and kicking :-)',
    paragraphs: [
      'Ruim twintig jaar bouw ik robuuste software. De eerste jaren in loondienst, sinds 2022 als freelancer. Ik ondersteun KMO’s om mee te zijn op de digitale sneltrein. Geen technologie om de technologie, maar oplossingen die de dagelijkse werking efficiënter en beter maken.',
      'Ik bied toegevoegde waarde zonder het nodeloos complex te maken. Bewust eenvoudig, met aandacht voor de juiste prioriteiten en een betoog voor data hygiëne. Want zelfs het beste systeem kan chaotisch aanvoelen als er geen aandacht wordt besteed aan de correctheid en op orde houden van de gegevens.',
      'AI-tools zet ik daarbij pragmatisch in als hefboom. Zo krijg je het tempo en de scherpte van moderne tooling, zonder een overhead aan onnodige complexiteit.',
    ],
  },

  services: {
    sectionLabel: '02 — Diensten',
    title: 'Wat ik voor je doe.',
    intro:
      'Ik implementeer Odoo van A tot Z. Vaak komt hier naast het technische luik ook een proces van change management aan te pas. Daarnaast bouw ik maatsoftware, al dan niet gekoppeld aan Odoo, en die er ook echt goed uit ziet. Modern, fris, stijlvol. Denk hierbij bijvoorbeeld aan een klantenportaal, een corporate website of een mobile app.',
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
    techLabel: 'Waarmee ik werk',
    tech: ['Odoo', 'Python', '.NET', 'SQL', 'Postgres', 'React', 'Next.js', 'TypeScript', 'AI'],
  },

  certifications: {
    sectionLabel: '03 — Certificaten',
    title: 'Aantoonbaar onderlegd.',
    intro:
      'Uit interesse en uit voldoening ben ik constant bezig om mezelf bij te scholen. Dit leidde tot een aantal resultaatstukken met als meest recente het officiële certificaat van Odoo S.A. (klik op de badge)',
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
      'Een vraag, een idee of een project dat klaarligt?\nStuur me gerust een bericht.',
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
      'Freelance software engineer with over twenty years of experience. I turn business processes into software that just works.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'See services',
    location: 'Diepenbeek, Belgium',
  },

  about: {
    sectionLabel: '01 — About',
    title: 'Twenty years in IT and still alive and kicking :-)',
    paragraphs: [
      'For over twenty years I have been building robust software. The first years in employment, since 2022 as a freelancer. I help SMEs keep pace with the digital fast lane. Not technology for its own sake, but solutions that make day to day operations more efficient and better.',
      'I add value without making things needlessly complex. Deliberately simple, with an eye for the right priorities and a case for data hygiene. Because even the best system can feel chaotic if no attention is paid to keeping the data correct and in order.',
      'AI tools I bring in pragmatically as a lever. That way you gain the pace and sharpness of modern tooling, without an overhead of needless complexity.',
    ],
  },

  services: {
    sectionLabel: '02 — Services',
    title: 'What I do for you.',
    intro:
      'I implement Odoo from A to Z. On top of the technical side, this usually comes with a process of change management. I also build custom software, whether or not connected to Odoo, that genuinely looks the part too. Modern, fresh, stylish. Think of a customer portal, a corporate website or a mobile app.',
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
    techLabel: 'What I work with',
    tech: ['Odoo', 'Python', '.NET', 'SQL', 'Postgres', 'React', 'Next.js', 'TypeScript', 'AI'],
  },

  certifications: {
    sectionLabel: '03 — Certifications',
    title: 'Demonstrably qualified.',
    intro:
      'Out of genuine interest and the satisfaction it brings, I keep training myself. That has led to a number of milestones, the most recent being the official certificate from Odoo S.A. (click the badge)',
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
      'A question, an idea or a project ready to go?\nFeel free to drop me a message.',
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
