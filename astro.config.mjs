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
          href: 'https://github.com/ARAF-Foundation/araf-standard',
        },
      ],

      editLink: {
        baseUrl: 'https://github.com/ARAF-Foundation/araf-standard/edit/main/',
      },

      sidebar: [
        {
          label: 'Overview',
          items: [{ label: 'ARAF Standard', slug: '' }],
        },
        {
          label: 'Framework (v3.0)',
          items: [
            { label: 'Architecture Specification', slug: 'standard/architecture-specification' },
            { label: 'Governance Ontology', slug: 'standard/governance-ontology' },
            { label: 'Reference Architecture', slug: 'standard/reference-architecture' },
            { label: 'Six Governance Dimensions', slug: 'standard/six-dimensions' },
            { label: 'Governance Benchmark Index (GBI)', slug: 'framework/governance-benchmark-index' },
          ],
        },
        {
          label: 'Certification (v3.0)',
          items: [
            { label: 'Certification Framework', slug: 'certification/certification-framework' },
            { label: 'Governance Coherence Addendum', slug: 'certification/governance-coherence-addendum' },
            { label: 'Governance Benchmark Index', slug: 'certification/governance-benchmark-index' },
          ],
        },
        {
          label: 'Assessor Guidance (v3.0)',
          items: [
            { label: 'Assessor Guidance Notes', slug: 'assessor-guidance/assessor-guidance-note' },
            { label: 'Assessor Accreditation Standard', slug: 'assessor-guidance/assessor-accreditation-standard' },
            { label: 'GN-002: Cross-Border Deployment Assessment', slug: 'assessor-guidance/gn-002' },
          ],
        },
        {
          label: 'Evidence (v3.0)',
          items: [{ label: 'Evidence Standard', slug: 'evidence/evidence-standard' }],
        },
        {
          label: 'Governance (v3.0)',
          items: [
            { label: 'Standard Governance', slug: 'standard-governance' },
            { label: 'Version History', slug: 'governance/version-history' },
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
          label: 'Pilot',
          items: [
            { label: 'Pilot Sub-section', slug: 'pilot' },
            { label: 'Worked Examples', slug: 'pilot/worked-examples' },
            { label: 'Evidence Checklist', slug: 'pilot/evidence-checklist' },
          ],
        },
        {
          label: 'Resources',
          items: [
            {
              label: 'Supporting Diagrams and Reference Materials',
              slug: 'resources/supporting-diagrams-and-reference-materials',
            },
          ],
        },
        {
          label: 'Legacy v2.x Routes',
          items: [
            { label: 'Specification (v2.x)', slug: 'specification' },
            { label: 'Specification Index (v2.x)', slug: 'specification-index' },
            { label: 'Six Dimensions (v2.x)', slug: 'six-dimensions' },
            { label: 'Governance Benchmark Index (v2.x)', slug: 'gbi-methodology' },
            { label: 'Certification (v2.x)', slug: 'certification' },
            { label: 'Evidence Standard (v2.x)', slug: 'methodology/evidence-standard' },
            {
              label: 'Assessor Accreditation Standard (v2.x)',
              slug: 'methodology/assessor-accreditation-standard',
            },
            { label: 'Standard Governance (compat route)', slug: 'governance/standard-governance' },
            { label: 'Version History (v2.x)', slug: 'version-history' },
            { label: 'Glossary (v2.x)', slug: 'glossary' },
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