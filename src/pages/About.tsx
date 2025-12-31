import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, Award, Target, Eye, Heart, Shield, Users, Star, 
  Download, MapPin, Phone, Mail, CheckCircle
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useLanguage } from '@/contexts/LanguageContext';

import madinahImage from '@/assets/madinah-hero.jpg';
import happyFamily from '@/assets/about.jpg';

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    { icon: Heart, title: t.about.trust, description: t.about.trustDesc },
    { icon: Eye, title: t.about.transparency, description: t.about.transparencyDesc },
    { icon: Shield, title: t.about.care, description: t.about.careDesc },
    { icon: Award, title: t.about.excellence, description: t.about.excellenceDesc },
  ];

  const milestones = [
    { year: '2009', title: t.about.foundation, description: t.about.foundationDesc },
    { year: '2012', title: t.about.expansion, description: t.about.expansionDesc },
    { year: '2018', title: t.about.growth, description: t.about.growthDesc },
    { year: '2020', title: t.about.digital, description: t.about.digitalDesc },
    { year: '2025', title: t.about.today, description: t.about.todayDesc },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative z-0 h-[60vh] min-h-[500px] overflow-hidden">
  {/* Background Image */}
  <img
    src={madinahImage}
    alt="About Jannat Travels"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  />

  {/* Blue Gradient Overlay (same as Contact) */}
  <div className="absolute inset-0 hero-overlay pointer-events-none" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight text-center">
  {t.about.heroTitle}
</h1>

      </motion.div>
    </div>
  </div>
</section>


      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                {t.about.storyBadge}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.about.storyTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.storyP1}</p>
                <p>{t.about.storyP2}</p>
                <p>{t.about.storyP3}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
  src={happyFamily} 
  alt="Happy pilgrims" 
  className="rounded-3xl shadow-glass-lg w-full lg:w-[90%] mx-auto"
/>

              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-glass-lg p-6">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-muted-foreground">{t.about.yearsOfService}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card p-8"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{t.about.missionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.missionDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="premium-card p-8"
            >
              <div className="w-14 h-14 rounded-2xl gradient-sky flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{t.about.visionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.visionDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge={t.about.valuesBadge}
            title={t.about.valuesTitle}
            subtitle={t.about.valuesSubtitle}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-3xl bg-secondary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <SectionHeading
            badge={t.about.journeyBadge}
            title={t.about.journeyTitle}
            subtitle={t.about.journeySubtitle}
            light
          />

          <div className="mt-16 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20 -translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                      <span className="text-gold font-bold text-xl">{milestone.year}</span>
                      <h3 className="font-display text-xl font-semibold text-primary-foreground mt-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-foreground/80 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={30000} suffix="+" label={t.achievements.pilgrimsServed} icon={<Users className="w-8 h-8" />} />
            <AnimatedCounter end={1500} suffix="+" label={t.achievements.successfulTours} icon={<MapPin className="w-8 h-8" />} />
            <AnimatedCounter end={50} suffix="+" label={t.achievements.expertTeam} icon={<Award className="w-8 h-8" />} />
            <AnimatedCounter end={99} suffix="%" label={t.achievements.satisfactionRate} icon={<Star className="w-8 h-8" />} />
          </div>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.cta.readyToStart}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {t.cta.readyToStartDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/packages" className="btn-primary">
                {t.common.explorePackages}
              </Link>
              <Link to="/contact" className="btn-gold">
                {t.common.contactUs}
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

export default About;
