import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function PairGym() {
  return (
    <>
      <PageMeta
        title="PairGym - App Redesign"
        description="UX redesign for a beginner-friendly gym app with personalized workout routes, one-tap logging, companion progression, and rest-day support."
      />
      <ProjectDetail
        tags={['UX Design', 'Consumer Health']}
        title="PairGym - App Redesign"
        status="Prototype"
        tagline="A guided gym experience for first-time gym users, designed to make showing up feel simple, supportive, and rewarding."
        role="UX/Product Designer"
        timeline="May 2026"
        team="Fiodesy Putri; Hadijah Larasti"
        imagePlaceholder="pairgym.png"
        problem="First-time gym users often feel unsure where to start, overwhelmed by equipment, and discouraged by logging tools that feel like homework."
        approach="Redesigned the experience around guided onboarding, personalized workout routes, simple equipment education, one-tap logging, and a companion that grows with user progress."
        methodsTitle="What I Designed"
        methods="Created a beginner-centered app concept with personalized plans, equipment-use guidance, one-tap workout logging, companion XP and milestones, gym battles, and optional cycle-aware rest-day planning."
        outcomes={[
          'Reframed progress around consistency and confidence rather than judgment or comparison.',
          'Reduced beginner friction through guided day-one planning and simple exercise explanations.',
          'Added companion progression, badges, and rest-day support to make recovery part of the journey.'
        ]}
        artifacts={[
          { label: 'View Presentation', url: 'https://canva.link/7hwwey0vuvustna', primary: true }
        ]}
        relatedProjects={[
          {
            slug: 'firstmatchu',
            tags: ['Prototype', 'Education'],
            title: 'FirstMatchU - Support Matching for First-Gen Students',
            description: 'Built a React/TypeScript matching platform for first-generation student support.',
            imagePlaceholder: 'firstmatchu.png'
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