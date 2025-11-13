import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Products />
      <HowItWorks />
      <CTA />
    </main>
  );
};

export default Index;
