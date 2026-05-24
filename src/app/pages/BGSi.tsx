import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function BGSi() {
  return (
    <>
      <PageMeta
        title="Biomedical & Genome Science Initiative"
        description="Product and platform coordination for Indonesia national biobanking initiative across hospitals and biospecimen workflows."
      />
      <ProjectDetail
        tags={['National Scale', 'Public Health']}
        title="Biomedical & Genome Science Initiative"
        status="In Production"
        tagline="A national biobanking and genomics initiative connecting hospital implementation, biospecimen workflows, governance, and digital platform development."
        role="Product Manager"
        timeline="Jul 2022-Jul 2024"
        team="Ministry of Health of Indonesia and implementing hospitals"
        imagePlaceholder="bgsi.png"
        problem="A national genomics and biobank program requires coordination across hospitals, data systems, biospecimen workflows, policy expectations, and technology teams."
        approach="Supported cross-site product and platform coordination, translating implementation needs into workflows, requirements, and alignment across technical and public health stakeholders."
        methodsTitle="What I Delivered"
        methods="Coordinated digital platform workflows, stakeholder communication, and implementation planning for national biobank sites, including requirements alignment across central teams and hospital partners."
        outcomes={[
          'Supported technology platforms for 10 national biobank sites.',
          'Contributed to workflows connected to the 10K Human Genome Project biospecimen samples.',
          'Helped align product, policy, and implementation needs across a national public health initiative.'
        ]}
        artifacts={[
          { label: 'View BGSi', url: 'https://bgsi.kemkes.go.id/en', primary: true }
        ]}
        relatedProjects={[
          {
            slug: 'satusehat-mobile',
            tags: ['National Scale', 'Consumer Health'],
            title: 'SATUSEHAT Mobile',
            description: 'Managed product strategy for Indonesia national health app and FHIR-based health-record modules.',
            imagePlaceholder: 'satusehat.png'
          },
          {
            slug: 'ico-biobank-discovery',
            tags: ['Biomedical Ontology', 'Knowledge Engineering'],
            title: 'Informed Consent Ontology for Biobank Discovery',
            description: 'Mapped consent clauses to ICO and proposed extensions for computable biobank permissions.',
            imagePlaceholder: 'biobank.png'
          }
        ]}
      />
    </>
  );
}
