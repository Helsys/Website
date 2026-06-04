# Helsys Website

Persoonlijk digitaal visitekaartje van Joris Helsen (merk Helsys). Statische,
tweetalige site (Nederlands standaard, Engels onder `/en/`) gebouwd met Astro.

## Stack

- Astro 5 (statische output, zero JS by default)
- Vanilla CSS met design tokens (geen utility framework)
- Native CSS scroll-driven reveals via IntersectionObserver, met
  prefers-reduced-motion respect en een no-JS fallback

## Lokaal draaien

```bash
npm install
npm run dev      # dev server, standaard op http://localhost:4321
```

## Bouwen en lokaal previewen

```bash
npm run build    # output naar dist/
npm run preview  # serveert de gebouwde site lokaal
```

## Nog in te vullen placeholders

1. **E-mailadres.** Zoek `EMAIL_PLACEHOLDER` in `src/i18n/content.ts` en vervang
   door het echte adres (bijvoorbeeld `hello@helsys.be`). Dit voedt zowel de
   zichtbare mailto-link als het label in de contactsectie.
2. **Contactformulier-endpoint.** Maak een gratis account op Formspree, maak een
   form aan en kopieer de form-action (bijvoorbeeld
   `https://formspree.io/f/abcdwxyz`). Vervang `FORMSPREE_ENDPOINT_PLACEHOLDER`
   in `src/components/Contact.astro`. Zolang het de placeholder bevat, doet het
   formulier niets bij verzenden; zodra het een echt endpoint is, werkt het
   zowel met als zonder JavaScript.

## Structuur

- `src/i18n/content.ts` - alle teksten in NL en EN
- `src/layouts/BaseLayout.astro` - document, SEO, Open Graph, hreflang, JSON-LD
- `src/components/*.astro` - secties (header, hero, about, services,
  certifications, contact, footer)
- `src/pages/index.astro` - NL route, `src/pages/en/index.astro` - EN route
- `src/pages/sitemap.xml.ts` - sitemap
- `public/` - favicon, Open Graph beeld, robots.txt
