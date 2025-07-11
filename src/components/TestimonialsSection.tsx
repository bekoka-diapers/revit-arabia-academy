import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t, direction } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'مهندس معماري',
      company: 'مكتب الإبداع المعماري',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'دورة ممتازة وشاملة! تعلمت الريفيت من الصفر وأصبحت قادراً على إنتاج مشاريع احترافية. الشرح باللغة العربية سهل الفهم والاستيعاب.',
      course: 'أساسيات الريفيت المعماري'
    },
    {
      id: 2,
      name: 'فاطمة الزهراء',
      role: 'مهندسة إنشائية',
      company: 'شركة البناء المتطور',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'أفضل منصة تعليمية للريفيت باللغة العربية. المدربون محترفون والمحتوى منظم بشكل ممتاز. أنصح بها جميع المهندسين العرب.',
      course: 'النمذجة الإنشائية المتقدمة'
    },
    {
      id: 3,
      name: 'خالد العتيبي',
      role: 'مدير مشاريع',
      company: 'مجموعة العمران الحديث',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'دورة إدارة المشاريع BIM غيرت مفهومي عن إدارة المشاريع. المعلومات عملية ومفيدة جداً في العمل اليومي.',
      course: 'إدارة المشاريع BIM'
    },
    {
      id: 4,
      name: 'نورا السالم',
      role: 'مهندسة معمارية',
      company: 'استوديو التصميم الحديث',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'تجربة تعليمية رائعة! المنصة سهلة الاستخدام والدورات شاملة ومفصلة. تطورت مهاراتي بشكل كبير بعد هذه الدورات.',
      course: 'المخططات والتوثيق'
    },
    {
      id: 5,
      name: 'عبدالرحمن الشمري',
      role: 'مهندس تنفيذي',
      company: 'شركة الرائد للمقاولات',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      content: 'منصة احترافية بمحتوى عالي الجودة. الدعم الفني ممتاز والشهادات معتمدة. استطعت تطوير مهاراتي والحصول على ترقية في العمل.',
      course: 'أساسيات الريفيت المعماري'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/50 to-background/50" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('testimonials.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden animate-fade-in">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 rtl:right-auto rtl:left-8 opacity-20">
              <Quote className="w-24 h-24 text-primary" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Profile */}
              <div className="text-center lg:text-right rtl:lg:text-left space-y-6">
                <div className="flex justify-center lg:justify-end rtl:lg:justify-start">
                  <Avatar className="w-24 h-24 ring-4 ring-primary/20">
                    <AvatarImage src={currentTestimonial.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-xl font-bold">
                      {currentTestimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {currentTestimonial.company}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center lg:justify-end rtl:lg:justify-start space-x-1 rtl:space-x-reverse">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Course Badge */}
                <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-4 py-2 border border-primary/20">
                  <span className="text-primary text-sm font-medium">
                    {currentTestimonial.course}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8">
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all animate-fast ${
                          index === currentIndex 
                            ? 'bg-primary scale-125' 
                            : 'bg-muted hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevTestimonial}
                      className="glass-card border-glass-border/30 hover:border-primary/50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextTestimonial}
                      className="glass-card border-glass-border/30 hover:border-primary/50"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass-card rounded-2xl p-6 hover-secondary animate-fade-in-up cursor-pointer transition-all ${
                currentIndex === index ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <div className="flex space-x-1 rtl:space-x-reverse mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 line-clamp-3">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;