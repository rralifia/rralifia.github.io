const publications = [
  {
    title: 'Bridging Ethical Gaps in Digital Health Research: A Framework for Informed Consent Aligned with NIH Guidance',
    authors: 'Alifia, R. R., Sadeghi, M., Grando, A.',
    venue: 'BMC Medical Ethics',
    year: '2025',
    doi: 'https://doi.org/10.1186/s12910-025-01291-5',
    tags: ['Published', 'First Author'],
    description:
      'Developed and published an NIH-aligned consent framework that translates digital health ethics requirements into 63 measurable attributes across 4 domains. Evaluated 25 real-world consent forms to identify compliance gaps and practical improvement areas for researchers and developers.'
  },
  {
    title: 'Tsunami Fighters: Collaborative Multilingual Mobile Game for Earthquake and Tsunami Disaster Preparedness Education',
    authors: 'Alifia, R. R., Rahma, F., Hamida, U., Irawan, Y. S., & Egawa, S.,  Koesoema, A. P.',
    venue: '2020 IEEE 8th R10 Humanitarian Technology Conference',
    year: '2020',
    doi: 'https://doi.org/10.1109/R10-HTC49770.2020.9357038',
    tags: ['Published', 'Co-author'],
    description:
      'Co-developed a multilingual Unity mobile game that teaches earthquake and tsunami preparedness through collaborative play. Built multiplayer features with Photon and supported usability testing, achieving a 4.13/5 score across 26 student testers.'
  },
  {
    title: 'Transforming Consent Language into Computable Permissions for Cross-Repository Biobank Discovery Using the Informed Consent Ontology',
    authors: 'ASU SHARES Lab & ICO Working Group Members',
    status: 'Under peer review',
    tags: ['Under Review', 'First Author'],
    description:
      'Mapped 394 real-world biobank consent clauses to the Informed Consent Ontology, identifying 6 modeling gaps and proposing 11 extensions. The work supports computable permission checking for cross-repository biobank discovery and federated research.'
  },
  {
    title: 'A Semi-Automated Framework for Domain-Level Classification of VSAC Value Sets for Substance Use Information',
    authors: 'ASU SHARES Lab Members',
    status: 'Manuscript in preparation',
    tags: ['In Progress', 'First Author'],
    description:
      'Designing a portable screening pipeline to classify substance-use-related VSAC value sets using metadata scoring, LLM-assisted code expansion, claims frequency, and physician validation. The framework supports scalable terminology review and clinical data governance.'
  },
  {
    title: 'FUTURE-AI Evaluation of Consumer-Facing Mental Health Apps',
    authors: 'ASU SHARES Lab Members',
    status: 'Research in progress',
    tags: ['In Progress', 'Team Project'],
    description:
      'Evaluating consumer-facing mental health apps against the FUTURE-AI principles of fairness, universality, traceability, usability, robustness, and explainability. The study reviews developer-controlled materials to assess how apps communicate AI capabilities, evidence, safety, oversight, and real-world readiness.'
  },
  {
    title: 'Physician Categorization of Sensitive Health Data for EHR Segmentation',
    authors: 'ASU SHARES Lab Members',
    status: 'Under peer review',
    tags: ['Under Review', 'Contributor'],
    description:
      'Contributed to a mixed-method study showing that EHR context changed 66.1% of physician data-sensitivity categorizations. Findings support more context-aware approaches to EHR segmentation, patient-driven privacy, and automated data-access controls.'
  }
];

const contributions = [
  {
    title: 'Informed Consent Ontology Contribution',
    description:
      'Contributed ontology modeling work for computable biobank consent and permission discovery, including gap analysis and proposed extensions to support consent-aware data queries.',
    link: 'https://ontobee.org/ontology/ICO',
    linkLabel: 'View ICO ontology'
  }
];

export function Accomplishments() {
  return (
    <section id="accomplishments" className="bg-[var(--gray-light)] py-12">
      <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
        <div className="mb-12">
          <p className="text-sm font-semibold text-[var(--black-dark)] mb-2 uppercase tracking-wide">Accomplishments</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--green-dark)', marginBottom: '0.75rem' }}>
            Selected Research & Contributions
          </h2>
          <p className="text-base text-[var(--black-dark)]">
            Selected publications and research contributions translating ethics, data governance, and health AI evaluation into practical frameworks and tools.
          </p>
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--green-dark)', marginBottom: '1.5rem' }}>
          Publications
        </h3>
        <div className="space-y-4 mb-12">
          {publications.map((pub, index) => (
            <div key={index} className="bg-[var(--white)] p-6 rounded-lg shadow-sm">
              <div className="flex flex-wrap gap-2 mb-3">
                {pub.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 text-xs rounded-full font-medium"
                    style={{
                      backgroundColor: tag === 'Published' ? 'var(--green-light)' : tag.includes('Review') ? 'var(--green-dark)' : 'var(--gray-medium)',
                      color: 'var(--white)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--black-dark)', marginBottom: '0.5rem' }}>
                {pub.title}
              </h4>
              <p className="text-sm text-[var(--gray-medium)] mb-2">
                {pub.authors}
                {pub.venue && ` (${pub.year})`}
              </p>
              {pub.venue && (
                <p className="text-sm text-[var(--black-dark)] italic mb-2">{pub.venue}</p>
              )}
              {pub.status && (
                <p className="text-sm text-[var(--gray-medium)] mb-2">{pub.status}</p>
              )}
              {pub.description && (
                <p className="text-sm text-[var(--black-dark)] leading-relaxed mb-3">{pub.description}</p>
              )}
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--green-light)] hover:text-[var(--green-dark)] text-sm font-semibold"
                >
                  DOI: {pub.doi.replace('https://doi.org/', '')}
                </a>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--green-dark)', marginBottom: '1.5rem' }}>
          Technical Contributions
        </h3>
        <div className="space-y-4">
          {contributions.map((contrib, index) => (
            <div key={index} className="bg-[var(--white)] p-6 rounded-lg shadow-sm border-l-4 border-[var(--green-light)]">
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--black-dark)', marginBottom: '0.75rem' }}>
                {contrib.title}
              </h4>
              <p className="text-sm text-[var(--black-dark)] mb-4 leading-relaxed">
                {contrib.description}
              </p>
              <a
                href={contrib.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[var(--green-light)] hover:text-[var(--green-dark)] text-sm font-semibold"
              >
                {contrib.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
