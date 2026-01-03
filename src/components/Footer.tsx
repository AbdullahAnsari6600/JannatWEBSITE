// import { Link } from 'react-router-dom';
// import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';

// export const Footer = () => {
//   const { t } = useLanguage();

//   // Navbar-style quick links
//   const quickLinks = [
//     { name: t.nav.packages, path: '/packages' },
//     { name: t.nav.services, path: '/services' },
//     { name: t.nav.gallery, path: '/gallery' },
//     { name: t.nav.about, path: '/about' },
//     { name: t.nav.contact, path: '/contact' },
//   ];

//   return (
//     <div className="ltr-safe" dir="ltr">
//       <footer className="bg-primary text-primary-foreground">
//         {/* Main Footer */}
//         <div className="container-wide section-padding">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
//             {/* Company Info */}
//             <div className="space-y-6">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
//                   <img src="/logo.png" alt="Jannat Travels Logo" className="w-full h-full object-contain" />
//                 </div>
//                 <div>
//                   <h3 className="font-display text-xl font-bold">JANNAT</h3>
//                   <p className="text-xs text-primary-foreground/70 tracking-widest">TRAVEL & TOURISM</p>
//                 </div>
//               </div>
//               <p className="text-primary-foreground/80 leading-relaxed">
//                 {t.footer.companyDesc}
//               </p>
//               <div className="flex gap-4">
//                 <a href="https://www.facebook.com/profile.php?id=61585530307010" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.instagram.com/jannattravelsandtours/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a href="https://x.com/JannatTrav95315" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.youtube.com/@Jannat-travels-tours" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
//                   <Youtube className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//   <h4 className="font-display text-lg font-semibold mb-6">{t.footer.quickLinks}</h4>
//   <ul className="space-y-3">
//     {quickLinks.map(link => (
//       <li key={link.name}>
//         <Link
//           to={link.path}
//           className="text-primary-foreground/80 hover:text-gold transition-colors"
//         >
//           {link.name}
//         </Link>
//       </li>
//     ))}
//   </ul>
// </div>
//             {/* Quick Connect */}
//             <div>
//               <h4 className="font-display text-lg font-semibold mb-6">Quick Connect</h4>
//               <ul className="space-y-4">
//                 <li className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-gold flex-shrink-0" />
//                   <a href="tel:+966546812673" className="text-primary-foreground/80 hover:text-gold transition-colors">
//                     +966 54 681 2673
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-gold flex-shrink-0" />
//                   <a href="tel:+966544167162" className="text-primary-foreground/80 hover:text-gold transition-colors">
//                     +966 54 416 7162
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-gold flex-shrink-0" />
//                   <a href="mailto:info@jannattravels.com" className="text-primary-foreground/80 hover:text-gold transition-colors">
//                     info@jannattravelsandtours.com
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-gold flex-shrink-0" />
//                   <a href="mailto:support@jannattravels.com" className="text-primary-foreground/80 hover:text-gold transition-colors">
//                     support@jannattravelsandtours.com
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h4 className="font-display text-lg font-semibold mb-6">{t.footer.contactUs}</h4>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
//                   <span className="text-primary-foreground/80">
//                     {t.footer.address}<br />
//                     {t.footer.city}
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Clock className="w-5 h-5 text-gold flex-shrink-0" />
//                   <span className="text-primary-foreground/80">
//                     {t.footer.workingHours}
//                   </span>
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-primary-foreground/10">
//           <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-primary-foreground/60 text-sm">
//               © {new Date().getFullYear()} {t.footer.copyright}
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };




import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { name: t.nav.packages, path: '/packages' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <div className="ltr-safe" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <footer className="bg-primary text-primary-foreground">
        {/* Main Footer */}
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt={t.footer.companyName}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold">
                    {t.footer.companyName}
                  </h3>
                  <p className="text-xs text-primary-foreground/70 tracking-widest">
                    {t.footer.companyTagline}
                  </p>
                </div>
              </div>

              <p className="text-primary-foreground/80 leading-relaxed">
                {t.footer.companyDesc}
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61585530307010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/jannattravelsandtours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/JannatTrav95315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@Jannat-travels-tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Connect */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">
                {t.footer.contactUs}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <a
                    href="tel:+966546812673"
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    +966 54 681 2673
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <a
                    href="tel:+966544167162"
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    +966 54 416 7162
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <a
                    href="mailto:info@jannattravelsandtours.com"
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    info@jannattravelsandtours.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <a
                    href="mailto:sales@jannattravelsandtours.com"
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    sales@jannattravelsandtours.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">
                {t.footer.contactUs}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    {t.footer.address}
                    <br />
                    {t.footer.city}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    {t.footer.workingHours}
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container-wide py-6 flex justify-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
