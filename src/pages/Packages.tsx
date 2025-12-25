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

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All Packages' },
    { id: 'hajj', label: 'Hajj' },
    { id: 'umrah', label: 'Umrah' },
    { id: 'ziyarat', label: 'Ziyarat' },
    { id: 'local', label: 'Local Tours' },
    { id: 'international', label: 'International' },
  ];

  const allPackages = [
    { image: heroImage, title: 'Premium Hajj Package 2025', location: 'Makkah & Madinah', duration: '21 Days', rating: 4.9, price: 'SAR 25,000', type: 'hajj' as const },
    { image: madinahImage, title: 'Economy Hajj Package', location: 'Makkah & Madinah', duration: '18 Days', rating: 4.7, price: 'SAR 18,000', type: 'hajj' as const },
    { image: luxuryHotel, title: 'VIP Hajj Experience', location: 'Makkah & Madinah', duration: '25 Days', rating: 5.0, price: 'SAR 45,000', type: 'hajj' as const },
    { image: madinahImage, title: 'Umrah Ramadan Special', location: 'Makkah & Madinah', duration: '14 Days', rating: 4.8, price: 'SAR 8,500', type: 'umrah' as const },
    { image: heroImage, title: 'Family Umrah Package', location: 'Makkah & Madinah', duration: '10 Days', rating: 4.8, price: 'SAR 6,500', type: 'umrah' as const },
    { image: luxuryHotel, title: 'Premium Umrah Experience', location: 'Makkah & Madinah', duration: '12 Days', rating: 4.9, price: 'SAR 12,000', type: 'umrah' as const },
    { image: uhud, title: 'Complete Ziyarat Tour', location: 'Holy Sites', duration: '7 Days', rating: 4.9, price: 'SAR 4,500', type: 'ziyarat' as const },
    { image: madinahImage, title: 'Madinah Ziyarat Special', location: 'Madinah', duration: '5 Days', rating: 4.8, price: 'SAR 3,200', type: 'ziyarat' as const },
    { image: riyadh, title: 'Discover Saudi Arabia', location: 'Multiple Cities', duration: '10 Days', rating: 4.7, price: 'SAR 6,000', type: 'local' as const },
    { image: alUla, title: 'Al Ula Heritage Experience', location: 'Al Ula', duration: '5 Days', rating: 4.8, price: 'SAR 5,500', type: 'local' as const },
    { image: riyadh, title: 'Riyadh City Explorer', location: 'Riyadh', duration: '3 Days', rating: 4.6, price: 'SAR 2,500', type: 'local' as const },
    { image: europeTour, title: 'European Dream Vacation', location: 'Europe', duration: '12 Days', rating: 4.6, price: 'SAR 15,000', type: 'international' as const },
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
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Travel Packages" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        
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
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Our Travel Packages
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-card border-b border-border sticky top-0 z-30">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <PackageCard {...pkg} />
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Packages;
