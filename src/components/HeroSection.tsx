import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Monitor, Smartphone } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-dark min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm text-white/90">{t('hero.badge')}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 max-w-lg">
              {t('hero.subtitle')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold text-base px-8 hover:opacity-90 transition-all hover:scale-105"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.primary')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8"
                asChild
              >
                <a href="https://wa.me/306900000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('hero.cta.secondary')}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-8 pt-4">
              {[
                { label: t('hero.stat.online'), icon: '🌐' },
                { label: t('hero.stat.commission'), icon: '💰' },
                { label: t('hero.stat.delivery'), icon: '⚡' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-lg">{stat.icon}</span>
                  <span className="text-white/80 font-medium text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative hidden lg:block animate-fade-in animation-delay-200">
            {/* Laptop mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg aspect-[16/10] flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-white/40" />
                </div>
              </div>

              {/* Phone mockup */}
              <div className="absolute -bottom-8 -right-8 w-32">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg aspect-[9/16] flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white/40" />
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 animate-float">
                <div className="bg-white rounded-xl px-4 py-3 shadow-2xl">
                  <p className="text-sm font-medium text-[hsl(var(--dark-bg))]">
                    {t('hero.notification')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
