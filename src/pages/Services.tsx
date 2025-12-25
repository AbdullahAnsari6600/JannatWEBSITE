import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Plane, Hotel, Bus, FileCheck, Stethoscope, Users, 
  Calendar, Headphones, ArrowRight
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';

import heroImage from '@/assets/hero-makkah.jpg';

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: 'Hajj & Umrah Packages',
      description: 'Comprehensive pilgrimage packages with premium accommodations near Haram, guided tours, and spiritual support throughout your sacred journey.',
      features: ['5-star hotels', 'Experienced guides', 'All meals included', 'Ground transport'],
      link: '/hajj-packages',
    },
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Best deals on international and domestic flights with flexible booking options and dedicated support for changes and cancellations.',
      features: ['Best price guarantee', 'Flexible rebooking', '24/7 support', 'Multiple airlines'],
      link: '/contact',
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Access to premium hotels worldwide with exclusive rates, especially for properties near holy sites in Makkah and Madinah.',
      features: ['Haram view rooms', 'Luxury amenities', 'Early check-in', 'Flexible dates'],
      link: '/contact',
    },
    {
      icon: FileCheck,
      title: 'Visa Assistance',
      description: 'Complete visa processing services for Saudi Arabia and international destinations with high success rates and quick turnaround.',
      features: ['Document preparation', 'Application tracking', 'Expert guidance', 'Fast processing'],
      link: '/contact',
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Comfortable and reliable ground transportation services including airport transfers, city tours, and inter-city travel.',
      features: ['AC vehicles', 'Professional drivers', 'Door-to-door service', 'GPS tracking'],
      link: '/contact',
    },
    {
      icon: Stethoscope,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage for medical emergencies, trip cancellations, and lost luggage for peace of mind.',
      features: ['Medical coverage', 'Trip cancellation', 'Lost baggage', '24/7 assistance'],
      link: '/contact',
    },
    {
      icon: Users,
      title: 'Group & Corporate Tours',
      description: 'Customized group travel packages for families, organizations, and corporate teams with special rates and dedicated coordinators.',
      features: ['Custom itineraries', 'Group discounts', 'Dedicated manager', 'Team building'],
      link: '/contact',
    },
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'Special occasion travel planning including weddings, anniversaries, and milestone celebrations with personalized touches.',
      features: ['Venue selection', 'Custom experiences', 'Photography', 'Special arrangements'],
      link: '/contact',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Our Services" 
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
                What We Offer
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Complete Travel Solutions
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Our Services"
            title="Everything You Need for Your Journey"
            subtitle="From pilgrimage packages to travel essentials, we've got you covered"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="premium-card group"
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Headphones className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Our travel experts are ready to create a personalized package tailored to your specific needs and preferences.
            </p>
            <Link to="/contact" className="btn-gold">
              Talk to an Expert
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

export default Services;
