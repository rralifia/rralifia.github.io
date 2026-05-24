import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function SATUSEHATMobile() {
  return (
    <>
      <PageMeta
        title="SATUSEHAT Mobile"
        description="Product strategy and delivery for Indonesia national health app, including FHIR-based health-record modules and patient-facing features."
      />
      <ProjectDetail
        tags={['National Scale', 'Consumer Health']}
        title="SATUSEHAT Mobile"
        status="In Production"
        tagline="Indonesia national health app serving 300,000+ daily users, connecting public health priorities with user-facing digital health services."
        role="Product Manager"
        timeline="Jul 2022-Jul 2024"
        team="Ministry of Health of Indonesia"
        imagePlaceholder="satusehat.png"
        problem="Indonesia needed patient-facing digital health services that could translate national health priorities into reliable, usable features across a large and complex health system."
        approach="Managed product strategy, requirements, stakeholder alignment, and delivery planning for health-record and monitoring features connected to national digital health infrastructure."
        methodsTitle="What I Delivered"
        methods="Translated policy and public health needs into product roadmaps, dashboards, implementation plans, and agile delivery priorities. Coordinated alignment across policy, public health, engineering, and product teams for FHIR-based EHR modules."
        outcomes={[
          'Managed product strategy for a national health app serving 300,000+ daily users.',
          'Supported patient medical summary and health monitoring features.',
          'Aligned product delivery with public health priorities, stakeholder needs, and national implementation constraints.'
        ]}
        artifacts={[
          { label: 'View SATUSEHAT Mobile', url: 'https://satusehat.kemkes.go.id/mobile/', primary: true }
        ]}
        relatedProjects={[
          {
            slug: 'bgsi',
            tags: ['National Scale', 'Public Health'],
            title: 'Biomedical & Genome Science Initiative',
            description: 'Coordinated product and platform workflows for Indonesia national biobanking initiative.',
            imagePlaceholder: 'bgsi.png'
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
