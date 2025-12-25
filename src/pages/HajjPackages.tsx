import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Star, Hotel, Utensils, Bus, Users, 
  Calendar, Shield, ArrowRight, Clock
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';

import heroImage from '@/assets/hero-makkah.jpg';
import luxuryHotel from '@/assets/luxury-hotel.jpg';

const HajjPackages = () => {
  const packages = [
    {
      tier: 'Economy',
      price: 'SAR 18,000',
      duration: '18 Days',
      hotel: '3-Star Hotels',
      distance: '1.5 km from Haram',
      features: [
        'Shared room (4 persons)',
        'Breakfast & Dinner',
        'AC ground transport',
        'Experienced guides',
        'All rituals covered',
        'Visa processing',
      ],
    },
    {
      tier: 'Standard',
      price: 'SAR 25,000',
      duration: '21 Days',
      hotel: '4-Star Hotels',
      distance: '800m from Haram',
      popular: true,
      features: [
        'Shared room (2-3 persons)',
        'All meals included',
        'Premium AC transport',
        'Senior religious guides',
        'Ziyarat included',
        'Priority visa processing',
        'Travel insurance',
      ],
    },
    {
      tier: 'Premium / VIP',
      price: 'SAR 45,000',
      duration: '25 Days',
      hotel: '5-Star Hotels',
      distance: 'Walking distance to Haram',
      features: [
        'Private or twin room',
        'Full board dining',
        'Luxury vehicle transfer',
        'Personal guide',
        'Complete Ziyarat',
        'Express visa service',
        'Comprehensive insurance',
        'Airport lounge access',
        'Exclusive spiritual sessions',
      ],
    },
  ];

  const inclusions = [
    { icon: Hotel, label: 'Premium Accommodation' },
    { icon: Utensils, label: 'Meals Included' },
    { icon: Bus, label: 'Ground Transportation' },
    { icon: Users, label: 'Religious Guides' },
    { icon: Calendar, label: 'Complete Itinerary' },
    { icon: Shield, label: 'Travel Insurance' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Hajj Packages" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
                Hajj 2025
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                Hajj Packages
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Fulfill your sacred obligation with our comprehensive Hajj packages, designed for comfort, convenience, and spiritual enrichment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Tiers */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Choose Your Package"
            title="Hajj Packages 2025"
            subtitle="Select the package that best suits your needs and budget"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative premium-card overflow-visible ${
                  pkg.popular ? 'ring-2 ring-secondary' : ''
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-sky text-secondary-foreground text-sm font-semibold">
                    Most Popular
                  </span>
                )}

                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {pkg.tier}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground">/ person</span>
                  </div>

                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {pkg.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <Hotel className="w-4 h-4" /> {pkg.hotel}
                    </p>
                    <p className="flex items-center gap-2">
                      <Star className="w-4 h-4" /> {pkg.distance}
                    </p>
                  </div>

                  <div className="decorative-line mb-6" />

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className={`w-full text-center ${pkg.popular ? 'btn-primary' : 'btn-gold'}`}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Inclusions"
            title="What's Included"
            subtitle="Every package comes with essential services for a comfortable pilgrimage"
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {inclusions.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="font-medium text-foreground text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Accommodation
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Stay in Comfort Near the Holy Sites
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We partner with the best hotels in Makkah and Madinah to ensure you have a comfortable stay close to the holy mosques. Our accommodations are carefully selected for their proximity, cleanliness, and service quality.
              </p>
              <ul className="space-y-3">
                {['Walking distance to Haram', 'Clean and comfortable rooms', '24/7 room service', 'Prayer facilities'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={luxuryHotel} 
                alt="Premium accommodation" 
                className="rounded-3xl shadow-glass-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Begin Your Sacred Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Spaces are limited for Hajj 2025. Secure your place today and let us help you fulfill this blessed obligation.
            </p>
            <Link to="/contact" className="btn-gold">
              Book Your Hajj Package
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

export default HajjPackages;
