import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { DoctorSection } from '@/components/sections/doctor-section';  // 👈 import new section
import { ServicesSection } from '@/components/sections/services-section';
import { ContactSection } from '@/components/sections/contact-section';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <DoctorSection />   {/* 👈 new section placed after About */}
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
