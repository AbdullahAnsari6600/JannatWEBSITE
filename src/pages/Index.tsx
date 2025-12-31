import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, Users, Award, MapPin, Plane, Hotel, Bus, Utensils, 
  HeartHandshake, Clock, CheckCircle, ArrowRight, Star, ChevronRight,
  Globe, Building, FileCheck, Stethoscope,
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PackageCard } from '@/components/PackageCard';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TestimonialCard } from '@/components/TestimonialCard';
import { useLanguage } from '@/contexts/LanguageContext';

// Import images
import heroImage from '@/assets/hero-makkah.jpg';
import madinahImage from '@/assets/madinah-hero.jpg';
import luxuryHotel from '@/assets/luxury-hotel.jpg';
import happyFamily from '@/assets/admin.png';
import alUla from '@/assets/al-ula.jpg';
import europeTour from '@/assets/europe-tour.jpg';
import riyadh from '@/assets/riyadh.jpg';
import uhud from '@/assets/uhud.jpg';

const Index = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const packages = [
    { image: heroImage, title: t.packages.premiumHajj2025, location: t.locations.makkahMadinah, duration: '21 Days', rating: 4.9, type: 'hajj' as const, featured: true },
    { image: madinahImage, title: t.packages.umrahRamadan, location: t.locations.makkahMadinah, duration: '14 Days', rating: 4.8, type: 'umrah' as const },
    { image: uhud, title: t.packages.completeZiyarat, location: t.locations.holySites, duration: '7 Days', rating: 4.9, type: 'ziyarat' as const },
    { image: riyadh, title: t.packages.discoverSaudi, location: t.locations.multipleCities, duration: '10 Days', rating: 4.7, type: 'local' as const },
    { image: alUla, title: t.packages.alUlaHeritage, location: t.locations.alUla, duration: '5 Days', rating: 4.8, type: 'local' as const },
    { image: europeTour, title: t.packages.europeanDream, location: t.locations.europe, duration: '12 Days', rating: 4.6, type: 'international' as const },
  ];

  const trustHighlights = [
    { icon: Shield, title: t.trustHighlights.saudiLicensed, description: t.trustHighlights.saudiLicensedDesc },
    { icon: Award, title: t.trustHighlights.yearsExperience, description: t.trustHighlights.yearsExperienceDesc },
    { icon: Users, title: t.trustHighlights.expertGuides, description: t.trustHighlights.expertGuidesDesc },
    { icon: HeartHandshake, title: t.trustHighlights.endToEndSupport, description: t.trustHighlights.endToEndSupportDesc },
  ];

  const inclusions = [
    { icon: Hotel, label: t.inclusions.premiumHotels },
    { icon: Utensils, label: t.inclusions.mealsIncluded },
    { icon: Bus, label: t.inclusions.transportation },
    { icon: Users, label: t.inclusions.tourManagers },
    { icon: Plane, label: t.inclusions.airfare },
    { icon: FileCheck, label: t.inclusions.visaAssistance },
  ];

  const whyChooseUs = [
    { icon: Globe, title: t.whyChooseUs.culturalUnderstanding, description: t.whyChooseUs.culturalUnderstandingDesc },
    { icon: Shield, title: t.whyChooseUs.transparentPricing, description: t.whyChooseUs.transparentPricingDesc },
    { icon: Users, title: t.whyChooseUs.multilingualSupport, description: t.whyChooseUs.multilingualSupportDesc },
  ];

  const testimonials = [
    {
      name: t.testimonials.testimonial1Name,
      location: t.testimonials.testimonial1Location,
      image: happyFamily,
      rating: 5,
      text: t.testimonials.testimonial1Text,
      tour: t.testimonials.testimonial1Tour,
    },
    {
      name: t.testimonials.testimonial2Name,
      location: t.testimonials.testimonial2Location,
      image: happyFamily,
      rating: 5,
      text: t.testimonials.testimonial2Text,
      tour: t.testimonials.testimonial2Tour,
    },
    {
      name: t.testimonials.testimonial3Name,
      location: t.testimonials.testimonial3Location,
      image: happyFamily,
      rating: 5,
      text: t.testimonials.testimonial3Text,
      tour: t.testimonials.testimonial3Tour,
    },
  ];

  const processSteps = [
    { step: '01', title: t.process.consultation, description: t.process.consultationDesc },
    { step: '02', title: t.process.customization, description: t.process.customizationDesc },
    { step: '03', title: t.process.booking, description: t.process.bookingDesc },
    { step: '04', title: t.process.travel, description: t.process.travelDesc },
    { step: '05', title: t.process.support, description: t.process.supportDesc },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden pt-20">
  <motion.div 
    className="absolute inset-0"
    style={{ opacity: heroOpacity, scale: heroScale }}
  >
    <img 
      src={heroImage} 
      alt="Makkah Grand Mosque" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 hero-overlay" />
  </motion.div>

  <div className="relative z-10 h-full flex items-center">
  {/* Make container full width and remove automatic centering */}
  <div className="w-full flex justify-start px-8 lg:px-16">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-2xl text-left"
    >
      <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
        {t.hero.badge}
      </span>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
        {t.hero.title}{' '}
        <span className="text-sky-blue-light">{t.hero.titleHighlight}</span>{' '}
        {t.hero.titleEnd}
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
        {t.hero.subtitle}
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/packages"
          className="btn-primary px-6 py-2 text-base flex items-center gap-2 rounded-lg"
        >
          {t.common.viewPackages}
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/contact"
          className="btn-secondary px-6 py-2 text-base flex items-center gap-2 rounded-lg"
        >
          {t.common.contactUs}
        </Link>
      </div>
    </motion.div>
  </div>
</div>



  {/* Scroll Indicator */}
</section>


<section className="relative py-24 bg-background">
  <div className="container-wide">
    {/* Section Heading */}
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-sky-500 mb-4">
        {t.whyChooseUs.title.replace('Experience the Difference', 'Why Choose Jannat Travels?')}
      </h2>

      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
        {t.whyChooseUs.subtitle}
      </p>
    </div>

    {/* Highlight Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {trustHighlights.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.8, type: 'spring', stiffness: 100 }}
          className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center gap-4 shadow-glass-lg hover:scale-105 hover:translate-y-[-5px] hover:shadow-glow transition-all duration-500 text-center"
        >
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-2"
            initial={{ y: -5 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
          >
            <item.icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 relative">
            {item.title}
            <motion.span
              className="block w-0 h-[2px] bg-gold rounded-full mt-2 origin-center mx-auto"
              whileHover={{ width: '3rem' }}
              transition={{ duration: 0.3 }}
            />
          </h3>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
          >
            {item.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </div>
</section>







      {/* Popular Packages */}
      <section className="section-padding bg-muted/30">
  <div className="container-wide">
    <SectionHeading
      badge={t.packages.badge}
      title={t.packages.title}
      subtitle={t.packages.subtitle}
    />

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <motion.div
          key={pkg.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="h-full bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">{pkg.title}</h3>
            <p className="text-muted-foreground mb-2">{pkg.location}</p>
            <p className="text-muted-foreground mb-4 flex items-center gap-2">
  <span className="ltr-safe">{pkg.duration}</span>
  <span>•</span>
  <span className="ltr-safe flex items-center gap-1">
    ⭐ <span>{pkg.rating}</span>
  </span>
</p>

          </div>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link to="/packages" className="btn-primary inline-flex items-center gap-2">
        {t.common.viewAllPackages}
        <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</section>


      {/* Inclusions */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge={t.inclusions.badge}
            title={t.inclusions.title}
            subtitle={t.inclusions.subtitle}
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
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <p className="font-semibold text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <SectionHeading
            badge={t.whyChooseUs.badge}
            title={t.whyChooseUs.title}
            subtitle={t.whyChooseUs.subtitle}
            light
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
  <div className="container-wide">
    <SectionHeading
      badge={t.achievements.badge}
      title={t.achievements.title}
      subtitle={t.achievements.subtitle}
    />

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      <AnimatedCounter
        end={30000}
        suffix="+"
        label={t.achievements.happyPilgrims}
        icon={<Users className="w-6 h-6 sm:w-8 sm:h-8" />}
      />
      <AnimatedCounter
        end={1500}
        suffix="+"
        label={t.achievements.toursCompleted}
        icon={<MapPin className="w-6 h-6 sm:w-8 sm:h-8" />}
      />
      <AnimatedCounter
        end={50}
        suffix="+"
        label={t.achievements.expertGuides}
        icon={<Award className="w-6 h-6 sm:w-8 sm:h-8" />}
      />
      <AnimatedCounter
        end={5}
        suffix="+"
        label={t.achievements.yearsExperience}
        icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8" />}
      />
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge={t.testimonials.badge}
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge={t.process.badge}
            title={t.process.title}
            subtitle={t.process.subtitle}
          />

          <div className="mt-16 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <img 
          src={madinahImage} 
          alt="Madinah" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {t.cta.spiritualJourney}
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              {t.cta.spiritualJourneyDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/packages" className="btn-gold text-lg">
                {t.common.explorePackages}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary text-lg">
                {t.common.getInTouch}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
