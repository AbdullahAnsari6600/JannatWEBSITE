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

  // Package data with translation keys
  const packageData = [
    { image: heroImage, titleKey: 'premiumHajj2026', locationKey: 'makkahMadinah', durationKey: '6d5n', rating: 4.9, type: 'hajj', faqKey: 'transportationIncluded', inclusionKeys: ['premiumHotels', 'transportation', 'visaAssistance', 'support24_7'] },
    { image: madinahImage, titleKey: 'economyHajj', locationKey: 'makkahMadinah', durationKey: '4d3n', rating: 4.7, type: 'hajj', faqKey: 'flightsIncluded', inclusionKeys: ['standardHotels', 'transportation', 'visaAssistance', 'support'] },
    { image: luxuryHotel, titleKey: 'vipHajj', locationKey: 'makkahMadinah', durationKey: '8d7n', rating: 5.0, type: 'hajj', faqKey: 'vipServiceIncluded', inclusionKeys: ['luxuryHotels', 'privateTransport', 'visaAssistance', 'support24_7'] },
    { image: madinahImage, titleKey: 'umrahRamadan', locationKey: 'makkahMadinah', durationKey: '14d13n', rating: 4.8, type: 'umrah', faqKey: 'provideGuidance', inclusionKeys: ['hotels', 'transportation', 'visaAssistance'] },
    { image: heroImage, titleKey: 'familyUmrah', locationKey: 'makkahMadinah', durationKey: '9d8n', rating: 4.8, type: 'umrah', faqKey: 'suitableForChildren', inclusionKeys: ['hotels', 'transportation', 'visaAssistance'] },
    { image: luxuryHotel, titleKey: 'premiumUmrah', locationKey: 'makkahMadinah', durationKey: '12d11n', rating: 4.9, type: 'umrah', faqKey: 'luxuryAccommodation', inclusionKeys: ['luxuryHotels', 'transportation', 'visaAssistance'] },
    { image: uhud, titleKey: 'completeZiyarat', locationKey: 'holySites', durationKey: '2d1n', rating: 4.9, type: 'ziyarat', faqKey: 'guidedTour', inclusionKeys: ['hotels', 'transportation', 'guide'] },
    { image: madinahImage, titleKey: 'madinahZiyarat', locationKey: 'madinah', durationKey: '1d', rating: 4.8, type: 'ziyarat', faqKey: 'localGuideIncluded', inclusionKeys: ['hotels', 'transportation', 'guide'] },
    { image: riyadh, titleKey: 'discoverSaudi', locationKey: 'multipleCities', durationKey: '10d9n', rating: 4.7, type: 'local', faqKey: 'coverRiyadh', inclusionKeys: ['hotels', 'transportation', 'guide'] },
    { image: alUla, titleKey: 'alUlaHeritage', locationKey: 'alUla', durationKey: '3d2n', rating: 4.8, type: 'local', faqKey: 'includesGuidedTours', inclusionKeys: ['hotels', 'transportation', 'guide'] },
    { image: riyadhimg, titleKey: 'riyadhExplorer', locationKey: 'riyadh', durationKey: '2d1n', rating: 4.6, type: 'local', faqKey: 'citySightseeing', inclusionKeys: ['hotels', 'transportation', 'guide'] },
    { image: europeTour, titleKey: 'abhaSaudi', locationKey: 'abha', durationKey: '4d3n', rating: 4.6, type: 'local', faqKey: 'internationalTrips', inclusionKeys: ['hotels', 'transportation', 'guide'] },
    { image: bali, titleKey: 'baliBeach', locationKey: 'baliIndonesia', durationKey: '7d6n', rating: 4.9, type: 'holidays', faqKey: 'returnFlightsIncluded', inclusionKeys: ['beachResort', 'breakfast', 'guidedTours', 'airportTransfer'] },
    { image: thailand, titleKey: 'thailandExplorer', locationKey: 'bangkokPhuket', durationKey: '8d7n', rating: 4.8, type: 'holidays', faqKey: 'visaRequired', inclusionKeys: ['hotels', 'transportation', 'cityTours', 'islandHopping'] },
    { image: swi, titleKey: 'switzerlandScenic', locationKey: 'zurichLucerne', durationKey: '10d9n', rating: 5.0, type: 'holidays', faqKey: 'trainRidesIncluded', inclusionKeys: ['hotels', 'transportation', 'guidedTours', 'mountainExcursions'] },
    { image: cap, titleKey: 'capeTownAdventure', locationKey: 'capeTown', durationKey: '9d8n', rating: 4.9, type: 'holidays', faqKey: 'safarisIncluded', inclusionKeys: ['hotels', 'transportation', 'safari', 'cityTours'] },
    { image: par, titleKey: 'parisRomantic', locationKey: 'parisFrance', durationKey: '6d5n', rating: 4.9, type: 'holidays', faqKey: 'eiffelTowerVisit', inclusionKeys: ['hotels', 'breakfast', 'cityTours', 'seineRiverCruise'] },
    { image: mal, titleKey: 'maldivesLuxury', locationKey: 'maldives', durationKey: '7d6n', rating: 5.0, type: 'holidays', faqKey: 'privateVillasIncluded', inclusionKeys: ['overwaterVillas', 'breakfast', 'snorkeling', 'airportTransfer'] },
    { image: dub, titleKey: 'dubaiDesert', locationKey: 'dubaiUAE', durationKey: '5d4n', rating: 4.8, type: 'holidays', faqKey: 'desertSafariIncluded', inclusionKeys: ['hotels', 'breakfast', 'desertSafari', 'cityTours'] },
    { image: jap, titleKey: 'japanCherry', locationKey: 'tokyoKyoto', durationKey: '8d7n', rating: 4.9, type: 'holidays', faqKey: 'returnFlightsIncluded', inclusionKeys: ['hotels', 'breakfast', 'guidedTours', 'culturalExperiences'] },
    { image: egy, titleKey: 'egyptHistorical', locationKey: 'cairoLuxor', durationKey: '9d8n', rating: 4.8, type: 'holidays', faqKey: 'pyramidsTour', inclusionKeys: ['hotels', 'breakfast', 'guidedTours', 'transfers'] },
  ];

  // Translate package data based on current language
  const allPackages = packageData.map(pkg => ({
    image: pkg.image,
    title: t.packagesPage.packageTitles[pkg.titleKey as keyof typeof t.packagesPage.packageTitles],
    location: t.packagesPage.packageLocations[pkg.locationKey as keyof typeof t.packagesPage.packageLocations],
    duration: t.packagesPage.packageDurations[pkg.durationKey as keyof typeof t.packagesPage.packageDurations],
    rating: pkg.rating,
    type: pkg.type,
    faqs: pkg.faqKey ? [{
      q: t.packagesPage.packageFAQs[pkg.faqKey as keyof typeof t.packagesPage.packageFAQs].q,
      a: t.packagesPage.packageFAQs[pkg.faqKey as keyof typeof t.packagesPage.packageFAQs].a
    }] : [],
    inclusions: pkg.inclusionKeys.map(key => 
      t.packagesPage.packageInclusions[key as keyof typeof t.packagesPage.packageInclusions]
    )
  }));

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
          {t.packagesPage.close}
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
            {t.packagesPage.packageDescription}
          </p>

          {/* FAQs */}
          {selectedPackage.faqs && (
            <div className="mt-4 sm:mt-6">
              <h3 className="font-semibold text-lg mb-2">{t.packagesPage.faqs}</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {selectedPackage.faqs.map((faq, i) => (
                  <li key={i}>
                    <strong>{t.packagesPage.questionLabel}</strong> {faq.q} <br />
                    <strong>{t.packagesPage.answerLabel}</strong> {faq.a}
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
