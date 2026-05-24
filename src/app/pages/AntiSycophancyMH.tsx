import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function AntiSycophancyMH() {
  return (
    <>
      <PageMeta
        title="Anti-Sycophancy Tooling for Mental Health LLMs"
        description="Prototype tooling to detect sycophancy patterns in mental health LLM responses using NLI models and validation workflows."
      />
      <ProjectDetail
        tags={['Prototype', 'AI Safety for Health']}
        title="Anti-Sycophancy Tooling for Mental Health LLMs"
        status="Prototype"
        tagline="A prototype detector for identifying when mental health LLM responses become overly agreeable, unsafe, or insufficiently corrective."
        role="Product Lead"
        timeline="Sep 2025-Dec 2025"
        team="Chau N. N. Nguyen, Luke Foster, and Dr. Erin Chiou"
        imagePlaceholder="sycophancy.png"
        problem="Mental health LLMs can over-validate user statements, including hopeless or risky statements, instead of offering appropriate correction, grounding, or safety-aware support."
        approach="Designed a detector around three sycophancy patterns and exposed it as MCP-based tooling that can be called during LLM conversation workflows."
        methodsTitle="What I Built"
        methods="Co-developed MCP-based tooling using NLI and sentiment models, pattern-specific detection logic, and inter-rater reliability validation to evaluate sycophancy patterns in mental health LLM responses."
        outcomes={[
          'Built a working prototype for three sycophancy patterns.',
          'Applied DeBERTa-MNLI and DistilRoBERTa-based model components.',
          'Supported validation through inter-rater reliability review.'
        ]}
        artifacts={[
          { label: 'View Work', url: 'https://drive.google.com/file/d/1GudW3Tbqpe756coT6zZ93XZtBG5hiMBz/view?usp=sharing', primary: true }
        ]}
        relatedProjects={[
          {
            slug: 'mental-health-ai-transparency',
            tags: ['Mental Health','AI Governance'],
            title: 'AI Evaluation in Mental Health Apps',
            description: 'Evaluating mental health apps against FUTURE-AI principles for trustworthy AI.',
            imagePlaceholder: 'mh-ai-transparency.png'
          },
          {
            slug: 'vsac-sud-framework',
            tags: ['Clinical Informatics', 'Data Interoperability'],
            title: 'Value Set Production for Substance Use',
            description: 'Developed a semi-automated workflow for producing domain-specific clinical value sets.',
            imagePlaceholder: 'vsac-framework.png'
          }
        ]}
      />
    </>
  );
}
