
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Crown Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg">
              <Icon name="Crown" size={32} className="text-white" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-stone-800 mb-6 leading-tight">
            Элитные
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
              Входные Двери
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Изысканные двери премиум-класса для самых взыскательных клиентов. 
            Безупречное качество, роскошный дизайн, надёжность на века.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-stone-700">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} className="text-amber-600" />
              <span>Гарантия 25 лет</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} className="text-amber-600" />
              <span>Ручная работа</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Gem" size={20} className="text-amber-600" />
              <span>Эксклюзивный дизайн</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Eye" size={20} />
              Посмотреть каталог
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Phone" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-stone-300 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-amber-400 rounded-full opacity-40"></div>
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-stone-400 rounded-full opacity-30"></div>
    </section>
  );
};

export default HeroSection;
