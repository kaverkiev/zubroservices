import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { CompareTable } from "@/components/CompareTable";
import { Situations } from "@/components/Situations";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { SecondaryCTA } from "@/components/SecondaryCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <CompareTable />
        <Situations />
        <Testimonials />
        <FAQ />
        <SecondaryCTA />
      </main>
      <Footer />
    </>
  );
}
