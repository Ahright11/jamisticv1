import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, User } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: t('testimonials.t1.quote'),
      name: t('testimonials.t1.name'),
      business: t('testimonials.t1.business'),
    },
    {
      quote: t('testimonials.t2.quote'),
      name: t('testimonials.t2.name'),
      business: t('testimonials.t2.business'),
    },
    {
      quote: t('testimonials.t3.quote'),
      name: t('testimonials.t3.name'),
      business: t('testimonials.t3.business'),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            {t('testimonials.title')}
          </h2>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border hover-lift"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
