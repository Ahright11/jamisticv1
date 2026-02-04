import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Stethoscope, Scissors } from 'lucide-react';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const portfolioItems = [
    {
      icon: Sparkles,
      label: t('portfolio.beauty'),
      url: 'https://aura-bookings.vercel.app',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Stethoscope,
      label: t('portfolio.medical'),
      url: 'https://medibook-connect.vercel.app',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Scissors,
      label: t('portfolio.barber'),
      url: 'https://test-barber-ruby.vercel.app',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="portfolio" className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('portfolio.title')}
            </h2>
            <p className="text-white/60 text-lg">{t('portfolio.subtitle')}</p>
          </div>

          {/* Portfolio Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-1 hover-lift transition-all duration-300"
              >
                <div className="bg-[hsl(var(--dark-bg))]/50 rounded-xl p-6">
                  {/* Preview area */}
                  <div
                    className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${item.gradient} mb-4 flex items-center justify-center group-hover:scale-[1.02] transition-transform`}
                  >
                    <item.icon className="w-16 h-16 text-white/80" />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.label}
                  </h3>

                  {/* Button */}
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {t('portfolio.view')}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-8 hover:opacity-90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('portfolio.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
