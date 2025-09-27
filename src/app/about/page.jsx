import AboutCompanySection from './components/AboutCompanySection';
import AboutHeroSection from './components/AboutHero';
import AboutImageSection from './components/AboutImage';
import AboutStatsSection from './components/AboutStatsSection';
import AboutUniversityLogos from './components/AboutUniversityLogos';

export default function About() {
  return (
    <main>
      <AboutHeroSection />
      <AboutCompanySection/>
      <AboutImageSection/>
      <AboutStatsSection/>
      <AboutUniversityLogos/>
    </main>
  );
}
