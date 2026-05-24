import { ProjectCard } from './ProjectCard';

const researchProjects = [
  {
    slug: 'digital-health-consent',
    tags: ['Digital Health', 'Ethics & Governance'],
    title: 'Digital Health Informed Consent Framework',
    description:
      'First-authored a published NIH-aligned framework that turns digital health consent requirements into 63 evaluable attributes across 4 domains, benchmarked against 25 real-world consent forms.',
    imagePlaceholder: 'consent-framework.png',
    url: 'https://doi.org/10.1186/s12910-025-01291-5'
  },
  {
    slug: 'vsac-sud-framework',
    tags: ['Clinical Informatics', 'Data Interoperability'],
    title: 'Value Set Production for Substance Use',
    description:
      'Developing a semi-automated workflow to produce substance-use value set using metadata, LLM-assisted classification, billing data, and human expert validation.',
    imagePlaceholder: 'vsac-framework.png'
  },
  {
    slug: 'mental-health-ai-transparency',
    tags: ['Mental Health','AI Governance'],
    title: 'AI Evaluation in Mental Health Apps',
    description:
      'Reviewing mental health apps to evaluate how developers disclose AI use, data practices, oversight, and safety, translating app-store claims into evidence on transparency gaps.',
    imagePlaceholder: 'mh-ai-transparency.png'
  },
  {
    slug: 'ico-biobank-discovery',
    tags: ['Biomedical Ontology', 'Knowledge Engineering'],
    title: 'Informed Consent Ontology for Biobank Discovery',
    description:
      'First-authored an ontology mapping of informed consent clauses to ICO, identifying 6 modeling gaps and proposing extensions for computable biobank permissions.',
    imagePlaceholder: 'biobank.png'
  },
  {
    slug: 'adhs-data-landscape',
    tags: ['Enterprise Data Systems', 'Data Visualization'],
    title: 'Arizona Health Data Landscape',
    description:
      'Built a metadata inventory, ER models, user-facing forms, and Power BI dashboards to help Arizona Department of Health Services document data assets and strengthen enterprise governance workflows.',
    imagePlaceholder: 'adhs-data.png'
  },
  {
    slug: 'physician-data-sensitivity',
    tags: ['Clinical Informatics', 'Ethics & Governance'],
    title: 'Physician Data Sensitivity Categorization',
    description:
      'Contributed to a mixed-method physician study showing how context changed data sensitivity decisions, supporting more context-aware data segmentation.',
    imagePlaceholder: 'physician-study.png'
  }
];

const softwareProjects = [
  {
    slug: 'satusehat-mobile',
    tags: ['National Scale', 'Consumer Health'],
    title: 'SATUSEHAT Mobile',
    description:
      'Managed product strategy and delivery for Indonesia’s national health app serving 300,000+ daily users, aligning FHIR-based EHR modules with stakeholder and implementation needs.',
    imagePlaceholder: 'satusehat.png',
    url: 'https://satusehat.kemkes.go.id/mobile/'
  },
  {
    slug: 'bgsi',
    tags: ['National Scale', 'Public Health'],
    title: 'Biomedical & Genome Science Initiative',
    description:
      'Coordinated product and platform workflows for Indonesia’s national biobanking initiative across 9 hospitals, supporting governance and management of 10,000+ biospecimen samples.',
    imagePlaceholder: 'bgsi.png',
    url: 'https://bgsi.kemkes.go.id/en'
  },
  {
    slug: 'pairgym',
    tags: ['UX Design', 'Consumer Health'],
    title: 'PairGym - App Redesign',
    description:
      'Redesigned a gym app for beginners with guided onboarding, personalized workout routes, one-tap logging, companion progression, and supportive rest-day planning.',
    imagePlaceholder: 'pairgym.png',
    url: 'https://canva.link/7hwwey0vuvustna'
  },
  {
    slug: 'anti-sycophancy-mh',
    tags: ['Prototype', 'AI Safety for Health'],
    title: 'Anti-Sycophancy Tooling for Mental Health LLMs',
    description:
      'Co-developed MCP-based tooling to detect three sycophancy patterns in mental health LLM responses using NLI models and inter-rater reliability validation.',
    imagePlaceholder: 'sycophancy.png',
    url: 'https://drive.google.com/file/d/1GudW3Tbqpe756coT6zZ93XZtBG5hiMBz/view?usp=sharing'
  },
  {
    slug: 'firstmatchu',
    tags: ['Prototype', 'Education'],
    title: 'FirstMatchU — Support Matching for First-Gen Students',
    description:
      'Built a React/TypeScript matching platform that helps ASU first-generation students find mentors and campus support during the LEI Innovation Spring Hackathon.',
    imagePlaceholder: 'firstmatchu.png',
    url: 'https://docs.google.com/presentation/d/1xyTv_PjyNbkFBKn5sY9wWZEUMvx84jONx431kDjBzSw/edit?usp=sharing'
  },
  {
    slug: 'tsunami-fighters',
    tags: ['Prototype', 'Disaster Management'],
    title: 'Tsunami Fighters Mobile Game',
    description:
      'Co-developed a multilingual Unity/C# disaster education game with Photon networking, published at IEEE R10-HTC and rated 4.13/5 in usability testing.',
    imagePlaceholder: 'tsunami-fighters.png',
    url: 'https://doi.org/10.1109/R10-HTC49770.2020.9357038'
  }
];


export function Portfolio() {
  return (
    <section id="portfolio" className="bg-[var(--gray-light)] py-12">
      <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
        <div className="mb-12">
          <p className="text-sm font-semibold text-[var(--black-dark)] mb-2 uppercase tracking-wide">
            Featured Projects
          </p>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'var(--green-dark)',
              marginBottom: '0.75rem'
            }}
          >
            My Portfolio
          </h2>
          <p className="text-base text-[var(--black-dark)]">
            Selected research, product, and software projects translating health data into usable systems.
          </p>
        </div>

        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--green-dark)',
            marginBottom: '1.5rem'
          }}
        >
          Research Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {researchProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--green-dark)',
            marginBottom: '1.5rem'
          }}
        >
          Software & Product Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}