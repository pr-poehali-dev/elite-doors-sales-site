import HeroSection from "@/components/HeroSection";
import DoorShowcase from "@/components/DoorShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DoorShowcase />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
