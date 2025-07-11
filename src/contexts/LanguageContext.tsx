import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.courses': 'الدورات',
    'nav.about': 'عن الأكاديمية',
    'nav.contact': 'تواصل معنا',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'إنشاء حساب',
    
    // Hero Section
    'hero.title': 'تعلم الريفيت باللغة العربية',
    'hero.subtitle': 'أول أكاديمية متخصصة في تعليم برنامج Autodesk Revit باللغة العربية مع دورات شاملة ومعتمدة',
    'hero.cta.start': 'ابدأ التعلم الآن',
    'hero.cta.explore': 'استكشف الدورات',
    
    // Featured Courses
    'courses.title': 'الدورات المميزة',
    'courses.subtitle': 'دورات شاملة مصممة خصيصاً للمهندسين والمعماريين العرب',
    'course.duration': 'المدة',
    'course.level': 'المستوى',
    'course.lessons': 'درس',
    'course.students': 'طالب',
    'course.price': 'ر.س',
    'course.enroll': 'التسجيل في الدورة',
    
    // Testimonials
    'testimonials.title': 'آراء الطلاب',
    'testimonials.subtitle': 'ماذا يقول طلابنا عن تجربتهم مع الأكاديمية',
    
    // Footer
    'footer.description': 'أكاديمية ريفيت العربية - منصة تعليمية رائدة في تعليم Autodesk Revit باللغة العربية',
    'footer.quick_links': 'روابط سريعة',
    'footer.contact': 'تواصل معنا',
    'footer.follow': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.email': 'info@revitacademy.com',
    'footer.phone': '+966 50 123 4567',
    
    // Course names and descriptions
    'course1.title': 'أساسيات الريفيت المعماري',
    'course1.desc': 'تعلم الأساسيات الكاملة لبرنامج Revit من الصفر حتى الاحتراف',
    'course2.title': 'النمذجة الإنشائية المتقدمة',
    'course2.desc': 'دورة متخصصة في النمذجة الإنشائية والتحليل الهيكلي',
    'course3.title': 'المخططات والتوثيق',
    'course3.desc': 'تعلم إنتاج المخططات المعمارية والرسومات التنفيذية',
    'course4.title': 'إدارة المشاريع BIM',
    'course4.desc': 'دورة شاملة في إدارة مشاريع البناء باستخدام تقنية BIM',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Hero Section
    'hero.title': 'Learn Revit in Arabic',
    'hero.subtitle': 'The first specialized academy for teaching Autodesk Revit in Arabic with comprehensive and certified courses',
    'hero.cta.start': 'Start Learning Now',
    'hero.cta.explore': 'Explore Courses',
    
    // Featured Courses
    'courses.title': 'Featured Courses',
    'courses.subtitle': 'Comprehensive courses designed specifically for Arab engineers and architects',
    'course.duration': 'Duration',
    'course.level': 'Level',
    'course.lessons': 'lessons',
    'course.students': 'students',
    'course.price': 'SAR',
    'course.enroll': 'Enroll Now',
    
    // Testimonials
    'testimonials.title': 'Student Reviews',
    'testimonials.subtitle': 'What our students say about their experience with the academy',
    
    // Footer
    'footer.description': 'Arabic Revit Academy - A leading educational platform for teaching Autodesk Revit in Arabic',
    'footer.quick_links': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved',
    'footer.email': 'info@revitacademy.com',
    'footer.phone': '+966 50 123 4567',
    
    // Course names and descriptions
    'course1.title': 'Revit Architecture Fundamentals',
    'course1.desc': 'Learn the complete basics of Revit from zero to professional level',
    'course2.title': 'Advanced Structural Modeling',
    'course2.desc': 'Specialized course in structural modeling and structural analysis',
    'course3.title': 'Plans and Documentation',
    'course3.desc': 'Learn to produce architectural plans and construction drawings',
    'course4.title': 'BIM Project Management',
    'course4.desc': 'Comprehensive course in construction project management using BIM technology',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};