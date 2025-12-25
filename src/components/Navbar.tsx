import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];



export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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
        {navLinks.map((link) => (
          <div key={link.name} className="relative"
               onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
               onMouseLeave={() => setActiveDropdown(null)}>
            <Link
              to={link.path}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-1 ${
                location.pathname === link.path
                  ? 'text-secondary bg-secondary/10'
                  : 'text-foreground hover:text-secondary hover:bg-secondary/5'
              }`}
            >
              {link.name}
              {link.submenu && <ChevronDown className="w-4 h-4" />}
            </Link>

            {/* Dropdown */}
            <AnimatePresence>
              {link.submenu && activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-glass-lg border border-border overflow-hidden z-50"
                >
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.path}
                      className="block px-4 py-3 text-foreground hover:bg-secondary/10 hover:text-secondary transition-colors"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden lg:flex items-center gap-4">
  <Link 
    to="/contact" 
    className="btn-primary text-sm px-4 py-2.5"
  >
    Book Now
  </Link>
</div>


      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

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
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-secondary bg-secondary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="ml-4 mt-1 space-y-1">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.path}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link to="/contact" className="btn-primary w-full text-center">
              Book Now
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
