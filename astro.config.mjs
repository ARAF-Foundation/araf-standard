import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://araf-standard.org',
  cacheDir: './node_modules/.astro-cache',
  integrations: [
    starlight({
      title: 'ARAF Standard',
      description:
        'The open governance standard for classification and certification infrastructure in autonomous system governance.',

      logo: {
        light: './src/assets/araf-mark-primary-dark.svg',
        dark: './src/assets/araf-mark-primary-light.svg',
        alt: 'ARAF Standard',
        replacesTitle: false,
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/venturebench/araf-standard',
        },
      ],

      editLink: {
        baseUrl: 'https://github.com/venturebench/araf-standard/edit/main/',
      },

      sidebar: [
        {
          label: 'Overview',
          items: [{ label: 'ARAF Standard', slug: '' }],
        },
        {
          label: 'The Standard',
          items: [
            { label: 'Specification', slug: 'specification' },
            { label: 'Trust Architecture', slug: 'trust-architecture' },
            { label: 'Decision Supply Chain', slug: 'decision-supply-chain' },
          ],
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Getting Started with ARAF', slug: 'getting-started' },
            {
              label: 'What Systems Should Be Assessed',
              slug: 'getting-started/what-systems-should-be-assessed',
            },
            {
              label: 'When to Conduct an Assessment',
              slug: 'getting-started/when-to-conduct-an-assessment',
            },
            {
              label: 'How Long Assessments Typically Take',
              slug: 'getting-started/how-long-assessments-typically-take',
            },
            {
              label: 'Internal Preparation Checklist',
              slug: 'getting-started/internal-preparation-checklist',
            },
            {
              label: 'Who Should Lead the Process',
              slug: 'getting-started/who-should-lead-the-process',
            },
          ],
        },
        {
          label: 'Methodology',
          items: [
            { label: 'Six Dimensions Methodology', slug: 'six-dimensions' },
            { label: 'Governance Benchmark Index', slug: 'gbi-methodology' },
            { label: 'Evidence Standard', slug: 'methodology/evidence-standard' },
            { label: 'Evidence Infrastructure', slug: 'evidence-infrastructure' },
            { label: 'Assessment Preparation Guide', link: '/certification/#the-assessment' },
            { label: 'Certification', slug: 'certification' },
            {
              label: 'ARAF Assessor Accreditation Standard',
              slug: 'methodology/assessor-accreditation-standard',
            },
          ],
        },
        {
          label: 'Institutional Use',
          items: [
            { label: 'Institutional Applications', slug: 'institutional-applications' },
            { label: 'ARAF for Boards', slug: 'boards' },
            { label: 'ARAF for Enterprise Procurement', slug: 'enterprise-procurement' },
            { label: 'ARAF for Investors', slug: 'investors' },
            { label: 'ARAF for Regulators', slug: 'regulators' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'ARAF Glossary', slug: 'glossary' },
            { label: 'FAQ', slug: 'faq' },
            { label: 'Standard Governance', slug: 'standard-governance' },
            { label: 'Version History', slug: 'version-history' },
            { label: 'Downloads', slug: 'downloads' },
          ],
        },
      ],

      customCss: ['./src/styles/custom.css'],

      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#f5f3ee',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content:
              'ARAF, Agentic Risk Architecture Framework, AI governance, autonomous systems, trust architecture, decision supply chain, certification standard',
          },
        },
      ],

      favicon: '/araf-favicon.svg',
    }),
  ],
});