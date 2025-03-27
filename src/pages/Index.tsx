
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SchedulePreview from "@/components/Schedule";
import BlogPreview from "@/components/BlogPreview";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import MusicRequest from "@/components/MusicRequest";
import PrayerRequest from "@/components/PrayerRequest";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SchedulePreview />
        
        {/* Seção de Formulários Interativos */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-radio-black mb-4">
                Entre em Contato
              </h2>
              <p className="text-radio-gray-700">
                Adoramos ouvir nossos ouvintes! Peça uma música ou compartilhe um pedido de oração com nossa comunidade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MusicRequest />
              <PrayerRequest />
            </div>
          </div>
        </section>
        
        <BlogPreview />
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
