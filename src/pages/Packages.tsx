import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PackageCard } from '@/components/PackageCard';
import { useLanguage } from '@/contexts/LanguageContext';

import heroImage from '@/assets/hero-makkah.jpg';
import madinahImage from '@/assets/madinah-hero.jpg';
import luxuryHotel from '@/assets/luxury-hotel.jpg';
import alUla from '@/assets/al-ula.jpg';
import europeTour from '@/assets/europe-tour.jpg';
import riyadh from '@/assets/riyadh.jpg';
import uhud from '@/assets/uhud.jpg';
import riyadhimg from '@/assets/riyad.jpg';
import bali from '@/assets/bali.jpg';
import thailand from '@/assets/thailand.jpg';
import swi from '@/assets/swi.jpg';
import cap from '@/assets/cap.jpg';
import mal from '@/assets/mal.jpg';
import dub from '@/assets/dub.jpg';
import jap from '@/assets/jap.jpg';
import egy from '@/assets/egy.jpg';
import par from '@/assets/par.jpg';

const Packages = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);

  const filters = [
    { id: 'all', label: t.packagesPage.filterAll },
    { id: 'hajj', label: t.packagesPage.filterHajj },
    { id: 'umrah', label: t.packagesPage.filterUmrah },
    { id: 'ziyarat', label: t.packagesPage.filterZiyarat },
    { id: 'local', label: t.packagesPage.filterLocal },
    { id: 'holidays', label: t.packagesPage.filterInternational },
  ];

  const allPackages = [
    { image: heroImage, title: 'Premium Hajj Package 2026', location: 'Makkah & Madinah', duration: '6 Days / 5 Nights', rating: 4.9, type: 'hajj', faqs: [{q:'Is transportation included?',a:'Yes, transportation included.'}], inclusions:['Premium Hotels','Transportation','Visa Assistance','24/7 Support'] },
    { image: madinahImage, title: 'Economy Hajj Package', location: 'Makkah & Madinah', duration: '4 Days / 3 Nights', rating: 4.7, type: 'hajj', faqs:[{q:'Are flights included?',a:'Yes, economy flights included.'}], inclusions:['Standard Hotels','Transportation','Visa Assistance','Support'] },
    { image: luxuryHotel, title: 'VIP Hajj Experience', location: 'Makkah & Madinah', duration: '8 Days / 7 Nights', rating: 5.0, type: 'hajj', faqs:[{q:'Is VIP service included?',a:'Yes, VIP service included.'}], inclusions:['Luxury Hotels','Private Transport','Visa Assistance','24/7 Support'] },
    { image: madinahImage, title: 'Umrah Ramadan Special', location: 'Makkah & Madinah', duration: '14 Days / 13 Nights', rating: 4.8, type: 'umrah', faqs:[{q:'Do you provide guidance?',a:'Yes, guided Umrah tours included.'}], inclusions:['Hotels','Transportation','Visa Assistance'] },
    { image: heroImage, title: 'Family Umrah Package', location: 'Makkah & Madinah', duration: '9 Days / 8 Nights', rating: 4.8, type: 'umrah', faqs:[{q:'Suitable for children?',a:'Yes, family friendly.'}], inclusions:['Hotels','Transportation','Visa Assistance'] },
    { image: luxuryHotel, title: 'Premium Umrah Experience', location: 'Makkah & Madinah', duration: '12 Days / 11 Nights', rating: 4.9, type: 'umrah', faqs:[{q:'Luxury accommodation?',a:'Yes, premium hotels.'}], inclusions:['Luxury Hotels','Transportation','Visa Assistance'] },
    { image: uhud, title: 'Complete Ziyarat Tour', location: 'Holy Sites', duration: '2 Days / 1 Nights', rating: 4.9, type: 'ziyarat', faqs:[{q:'Guided tour?',a:'Yes, guided.'}], inclusions:['Hotels','Transportation','Guide'] },
    { image: madinahImage, title: 'Madinah Ziyarat Special', location: 'Madinah', duration: '1 Days', rating: 4.8, type: 'ziyarat', faqs:[{q:'Local guide included?',a:'Yes'}], inclusions:['Hotels','Transportation','Guide'] },
    { image: riyadh, title: 'Discover Saudi Arabia', location: 'Multiple Cities', duration: '10 Days / 9 Nights', rating: 4.7, type: 'local', faqs:[{q:'Do we cover Riyadh?',a:'Yes'}], inclusions:['Hotels','Transportation','Guide'] },
    { image: alUla, title: 'Al Ula Heritage Experience', location: 'Al Ula', duration: '3 Days / 2 Nights', rating: 4.8, type: 'local', faqs:[{q:'Includes guided tours?',a:'Yes'}], inclusions:['Hotels','Transportation','Guide'] },
    { image: riyadhimg, title: 'Riyadh City Explorer', location: 'Riyadh', duration: '2 Days / 1 Nights', rating: 4.6, type: 'local', faqs:[{q:'City sightseeing?',a:'Yes'}], inclusions:['Hotels','Transportation','Guide'] },
    { image: europeTour, title: 'Abha, Saudi Arabia', location: 'Abha', duration: '4 Days / 3 Nights', rating: 4.6, type: 'local', faqs:[{q:'International trips?',a:'No'}], inclusions:['Hotels','Transportation','Guide'] },
    { image: bali, title: 'Bali Beach Paradise', location: 'Bali, Indonesia', duration: '7 Days / 6 Nights', rating: 4.9, type: 'holidays', faqs:[{q:'Are flights included?',a:'Yes, return flights included.'}], inclusions:['Beach Resort','Breakfast','Guided Tours','Airport Transfer'] },
  { image: thailand, title: 'Thailand Explorer', location: 'Bangkok & Phuket', duration: '8 Days / 7 Nights', rating: 4.8, type: 'holidays', faqs:[{q:'Visa required?',a:'Yes, assistance provided.'}], inclusions:['Hotels','Transportation','City Tours','Island Hopping'] },
  { image: swi, title: 'Switzerland Scenic Tour', location: 'Zurich, Lucerne, Interlaken', duration: '10 Days / 9 Nights', rating: 5.0, type: 'holidays', faqs:[{q:'Does it include train rides?',a:'Yes, scenic train rides included.'}], inclusions:['Hotels','Transportation','Guided Tours','Mountain Excursions'] },
  { image: cap, title: 'Cape Town Adventure', location: 'Cape Town, South Africa', duration: '9 Days / 8 Nights', rating: 4.9, type: 'holidays', faqs:[{q:'Are safaris included?',a:'Yes, safari tour included.'}], inclusions:['Hotels','Transportation','Safari','Guided City Tours'] },
  { image: par, title: 'Paris Romantic Escape', location: 'Paris, France', duration: '6 Days / 5 Nights', rating: 4.9, type: 'holidays', faqs:[{q:'Includes Eiffel Tower visit?',a:'Yes'}], inclusions:['Hotels','Breakfast','City Tours','Seine River Cruise'] },
  { image: mal, title: 'Maldives Luxury Retreat', location: 'Maldives', duration: '7 Days / 6 Nights', rating: 5.0, type: 'holidays', faqs:[{q:'Private villas included?',a:'Yes'}], inclusions:['Overwater Villas','Breakfast','Snorkeling','Airport Transfer'] },
  { image: dub, title: 'Dubai Desert Adventure', location: 'Dubai, UAE', duration: '5 Days / 4 Nights', rating: 4.8, type: 'holidays', faqs:[{q:'Includes desert safari?',a:'Yes'}], inclusions:['Hotels','Breakfast','Desert Safari','City Tours'] },
  { image: jap, title: 'Japan Cherry Blossom Tour', location: 'Tokyo & Kyoto, Japan', duration: '8 Days / 7 Nights', rating: 4.9, type: 'holidays', faqs:[{q:'Are flights included?',a:'Yes'}], inclusions:['Hotels','Breakfast','Guided Tours','Cultural Experiences'] },
  { image: egy, title: 'Egypt Historical Expedition', location: 'Cairo & Luxor, Egypt', duration: '9 Days / 8 Nights', rating: 4.8, type: 'holidays', faqs:[{q:'Includes Pyramids tour?',a:'Yes'}], inclusions:['Hotels','Breakfast','Guided Tours','Transfers'] },
  ];

  const filteredPackages = allPackages.filter(pkg => {
    const matchesFilter = activeFilter === 'all' || pkg.type === activeFilter;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-0 h-[60vh] min-h-[500px] overflow-hidden">
        <img src={heroImage} alt="Travel Packages" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">{t.packagesPage.badge}</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">{t.packagesPage.heroTitle}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-0 z-30">
        <div className="container-wide flex justify-center flex-wrap gap-2">
          {filters.map(filter => (
            <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full font-medium transition-all ${activeFilter === filter.id ? 'gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary'}`}>
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Packages Grid */}
      {/* Packages Grid */}
<section className="section-padding" dir="ltr">
  <div className="container-wide ltr-safe">
    {filteredPackages.length > 0 ? (
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {filteredPackages.map((pkg, index) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="h-full"
          >
            <PackageCard
              {...pkg}
              onViewDetails={() => setSelectedPackage(pkg)}
            />
          </motion.div>
        ))}
      </div>
    ) : (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">{t.packagesPage.noPackages}</p>
        <button
          onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
          className="mt-4 text-secondary hover:underline"
        >
          {t.common.clearFilters}
        </button>
      </div>
    )}
  </div>
</section>


      {/* Package Modal */}
      {/* Package Modal */}
      {selectedPackage && (
  <motion.div
    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg flex items-start justify-center p-4 pt-20 sm:pt-24 overflow-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedPackage(null)}
  >
    <motion.div
      className="relative w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl bg-background rounded-3xl shadow-2xl"
      initial={{ scale: 0.9, y: 40 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 40 }}
      transition={{ type: 'spring', stiffness: 120 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image */}
      <div className="relative h-60 sm:h-80 md:h-96 w-full flex-shrink-0">
        <img
          src={selectedPackage.image}
          alt={selectedPackage.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
        <button
          onClick={() => setSelectedPackage(null)}
          className="absolute top-4 right-4 bg-white/90 rounded-full px-4 py-2 text-sm font-medium hover:bg-white transition"
        >
          Close
        </button>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-auto max-h-[calc(100vh-4rem)]">
        {/* Left */}
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">{selectedPackage.title}</h2>
          <div className="flex flex-wrap gap-3 text-muted-foreground mb-4 text-sm sm:text-base">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {selectedPackage.location}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedPackage.duration}</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-gold fill-gold" /> {selectedPackage.rating}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Experience a thoughtfully curated journey designed for comfort, spiritual fulfillment, and peace of mind.
          </p>

          {/* FAQs */}
          {selectedPackage.faqs && (
            <div className="mt-4 sm:mt-6">
              <h3 className="font-semibold text-lg mb-2">FAQs</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {selectedPackage.faqs.map((faq, i) => (
                  <li key={i}>
                    <strong>Q:</strong> {faq.q} <br />
                    <strong>A:</strong> {faq.a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="flex-1 bg-muted/40 rounded-2xl p-4 sm:p-6 min-w-0">
          {selectedPackage.inclusions && (
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {selectedPackage.inclusions.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)}



      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Packages;
