import { FlaskConical, BarChart3, Network, ShieldCheck, LucideIcon } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: FlaskConical,
    title: 'Applied Health Research',
    description: 'Designing mixed-method studies that translate clinical, public health, and stakeholder needs into actionable evidence. Experience includes interviews, qualitative analysis, inter-rater reliability, and terminology classification.'
  },
  {
    icon: BarChart3,
    title: 'Data Analysis & Visualization',
    description: 'Analyzing complex health data using Python, SAS, and SQL to support research, product, and policy decisions. Skilled in biostatistics, machine learning workflows, relational databases, and data storytelling.'
  },
  {
    icon: Network,
    title: 'Health Informatics & Interoperability',
    description: 'Building informatics solutions with HL7 FHIR, biomedical ontologies, and clinical terminologies including SNOMED CT, ICD, and LOINC.'
  },
  {
    icon: ShieldCheck,
    title: 'Digital Health Governance & Policy',
    description: 'Developing consent, data governance, and compliance frameworks for digital health research. Focus areas include ethical data use, AI usability and transparency, and implementation in real-world health systems.'
  }
];

export function Skills() {
  return (
    <section id="skills" className="bg-[var(--white)] py-12">
      <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
        <div className="mb-12">
          <p className="text-sm font-semibold text-[var(--black-dark)] mb-2 uppercase tracking-wide">Skills</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--green-dark)', marginBottom: '0.75rem' }}>My Expertise</h2>
          <p className="text-base text-[var(--black-dark)]">
            Bridging research, product, and policy to strengthen health systems at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="bg-[var(--gray-light)] p-6 rounded-lg">
                <Icon
                  size={48}
                  strokeWidth={1.5}
                  color="var(--green-dark)"
                  className="mb-4"
                />
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--black-dark)', marginBottom: '0.75rem' }}>
                  {skill.title}
                </h3>
                <p className="text-base text-[var(--black-dark)]">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}