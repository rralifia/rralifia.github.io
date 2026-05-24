import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function ICOBiobankDiscovery() {
  return (
    <>
      <PageMeta
        title="Informed Consent Ontology for Biobank Discovery"
        description="Ontology-based work translating biobank consent language into computable permissions for cross-repository discovery."
      />
      <ProjectDetail
        tags={['Biomedical Ontology', 'Knowledge Engineering']}
        title="Informed Consent Ontology for Biobank Discovery"
        status="Paper Under Review"
        tagline="Turning free-text biobank consent language into computable permissions that can support cross-repository specimen and data discovery."
        role="Primary Researcher"
        timeline="Nov 2025-Feb 2026"
        team="Adela Grando, PhD; Yonqun He, PhD; Zie Jheng, PhD; Muhammad Amith, PhD; Frank Manion, PhD"
        imagePlaceholder="biobank.png"
        problem="Biobank consent permissions are often stored as narrative text, making it difficult to search across repositories while respecting participant permissions and use restrictions."
        approach="Mapped real-world consent clauses to the Informed Consent Ontology, identified where existing concepts were insufficient, and proposed targeted extensions for biobank discovery use cases."
        methodsTitle="What I Built"
        methods="Mapped 394 consent clauses to ICO, modeled permission logic for discovery queries, identified 6 systematic representation gaps, and proposed 11 ontology extensions for computable biobank permissions."
        outcomes={[
          'Mapped 394 consent clauses into ontology-based permission logic.',
          'Identified 6 systematic modeling gaps relevant to biobank discovery.',
          'Proposed 11 ICO extensions to support more precise consent-aware data queries.'
        ]}
        relatedProjects={[
          {
            slug: 'digital-health-consent',
            tags: ['Digital Health','Ethics & Governance'],
            title: 'Digital Health Informed Consent Framework',
            description: 'Published an NIH-aligned framework for measurable digital health consent review.',
            imagePlaceholder: 'consent-framework.png'
          },
          {
            slug: 'bgsi',
            tags: ['National Scale', 'Public Health'],
            title: 'Biomedical & Genome Science Initiative',
            description: 'Coordinated product and platform workflows for Indonesia national biobanking initiative.',
            imagePlaceholder: 'bgsi.png'
          }
        ]}
      />
    </>
  );
}
