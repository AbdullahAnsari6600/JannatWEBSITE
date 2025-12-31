import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, 
  Building, Globe, CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useLanguage } from '@/contexts/LanguageContext';

import madinahImage from '@/assets/madinah-hero.jpg';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    package: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: t.contact.messageSent,
      description: t.contact.messageSuccess,
    });
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', package: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { id: 'phone1', icon: Phone, title: t.contact.phone, value: '+966 54 681 2673', link: 'tel:+966546812673' },
    { id: 'phone2', icon: Phone, title: t.contact.phone, value: '+966 54 416 7162', link: 'tel:+966544167162' },
    { id: 'email', icon: Mail, title: t.contact.email, value: 'info@jannattravelsandtours.com', link: 'mailto:info@jannattravelsandtours.com' },
    { id: 'hours', icon: Clock, title: t.contact.workingHours, value: t.contact.workingHoursValue },
  ];
  
  

  const packages = [
    t.contact.packageHajj,
    t.contact.packageUmrah,
    t.contact.packageZiyarat,
    t.contact.packageLocalSaudi,
    t.contact.packageInternational,
    t.contact.packageCustom,
    t.contact.packageOther,
  ];

  return (
    <div className="ltr-safe min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
  <img 
    src={madinahImage} 
    alt="Contact Us" 
    className="w-full h-full object-cover" 
  />
  
  <div className="absolute inset-0 hero-overlay" />

  <div className="relative z-50 h-full flex items-center justify-center text-center px-4 md:px-8">
    <motion.div
      initial={{ opacity: 1, y: 0 }}       // force visible
      animate={{ opacity: 1, y: 0 }}       // force visible
      transition={{ duration: 0 }}          // no delay
      style={{ opacity: 1 }}               // inline style ensures visibility
    >
      <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 drop-shadow-lg">
        Get in Touch
      </span>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
        Contact Us
      </h1>
      <p className="text-white/90 mt-4 text-lg md:text-xl drop-shadow-lg max-w-2xl mx-auto">
        Reach out for your Hajj, Umrah, Ziyarat, or other travel inquiries. We’re here to guide you every step of the way.
      </p>
    </motion.div>
  </div>
</section> */}

<section className="relative z-0 h-[60vh] min-h-[500px] overflow-hidden">
  <img
    src={madinahImage}
    alt="Contact Us"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  />

  {/* Blue Gradient Overlay */}
  <div className="absolute inset-0 hero-overlay pointer-events-none" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center text-center px-4 md:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
        {t.contact.heroTitle}
      </h1>
      <p className="text-white/90 mt-4 text-lg md:text-xl drop-shadow-lg max-w-2xl mx-auto">
        {t.contact.conversationDesc}
      </p>
    </motion.div>
  </div>
</section>





      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  {t.contact.conversationTitle}
                </h2>
                <p className="text-muted-foreground">
                  {t.contact.conversationDesc}
                </p>
              </div>

              <div className="space-y-6">
              {contactInfo.map((info) => (
  <div key={info.id}>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
        <info.icon className="w-6 h-6 text-primary-foreground" />
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold text-foreground">{info.title}</h3>

        {info.link ? (
          <a
            href={info.link}
            className="text-muted-foreground hover:text-secondary transition-colors"
          >
            {info.value}
          </a>
        ) : (
          <p className="text-muted-foreground">{info.value}</p>
        )}
      </div>
    </motion.div>

    {/* ✅ MAP OUTSIDE FLEX — FULL WIDTH */}
    {info.title === t.contact.workingHours && (
      <div className="mt-4 space-y-2">
        {/* Address */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          King Fahd Road, Al Olaya, Riyadh
        </div>

        {/* Map */}
        <div className="w-full h-44 rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.5471592765616!2d46.72802347536378!3d24.639287878074384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM4JzIxLjQiTiA0NsKwNDMnNTAuMiJF!5e0!3m2!1sen!2sin!4v1766674901331!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    )}
  </div>
))}

</div>


              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/+966546812673 "
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t.contact.whatsappChat}</h3>
                  <p className="text-sm text-muted-foreground">{t.contact.whatsappInstant}</p>
                </div>
              </motion.a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-card p-8"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {t.contact.formTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.fullNamePlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.emailAddress} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>

                  <div>
  <label className="block text-sm font-medium text-foreground mb-2">
    {t.contact.phoneNumber}
  </label>
  <input
    type="text"
    value={formData.phone}
    onChange={(e) => {
      // Allow only digits
      const onlyNumbers = e.target.value.replace(/\D/g, '');
      setFormData({ ...formData, phone: onlyNumbers });
    }}
    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
    placeholder={t.contact.phonePlaceholder}
  />
</div>


                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.interestedPackage}
                    </label>
                    <select
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">{t.common.selectPackage}</option>
                      {packages.map((pkg) => (
                        <option key={pkg} value={pkg}>{pkg}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.subject} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.subjectPlaceholder}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.message} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 btn-primary w-full md:w-auto disabled:opacity-50"
                >
                  {isSubmitting ? (
                    t.common.sending
                  ) : (
                    <>
                      {t.common.sendMessage}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>


      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
