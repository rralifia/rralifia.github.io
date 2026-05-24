const workExperience = [
  {
    role: 'Data Strategy & Visualization Intern',
    organization: 'Arizona Department of Health Services',
    period: 'Sep 2025 – May 2026',
    location: 'Phoenix, AZ',
    bullets: [
      'Built a SQL-ready metadata inventory and ER model to support department-wide data lineage tracking and enterprise data governance.',
      'Designed intake templates and a submission workflow to standardize metadata collection across ADHS programs.',
      'Prototyped Power BI dashboards that visualize data assets, ownership, and program-level data flows for decision-making.'
    ]
  },
  {
    role: 'Graduate Student Researcher',
    organization: 'ASU SHARES Lab',
    period: 'Aug 2024 – May 2026',
    location: 'Tempe, AZ',
    bullets: [
      'Lead research on AI transparency, safety, and governance in mental health applications, translating global guidance into measurable evaluation criteria.',
      'Developed a semi-automated workflow using metadata analysis, LLM-assisted classification, real-world billing data, and expert validation to produce domain-specific clinical value set.',
      'First-authored a published NIH-aligned digital health consent framework, converting ethical requirements into structured compliance metrics.',
      'Contributed to peer-reviewed research on physician data sensitivity decisions and context-aware EHR data segmentation.'
    ]
  },
  {
    role: 'Working Group Member',
    organization: 'AMIA Global Health Informatics',
    period: 'Dec 2025 – Mar 2026',
    location: 'Remote',
    bullets: [
      'Analyzed sustainability and scalability challenges in digital health pilot programs across global health settings.',
      'Collaborated with informaticists, clinicians, and public health researchers to synthesize implementation barriers and lessons learned.'
    ]
  },
  {
    role: 'Contributor',
    organization: 'Informed Consent Ontology Working Group',
    period: 'Nov 2025 – Feb 2026',
    location: 'Remote',
    bullets: [
      'Built an ontology-based prototype for discovering biobank data and permissions using the Informed Consent Ontology.',
      'Mapped consent requirements into computable logic, identified systematic modeling gaps, and proposed extensions for biobank query use cases.',
      'Presented findings to the ontology development team and contributed to roadmap discussions for future ICO enhancements.'
    ]
  },
  {
    role: 'Data Assistant',
    organization: 'ASU College of Health Solutions',
    period: 'May 2025 – Dec 2025',
    location: 'Tempe, AZ',
    bullets: [
      'Improved department workflows by creating structured tools for data collection, tracking, and research support management.',
      'Enhanced the usability of a faculty research support portal by identifying system issues and supporting iterative improvements.'
    ]
  },
  {
    role: 'Product Manager',
    organization: 'Ministry of Health of Indonesia',
    period: 'Jul 2022 – Jul 2024',
    location: 'Jakarta, Indonesia',
    bullets: [
      'Managed product strategy for SATUSEHAT Mobile, Indonesia’s national health app, including patient medical summary and health monitoring features.',
      'Translated public health priorities into product roadmaps, dashboards, and implementation plans for national digital health systems.',
      'Coordinated cross-functional alignment between policy, public health, engineering, and agile product teams.',
      'Supported the Biomedical and Genome Science Initiative technology platforms for 10 national biobank sites and 10K human genome project biospecimen samples.'
    ]
  },
  {
    role: 'AI Product / Project Manager',
    organization: 'Prosa AI',
    period: 'Mar 2021 – Jun 2022',
    location: 'Bandung, Indonesia',
    bullets: [
      'Delivered AI-based products by translating research, user needs, and market insights into product requirements and delivery plans.',
      'Improved digital learning tools through usability testing, user feedback analysis, and iterative feature refinement.',
      'Supported deployment of text-to-speech features in national platforms to improve accessibility and user experience at scale.'
    ]
  }
];

const education = [
  {
    role: 'Master of Science, Biomedical Informatics & Data Science',
    organization: 'Arizona State University',
    period: 'Aug 2024 – May 2026',
    location: 'Tempe, AZ',
    bullets: [
      'GPA: 4.0/4.0',
      'Focused on biomedical informatics methods, biostatistics with SAS/R, health informatics databases, SQL, and data-driven health system design.',
      'Funded by Fulbright Foreign Student Program (U.S. Department of State) & ASU Graduate College.'
    ]
  },
  {
    role: 'Bachelor of Science, Biomedical Engineering',
    organization: 'Bandung Institute of Technology',
    period: 'Aug 2016 – Oct 2020',
    location: 'West Java, Indonesia',
    bullets: [
      'GPA: 3.2/4.0',
      'Developed Tsunami Fighters, a mobile disaster education game later published at IEEE R10-HTC 2020.',
      'Funded by the Ministry of Education and Culture of Indonesia.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="bg-[var(--white)] py-12">
      <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
        <div className="mb-12">
          <p className="text-sm font-semibold text-[var(--black-dark)] mb-2 uppercase tracking-wide">
            Experience
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--green-dark)', marginBottom: '0.75rem' }}>
            Work & Education
          </h2>
          <p className="text-base text-[var(--black-dark)]">
            A timeline of research, product, data, and digital health experience across the United States and Indonesia.
          </p>
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--green-dark)', marginBottom: '1.5rem' }}>
          Work Experience
        </h3>
        <div className="relative mb-16">
          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[var(--border-gray)]"></div>

          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <div key={index} className="relative pl-10">
                <div
                  className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--green-light)]"
                  style={{ border: '2px solid var(--white)' }}
                ></div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--black-dark)', marginBottom: '0.25rem' }}>
                  {exp.role} @ {exp.organization}
                </h4>
                <p className="text-sm text-[var(--gray-medium)] mb-3">
                  {exp.period} | {exp.location}
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 marker:text-[var(--border-gray)]">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="pl-1 text-base text-[var(--black-dark)] leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <h3 id="education" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--green-dark)', marginBottom: '1.5rem' }}>
          Education
        </h3>
        <div className="relative">
          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[var(--border-gray)]"></div>

          <div className="space-y-8">
            {education.map((exp, index) => (
              <div key={index} className="relative pl-10">
                <div
                  className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--green-light)]"
                  style={{ border: '2px solid var(--white)' }}
                ></div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--black-dark)', marginBottom: '0.25rem' }}>
                  {exp.role} @ {exp.organization}
                </h4>
                <p className="text-sm text-[var(--gray-medium)] mb-3">
                  {exp.period} | {exp.location}
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 marker:text-[var(--border-gray)]">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="pl-1 text-base text-[var(--black-dark)] leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}