import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, MapPin, Clock, ArrowRight } from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PackageCard } from '@/components/PackageCard';
import { SectionHeading } from '@/components/SectionHeading';

import heroImage from '@/assets/hero-makkah.jpg';
import madinahImage from '@/assets/madinah-hero.jpg';
import luxuryHotel from '@/assets/luxury-hotel.jpg';
import alUla from '@/assets/al-ula.jpg';
import europeTour from '@/assets/europe-tour.jpg';
import riyadh from '@/assets/riyadh.jpg';
import uhud from '@/assets/uhud.jpg';
import riyadhimg from '@/assets/riyad.jpg'


const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);

  const filters = [
    { id: 'all', label: 'All Packages' },
    { id: 'hajj', label: 'Hajj' },
    { id: 'umrah', label: 'Umrah' },
    { id: 'ziyarat', label: 'Ziyarat' },
    { id: 'local', label: 'Local Tours' },
    { id: 'holidays', label: 'Holidays' },
  ];

  const allPackages = [
    { image: heroImage, title: 'Premium Hajj Package 2026', location: 'Makkah & Madinah', duration: '21 Days', rating: 4.9, type: 'hajj' as const },
    { image: madinahImage, title: 'Economy Hajj Package', location: 'Makkah & Madinah', duration: '18 Days', rating: 4.7, type: 'hajj' as const },
    { image: luxuryHotel, title: 'VIP Hajj Experience', location: 'Makkah & Madinah', duration: '25 Days', rating: 5.0, type: 'hajj' as const },
    { image: madinahImage, title: 'Umrah Ramadan Special', location: 'Makkah & Madinah', duration: '14 Days', rating: 4.8, type: 'umrah' as const },
    { image: heroImage, title: 'Family Umrah Package', location: 'Makkah & Madinah', duration: '10 Days', rating: 4.8, type: 'umrah' as const },
    { image: luxuryHotel, title: 'Premium Umrah Experience', location: 'Makkah & Madinah', duration: '12 Days', rating: 4.9, type: 'umrah' as const },
    { image: uhud, title: 'Complete Ziyarat Tour', location: 'Holy Sites', duration: '7 Days', rating: 4.9, type: 'ziyarat' as const },
    { image: madinahImage, title: 'Madinah Ziyarat Special', location: 'Madinah', duration: '5 Days', rating: 4.8, type: 'ziyarat' as const },
    { image: riyadh, title: 'Discover Saudi Arabia', location: 'Multiple Cities', duration: '10 Days', rating: 4.7, type: 'local' as const },
    { image: alUla, title: 'Al Ula Heritage Experience', location: 'Al Ula', duration: '5 Days', rating: 4.8, type: 'local' as const },
    { image: riyadhimg, title: 'Riyadh City Explorer', location: 'Riyadh', duration: '3 Days', rating: 4.6, type: 'local' as const },
    { image: europeTour, title: 'Abha, Saudi Arabia', location: 'Abha', duration: '12 Days', rating: 4.6, type: 'holidays' as const },
  ];

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesFilter = activeFilter === 'all' || pkg.type === activeFilter;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-0 h-[60vh] min-h-[500px] overflow-hidden">
  {/* Background Image */}
  <img
    src={heroImage}
    alt="Travel Packages"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  />

  {/* Blue Gradient Overlay */}
  <div className="absolute inset-0 hero-overlay pointer-events-none" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
          Explore
        </span>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
          Our Travel Packages
        </h1>
      </motion.div>
    </div>
  </div>
</section>


      {/* Filters & Search */}
      <section className="py-8 bg-card border-b border-border sticky top-0 z-30">
  <div className="container-wide">
    <div className="flex justify-center">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeFilter === filter.id
                ? 'gradient-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Packages Grid */}
      <section className="section-padding">
        <div className="container-wide">
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
              <p className="text-muted-foreground text-lg">No packages found matching your criteria.</p>
              <button
                onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                className="mt-4 text-secondary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              We offer custom packages tailored to your specific needs. Contact us for a personalized quote.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Custom Package
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      {selectedPackage && (
  <motion.div
  className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg flex items-start justify-center p-4 pt-20"
  // changes: items-start, added pt-20
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={() => setSelectedPackage(null)}
>

    <motion.div
      className="relative max-w-5xl w-full bg-background rounded-3xl overflow-hidden shadow-2xl"
      initial={{ scale: 0.9, y: 40 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 40 }}
      transition={{ type: 'spring', stiffness: 120 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image */}
      <div className="relative h-[350px]">
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
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left */}
        <div>
          <h2 className="font-display text-3xl font-bold mb-3">
            {selectedPackage.title}
          </h2>

          <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {selectedPackage.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {selectedPackage.duration}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-gold fill-gold" />
              {selectedPackage.rating}
            </span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Experience a thoughtfully curated journey designed for comfort,
            spiritual fulfillment, and peace of mind. Our expert team manages
            every detail so you can focus on what truly matters.
          </p>
        </div>

        {/* Right */}
        <div className="bg-muted/40 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="text-3xl font-bold text-primary mb-6">
              {selectedPackage.price}
            </p>

            <ul className="space-y-3 text-sm">
              <li>✔ Premium Accommodation</li>
              <li>✔ Guided Tours & Ziyarat</li>
              <li>✔ Visa & Transport Assistance</li>
              <li>✔ 24/7 On-Ground Support</li>
            </ul>
          </div>
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


