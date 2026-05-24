import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function FirstMatchU() {
  return (
    <>
      <PageMeta
        title="FirstMatchU - Support Matching for First-Gen Students"
        description="React and TypeScript prototype connecting first-generation ASU students with mentors and campus support."
      />
      <ProjectDetail
        tags={['Prototype', 'Education']}
        title="FirstMatchU - Support Matching for First-Gen Students"
        status="Hackathon"
        tagline="A matching platform that helps first-generation students find mentors, resources, and campus support that fit their needs."
        role="Prototype Developer"
        timeline="April 2026"
        team="Fiodesy Putri; Aprilia Puspita; Febriani Ronsumbre; Seneca Dalle; Sefni Oemolos"
        imagePlaceholder="firstmatchu.png"
        problem="First-generation students may know that support exists, but still struggle to find the right person, service, or resource at the right time."
        approach="Designed a guided onboarding and matching experience that collects student needs, explains why a match is recommended, and reduces friction in accessing support."
        methodsTitle="What I Built"
        methods="Built a React/TypeScript prototype, designed onboarding and matching transparency features, and contributed to the product strategy and adoption deck for campus implementation."
        outcomes={[
          'Built a working React/TypeScript prototype during the hackathon.',
          'Designed an onboarding flow that captures support needs and preferences.',
          'Created product strategy materials for adoption within student support services.'
        ]}
        artifacts={[
          { label: 'View Presentation', url: 'https://docs.google.com/presentation/d/1xyTv_PjyNbkFBKn5sY9wWZEUMvx84jONx431kDjBzSw/edit?usp=sharing', primary: true }
        ]}
        relatedProjects={[
          {
            slug: 'pairgym',
            tags: ['UX Design', 'Consumer Health'],
            title: 'PairGym - App Redesign',
            description: 'Redesigned a beginner-friendly gym app with guided plans, one-tap logging, and companion progression.',
            imagePlaceholder: 'pairgym.png'
          },
          {
            slug: 'satusehat-mobile',
            tags: ['National Scale', 'Consumer Health'],
            title: 'SATUSEHAT Mobile',
            description: 'Managed product strategy for Indonesia national health app and FHIR-based health-record modules.',
            imagePlaceholder: 'satusehat.png'
          }
        ]}
      />
    </>
  );
}
