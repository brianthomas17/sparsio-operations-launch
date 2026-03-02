import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import ExampleBuilds from "@/components/sections/ExampleBuilds";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Services />
      {/* <ExampleBuilds /> */}
      {/* <Testimonials /> */}
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
