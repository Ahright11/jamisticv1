import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[hsl(var(--dark-bg))]/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center font-bold text-white text-lg group-hover:scale-105 transition-transform">
              J
            </div>
            <span className="font-bold text-xl text-white">Jamistic</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <button
                onClick={() => setLanguage('el')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  language === 'el'
                    ? 'bg-white text-[hsl(var(--dark-bg))]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                GR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white text-[hsl(var(--dark-bg))]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <Button className="gradient-primary text-white font-medium hover:opacity-90 transition-opacity">
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[hsl(var(--dark-bg))]/95 backdrop-blur-lg border-t border-white/10">
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-white/10 flex items-center gap-4">
                <div className="flex items-center bg-white/10 rounded-full p-1">
                  <button
                    onClick={() => setLanguage('el')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      language === 'el'
                        ? 'bg-white text-[hsl(var(--dark-bg))]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    GR
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      language === 'en'
                        ? 'bg-white text-[hsl(var(--dark-bg))]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <Button className="gradient-primary text-white font-medium flex-1">
                  {t('nav.cta')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
