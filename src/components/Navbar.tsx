import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const navLinksConfig = [
  { key: 'home', path: '/' },
  { key: 'packages', path: '/packages' },
  { key: 'services', path: '/services' },
  { key: 'gallery', path: '/gallery' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
];



export const Navbar = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
    {/* Main Navbar */}
    <nav
  className="nav-glass py-3 transition-all duration-300 z-[1000]"
  style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
>
  <div className="container-wide">
    <div className="flex items-center justify-between">

      {/* Logo */}
      {/* <Link to="/" className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
          <span className="text-primary-foreground font-display text-xl font-bold">J</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="font-display text-xl font-bold text-primary">JANNAT</h1>
          <p className="text-xs text-muted-foreground tracking-widest">TRAVELS & TOURS</p>
        </div>
      </Link> */}
      <Link to="/" className="flex items-center gap-3">
  {/* Logo Image */}
  <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
    <img src="/logo.png" alt="Jannat Travels Logo" className="w-full h-full object-contain" />
  </div>

  {/* Logo Text */}
  <div className="hidden sm:block">
    <h1 className="font-display text-xl font-bold text-primary">JANNAT</h1>
    <p className="text-xs text-muted-foreground tracking-widest">TRAVEL & TOURISM</p>
  </div>
</Link>


      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1">
        {navLinksConfig.map((link) => (
          <Link
            key={link.key}
            to={link.path}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              location.pathname === link.path
                ? 'text-secondary bg-secondary/10'
                : 'text-foreground hover:text-secondary hover:bg-secondary/5'
            }`}
          >
            {t.nav[link.key as keyof typeof t.nav]}
          </Link>
        ))}
      </div>

      {/* Language Switcher & CTA Button */}
      <div className="hidden lg:flex items-center gap-4">
        {/* Language Switcher Button */}
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2 text-foreground hover:text-secondary"
          aria-label="Toggle language"
          title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
        </button>
        
        <Link 
          to="/contact" 
          className="btn-primary text-sm px-4 py-2.5"
        >
          {t.common.bookNow}
        </Link>
      </div>


      {/* Mobile Menu Button & Language Switcher */}
      <div className="lg:hidden flex items-center gap-2">
        {/* Language Switcher Button - Mobile */}
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-1 text-foreground"
          aria-label="Toggle language"
        >
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
        </button>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="lg:hidden bg-card border-t border-border"
      >
        <div className="container-wide py-4 space-y-2">
          {navLinksConfig.map((link) => (
            <div key={link.key}>
              <Link
                to={link.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-secondary bg-secondary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </Link>
            </div>
          ))}
          <div className="pt-4">
            <Link to="/contact" className="btn-primary w-full text-center">
              {t.common.bookNow}
            </Link>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

    </>
  );
};
