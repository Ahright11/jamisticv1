import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { DollarSign, Wallet, Frown, ArrowDown } from 'lucide-react';

const PainPointsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const painPoints = [
    {
      icon: DollarSign,
      title: t('pain.treatwell.title'),
      desc: t('pain.treatwell.desc'),
      emoji: '💸',
    },
    {
      icon: Wallet,
      title: t('pain.agency.title'),
      desc: t('pain.agency.desc'),
      emoji: '💰',
    },
    {
      icon: Frown,
      title: t('pain.instagram.title'),
      desc: t('pain.instagram.desc'),
      emoji: '😩',
    },
  ];

  return (
    <section id="services" className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            {t('pain.title')}
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border hover-lift transition-all duration-300 delay-${index * 100}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{point.emoji}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">{point.desc}</p>
              </div>
            ))}
          </div>

          {/* Better way CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-2 text-primary font-semibold">
              <span>{t('pain.better')}</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
