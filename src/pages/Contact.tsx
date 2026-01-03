import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';


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
    travelMonth: '', // ✅ NEW
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setDropdownOpen(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

  // Country codes with Flagcdn
const countryCodes = [ 
    { code: '+93', label: 'Afghanistan', flag: 'https://flagcdn.com/af.svg' },
    { code: '+355', label: 'Albania', flag: 'https://flagcdn.com/al.svg' },
    { code: '+213', label: 'Algeria', flag: 'https://flagcdn.com/dz.svg' },
    { code: '+376', label: 'Andorra', flag: 'https://flagcdn.com/ad.svg' },
    { code: '+244', label: 'Angola', flag: 'https://flagcdn.com/ao.svg' },
    { code: '+1-268', label: 'Antigua and Barbuda', flag: 'https://flagcdn.com/ag.svg' },
    { code: '+54', label: 'Argentina', flag: 'https://flagcdn.com/ar.svg' },
    { code: '+374', label: 'Armenia', flag: 'https://flagcdn.com/am.svg' },
    { code: '+61', label: 'Australia', flag: 'https://flagcdn.com/au.svg' },
    { code: '+43', label: 'Austria', flag: 'https://flagcdn.com/at.svg' },
    { code: '+994', label: 'Azerbaijan', flag: 'https://flagcdn.com/az.svg' },
    { code: '+1-242', label: 'Bahamas', flag: 'https://flagcdn.com/bs.svg' },
    { code: '+973', label: 'Bahrain', flag: 'https://flagcdn.com/bh.svg' },
    { code: '+880', label: 'Bangladesh', flag: 'https://flagcdn.com/bd.svg' },
    { code: '+1-246', label: 'Barbados', flag: 'https://flagcdn.com/bb.svg' },
    { code: '+375', label: 'Belarus', flag: 'https://flagcdn.com/by.svg' },
    { code: '+32', label: 'Belgium', flag: 'https://flagcdn.com/be.svg' },
    { code: '+501', label: 'Belize', flag: 'https://flagcdn.com/bz.svg' },
    { code: '+229', label: 'Benin', flag: 'https://flagcdn.com/bj.svg' },
    { code: '+975', label: 'Bhutan', flag: 'https://flagcdn.com/bt.svg' },
    { code: '+591', label: 'Bolivia', flag: 'https://flagcdn.com/bo.svg' },
    { code: '+387', label: 'Bosnia and Herzegovina', flag: 'https://flagcdn.com/ba.svg' },
    { code: '+267', label: 'Botswana', flag: 'https://flagcdn.com/bw.svg' },
    { code: '+55', label: 'Brazil', flag: 'https://flagcdn.com/br.svg' },
    { code: '+673', label: 'Brunei', flag: 'https://flagcdn.com/bn.svg' },
    { code: '+359', label: 'Bulgaria', flag: 'https://flagcdn.com/bg.svg' },
    { code: '+226', label: 'Burkina Faso', flag: 'https://flagcdn.com/bf.svg' },
    { code: '+257', label: 'Burundi', flag: 'https://flagcdn.com/bi.svg' },
    { code: '+855', label: 'Cambodia', flag: 'https://flagcdn.com/kh.svg' },
    { code: '+237', label: 'Cameroon', flag: 'https://flagcdn.com/cm.svg' },
    { code: '+56', label: 'Chile', flag: 'https://flagcdn.com/cl.svg' },
    { code: '+86', label: 'China', flag: 'https://flagcdn.com/cn.svg' },
    { code: '+57', label: 'Colombia', flag: 'https://flagcdn.com/co.svg' },
    { code: '+243', label: 'DR Congo', flag: 'https://flagcdn.com/cd.svg' },
    { code: '+242', label: 'Congo', flag: 'https://flagcdn.com/cg.svg' },
    { code: '+506', label: 'Costa Rica', flag: 'https://flagcdn.com/cr.svg' },
    { code: '+385', label: 'Croatia', flag: 'https://flagcdn.com/hr.svg' },
    { code: '+53', label: 'Cuba', flag: 'https://flagcdn.com/cu.svg' },
    { code: '+357', label: 'Cyprus', flag: 'https://flagcdn.com/cy.svg' },
    { code: '+420', label: 'Czech Republic', flag: 'https://flagcdn.com/cz.svg' },
    { code: '+45', label: 'Denmark', flag: 'https://flagcdn.com/dk.svg' },
    { code: '+253', label: 'Djibouti', flag: 'https://flagcdn.com/dj.svg' },
    { code: '+20', label: 'Egypt', flag: 'https://flagcdn.com/eg.svg' },
    { code: '+251', label: 'Ethiopia', flag: 'https://flagcdn.com/et.svg' },
    { code: '+372', label: 'Estonia', flag: 'https://flagcdn.com/ee.svg' },
    { code: '+291', label: 'Eritrea', flag: 'https://flagcdn.com/er.svg' },
    { code: '+358', label: 'Finland', flag: 'https://flagcdn.com/fi.svg' },
    { code: '+33', label: 'France', flag: 'https://flagcdn.com/fr.svg' },
    { code: '+220', label: 'Gambia', flag: 'https://flagcdn.com/gm.svg' },
    { code: '+995', label: 'Georgia', flag: 'https://flagcdn.com/ge.svg' },
    { code: '+49', label: 'Germany', flag: 'https://flagcdn.com/de.svg' },
    { code: '+233', label: 'Ghana', flag: 'https://flagcdn.com/gh.svg' },
    { code: '+30', label: 'Greece', flag: 'https://flagcdn.com/gr.svg' },
    { code: '+502', label: 'Guatemala', flag: 'https://flagcdn.com/gt.svg' },
    { code: '+224', label: 'Guinea', flag: 'https://flagcdn.com/gn.svg' },
    { code: '+245', label: 'Guinea-Bissau', flag: 'https://flagcdn.com/gw.svg' },
    { code: '+592', label: 'Guyana', flag: 'https://flagcdn.com/gy.svg' },
    { code: '+509', label: 'Haiti', flag: 'https://flagcdn.com/ht.svg' },
    { code: '+504', label: 'Honduras', flag: 'https://flagcdn.com/hn.svg' },
    { code: '+36', label: 'Hungary', flag: 'https://flagcdn.com/hu.svg' },
    { code: '+91', label: 'India', flag: 'https://flagcdn.com/in.svg' },
    { code: '+62', label: 'Indonesia', flag: 'https://flagcdn.com/id.svg' },
    { code: '+98', label: 'Iran', flag: 'https://flagcdn.com/ir.svg' },
    { code: '+964', label: 'Iraq', flag: 'https://flagcdn.com/iq.svg' },
    { code: '+353', label: 'Ireland', flag: 'https://flagcdn.com/ie.svg' },
    { code: '+972', label: 'Israel', flag: 'https://flagcdn.com/il.svg' },
    { code: '+39', label: 'Italy', flag: 'https://flagcdn.com/it.svg' },
    { code: '+81', label: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
    { code: '+962', label: 'Jordan', flag: 'https://flagcdn.com/jo.svg' },
    { code: '+7', label: 'Kazakhstan', flag: 'https://flagcdn.com/kz.svg' },
    { code: '+254', label: 'Kenya', flag: 'https://flagcdn.com/ke.svg' },
    { code: '+965', label: 'Kuwait', flag: 'https://flagcdn.com/kw.svg' },
    { code: '+996', label: 'Kyrgyzstan', flag: 'https://flagcdn.com/kg.svg' },
    { code: '+856', label: 'Laos', flag: 'https://flagcdn.com/la.svg' },
  { code: '+371', label: 'Latvia', flag: 'https://flagcdn.com/lv.svg' },
{ code: '+961', label: 'Lebanon', flag: 'https://flagcdn.com/lb.svg' },
{ code: '+266', label: 'Lesotho', flag: 'https://flagcdn.com/ls.svg' },
{ code: '+231', label: 'Liberia', flag: 'https://flagcdn.com/lr.svg' },
{ code: '+218', label: 'Libya', flag: 'https://flagcdn.com/ly.svg' },
{ code: '+423', label: 'Liechtenstein', flag: 'https://flagcdn.com/li.svg' },
{ code: '+370', label: 'Lithuania', flag: 'https://flagcdn.com/lt.svg' },
{ code: '+352', label: 'Luxembourg', flag: 'https://flagcdn.com/lu.svg' },
{ code: '+261', label: 'Madagascar', flag: 'https://flagcdn.com/mg.svg' },
{ code: '+265', label: 'Malawi', flag: 'https://flagcdn.com/mw.svg' },
{ code: '+60', label: 'Malaysia', flag: 'https://flagcdn.com/my.svg' },
{ code: '+960', label: 'Maldives', flag: 'https://flagcdn.com/mv.svg' },
{ code: '+223', label: 'Mali', flag: 'https://flagcdn.com/ml.svg' },
{ code: '+356', label: 'Malta', flag: 'https://flagcdn.com/mt.svg' },
{ code: '+692', label: 'Marshall Islands', flag: 'https://flagcdn.com/mh.svg' },
{ code: '+596', label: 'Martinique', flag: 'https://flagcdn.com/mq.svg' },
{ code: '+222', label: 'Mauritania', flag: 'https://flagcdn.com/mr.svg' },
{ code: '+230', label: 'Mauritius', flag: 'https://flagcdn.com/mu.svg' },
{ code: '+262', label: 'Mayotte', flag: 'https://flagcdn.com/yt.svg' },
{ code: '+52', label: 'Mexico', flag: 'https://flagcdn.com/mx.svg' },
{ code: '+691', label: 'Micronesia', flag: 'https://flagcdn.com/fm.svg' },
{ code: '+373', label: 'Moldova', flag: 'https://flagcdn.com/md.svg' },
{ code: '+377', label: 'Monaco', flag: 'https://flagcdn.com/mc.svg' },
{ code: '+976', label: 'Mongolia', flag: 'https://flagcdn.com/mn.svg' },
{ code: '+382', label: 'Montenegro', flag: 'https://flagcdn.com/me.svg' },
{ code: '+212', label: 'Morocco', flag: 'https://flagcdn.com/ma.svg' },
{ code: '+258', label: 'Mozambique', flag: 'https://flagcdn.com/mz.svg' },
{ code: '+95', label: 'Myanmar', flag: 'https://flagcdn.com/mm.svg' },
{ code: '+264', label: 'Namibia', flag: 'https://flagcdn.com/na.svg' },
{ code: '+674', label: 'Nauru', flag: 'https://flagcdn.com/nr.svg' },
{ code: '+977', label: 'Nepal', flag: 'https://flagcdn.com/np.svg' },
{ code: '+31', label: 'Netherlands', flag: 'https://flagcdn.com/nl.svg' },
{ code: '+687', label: 'New Caledonia', flag: 'https://flagcdn.com/nc.svg' },
{ code: '+64', label: 'New Zealand', flag: 'https://flagcdn.com/nz.svg' },
{ code: '+505', label: 'Nicaragua', flag: 'https://flagcdn.com/ni.svg' },
{ code: '+227', label: 'Niger', flag: 'https://flagcdn.com/ne.svg' },
{ code: '+234', label: 'Nigeria', flag: 'https://flagcdn.com/ng.svg' },
{ code: '+683', label: 'Niue', flag: 'https://flagcdn.com/nu.svg' },
{ code: '+672', label: 'Norfolk Island', flag: 'https://flagcdn.com/nf.svg' },
{ code: '+850', label: 'North Korea', flag: 'https://flagcdn.com/kp.svg' },
{ code: '+1-670', label: 'Northern Mariana Islands', flag: 'https://flagcdn.com/mp.svg' },
{ code: '+47', label: 'Norway', flag: 'https://flagcdn.com/no.svg' },
{ code: '+968', label: 'Oman', flag: 'https://flagcdn.com/om.svg' },
{ code: '+92', label: 'Pakistan', flag: 'https://flagcdn.com/pk.svg' },
{ code: '+680', label: 'Palau', flag: 'https://flagcdn.com/pw.svg' },
{ code: '+970', label: 'Palestine', flag: 'https://flagcdn.com/ps.svg' },
{ code: '+507', label: 'Panama', flag: 'https://flagcdn.com/pa.svg' },
{ code: '+675', label: 'Papua New Guinea', flag: 'https://flagcdn.com/pg.svg' },
{ code: '+595', label: 'Paraguay', flag: 'https://flagcdn.com/py.svg' },
{ code: '+51', label: 'Peru', flag: 'https://flagcdn.com/pe.svg' },
{ code: '+63', label: 'Philippines', flag: 'https://flagcdn.com/ph.svg' },
{ code: '+48', label: 'Poland', flag: 'https://flagcdn.com/pl.svg' },
{ code: '+351', label: 'Portugal', flag: 'https://flagcdn.com/pt.svg' },
{ code: '+1-787', label: 'Puerto Rico', flag: 'https://flagcdn.com/pr.svg' },
{ code: '+974', label: 'Qatar', flag: 'https://flagcdn.com/qa.svg' },
{ code: '+40', label: 'Romania', flag: 'https://flagcdn.com/ro.svg' },
{ code: '+7', label: 'Russia', flag: 'https://flagcdn.com/ru.svg' },
{ code: '+250', label: 'Rwanda', flag: 'https://flagcdn.com/rw.svg' },
{ code: '+590', label: 'Saint Barthélemy', flag: 'https://flagcdn.com/bl.svg' },
{ code: '+1-869', label: 'Saint Kitts and Nevis', flag: 'https://flagcdn.com/kn.svg' },
{ code: '+1-758', label: 'Saint Lucia', flag: 'https://flagcdn.com/lc.svg' },
{ code: '+590', label: 'Saint Martin', flag: 'https://flagcdn.com/mf.svg' },
{ code: '+508', label: 'Saint Pierre and Miquelon', flag: 'https://flagcdn.com/pm.svg' },
{ code: '+1-784', label: 'Saint Vincent and the Grenadines', flag: 'https://flagcdn.com/vc.svg' },
{ code: '+685', label: 'Samoa', flag: 'https://flagcdn.com/ws.svg' },
{ code: '+378', label: 'San Marino', flag: 'https://flagcdn.com/sm.svg' },
{ code: '+239', label: 'Sao Tome and Principe', flag: 'https://flagcdn.com/st.svg' },
{ code: '+966', label: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg' },
{ code: '+221', label: 'Senegal', flag: 'https://flagcdn.com/sn.svg' },
{ code: '+381', label: 'Serbia', flag: 'https://flagcdn.com/rs.svg' },
{ code: '+248', label: 'Seychelles', flag: 'https://flagcdn.com/sc.svg' },
{ code: '+232', label: 'Sierra Leone', flag: 'https://flagcdn.com/sl.svg' },
{ code: '+65', label: 'Singapore', flag: 'https://flagcdn.com/sg.svg' },
{ code: '+421', label: 'Slovakia', flag: 'https://flagcdn.com/sk.svg' },
{ code: '+386', label: 'Slovenia', flag: 'https://flagcdn.com/si.svg' },
{ code: '+677', label: 'Solomon Islands', flag: 'https://flagcdn.com/sb.svg' },
{ code: '+252', label: 'Somalia', flag: 'https://flagcdn.com/so.svg' },
{ code: '+27', label: 'South Africa', flag: 'https://flagcdn.com/za.svg' },
{ code: '+82', label: 'South Korea', flag: 'https://flagcdn.com/kr.svg' },
{ code: '+211', label: 'South Sudan', flag: 'https://flagcdn.com/ss.svg' },
{ code: '+34', label: 'Spain', flag: 'https://flagcdn.com/es.svg' },
{ code: '+94', label: 'Sri Lanka', flag: 'https://flagcdn.com/lk.svg' },
{ code: '+249', label: 'Sudan', flag: 'https://flagcdn.com/sd.svg' },
{ code: '+597', label: 'Suriname', flag: 'https://flagcdn.com/sr.svg' },
{ code: '+268', label: 'Swaziland', flag: 'https://flagcdn.com/sz.svg' },
{ code: '+46', label: 'Sweden', flag: 'https://flagcdn.com/se.svg' },
{ code: '+41', label: 'Switzerland', flag: 'https://flagcdn.com/ch.svg' },
{ code: '+963', label: 'Syria', flag: 'https://flagcdn.com/sy.svg' },
{ code: '+886', label: 'Taiwan', flag: 'https://flagcdn.com/tw.svg' },
{ code: '+992', label: 'Tajikistan', flag: 'https://flagcdn.com/tj.svg' },
{ code: '+255', label: 'Tanzania', flag: 'https://flagcdn.com/tz.svg' },
{ code: '+66', label: 'Thailand', flag: 'https://flagcdn.com/th.svg' },
{ code: '+670', label: 'Timor-Leste', flag: 'https://flagcdn.com/tl.svg' },
{ code: '+228', label: 'Togo', flag: 'https://flagcdn.com/tg.svg' },
{ code: '+690', label: 'Tokelau', flag: 'https://flagcdn.com/tk.svg' },
{ code: '+676', label: 'Tonga', flag: 'https://flagcdn.com/to.svg' },
{ code: '+1-868', label: 'Trinidad and Tobago', flag: 'https://flagcdn.com/tt.svg' },
{ code: '+216', label: 'Tunisia', flag: 'https://flagcdn.com/tn.svg' },
{ code: '+90', label: 'Turkey', flag: 'https://flagcdn.com/tr.svg' },
{ code: '+993', label: 'Turkmenistan', flag: 'https://flagcdn.com/tm.svg' },
{ code: '+1-649', label: 'Turks and Caicos Islands', flag: 'https://flagcdn.com/tc.svg' },
{ code: '+688', label: 'Tuvalu', flag: 'https://flagcdn.com/tv.svg' },
{ code: '+256', label: 'Uganda', flag: 'https://flagcdn.com/ug.svg' },
{ code: '+380', label: 'Ukraine', flag: 'https://flagcdn.com/ua.svg' },
{ code: '+971', label: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg' },
{ code: '+44', label: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
{ code: '+1', label: 'United States', flag: 'https://flagcdn.com/us.svg' },
{ code: '+598', label: 'Uruguay', flag: 'https://flagcdn.com/uy.svg' },
{ code: '+998', label: 'Uzbekistan', flag: 'https://flagcdn.com/uz.svg' },
{ code: '+678', label: 'Vanuatu', flag: 'https://flagcdn.com/vu.svg' },
{ code: '+379', label: 'Vatican City', flag: 'https://flagcdn.com/va.svg' },
{ code: '+58', label: 'Venezuela', flag: 'https://flagcdn.com/ve.svg' },
{ code: '+84', label: 'Vietnam', flag: 'https://flagcdn.com/vn.svg' },
{ code: '+681', label: 'Wallis and Futuna', flag: 'https://flagcdn.com/wf.svg' },
{ code: '+967', label: 'Yemen', flag: 'https://flagcdn.com/ye.svg' },
{ code: '+260', label: 'Zambia', flag: 'https://flagcdn.com/zm.svg' },
{ code: '+263', label: 'Zimbabwe', flag: 'https://flagcdn.com/zw.svg' },

  ];
  
  
  const getCountry = (code: string) => countryCodes.find(c => c.code === code);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullPhoneNumber = `${formData.countryCode}${formData.phone}`;
    console.log('Phone:', fullPhoneNumber);

    await new Promise(resolve => setTimeout(resolve, 1500));

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
      travelMonth: '', // ✅ ADD THIS
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
      <section className="relative z-0 h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={madinahImage}
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
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
                <p className="text-muted-foreground">{t.contact.conversationDesc}</p>
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
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
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

                    {info.title === t.contact.workingHours && (
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          3570 Abu Ayyub Al Ansaari, Al Marqab, Riyadh, 12646
                        </div>
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

              <motion.a
                href="https://wa.me/+966546812673"
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
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Phone */}
                  {/* Phone */}
{/* Phone */}
{/* Phone */}
<div className="md:col-span-2">
  <label className="block text-sm font-medium text-foreground mb-2">
    {t.contact.phoneNumber}
  </label>

  <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3">

    {/* Country code dropdown */}
    <div ref={dropdownRef} className="relative w-full sm:w-[200px] min-w-0">

      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="w-full h-12 px-3 rounded-xl border border-border bg-background flex items-center justify-between focus:ring-2 focus:ring-secondary outline-none transition-all text-left"
      >
        <div className="flex items-center gap-2 min-w-0 w-full">
          <img
            src={getCountry(formData.countryCode)?.flag}
            alt={formData.countryCode}
            className="w-5 h-5 object-cover"
          />
          <span className="text-sm font-medium flex-1 truncate">
            {getCountry(formData.countryCode)?.label}
          </span>
          <span className="text-sm font-semibold">{formData.countryCode}</span>
        </div>
        <span className="text-lg ml-2">▾</span>
      </button>

      {dropdownOpen && (
        <ul className="absolute z-50 mt-1 max-h-64 w-full overflow-y-auto rounded-xl border border-border bg-background shadow-lg">
          {countryCodes
            .sort((a, b) => Number(a.code.replace('+', '')) - Number(b.code.replace('+', '')))
            .map((c) => (
              <li
                key={c.code + c.label}
                className="px-3 py-2 hover:bg-secondary/10 cursor-pointer flex items-center gap-2 transition-colors"
                onClick={() => {
                  setFormData({ ...formData, countryCode: c.code });
                  setDropdownOpen(false);
                }}
              >
                <img src={c.flag} alt={c.label} className="w-6 h-4 object-cover" />
                <span className="flex-1 text-sm truncate">{c.label}</span>
                <span className="text-sm font-semibold">{c.code}</span>
              </li>
            ))}
        </ul>
      )}
    </div>

    {/* Phone Input */}
    <input
      type="tel"   inputMode="numeric"
      value={formData.phone}
      onChange={(e) => {
        const onlyNumbers = e.target.value.replace(/\D/g, '');
        setFormData({ ...formData, phone: onlyNumbers });
      }}
      className="flex-1 h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
      placeholder={t.contact.phonePlaceholder}
    />
  </div>
</div>

{/* Package */}
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
{/* Preferred Month of Travel */}
{/* Preferred Month of Travel */}
<div>
  <label className="block text-sm font-medium text-foreground mb-2">
    {t.contact.preferredMonth}
  </label>

  <select
    value={formData.travelMonth}
    onChange={(e) =>
      setFormData({ ...formData, travelMonth: e.target.value })
    }
    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
  >
    <option value="">{t.contact.selectMonth}</option>
    <option value="January">{t.months.january}</option>
    <option value="February">{t.months.february}</option>
    <option value="March">{t.months.march}</option>
    <option value="April">{t.months.april}</option>
    <option value="May">{t.months.may}</option>
    <option value="June">{t.months.june}</option>
    <option value="July">{t.months.july}</option>
    <option value="August">{t.months.august}</option>
    <option value="September">{t.months.september}</option>
    <option value="October">{t.months.october}</option>
    <option value="November">{t.months.november}</option>
    <option value="December">{t.months.december}</option>
  </select>
</div>



                  {/* Subject */}
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

                  {/* Message */}
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
                  className="mt-6 btn-primary w-full md:w-auto disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? t.common.sending : (
                    <>
                      {t.common.sendMessage} <Send className="w-5 h-5" />
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
