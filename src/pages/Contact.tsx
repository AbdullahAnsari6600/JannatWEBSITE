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
    countryCode: '+966',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    package: '',
  });
  const countryCodes = [
    { code: '+1', label: '🇺🇸 United States' },
    { code: '+1', label: '🇨🇦 Canada' },
    { code: '+44', label: '🇬🇧 United Kingdom' },
    { code: '+91', label: '🇮🇳 India' },
    { code: '+61', label: '🇦🇺 Australia' },
    { code: '+49', label: '🇩🇪 Germany' },
    { code: '+33', label: '🇫🇷 France' },
    { code: '+39', label: '🇮🇹 Italy' },
    { code: '+81', label: '🇯🇵 Japan' },
    { code: '+86', label: '🇨🇳 China' },
    { code: '+7', label: '🇷🇺 Russia' },
    { code: '+966', label: '🇸🇦 Saudi Arabia' },
    { code: '+971', label: '🇦🇪 UAE' },
    { code: '+92', label: '🇵🇰 Pakistan' },
    { code: '+880', label: '🇧🇩 Bangladesh' },
    { code: '+27', label: '🇿🇦 South Africa' },
    { code: '+34', label: '🇪🇸 Spain' },
    { code: '+46', label: '🇸🇪 Sweden' },
    { code: '+47', label: '🇳🇴 Norway' },
    { code: '+31', label: '🇳🇱 Netherlands' },
    { code: '+48', label: '🇵🇱 Poland' },
    { code: '+41', label: '🇨🇭 Switzerland' },
    { code: '+420', label: '🇨🇿 Czech Republic' },
    { code: '+43', label: '🇦🇹 Austria' },
    { code: '+351', label: '🇵🇹 Portugal' },
    { code: '+353', label: '🇮🇪 Ireland' },
    { code: '+358', label: '🇫🇮 Finland' },
    { code: '+64', label: '🇳🇿 New Zealand' },
    { code: '+60', label: '🇲🇾 Malaysia' },
    { code: '+65', label: '🇸🇬 Singapore' },
    { code: '+62', label: '🇮🇩 Indonesia' },
    { code: '+66', label: '🇹🇭 Thailand' },
    { code: '+95', label: '🇲🇲 Myanmar' },
    { code: '+84', label: '🇻🇳 Vietnam' },
    { code: '+63', label: '🇵🇭 Philippines' },
    { code: '+234', label: '🇳🇬 Nigeria' },
    { code: '+254', label: '🇰🇪 Kenya' },
    { code: '+20', label: '🇪🇬 Egypt' },
    { code: '+211', label: '🇸🇸 South Sudan' },
    { code: '+212', label: '🇲🇦 Morocco' },
    { code: '+974', label: '🇶🇦 Qatar' },
    { code: '+965', label: '🇰🇼 Kuwait' },
    { code: '+968', label: '🇴🇲 Oman' },
    { code: '+973', label: '🇧🇭 Bahrain' },
    { code: '+998', label: '🇺🇿 Uzbekistan' },
    { code: '+992', label: '🇹🇯 Tajikistan' },
    { code: '+993', label: '🇹🇲 Turkmenistan' },
    { code: '+995', label: '🇬🇪 Georgia' },
    { code: '+996', label: '🇰🇬 Kyrgyzstan' },
    { code: '+880', label: '🇧🇩 Bangladesh' },
    { code: '+886', label: '🇹🇼 Taiwan' },
    { code: '+82', label: '🇰🇷 South Korea' },
    { code: '+850', label: '🇰🇵 North Korea' },
    { code: '+52', label: '🇲🇽 Mexico' },
    { code: '+507', label: '🇵🇦 Panama' },
    { code: '+51', label: '🇵🇪 Peru' },
    { code: '+56', label: '🇨🇱 Chile' },
    { code: '+54', label: '🇦🇷 Argentina' },
    { code: '+55', label: '🇧🇷 Brazil' },
    { code: '+591', label: '🇧🇴 Bolivia' },
    { code: '+502', label: '🇬🇹 Guatemala' },
    { code: '+503', label: '🇸🇻 El Salvador' },
    { code: '+504', label: '🇭🇳 Honduras' },
    { code: '+505', label: '🇳🇮 Nicaragua' },
    { code: '+506', label: '🇨🇷 Costa Rica' },
    { code: '+595', label: '🇵🇾 Paraguay' },
    { code: '+598', label: '🇺🇾 Uruguay' },
    { code: '+592', label: '🇬🇾 Guyana' },
    { code: '+501', label: '🇧🇿 Belize' },
    { code: '+503', label: '🇸🇻 El Salvador' },
    { code: '+358', label: '🇫🇮 Finland' },
    { code: '+47', label: '🇳🇴 Norway' },
    // ... add more if needed
  ];
  
    
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const fullPhoneNumber = `${formData.countryCode}${formData.phone}`;
    console.log('Phone:', fullPhoneNumber);
  
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: t.contact.messageSent,
      description: t.contact.messageSuccess,
    });
    
    setFormData({
      countryCode: '+966',
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      package: '',
    });
    
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
          3570 Abu Ayyub Al Ansaari, Al Marqab, Riyadh, 12646
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

  <div className="flex flex-col sm:flex-row gap-2">
    {/* Country Code */}
    <select
      value={formData.countryCode}
      onChange={(e) =>
        setFormData({ ...formData, countryCode: e.target.value })
      }
      className="w-full sm:w-[120px] px-2 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-mono"
    >
      {countryCodes
        .sort((a, b) => Number(a.code.replace('+', '')) - Number(b.code.replace('+', '')))
        .map((c) => {
          const codeNumber = c.code.replace('+', '').padEnd(5, ' ');
          return (
            <option key={c.code + c.label} value={c.code}>
              {codeNumber} {c.label}
            </option>
          );
        })}
    </select>

    {/* Phone Number */}
    <input
      type="text"
      value={formData.phone}
      onChange={(e) => {
        const onlyNumbers = e.target.value.replace(/\D/g, '');
        setFormData({ ...formData, phone: onlyNumbers });
      }}
      className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
      placeholder={t.contact.phonePlaceholder}
    />
  </div>
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
