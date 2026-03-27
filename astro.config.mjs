import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Centralized site metadata for SEO
const siteMetadata = {
  site: 'https://araf-standard.org',
  organization: 'ARAF Foundation',
  defaultTitle: 'ARAF Standard',
  defaultDescription: 'The open governance standard for classification and certification infrastructure in autonomous system governance.',
  defaultOgImage: '/images/araf/logo.png',
  twitterHandle: '@arafstandard',
};

export default defineConfig({
  site: siteMetadata.site,
  cacheDir: './node_modules/.astro-cache',
  redirects: {
    '/certification/': { status: 301, destination: '/certification/certification-framework/' },
    '/six-dimensions/': { status: 301, destination: '/standard/six-dimensions/' },
    '/standard-governance/': { status: 301, destination: '/governance/standard-governance/' },
    '/gbi-methodology/': { status: 301, destination: '/certification/governance-benchmark-index/' },
    '/standard/decision-supply-chain/': { status: 301, destination: '/decision-supply-chain/' },
    '/framework/governance-benchmark-index/': {
      status: 301,
      destination: '/certification/governance-benchmark-index/',
    },
    '/glossary/': { status: 301, destination: '/resources/glossary/' },
    '/assessor-guidance/what-systems/': { status: 301, destination: '/assessor-guidance/getting-started/' },
    '/assessor-guidance/when-to-assess/': { status: 301, destination: '/assessor-guidance/getting-started/' },
    '/assessor-guidance/how-long/': { status: 301, destination: '/assessor-guidance/getting-started/' },
    '/assessor-guidance/preparation-checklist/': {
      status: 301,
      destination: '/assessor-guidance/getting-started/',
    },
    '/assessor-guidance/who-should-lead/': {
      status: 301,
      destination: '/assessor-guidance/getting-started/',
    },
    '/methodology/assessor-accreditation-standard/': {
      status: 301,
      destination: '/assessor-guidance/assessor-accreditation-standard/',
    },
    '/methodology/evidence-standard/': { status: 301, destination: '/evidence/evidence-infrastructure-standard/' },
  },
  integrations: [
    starlight({
      title: siteMetadata.defaultTitle,
      description: siteMetadata.defaultDescription,

      logo: {
        light: './public/araf-mark-primary-dark.svg',
        dark: './public/araf-mark-primary-light.svg',
        alt: siteMetadata.defaultTitle,
        replacesTitle: false,
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ARAF-Foundation/araf-standard',
        },
      ],

      editLink: {
        baseUrl: 'https://github.com/ARAF-Foundation/araf-standard/edit/main/',
      },

      sidebar: [
        {
          label: 'OVERVIEW',
          items: [
            { label: 'Homepage', slug: '' },
            { label: 'Trust Architecture', slug: 'trust-architecture' },
            { label: 'Getting Started', slug: 'getting-started' },
          ],
        },
        {
          label: 'THE STANDARD',
          items: [
            { label: 'Architecture Specification', slug: 'standard/architecture-specification' },
            { label: 'Governance Ontology', slug: 'standard/governance-ontology' },
            { label: 'Six Dimensions', slug: 'standard/six-dimensions' },
            { label: 'Decision Supply Chain', slug: 'decision-supply-chain' },
          ],
        },
        {
          label: 'EVIDENCE AND ASSESSMENT',
          items: [
            { label: 'Evidence Infrastructure Standard (EIS-01)', slug: 'evidence/evidence-infrastructure-standard' },
          ],
        },
        {
          label: 'CERTIFICATION AND SCORING',
          items: [
            { label: 'Governance Benchmark Index', slug: 'certification/governance-benchmark-index' },
            { label: 'Certification Framework', slug: 'certification/certification-framework' },
          ],
        },
        {
          label: 'ASSESSOR GUIDANCE',
          items: [
            { label: 'Assessor Guidance Notes', slug: 'assessor-guidance' },
            { label: 'Getting Started with ARAF Assessment', slug: 'assessor-guidance/getting-started' },
            { label: 'What to Expect During an Assessment', slug: 'assessor-guidance/what-to-expect' },
            { label: 'GN-001: Conducting an ARAF Governance Assessment', slug: 'assessor-guidance/gn-001' },
            { label: 'GN-002: Cross-Border Deployment Assessment', slug: 'assessor-guidance/gn-002' },
            { label: 'Assessor Accreditation Standard', slug: 'assessor-guidance/assessor-accreditation-standard' },
          ],
        },
        {
          label: 'IMPLEMENTATION',
          items: [
            { label: 'Internal Preparation Checklist', slug: 'getting-started/internal-preparation-checklist' },
            { label: 'What Systems Should Be Assessed', slug: 'getting-started/what-systems-should-be-assessed' },
            { label: 'When to Conduct an Assessment', slug: 'getting-started/when-to-conduct-an-assessment' },
            { label: 'How Long Assessments Typically Take', slug: 'getting-started/how-long-assessments-typically-take' },
            { label: 'Who Should Lead the Process', slug: 'getting-started/who-should-lead-the-process' },
          ],
        },
        {
          label: 'PILOT PROGRAMME',
          items: [
            { label: 'Worked Examples', slug: 'pilot/worked-examples' },
            { label: 'Evidence Checklist', slug: 'pilot/evidence-checklist' },
            { label: 'Downloads', slug: 'downloads' },
          ],
        },
        {
          label: 'INSTITUTIONAL APPLICATIONS',
          items: [
            { label: 'Boards', slug: 'boards' },
            { label: 'Insurers', slug: 'insurers' },
            { label: 'Investors', slug: 'investors' },
            { label: 'Regulators', slug: 'regulators' },
            { label: 'Enterprise Procurement', slug: 'enterprise-procurement' },
             { label: 'Founders & Infrastructure Builders', slug: 'institutional-applications/founders-infrastructure-builders' },
          ],
        },
        {
          label: 'STANDARD GOVERNANCE',
          items: [
            { label: 'Standard Governance', slug: 'governance/standard-governance' },
            { label: 'Version History', slug: 'governance/version-history' },
          ],
        },
        {
          label: 'RESOURCES',
          items: [
            { label: 'FAQ', slug: 'faq' },
            { label: 'Glossary', slug: 'resources/glossary' },
            { label: 'Citations', slug: 'resources/citations' },
            { label: 'Diagrams', slug: 'resources/diagrams' },
          ],
        },
        {
          label: 'Legal',
          items: [
            { label: 'Terms of Use', link: '/legal/terms-of-use/' },
            { label: 'Privacy Policy', link: '/legal/privacy-policy/' },
          ],
        },
      ],

      components: {
        Footer: './src/components/Footer.astro',
      },

      customCss: ['./src/styles/custom.css'],

      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#f7f5f0',
          },
        },
        // Removed keywords meta tag per SEO SOP
      ],

      favicon: '/araf-favicon.svg',
    }),
  ],
});