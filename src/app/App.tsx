import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LandingPage } from './components/LandingPage';
import { DigitalHealthConsent } from './pages/DigitalHealthConsent';
import { VSACSUDFramework } from './pages/VSACSUDFramework';
import { MentalHealthAITransparency } from './pages/MentalHealthAITransparency';
import { ICOBiobankDiscovery } from './pages/ICOBiobankDiscovery';
import { ADHSDataLandscape } from './pages/ADHSDataLandscape';
import { PhysicianDataSensitivity } from './pages/PhysicianDataSensitivity';
import { SATUSEHATMobile } from './pages/SATUSEHATMobile';
import { BGSi } from './pages/BGSi';
import { AntiSycophancyMH } from './pages/AntiSycophancyMH';
import { FirstMatchU } from './pages/FirstMatchU';
import { PairGym } from './pages/PairGym';
import { TsunamiFighters } from './pages/TsunamiFighters';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects/digital-health-consent" element={<DigitalHealthConsent />} />
            <Route path="/projects/vsac-sud-framework" element={<VSACSUDFramework />} />
            <Route path="/projects/mental-health-ai-transparency" element={<MentalHealthAITransparency />} />
            <Route path="/projects/ico-biobank-discovery" element={<ICOBiobankDiscovery />} />
            <Route path="/projects/adhs-data-landscape" element={<ADHSDataLandscape />} />
            <Route path="/projects/physician-data-sensitivity" element={<PhysicianDataSensitivity />} />
            <Route path="/projects/satusehat-mobile" element={<SATUSEHATMobile />} />
            <Route path="/projects/bgsi" element={<BGSi />} />
            <Route path="/projects/anti-sycophancy-mh" element={<AntiSycophancyMH />} />
            <Route path="/projects/pairgym" element={<PairGym />} />
            <Route path="/projects/firstmatchu" element={<FirstMatchU />} />
            <Route path="/projects/tsunami-fighters" element={<TsunamiFighters />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}