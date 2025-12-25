import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';
import { X, ChevronDown } from 'lucide-react';



import heroImage from '@/assets/hero-makkah.jpg';
import madinahImage from '@/assets/madinah-hero.jpg';
import luxuryHotel from '@/assets/luxury-hotel.jpg';
import happyFamily from '@/assets/happy-family.jpg';
import alUla from '@/assets/al-ula.jpg';
import europeTour from '@/assets/europe-tour.jpg';
import riyadh from '@/assets/riyadh.jpg';
import uhud from '@/assets/uhud.jpg';
import abha from '@/assets/abha.jpg'
import taif from '@/assets/taif.jpg'


const FAQItem = ({ faq, index }: { faq: any; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-background shadow-sm border border-border overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <h3 className="font-semibold text-lg text-foreground">
          {faq.question}
        </h3>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-muted-foreground leading-relaxed"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'makkah', label: 'Makkah' },
    { id: 'madinah', label: 'Madinah' },
    { id: 'ziyarat', label: 'Ziyarat' },
    { id: 'tours', label: 'Tours' },
  ];

  const galleryImages = [
    { src: heroImage, category: 'makkah', title: 'Grand Mosque, Makkah' },
    { src: madinahImage, category: 'madinah', title: 'Prophet\'s Mosque, Madinah' },
    { src: luxuryHotel, category: 'makkah', title: 'Premium Accommodation' },
    { src: happyFamily, category: 'ziyarat', title: 'Happy Pilgrims' },
    { src: alUla, category: 'tours', title: 'Al Ula Heritage' },
    { src: europeTour, category: 'tours', title: 'Tours' },
    { src: riyadh, category: 'tours', title: 'Riyadh Cityscape' },
    { src: uhud, category: 'madinah', title: 'Mount Uhud' },
    { src: abha, category: 'Abha', title: 'Abha Family trips' },
    { src: taif, category: 'Taif', title: 'Taif- City of Mountains' },
  ];
  const faqs = [
    {
      question: 'What is included in your Umrah packages?',
      answer:
        'Our Umrah packages typically include visa processing, round-trip transportation, hotel accommodation near Haram, guided Ziyarat tours, and dedicated assistance throughout your spiritual journey.',
    },
    {
      question: 'Do you provide Hajj packages for all categories?',
      answer:
        'Yes. We offer economical, standard, and luxury Hajj packages, covering accommodation, transportation, Mina–Arafat services, meals, and experienced group guides in accordance with Saudi regulations.',
    },
    {
      question: 'How early should I book Umrah or Hajj?',
      answer:
        'For Umrah, booking 4–6 weeks in advance is recommended. Hajj packages should be booked several months earlier due to limited quotas and high demand.',
    },
    {
      question: 'Is Saudi Umrah visa included in the package?',
      answer:
        'Yes. We handle complete Umrah visa processing, documentation, and approvals as part of our Umrah packages.',
    },
    {
      question: 'Do you arrange hotels near Haram in Makkah and Madinah?',
      answer:
        'Absolutely. We provide carefully selected hotels at walking distance or with shuttle services, depending on the chosen package.',
    },
    {
      question: 'Are Ziyarat tours included?',
      answer:
        'Yes. Our packages include guided Ziyarat tours in Makkah and Madinah, covering important Islamic historical sites.',
    },
    {
      question: 'Do you offer family and group packages?',
      answer:
        'Yes. We specialize in family, group, and elderly-friendly packages with customized arrangements.',
    },
    {
      question: 'Is local Saudi sightseeing included?',
      answer:
        'We offer optional tours to destinations like Taif, Abha, AlUla, and Riyadh as add-ons to Umrah or separate tour packages.',
    },
  ];
  


  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-0 h-[60vh] min-h-[500px] overflow-hidden">
  {/* Background Image */}
  <img
    src={heroImage}
    alt="Gallery"
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
          Memorable Moments & FAQ's
        </h1>
      </motion.div>
    </div>
  </div>
</section>


      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Photo Gallery"
            title="Captured Experiences"
            subtitle="Browse through our collection of unforgettable travel moments"
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'gradient-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                    index % 5 === 0 ? 'row-span-2' : ''
                  }`}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index % 5 === 0 ? 'h-[500px]' : 'h-60'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-primary-foreground font-semibold">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="section-padding bg-muted/30">
  <div className="container-wide max-w-4xl">
    <SectionHeading
      badge="FAQs"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about Umrah, Hajj & Saudi tours"
    />

    <div className="mt-10 space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} index={index} />
      ))}
    </div>
  </div>
</section>


      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;

