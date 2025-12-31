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
import { useLanguage } from '@/contexts/LanguageContext';


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
  const { t } = useLanguage();
  
  const services = [
    { 
      icon: Plane, 
      title: t.services.flightBooking, 
      video: video2, 
      extendedText: t.services.flightBookingDesc, 
      features: [t.services.featureBestPrice, t.services.featureFlexibleRebooking, t.services.feature24Support, t.services.featureMultipleAirlines] 
    },
    { 
      icon: FileCheck, 
      title: t.services.hajjUmrah, 
      video: video1, 
      extendedText: t.services.hajjUmrahDesc, 
      features: [t.services.feature5Star, t.services.featureExperiencedGuides, t.services.featureAllMeals, t.services.featureGroundTransport] 
    },
    { 
      icon: Hotel, 
      title: t.services.hotelReservations, 
      video: video3, 
      extendedText: t.services.hotelReservationsDesc, 
      features: [t.services.featureHaramView, t.services.featureLuxuryAmenities, t.services.featureEarlyCheckin, t.services.featureFlexibleDates] 
    },
    { 
      icon: FileCheck, 
      title: t.services.visaAssistance, 
      video: video4, 
      extendedText: t.services.visaAssistanceDesc, 
      features: [t.services.featureDocPrep, t.services.featureAppTracking, t.services.featureExpertGuidance, t.services.featureFastProcessing] 
    },
    { 
      icon: Bus, 
      title: t.services.transportation, 
      video: video5, 
      extendedText: t.services.transportationDesc, 
      features: [t.services.featureACVehicles, t.services.featureProfDrivers, t.services.featureDoorToDoor, t.services.featureGPS] 
    },
    { 
      icon: Stethoscope, 
      title: t.services.travelInsurance, 
      video: video6, 
      extendedText: t.services.travelInsuranceDesc, 
      features: [t.services.featureMedicalCoverage, t.services.featureTripCancel, t.services.featureLostBaggage, t.services.feature24Assistance] 
    },
    { 
      icon: Users, 
      title: t.services.groupCorporate, 
      video: video7, 
      extendedText: t.services.groupCorporateDesc, 
      features: [t.services.featureCustomItineraries, t.services.featureGroupDiscounts, t.services.featureDedicatedManager, t.services.featureTeamBuilding] 
    },
    { 
      icon: Calendar, 
      title: t.services.eventPlanning, 
      video: video8, 
      extendedText: t.services.eventPlanningDesc, 
      features: [t.services.featureVenueSelection, t.services.featureCustomExperiences, t.services.featurePhotography, t.services.featureSpecialArrangements] 
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
          {t.services.heroTitle}
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
          {t.cta.readyToStart}
        </h2>
        <p className="font-sans text-sage/80 text-lg mb-8 max-w-xl mx-auto">
          {t.cta.readyToStartDesc}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-forest font-sans font-bold text-lg rounded-full hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-lg hover:scale-105"
        >
          {t.cta.talkToExpert}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Services;
