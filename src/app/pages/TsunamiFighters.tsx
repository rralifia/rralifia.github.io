import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

export function TsunamiFighters() {
  return (
    <>
      <PageMeta
        title="Tsunami Fighters Mobile Game"
        description="Published multilingual Unity mobile game for earthquake and tsunami preparedness education with usability testing."
      />
      <ProjectDetail
        tags={['Prototype', 'Disaster Management']}
        title="Tsunami Fighters Mobile Game"
        status="Paper Published"
        tagline="A multilingual disaster education game that teaches earthquake and tsunami preparedness through collaborative mobile play."
        role="Co-developer & Co-author"
        timeline="Sep 2019-Sep 2020"
        team="Bandung Institute of Technology and collaborators"
        imagePlaceholder="tsunami-fighters.png"
        problem="Disaster preparedness education can be difficult to make engaging, especially for young learners who need practical knowledge before an emergency happens."
        approach="Designed a mobile game experience that combines collaborative play, multilingual communication, and pre/post-test learning assessment."
        methodsTitle="What I Built"
        methods="Co-developed a Unity/C# turn-based visual novel game with Photon multiplayer networking, multilingual chat, and a knowledge evaluation flow for disaster preparedness behaviors."
        outcomes={[
          'Published at IEEE R10 Humanitarian Technology Conference 2020.',
          'Achieved a 4.13/5 usability score across 26 student testers.',
          'Supported multilingual play in English, Indonesian, and Japanese.'
        ]}
        artifacts={[
          { label: 'View Publication', url: 'https://doi.org/10.1109/R10-HTC49770.2020.9357038', primary: true }
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
            slug: 'pairgym',
            tags: ['UX Design', 'Consumer Health'],
            title: 'PairGym - App Redesign',
            description: 'Redesigned a beginner-friendly gym app with guided plans, one-tap logging, and companion progression.',
            imagePlaceholder: 'pairgym.png'
          }
        ]}
      />
    </>
  );
}
