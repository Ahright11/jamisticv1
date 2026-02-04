import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageCircle, Mail } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll contact you soon.');
    setFormData({ name: '', phone: '', business: '' });
  };

  return (
    <section id="contact" className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-white/60 text-lg">{t('contact.subtitle')}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-8 text-lg hover:opacity-90"
              asChild
            >
              <a href="https://wa.me/306900000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('contact.whatsapp')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-lg"
              asChild
            >
              <a href="mailto:hello@jamistic.com">
                <Mail className="mr-2 h-5 w-5" />
                {t('contact.email')}
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Input
                type="tel"
                placeholder={t('contact.form.phone')}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Select
                value={formData.business}
                onValueChange={(value) => setFormData({ ...formData, business: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white h-12 [&>span]:text-white/50 data-[state=open]:text-white">
                  <SelectValue placeholder={t('contact.form.business')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salon">{t('contact.form.business.salon')}</SelectItem>
                  <SelectItem value="nails">{t('contact.form.business.nails')}</SelectItem>
                  <SelectItem value="medical">{t('contact.form.business.medical')}</SelectItem>
                  <SelectItem value="other">{t('contact.form.business.other')}</SelectItem>
                </SelectContent>
              </Select>
              <Button
                type="submit"
                className="w-full gradient-primary text-white font-semibold h-12 hover:opacity-90"
              >
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
