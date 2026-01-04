import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

import heroImage from '@/assets/hero-makkah.jpg';
import madinahImage from '@/assets/madinah-hero.jpg';
import luxuryHotel from '@/assets/luxury-hotel.jpg';
import happyFamily from '@/assets/happy-family.jpg';
import alUla from '@/assets/al-ula.jpg';
import europeTour from '@/assets/europe-tour.jpg';
import riyadh from '@/assets/riyadh.jpg';
import uhud from '@/assets/uhud.jpg';
import abha from '@/assets/abha.jpg';
import taif from '@/assets/taif.jpg';

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
        <h3 className="font-semibold text-lg text-foreground">{faq.question}</h3>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
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
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t.gallery.filterAll },
    { id: 'makkah', label: t.gallery.filterMakkah },
    { id: 'madinah', label: t.gallery.filterMadinah },
    { id: 'ziyarat', label: t.gallery.filterZiyarat },
    { id: 'tours', label: t.gallery.filterTours },
  ];

  const galleryImages = [
    { src: heroImage, category: 'makkah', title: t.gallery.grandMosque },
    { src: madinahImage, category: 'madinah', title: t.gallery.prophetMosque },
    { src: luxuryHotel, category: 'makkah', title: t.gallery.premiumAccommodation },
    { src: happyFamily, category: 'ziyarat', title: t.gallery.happyPilgrims },
    { src: alUla, category: 'tours', title: t.gallery.alUlaHeritage },
    { src: europeTour, category: 'tours', title: t.gallery.internationalTours },
    { src: riyadh, category: 'tours', title: t.gallery.riyadhCityscape },
    { src: uhud, category: 'madinah', title: t.gallery.mountUhud },
    { src: abha, category: 'abha', title: t.gallery.abhaFamilyTrips },
    { src: taif, category: 'taif', title: t.gallery.taifCityOfMountains },
    
  ];

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
    { question: t.faq.q5, answer: t.faq.a5 },
    { question: t.faq.q6, answer: t.faq.a6 },
    { question: t.faq.q7, answer: t.faq.a7 },
    { question: t.faq.q8, answer: t.faq.a8 },
  ];

  const filteredImages =
    activeFilter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-0 h-[60vh] min-h-[500px] overflow-hidden">
        <img src={heroImage} alt="Gallery" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
                {t.gallery.heroTitle}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* Gallery Section */}
<section className="section-padding">
  <div className="container-wide">
    <SectionHeading
      badge={t.gallery.sectionBadge}
      title={t.gallery.sectionTitle}
      subtitle={t.gallery.sectionSubtitle}
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

    {/* Collage Grid */}
    <motion.div
      layout
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]"
    >
      {filteredImages.map((img, index) => {
        // Use smaller spans on mobile for better fit
        const colSpan = index % 5 === 0 ? 2 : 1;
        const rowSpan = index % 3 === 0 ? 2 : 1;

        return (
          <motion.div
            key={index}
            layout
            className={`
              cursor-pointer overflow-hidden rounded-2xl relative
              col-span-1 row-span-1
              sm:col-span-${colSpan} sm:row-span-${rowSpan}
              md:col-span-${colSpan} md:row-span-${rowSpan}
              lg:col-span-${colSpan} lg:row-span-${rowSpan}
            `}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
              {img.title}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide max-w-4xl">
          <SectionHeading badge={t.gallery.faqBadge} title={t.gallery.faqTitle} subtitle={t.gallery.faqSubtitle} />
          <div className="mt-10 space-y-4">{faqs.map((faq, index) => <FAQItem key={index} faq={faq} index={index} />)}</div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
  {selectedIndex !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={() => setSelectedIndex(null)}
    >
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-black hover:bg-white transition-colors z-[1010]"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedIndex(null);
        }}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Left Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center z-[1010]"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center z-[1010]"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={filteredImages[selectedIndex].src}
        alt={filteredImages[selectedIndex].title}
        className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl z-[1005]"
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
