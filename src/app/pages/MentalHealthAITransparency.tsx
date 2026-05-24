import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function MentalHealthAITransparency() {
  return (
    <>
      <PageMeta
        title="FUTURE-AI Evaluation of Consumer-Facing Mental Health Apps"
        description="Research evaluating consumer-facing mental health apps against FUTURE-AI principles for trustworthy health AI."
      />
      <ProjectDetail
        tags={['Mental Health','AI Governance']}
        title="AI Evaluation in Mental Health Apps"
        status="In Progress"
        tagline="Evaluating whether consumer-facing mental health apps communicate AI capabilities, evidence, safety, oversight, and real-world readiness in a trustworthy way."
        role="Student Researchers Lead"
        timeline="Feb 2026-May 2026"
        team="ASU SHARES Lab"
        imagePlaceholder="mh-ai-transparency.png"
        problem="Mental health apps increasingly advertise AI features, but users may not receive enough information to judge evidence quality, safety boundaries, human oversight, or whether the tool is appropriate for their needs."
        approach="Use the FUTURE-AI principles - fairness, universality, traceability, usability, robustness, and explainability - as an evaluation lens for developer-controlled app materials."
        methodsTitle="What I Am Evaluating"
        methods="Reviewing app store listings, screenshots, privacy policies, websites, and developer materials to assess how apps describe AI capabilities, data practices, evidence, safety limitations, oversight, and user-facing explanations."
        outcomes={[
          'Scope updated to a FUTURE-AI-based evaluation of trustworthy mental health AI.',
          'Coding focuses on what users can learn from developer-controlled materials before adoption.',
          'Findings will identify transparency gaps and practical opportunities for safer consumer-facing mental health AI.'
        ]}
        relatedProjects={[
          {
            slug: 'anti-sycophancy-mh',
            tags: ['Prototype', 'AI Safety for Health'],
            title: 'Anti-Sycophancy Tooling for Mental Health LLMs',
            description: 'Built a prototype detector for sycophancy patterns in mental health LLM responses.',
            imagePlaceholder: 'sycophancy.png'
          },
          {
            slug: 'digital-health-consent',
            tags: ['Digital Health','Ethics & Governance'],
            title: 'Digital Health Informed Consent Framework',
            description: 'Published an NIH-aligned framework for measurable digital health consent review.',
            imagePlaceholder: 'consent-framework.png'
          }
        ]}
      />
    </>
  );
}