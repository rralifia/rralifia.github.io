import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function VSACSUDFramework() {
  return (
    <>
      <PageMeta
        title="Value Set Production for Substance Use"
        description="Semi-automated workflow for producing substance-use clinical value sets using metadata, LLM-assisted classification, billing data, and expert validation."
      />
      <ProjectDetail
        tags={['Clinical Informatics', 'Data Interoperability']}
        title="Value Set Production for Substance Use"
        status="In Progress"
        tagline="A semi-automated workflow for producing domain-specific clinical value sets that are easier to review, validate, and govern."
        role="Primary Researcher"
        timeline="Jan 2026-May 2026"
        team="Preston Lee, PhD; Anita Murcko, MD; Deborah Ariosto, PhD; Adela Grando, PhD"
        imagePlaceholder="vsac-framework.png"
        problem="Clinical value set production is often manual, inconsistent, and difficult to scale across large terminology repositories. Substance-use information is especially challenging because relevant concepts can appear across multiple code systems and clinical contexts."
        approach="Built a multi-signal workflow that combines repository metadata, LLM-assisted classification, real-world billing data, and expert validation to identify candidate value sets and reduce review burden."
        methodsTitle="What I Built"
        methods="Developed a semi-automated pipeline using metadata scoring, LLM-assisted classification, claims-frequency signals, keyword review, terminology-specific checks, and physician validation to support substance-use value set production."
        outcomes={[
          'Designed a portable workflow for domain-level value set production.',
          'Integrated technical signals from VSAC metadata, LLM outputs, and real-world billing data.',
          'Used human expert review as the final validation layer for clinical relevance.'
        ]}
        relatedProjects={[
          {
            slug: 'physician-data-sensitivity',
            tags: ['Clinical Informatics','Ethics & Governance'],
            title: 'Physician Data Sensitivity Categorization',
            description: 'Studied how EHR context changes physician decisions about sensitive data.',
            imagePlaceholder: 'physician-study.png'
          },
          {
            slug: 'adhs-data-landscape',
            tags: ['Enterprise Data Systems', 'Data Visualization'],
            title: 'Arizona Health Data Landscape',
            description: 'Built metadata and dashboard workflows for enterprise data governance.',
            imagePlaceholder: 'adhs-data.png'
          }
        ]}
      />
    </>
  );
}