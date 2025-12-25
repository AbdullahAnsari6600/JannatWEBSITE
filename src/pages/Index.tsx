import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, Users, Award, MapPin, Plane, Hotel, Bus, Utensils, 
  HeartHandshake, Clock, CheckCircle, ArrowRight, Star, ChevronRight,
  Globe, Building, FileCheck, Stethoscope
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PackageCard } from '@/components/PackageCard';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TestimonialCard } from '@/components/TestimonialCard';

// Import images
import heroImage from '@/assets/hero-makkah.jpg';
import madinahImage from '@/assets/madinah-hero.jpg';
import luxuryHotel from '@/assets/luxury-hotel.jpg';
import happyFamily from '@/assets/happy-family.jpg';
import alUla from '@/assets/al-ula.jpg';
import europeTour from '@/assets/europe-tour.jpg';
import riyadh from '@/assets/riyadh.jpg';
import uhud from '@/assets/uhud.jpg';

const Index = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const packages = [
    { image: heroImage, title: 'Premium Hajj Package 2025', location: 'Makkah & Madinah', duration: '21 Days', rating: 4.9, price: 'SAR 25,000', type: 'hajj' as const, featured: true },
    { image: madinahImage, title: 'Umrah Ramadan Special', location: 'Makkah & Madinah', duration: '14 Days', rating: 4.8, price: 'SAR 8,500', type: 'umrah' as const },
    { image: uhud, title: 'Complete Ziyarat Tour', location: 'Holy Sites', duration: '7 Days', rating: 4.9, price: 'SAR 4,500', type: 'ziyarat' as const },
    { image: riyadh, title: 'Discover Saudi Arabia', location: 'Multiple Cities', duration: '10 Days', rating: 4.7, price: 'SAR 6,000', type: 'local' as const },
    { image: alUla, title: 'Al Ula Heritage Experience', location: 'Al Ula', duration: '5 Days', rating: 4.8, price: 'SAR 5,500', type: 'local' as const },
    { image: europeTour, title: 'European Dream Vacation', location: 'Europe', duration: '12 Days', rating: 4.6, price: 'SAR 15,000', type: 'international' as const },
  ];

  const trustHighlights = [
    { icon: Shield, title: 'Saudi Licensed', description: 'Fully licensed and compliant with Saudi regulations' },
    { icon: Award, title: '15+ Years Experience', description: 'Trusted by thousands of pilgrims worldwide' },
    { icon: Users, title: 'Expert Guides', description: 'Knowledgeable religious and tour guides' },
    { icon: HeartHandshake, title: 'End-to-End Support', description: 'Complete travel solutions from start to finish' },
  ];

  const inclusions = [
    { icon: Hotel, label: 'Premium Hotels' },
    { icon: Utensils, label: 'Meals Included' },
    { icon: Bus, label: 'Transportation' },
    { icon: Users, label: 'Tour Managers' },
    { icon: Plane, label: 'Airfare' },
    { icon: FileCheck, label: 'Visa Assistance' },
  ];

  const whyChooseUs = [
    { icon: Globe, title: 'Deep Cultural Understanding', description: 'Our team understands the spiritual significance and cultural nuances of pilgrimage journeys.' },
    { icon: Shield, title: 'Transparent Pricing', description: 'No hidden costs. What you see is what you pay. Complete transparency in all our packages.' },
    { icon: Users, title: 'Multilingual Support', description: 'We support Arabic, English, Hindi, Urdu, Bengali, and more for seamless communication.' },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      location: 'Jeddah, Saudi Arabia',
      image: happyFamily,
      rating: 5,
      text: 'An absolutely wonderful experience. Jannat Travels took care of every detail of our Hajj journey. The guides were knowledgeable and the accommodations were excellent.',
      tour: 'Premium Hajj Package 2024',
    },
    {
      name: 'Fatima Hassan',
      location: 'London, UK',
      image: happyFamily,
      rating: 5,
      text: 'Our family Umrah trip was perfectly organized. From visa assistance to hotel bookings, everything was seamless. Highly recommended!',
      tour: 'Family Umrah Package',
    },
    {
      name: 'Mohammad Khan',
      location: 'Dubai, UAE',
      image: happyFamily,
      rating: 5,
      text: 'The Ziyarat tour was spiritually enriching. Our guide shared beautiful stories about each holy site. A truly memorable experience.',
      tour: 'Complete Ziyarat Tour',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'Discuss your travel needs and preferences with our experts' },
    { step: '02', title: 'Customization', description: 'We tailor the perfect package based on your requirements' },
    { step: '03', title: 'Booking', description: 'Secure your journey with easy payment options' },
    { step: '04', title: 'Travel', description: 'Enjoy a seamless, worry-free travel experience' },
    { step: '05', title: 'Support', description: '24/7 assistance throughout your journey' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
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
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
                Saudi Arabia's Premier Travel Partner
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                Your Trusted Partner for{' '}
                <span className="text-sky-blue-light">Hajj, Umrah & Ziyarat</span>{' '}
                Journeys
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
                Experience spiritual journeys with professional guidance and seamless execution. 
                Jannat Travels provides complete pilgrimage and holiday travel solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/packages" className="btn-primary text-lg">
                  View Packages
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary text-lg">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Highlights */}
      <section className="relative -mt-24 z-20 pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-strong p-6 hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Our Packages"
            title="Popular Travel Experiences"
            subtitle="Discover our most sought-after pilgrimage and holiday packages, designed to create lasting memories"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/packages" className="btn-primary">
              View All Packages
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="What's Included"
            title="Complete Travel Solutions"
            subtitle="Every package includes premium amenities and services for a worry-free journey"
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
            badge="Why Jannat Travels"
            title="Experience the Difference"
            subtitle="What sets us apart from the rest in pilgrimage and travel services"
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
            badge="Our Achievements"
            title="Trusted by Thousands"
            subtitle="Numbers that speak for our dedication and commitment to excellence"
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter
              end={50000}
              suffix="+"
              label="Happy Pilgrims"
              icon={<Users className="w-8 h-8" />}
            />
            <AnimatedCounter
              end={2500}
              suffix="+"
              label="Tours Completed"
              icon={<MapPin className="w-8 h-8" />}
            />
            <AnimatedCounter
              end={150}
              suffix="+"
              label="Expert Guides"
              icon={<Award className="w-8 h-8" />}
            />
            <AnimatedCounter
              end={15}
              suffix="+"
              label="Years Experience"
              icon={<Clock className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            badge="Testimonials"
            title="What Our Pilgrims Say"
            subtitle="Real experiences from travelers who chose Jannat Travels for their journey"
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
            badge="How It Works"
            title="Your Journey With Us"
            subtitle="A simple and seamless process from planning to traveling"
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
              Begin Your Spiritual Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Let us help you create an unforgettable pilgrimage experience. 
              Contact us to plan your perfect trip.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/packages" className="btn-gold text-lg">
                Explore Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary text-lg">
                Get in Touch
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
