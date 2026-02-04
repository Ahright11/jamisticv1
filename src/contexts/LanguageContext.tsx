import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  el: {
    // Navigation
    'nav.services': 'Υπηρεσίες',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Τιμές',
    'nav.contact': 'Επικοινωνία',
    'nav.cta': 'Ξεκίνα',
    
    // Hero
    'hero.badge': '⚡ Websites για ελληνικές επιχειρήσεις',
    'hero.title': 'Επαγγελματικό Website με Online Κρατήσεις σε 48 Ώρες',
    'hero.subtitle': 'Χωρίς προμήθειες. Χωρίς συνδρομές. Δικό σου για πάντα.',
    'hero.cta.primary': 'Δες Παραδείγματα',
    'hero.cta.secondary': 'WhatsApp μας',
    'hero.stat.online': '24/7 Online',
    'hero.stat.commission': '0% Προμήθεια',
    'hero.stat.delivery': '<48h Παράδοση',
    'hero.notification': '✓ Νέα κράτηση! Μαρία Π. - 15:30',
    
    // Pain Points
    'pain.title': 'Σε κουράσανε οι προμήθειες;',
    'pain.treatwell.title': 'Treatwell = 35% προμήθεια',
    'pain.treatwell.desc': 'Σε κάθε νέο πελάτη, για πάντα',
    'pain.agency.title': 'Agencies = €1000+',
    'pain.agency.desc': 'Και περιμένεις εβδομάδες',
    'pain.instagram.title': 'Instagram = Χάος',
    'pain.instagram.desc': 'Χάνεις κρατήσεις στα DMs',
    'pain.better': 'Υπάρχει καλύτερος τρόπος ↓',
    
    // Solution
    'solution.title': 'Τι παίρνεις',
    'solution.website.title': 'Website που δουλεύει 24/7',
    'solution.website.mobile': 'Mobile Ready',
    'solution.website.seo': 'SEO',
    'solution.website.fast': 'Γρήγορο',
    'solution.booking.title': 'Online Κρατήσεις',
    'solution.booking.desc': 'Οι πελάτες κλείνουν μόνοι τους',
    'solution.whatsapp.title': 'WhatsApp Button',
    'solution.whatsapp.desc': 'Ένα κλικ, επικοινωνία',
    'solution.maps.title': 'Google Maps',
    'solution.maps.desc': 'Σε βρίσκουν εύκολα',
    'solution.commission.title': '0% Προμήθεια',
    'solution.commission.desc': 'Μία φορά, δικό σου για πάντα',
    
    // Portfolio
    'portfolio.title': 'Δουλειές μας',
    'portfolio.subtitle': 'Πραγματικά websites, live τώρα',
    'portfolio.beauty': 'Beauty & Wellness',
    'portfolio.medical': 'Ιατρικό / Physio',
    'portfolio.barber': 'Barber Shop',
    'portfolio.view': 'Δες Live →',
    'portfolio.cta': 'Θέλεις κάτι παρόμοιο;',
    
    // How It Works
    'how.title': '3 Απλά Βήματα',
    'how.step1.title': 'Μίλα μαζί μας',
    'how.step1.desc': '5 λεπτά στο WhatsApp',
    'how.step2.title': 'Φτιάχνουμε το site',
    'how.step2.desc': '24-48 ώρες',
    'how.step3.title': 'Είσαι Online!',
    'how.step3.desc': 'Δέχεσαι κρατήσεις',
    
    // Pricing
    'pricing.title': 'Τιμοκατάλογος',
    'pricing.subtitle': 'Χωρίς κρυφές χρεώσεις',
    'pricing.starter': 'STARTER',
    'pricing.pro': 'PRO',
    'pricing.custom': 'CUSTOM',
    'pricing.popular': 'ΔΗΜΟΦΙΛΕΣ',
    'pricing.ask': 'Ρώτα μας',
    'pricing.cta': 'Ξεκίνα',
    'pricing.contact': 'Επικοινωνία',
    'pricing.starter.f1': 'Booking website',
    'pricing.starter.f2': 'Mobile responsive',
    'pricing.starter.f3': '1 χρόνος hosting',
    'pricing.starter.f4': 'WhatsApp button',
    'pricing.starter.f5': 'Google Maps',
    'pricing.pro.f1': 'Όλα από Starter +',
    'pricing.pro.f2': 'Custom design',
    'pricing.pro.f3': 'Google Analytics',
    'pricing.pro.f4': 'Instagram section',
    'pricing.pro.f5': 'Priority support',
    'pricing.custom.f1': 'Όλα από Pro +',
    'pricing.custom.f2': 'Πολλαπλές σελίδες',
    'pricing.custom.f3': 'E-shop',
    'pricing.custom.f4': 'Custom features',
    'pricing.guarantee': '✓ Πληρωμή μετά την παράδοση. Δεν σου αρέσει; Δεν πληρώνεις.',
    
    // Testimonials
    'testimonials.title': 'Τι λένε οι πελάτες',
    'testimonials.t1.quote': 'Σε 2 μέρες είχα το site μου! Απίστευτο.',
    'testimonials.t1.name': 'Μαρία Κ.',
    'testimonials.t1.business': 'Nail Salon',
    'testimonials.t2.quote': 'Τέλος τα DMs, τώρα κλείνουν online.',
    'testimonials.t2.name': 'Γιώργος Α.',
    'testimonials.t2.business': 'Barber',
    'testimonials.t3.quote': 'Γλίτωσα €200/μήνα από το Treatwell.',
    'testimonials.t3.name': 'Ελένη Π.',
    'testimonials.t3.business': 'Αισθητικός',
    
    // FAQ
    'faq.title': 'Συχνές Ερωτήσεις',
    'faq.q1': 'Πόσο καιρό παίρνει;',
    'faq.a1': '24-48 ώρες για τα περισσότερα projects.',
    'faq.q2': 'Χρειάζομαι τεχνικές γνώσεις;',
    'faq.a2': 'Όχι, αναλαμβάνουμε τα πάντα.',
    'faq.q3': 'Τι γίνεται μετά τον 1 χρόνο;',
    'faq.a3': '€30/χρόνο για hosting ή το μεταφέρεις.',
    'faq.q4': 'Δουλεύει στο κινητό;',
    'faq.a4': 'Ναι, 100% mobile responsive.',
    'faq.q5': 'Υπάρχει εγγύηση;',
    'faq.a5': 'Ναι. Δεν σου αρέσει = δεν πληρώνεις.',
    
    // Contact
    'contact.title': 'Έτοιμος να ξεκινήσεις;',
    'contact.subtitle': 'Απαντάμε σε λιγότερο από 2 ώρες',
    'contact.whatsapp': 'WhatsApp μας 💬',
    'contact.email': 'Στείλε Email 📧',
    'contact.form.name': 'Όνομα',
    'contact.form.phone': 'Τηλέφωνο',
    'contact.form.business': 'Τι επιχείρηση έχεις;',
    'contact.form.business.salon': 'Κομμωτήριο',
    'contact.form.business.nails': 'Νύχια',
    'contact.form.business.medical': 'Ιατρείο',
    'contact.form.business.other': 'Άλλο',
    'contact.form.submit': 'Στείλε',
    
    // Footer
    'footer.tagline': 'Websites για μικρές επιχειρήσεις',
    'footer.copyright': '© 2026 Jamistic • Made in Athens 🇬🇷',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Started',
    
    // Hero
    'hero.badge': '⚡ Websites for Greek businesses',
    'hero.title': 'Professional Website with Online Bookings in 48 Hours',
    'hero.subtitle': 'No commissions. No subscriptions. Yours forever.',
    'hero.cta.primary': 'See Examples',
    'hero.cta.secondary': 'WhatsApp us',
    'hero.stat.online': '24/7 Online',
    'hero.stat.commission': '0% Commission',
    'hero.stat.delivery': '<48h Delivery',
    'hero.notification': '✓ New booking! Maria P. - 15:30',
    
    // Pain Points
    'pain.title': 'Tired of paying commissions?',
    'pain.treatwell.title': 'Treatwell = 35% commission',
    'pain.treatwell.desc': 'On every new client, forever',
    'pain.agency.title': 'Agencies = €1000+',
    'pain.agency.desc': 'And you wait for weeks',
    'pain.instagram.title': 'Instagram = Chaos',
    'pain.instagram.desc': 'You lose bookings in DMs',
    'pain.better': 'There\'s a better way ↓',
    
    // Solution
    'solution.title': 'What you get',
    'solution.website.title': 'Website that works 24/7',
    'solution.website.mobile': 'Mobile Ready',
    'solution.website.seo': 'SEO',
    'solution.website.fast': 'Fast',
    'solution.booking.title': 'Online Bookings',
    'solution.booking.desc': 'Clients book themselves',
    'solution.whatsapp.title': 'WhatsApp Button',
    'solution.whatsapp.desc': 'One click, connection',
    'solution.maps.title': 'Google Maps',
    'solution.maps.desc': 'Easy to find you',
    'solution.commission.title': '0% Commission',
    'solution.commission.desc': 'Pay once, own it forever',
    
    // Portfolio
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Real websites, live now',
    'portfolio.beauty': 'Beauty & Wellness',
    'portfolio.medical': 'Medical / Physio',
    'portfolio.barber': 'Barber Shop',
    'portfolio.view': 'View Live →',
    'portfolio.cta': 'Want something similar?',
    
    // How It Works
    'how.title': '3 Simple Steps',
    'how.step1.title': 'Talk to us',
    'how.step1.desc': '5 minutes on WhatsApp',
    'how.step2.title': 'We build the site',
    'how.step2.desc': '24-48 hours',
    'how.step3.title': 'You\'re Online!',
    'how.step3.desc': 'Accept bookings',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'No hidden fees',
    'pricing.starter': 'STARTER',
    'pricing.pro': 'PRO',
    'pricing.custom': 'CUSTOM',
    'pricing.popular': 'POPULAR',
    'pricing.ask': 'Ask us',
    'pricing.cta': 'Get Started',
    'pricing.contact': 'Contact',
    'pricing.starter.f1': 'Booking website',
    'pricing.starter.f2': 'Mobile responsive',
    'pricing.starter.f3': '1 year hosting',
    'pricing.starter.f4': 'WhatsApp button',
    'pricing.starter.f5': 'Google Maps',
    'pricing.pro.f1': 'Everything in Starter +',
    'pricing.pro.f2': 'Custom design',
    'pricing.pro.f3': 'Google Analytics',
    'pricing.pro.f4': 'Instagram section',
    'pricing.pro.f5': 'Priority support',
    'pricing.custom.f1': 'Everything in Pro +',
    'pricing.custom.f2': 'Multiple pages',
    'pricing.custom.f3': 'E-shop',
    'pricing.custom.f4': 'Custom features',
    'pricing.guarantee': '✓ Pay after delivery. Don\'t like it? Don\'t pay.',
    
    // Testimonials
    'testimonials.title': 'What clients say',
    'testimonials.t1.quote': 'In 2 days I had my website! Amazing.',
    'testimonials.t1.name': 'Maria K.',
    'testimonials.t1.business': 'Nail Salon',
    'testimonials.t2.quote': 'No more DMs, now they book online.',
    'testimonials.t2.name': 'George A.',
    'testimonials.t2.business': 'Barber',
    'testimonials.t3.quote': 'I saved €200/month from Treatwell.',
    'testimonials.t3.name': 'Helen P.',
    'testimonials.t3.business': 'Beautician',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How long does it take?',
    'faq.a1': '24-48 hours for most projects.',
    'faq.q2': 'Do I need technical knowledge?',
    'faq.a2': 'No, we handle everything.',
    'faq.q3': 'What happens after 1 year?',
    'faq.a3': '€30/year for hosting or transfer it.',
    'faq.q4': 'Does it work on mobile?',
    'faq.a4': 'Yes, 100% mobile responsive.',
    'faq.q5': 'Is there a guarantee?',
    'faq.a5': 'Yes. Don\'t like it = don\'t pay.',
    
    // Contact
    'contact.title': 'Ready to get started?',
    'contact.subtitle': 'We respond in less than 2 hours',
    'contact.whatsapp': 'WhatsApp us 💬',
    'contact.email': 'Send Email 📧',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone',
    'contact.form.business': 'What\'s your business?',
    'contact.form.business.salon': 'Hair Salon',
    'contact.form.business.nails': 'Nails',
    'contact.form.business.medical': 'Medical',
    'contact.form.business.other': 'Other',
    'contact.form.submit': 'Send',
    
    // Footer
    'footer.tagline': 'Websites for small businesses',
    'footer.copyright': '© 2026 Jamistic • Made in Athens 🇬🇷',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
