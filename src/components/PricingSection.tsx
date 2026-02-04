import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const pricingPlans = [
    {
      name: t('pricing.starter'),
      price: '€150',
      features: [
        t('pricing.starter.f1'),
        t('pricing.starter.f2'),
        t('pricing.starter.f3'),
        t('pricing.starter.f4'),
        t('pricing.starter.f5'),
      ],
      cta: t('pricing.cta'),
      highlighted: false,
    },
    {
      name: t('pricing.pro'),
      price: '€250',
      features: [
        t('pricing.pro.f1'),
        t('pricing.pro.f2'),
        t('pricing.pro.f3'),
        t('pricing.pro.f4'),
        t('pricing.pro.f5'),
      ],
      cta: t('pricing.cta'),
      highlighted: true,
      badge: t('pricing.popular'),
    },
    {
      name: t('pricing.custom'),
      price: t('pricing.ask'),
      features: [
        t('pricing.custom.f1'),
        t('pricing.custom.f2'),
        t('pricing.custom.f3'),
        t('pricing.custom.f4'),
      ],
      cta: t('pricing.contact'),
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('pricing.subtitle')}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary to-accent text-white scale-105 shadow-2xl z-10'
                    : 'bg-white border border-border shadow-lg hover-lift'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3
                  className={`text-sm font-bold tracking-wider mb-4 ${
                    plan.highlighted ? 'text-white/80' : 'text-muted-foreground'
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className={`text-4xl md:text-5xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-foreground'
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.highlighted ? 'text-white' : 'text-accent'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-white/90' : 'text-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full font-semibold ${
                    plan.highlighted
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'gradient-primary text-white hover:opacity-90'
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <p className="text-center text-muted-foreground">
            {t('pricing.guarantee')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
