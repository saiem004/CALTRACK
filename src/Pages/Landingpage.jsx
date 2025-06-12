import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import BenefitsSection from "../components/BenefitsSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <div className="pt-20"> {/* Push content below fixed navbar */}
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
