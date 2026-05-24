import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function PhysicianDataSensitivity() {
  return (
    <>
      <PageMeta
        title="Physician Data Sensitivity Categorization"
        description="Mixed-method research showing how EHR context changes physician data-sensitivity decisions."
      />
      <ProjectDetail
        tags={['Clinical Informatics','Ethics & Governance']}
        title="Physician Data Sensitivity Categorization"
        status="Paper Under Review"
        tagline="A mixed-method study examining how clinical context changes physician judgments about sensitive health data."
        role="Contributor"
        timeline="Feb 2026"
        team="ASU SHARES Lab"
        imagePlaceholder="physician-study.png"
        problem="EHR segmentation policies often rely on labels for sensitive data, but clinicians may judge sensitivity differently when a data element is seen alone versus within the full patient record."
        approach="Compared physician categorization decisions across isolated data elements and full EHR context, then analyzed how often context changed sensitivity judgments."
        methodsTitle="Methods"
        methods="Supported a mixed-method study of 24 physicians and contributed to analysis and manuscript development around context-aware EHR segmentation and data-access control."
        outcomes={[
          'Found that 66.1% of sensitivity categorizations changed when EHR context was added.',
          'Supported evidence for more context-aware data segmentation policies.',
          'Contributed to manuscript development for peer review.'
        ]}
        relatedProjects={[
          {
            slug: 'vsac-sud-framework',
            tags: ['Clinical Informatics', 'Data Interoperability'],
            title: 'Value Set Production for Substance Use',
            description: 'Developed a semi-automated workflow for producing domain-specific clinical value sets.',
            imagePlaceholder: 'vsac-framework.png'
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
