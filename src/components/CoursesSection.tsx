import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const CoursesSection = () => {
  const { t, direction } = useLanguage();

  const courses = [
    {
      id: 1,
      title: t('course1.title'),
      description: t('course1.desc'),
      image: '/api/placeholder/400/240',
      price: 599,
      originalPrice: 799,
      duration: '40 ساعة',
      level: 'مبتدئ',
      students: 1250,
      rating: 4.9,
      lessons: 32,
      badge: 'الأكثر طلباً',
      color: 'from-primary to-accent'
    },
    {
      id: 2,
      title: t('course2.title'),
      description: t('course2.desc'),
      image: '/api/placeholder/400/240',
      price: 799,
      originalPrice: 999,
      duration: '50 ساعة',
      level: 'متقدم',
      students: 890,
      rating: 4.8,
      lessons: 45,
      badge: 'جديد',
      color: 'from-secondary to-primary'
    },
    {
      id: 3,
      title: t('course3.title'),
      description: t('course3.desc'),
      image: '/api/placeholder/400/240',
      price: 449,
      originalPrice: 599,
      duration: '30 ساعة',
      level: 'متوسط',
      students: 670,
      rating: 4.7,
      lessons: 24,
      badge: 'مميز',
      color: 'from-accent to-secondary'
    },
    {
      id: 4,
      title: t('course4.title'),
      description: t('course4.desc'),
      image: '/api/placeholder/400/240',
      price: 899,
      originalPrice: 1199,
      duration: '60 ساعة',
      level: 'متقدم',
      students: 445,
      rating: 4.9,
      lessons: 52,
      badge: 'الأشمل',
      color: 'from-primary to-secondary'
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background-secondary/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('courses.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('courses.subtitle')}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group glass-card rounded-3xl overflow-hidden hover-glow animate-fast hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <div className={`aspect-video bg-gradient-to-br ${course.color} relative`}>
                  {/* Placeholder for course image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                  <Badge className="bg-secondary text-secondary-foreground font-medium">
                    {course.badge}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 glass-card rounded-lg px-2 py-1">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-4">
                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Meta */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} {t('course.lessons')}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students} {t('course.students')}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between pt-4 border-t border-glass-border/30">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-2xl font-bold text-primary">
                        {course.price} {t('course.price')}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      خصم {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                    </div>
                  </div>
                </div>

                {/* Enroll Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover-glow animate-fast"
                  size="lg"
                >
                  {t('course.enroll')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-card border-glass-border/30 hover:border-primary/50 hover-secondary px-8"
          >
            عرض جميع الدورات
            <BookOpen className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;