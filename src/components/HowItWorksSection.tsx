import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MessageCircle, Palette, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      icon: MessageCircle,
      emoji: '💬',
      title: t('how.step1.title'),
      desc: t('how.step1.desc'),
    },
    {
      icon: Palette,
      emoji: '🎨',
      title: t('how.step2.title'),
      desc: t('how.step2.desc'),
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: t('how.step3.title'),
      desc: t('how.step3.desc'),
    },
  ];

  return (
    <section className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            {t('how.title')}
          </h2>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step number circle */}
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative z-10">
                      <span className="text-5xl">{step.emoji}</span>
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
