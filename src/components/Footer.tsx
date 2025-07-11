import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Send
} from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, direction } = useLanguage();

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.courses', href: '#courses' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-tertiary to-background-secondary" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-glass-border/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  اشترك في النشرة البريدية
                </span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                احصل على آخر الأخبار والدورات الجديدة والعروض الحصرية مباشرة في بريدك الإلكتروني
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="glass-card border-glass-border/30 bg-background/50 backdrop-blur-sm flex-1"
                />
                <Button className="bg-gradient-to-r from-primary to-accent hover-glow px-8">
                  <Send className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  اشترك الآن
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center animate-glow">
                  <span className="text-2xl font-bold text-primary-foreground">R</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    أكاديمية ريفيت العربية
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    منصة التعلم الرقمي الرائدة
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                {t('footer.description')}
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">{t('footer.follow')}</h4>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className={`glass-card border-glass-border/30 hover:border-primary/50 ${social.color} transition-colors`}
                    >
                      <social.icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">{t('footer.quick_links')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                        {t(link.key)}
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      سياسة الخصوصية
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      شروط الاستخدام
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">{t('footer.contact')}</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 rtl:space-x-reverse">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">{t('footer.email')}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 rtl:space-x-reverse">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">{t('footer.phone')}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 rtl:space-x-reverse">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </li>
              </ul>

              {/* Office Hours */}
              <div className="glass-card rounded-xl p-4 space-y-2">
                <h5 className="font-semibold text-foreground">ساعات العمل</h5>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>الأحد - الخميس: 9:00 ص - 6:00 م</p>
                  <p>الجمعة - السبت: مغلق</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm text-center md:text-right rtl:md:text-left">
                © 2024 أكاديمية ريفيت العربية. {t('footer.rights')}
              </p>
              
              <div className="flex items-center space-x-6 rtl:space-x-reverse text-sm text-muted-foreground">
                <span>Made with ❤️ for Arab Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;