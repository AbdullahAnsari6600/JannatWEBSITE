import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Plane, Hotel, Bus, FileCheck, Stethoscope, Users, 
  Calendar, ArrowRight
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import heroImage from '@/assets/hero-makkah.jpg';
import video1 from '@/assets/videos/hajj.mp4';
import video2 from '@/assets/videos/flight.mp4';
import video3 from '@/assets/videos/hotel.mp4';
import video4 from '@/assets/videos/visa.mp4';
import video5 from '@/assets/videos/transport.mp4';
import video6 from '@/assets/videos/insurance.mp4';
import video7 from '@/assets/videos/group.mp4';
import video8 from '@/assets/videos/wedding.mp4';



const Services = () => {
  const services = [
    { 
      icon: Plane, 
      title: 'Flight Booking', 
      video: video2, 
      extendedText: 'Best deals on international and domestic flights with flexible booking options and dedicated support for changes and cancellations.', 
      features: ['Best price guarantee', 'Flexible rebooking', '24/7 support', 'Multiple airlines'] 
    },
    { 
      icon: FileCheck, 
      title: 'Hajj & Umrah Packages', 
      video: video1, 
      extendedText: 'Comprehensive pilgrimage packages with premium accommodations near Haram, guided tours, and spiritual support throughout your sacred journey.', 
      features: ['5-star hotels', 'Experienced guides', 'All meals included', 'Ground transport'] 
    },
    { 
      icon: Hotel, 
      title: 'Hotel Reservations', 
      video: video3, 
      extendedText: 'Access to premium hotels worldwide with exclusive rates, especially for properties near holy sites in Makkah and Madinah.', 
      features: ['Haram view rooms', 'Luxury amenities', 'Early check-in', 'Flexible dates'] 
    },
    { 
      icon: FileCheck, 
      title: 'Visa Assistance', 
      video: video4, 
      extendedText: 'Complete visa processing services for Saudi Arabia and international destinations with high success rates and quick turnaround.', 
      features: ['Document preparation', 'Application tracking', 'Expert guidance', 'Fast processing'] 
    },
    { 
      icon: Bus, 
      title: 'Transportation', 
      video: video5, 
      extendedText: 'Comfortable and reliable ground transportation services including airport transfers, city tours, and inter-city travel.', 
      features: ['AC vehicles', 'Professional drivers', 'Door-to-door service', 'GPS tracking'] 
    },
    { 
      icon: Stethoscope, 
      title: 'Travel Insurance', 
      video: video6, 
      extendedText: 'Comprehensive travel insurance coverage for medical emergencies, trip cancellations, and lost luggage for peace of mind.', 
      features: ['Medical coverage', 'Trip cancellation', 'Lost baggage', '24/7 assistance'] 
    },
    { 
      icon: Users, 
      title: 'Group & Corporate Tours', 
      video: video7, 
      extendedText: 'Customized group travel packages for families, organizations, and corporate teams with special rates and dedicated coordinators.', 
      features: ['Custom itineraries', 'Group discounts', 'Dedicated manager', 'Team building'] 
    },
    { 
      icon: Calendar, 
      title: 'Event Planning', 
      video: video8, 
      extendedText: 'Special occasion travel planning including weddings, anniversaries, and milestone celebrations with personalized touches.', 
      features: ['Venue selection', 'Custom experiences', 'Photography', 'Special arrangements'] 
    },
  ];

  const serviceIds = [
    'flight-booking',
    'hajj-umrah',
    'hotel-reservations',
    'visa-assistance',
    'transportation',
    'travel-insurance',
    'group-tours',
    'event-planning',
  ];
  

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-0 h-[60vh] min-h-[500px] overflow-hidden">
  {/* Background Image */}
  <img
    src={heroImage}
    alt="Our Services"
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
        

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
          Complete Travel Solutions
        </h1>
      </motion.div>
    </div>
  </div>
</section>


      {/* Services List */}
      <section className="py-20">
  <div className="container-wide">
    {services.map((service, idx) => {
      const Icon = service.icon;
      const isEven = idx % 2 === 0;

      return (
        <div
          key={idx}
          id={serviceIds[idx]}
          className={`scroll-mt-32 flex flex-col ${
            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-8 lg:gap-16 mb-20 last:mb-0`}
        >
          {/* Video */}
          <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 lg:h-80 object-cover"
            >
              <source src={service.video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />

            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center shadow-md">
                <Icon className="w-5 h-5 text-forest" />
              </div>
              <span className="text-primary-foreground font-display font-semibold">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.extendedText}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-forest via-forest-light to-forest text-center">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="font-sans text-sage/80 text-lg mb-8 max-w-xl mx-auto">
          Contact us today for a free consultation and package.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-forest font-sans font-bold text-lg rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-lg hover:scale-105"
        >
          Request a Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Services;
