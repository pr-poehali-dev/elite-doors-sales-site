import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DoorShowcase = () => {
  const doors = [
    {
      id: 1,
      name: "Венецианская роскошь",
      price: "от 450 000 ₽",
      image:
        "https://cdn.poehali.dev/files/29f2f21a-a704-47e5-809f-5c538fe95181.png",
      features: ["Кованые элементы", "Натуральное дерево", "Витражные вставки"],
      description: "Эксклюзивная дверь с элементами венецианского стиля",
    },
    {
      id: 2,
      name: "Классика Premium",
      price: "от 380 000 ₽",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=600&fit=crop",
      features: ["Массив дуба", "Бронзовая фурнитура", "Резьба ручной работы"],
      description: "Воплощение классической элегантности и надёжности",
    },
    {
      id: 3,
      name: "Модерн Elite",
      price: "от 520 000 ₽",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop",
      features: ["Стекло triplex", "Умные замки", "LED-подсветка"],
      description: "Современные технологии в премиальном исполнении",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-stone-800 mb-6">
            Наши <span className="text-amber-600">Шедевры</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Каждая дверь создаётся индивидуально под заказ. Мы воплощаем самые
            смелые дизайнерские решения, сохраняя безупречное качество и
            надёжность.
          </p>
        </div>

        {/* Doors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doors.map((door) => (
            <Card
              key={door.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-b from-stone-50 to-white"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={door.image}
                  alt={door.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  {door.price}
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-white/90 text-stone-800 hover:bg-white font-semibold">
                    <Icon name="Eye" size={16} />
                    Подробнее
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-cormorant text-2xl font-bold text-stone-800 mb-3">
                  {door.name}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {door.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {door.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-stone-700"
                    >
                      <Icon name="Check" size={14} className="text-amber-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-white px-8 py-4 text-lg font-semibold shadow-xl"
          >
            <Icon name="ChevronRight" size={20} />
            Смотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoorShowcase;
