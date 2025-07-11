import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t, direction } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const menuItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.courses', href: '#courses' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-glow">
              <span className="text-xl font-bold text-primary-foreground">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {language === 'ar' ? 'أكاديمية ريفيت' : 'Revit Academy'}
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'ar' ? 'التعلم باللغة العربية' : 'Learn in Arabic'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary animate-fast hover:scale-105 transition-all"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="glass-card border-glass-border/30 hover:border-primary/50 animate-fast"
            >
              <Globe className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
              {language === 'ar' ? 'EN' : 'ع'}
            </Button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
              <Button variant="ghost" className="hover-glow">
                {t('nav.login')}
              </Button>
              <Button className="bg-gradient-to-r from-primary to-accent hover-glow animate-fast">
                {t('nav.register')}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 glass-card rounded-2xl p-6 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground hover:text-primary py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-glass-border/30">
                <Button variant="ghost" className="justify-start">
                  {t('nav.login')}
                </Button>
                <Button className="bg-gradient-to-r from-primary to-accent">
                  {t('nav.register')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;