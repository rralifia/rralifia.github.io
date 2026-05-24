import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function DigitalHealthConsent() {
  return (
    <>
      <PageMeta
        title="Digital Health Informed Consent Framework"
        description="Published NIH-aligned framework translating digital health consent requirements into measurable ethics and compliance attributes."
      />
      <ProjectDetail
        tags={['Ethics & Governance', 'Published']}
        title="Digital Health Informed Consent Framework"
        status="Published"
        tagline="A practical framework for evaluating whether digital health consent forms clearly explain data use, participant rights, voluntariness, and understanding."
        role="Primary Researcher"
        timeline="Aug 2024-May 2025"
        team="Malihe Sadeghi, PhD; Adela Grando, PhD"
        imagePlaceholder="consent-framework.png"
        problem="Digital health studies often collect complex data through apps, sensors, platforms, and connected systems. Consent forms need to explain these practices clearly, but researchers lack a structured way to assess whether key ethical elements are covered."
        approach="Converted NIH-informed consent expectations into an evaluable framework with measurable attributes, then applied it to real-world digital health consent forms to identify gaps and improvement areas."
        methodsTitle="What I Built"
        methods="Developed 63 consent attributes across 4 domains, operationalized them as review criteria, and evaluated 25 digital health consent forms for ethical completeness and implementation gaps."
        outcomes={[
          'Published in BMC Medical Ethics in 2025.',
          'Created a 63-attribute framework that translates ethics guidance into measurable review criteria.',
          'Evaluated 25 real-world consent forms and identified practical gaps for researchers and developers.'
        ]}
        artifacts={[
          { label: 'View Publication', url: 'https://doi.org/10.1186/s12910-025-01291-5', primary: true }
        ]}
        relatedProjects={[
          {
            slug: 'ico-biobank-discovery',
            tags: ['Biomedical Ontology', 'Knowledge Engineering'],
            title: 'Informed Consent Ontology for Biobank Discovery',
            description: 'Mapped consent clauses to ICO and proposed extensions for computable biobank permissions.',
            imagePlaceholder: 'biobank.png'
          },
          {
            slug: 'mental-health-ai-transparency',
            tags: ['Mental Health','AI Governance'],
            title: 'AI Evaluation in Mental Health Apps',
            description: 'Evaluating mental health apps against FUTURE-AI principles for trustworthy AI.',
            imagePlaceholder: 'mh-ai-transparency.png'
          }
        ]}
      />
    </>
  );
}
