import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Shield",
      title: "Непревзойдённая надёжность",
      description:
        "Многоуровневая система защиты с замками европейского класса безопасности. Противовзломная фурнитура и усиленная конструкция.",
    },
    {
      icon: "Palette",
      title: "Индивидуальный дизайн",
      description:
        "Каждая дверь создаётся по уникальному проекту. Работаем с любыми стилями: от классики до современного минимализма.",
    },
    {
      icon: "Award",
      title: "Мастерство ремесленников",
      description:
        "Только ручная работа опытных мастеров. Каждый элемент выполнен с вниманием к мельчайшим деталям и безупречным качеством.",
    },
    {
      icon: "Gem",
      title: "Премиальные материалы",
      description:
        "Используем только отборные материалы: массив ценных пород дерева, натуральный камень, закалённое стекло, благородные металлы.",
    },
    {
      icon: "Clock",
      title: "Пожизненное обслуживание",
      description:
        "Предоставляем расширенную гарантию и полное техническое обслуживание. Ваши двери будут служить поколениями.",
    },
    {
      icon: "Home",
      title: "Полный цикл услуг",
      description:
        "От дизайн-проекта до установки «под ключ». Профессиональные замеры, доставка и монтаж силами наших специалистов.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-stone-800 mb-6">
            Почему выбирают <span className="text-amber-600">именно нас</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            За 20 лет работы мы создали более 5000 уникальных дверей для самых
            требовательных клиентов. Каждый проект — это произведение искусства.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-stone-100"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-cormorant text-2xl font-bold text-stone-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5000+", label: "Довольных клиентов" },
            { number: "20", label: "Лет опыта" },
            { number: "25", label: "Лет гарантии" },
            { number: "100%", label: "Ручная работа" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-cormorant text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                {stat.number}
              </div>
              <div className="text-stone-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
