import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExperiencesSection from "../components/ExperiencesSection";
import TechnicalSkillsSection from "../components/TechnicalSkillsSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import CertificationsSection from "../components/CertificationsSection";
import EducationSection from "../components/EducationSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="w-4/5 max-w-[1200px] min-w-[320px] mx-auto p-8 pb-16 bg-[#181824] text-[#f3f3f3] font-sans box-border">
      <Hero />
      <AboutSection />
      <ExperiencesSection />
      <TechnicalSkillsSection />
      <FeaturedProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <FooterSection />
    </div>
  );
}