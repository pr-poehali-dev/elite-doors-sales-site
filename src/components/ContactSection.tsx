import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-6">
              Готовы создать <span className="text-amber-400">вашу мечту?</span>
            </h2>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
              Наши эксперты готовы воплотить любую идею в реальность. Получите
              персональную консультацию и узнайте, как создать идеальную дверь
              для вашего дома.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    +7 (495) 123-45-67
                  </div>
                  <div className="text-stone-400">
                    Ежедневно с 9:00 до 21:00
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    info@elite-doors.ru
                  </div>
                  <div className="text-stone-400">Ответим в течение часа</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-lg">
                    Москва, Красная Пресня 28
                  </div>
                  <div className="text-stone-400">Шоу-рум и производство</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="font-cormorant text-3xl font-bold text-white mb-6 text-center">
              Бесплатная консультация
            </h3>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="Расскажите о ваших пожеланиях..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white font-semibold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Icon name="Send" size={20} />
                Получить консультацию
              </Button>
            </form>

            <p className="text-stone-400 text-sm text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
