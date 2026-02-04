import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, MessageCircle, MapPin, Coins, Monitor } from 'lucide-react';

const SolutionSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Calendar,
      title: t('solution.booking.title'),
      desc: t('solution.booking.desc'),
    },
    {
      icon: MessageCircle,
      title: t('solution.whatsapp.title'),
      desc: t('solution.whatsapp.desc'),
    },
    {
      icon: MapPin,
      title: t('solution.maps.title'),
      desc: t('solution.maps.desc'),
    },
    {
      icon: Coins,
      title: t('solution.commission.title'),
      desc: t('solution.commission.desc'),
    },
  ];

  return (
    <section className="section-light py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            {t('solution.title')}
          </h2>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Large Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-accent rounded-2xl p-6 md:p-8 text-white hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-8 h-8" />
                <h3 className="text-xl md:text-2xl font-bold">
                  {t('solution.website.title')}
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl aspect-video flex items-center justify-center mb-4">
                <div className="text-center opacity-60">
                  <Monitor className="w-16 h-16 mx-auto mb-2" />
                  <span className="text-sm">Booking Website Preview</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[t('solution.website.mobile'), t('solution.website.seo'), t('solution.website.fast')].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Small Cards */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
