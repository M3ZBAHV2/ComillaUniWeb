import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ViceChancellorQuote from "@/components/ViceChancellorQuote";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import MissionSection from "@/components/MissionSection";
import NavigationCards from "@/components/NavigationCards";
import NewsSection from "@/components/NewsSection";
import StatisticsSection from "@/components/StatisticsSection";
import ResidentialSection from "@/components/ResidentialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <ViceChancellorQuote />
        </section>
        <AnnouncementsSection />
        <section id="academics">
          <MissionSection />
        </section>
        <section id="admissions">
          <NavigationCards />
        </section>
        <section id="research">
          <StatisticsSection />
        </section>
        <section id="student-life">
          <ResidentialSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
