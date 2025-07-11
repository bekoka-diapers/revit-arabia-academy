import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Users, Award } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, direction } = useLanguage();

  const stats = [
    { icon: BookOpen, label: 'courses.title', value: '15+' },
    { icon: Users, label: 'course.students', value: '2000+' },
    { icon: Award, label: 'certificates', value: '1500+' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover-glow animate-fast text-lg px-8 py-6"
              >
                <PlayCircle className="w-6 h-6 mr-3 rtl:mr-0 rtl:ml-3" />
                {t('hero.cta.start')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-glass-border/30 hover:border-primary/50 hover-secondary text-lg px-8 py-6"
              >
                <BookOpen className="w-6 h-6 mr-3 rtl:mr-0 rtl:ml-3" />
                {t('hero.cta.explore')}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="flex items-center space-x-3 rtl:space-x-reverse animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{t(stat.label)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              {/* Placeholder for hero image/video */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-glow">
                  <PlayCircle className="w-12 h-12 text-primary-foreground" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 glass-card rounded-lg p-3 animate-float">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Live Session</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 glass-card rounded-lg p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">250+ طالب</span>
                  </div>
                </div>
              </div>
              
              {/* Course Preview Cards */}
              <div className="mt-6 space-y-3">
                <div className="glass-card rounded-xl p-4 flex items-center space-x-3 rtl:space-x-reverse hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">مقدمة في الريفيت</h4>
                    <p className="text-xs text-muted-foreground">30 دقيقة • مجاني</p>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-4 flex items-center space-x-3 rtl:space-x-reverse hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary-foreground">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">واجهة البرنامج</h4>
                    <p className="text-xs text-muted-foreground">45 دقيقة • مجاني</p>
                  </div>
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