import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <footer className="section-dark py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Logo & Tagline */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center font-bold text-white text-lg">
                J
              </div>
              <span className="font-bold text-xl text-white">Jamistic</span>
            </a>
            <p className="text-white/60">{t('footer.tagline')}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@jamistic.com"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@jamistic.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/306900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/jamistic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @jamistic
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
