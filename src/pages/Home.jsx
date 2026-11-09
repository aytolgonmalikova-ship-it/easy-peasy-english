import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('meta.home');

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CtaBanner />
    </>
  );
}
