
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="История компании MEOWEST" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        </div>
        
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">История MEOWEST</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            От небольшого стартапа до лидера в сфере аренды премиальных автомобилей.
            Узнайте, как мы создавали MEOWEST и какие цели преследуем сегодня.
          </p>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Наш путь</h2>
          
          <div className="space-y-24 relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-700 transform -translate-x-1/2" />
            
            {/* 2010 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              <div className="md:text-right">
                <h3 className="text-2xl font-bold mb-4">2010</h3>
                <p className="text-white/80">
                  Основание компании MEOWEST группой энтузиастов автомобильной индустрии. 
                  Начало работы с парком из 5 автомобилей премиум-класса.
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 md:-left-6 w-4 h-4 rounded-full bg-primary transform md:-translate-x-full" />
                <img 
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Начало пути" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* 2013 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative md:flex md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-4">2013</h3>
                <p className="text-white/80">
                  Расширение автопарка до 15 автомобилей. Открытие первого официального 
                  офиса в центре Москвы с собственной зоной обслуживания.
                </p>
              </div>
              <div className="relative">
                <div className="absolute right-0 top-0 md:-right-6 w-4 h-4 rounded-full bg-primary transform md:translate-x-full" />
                <img 
                  src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" 
                  alt="Расширение" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* 2016 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              <div className="md:text-right">
                <h3 className="text-2xl font-bold mb-4">2016</h3>
                <p className="text-white/80">
                  Запуск первой версии онлайн-платформы для бронирования автомобилей. 
                  Внедрение системы персонального обслуживания клиентов.
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 md:-left-6 w-4 h-4 rounded-full bg-primary transform md:-translate-x-full" />
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Технологии" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* 2020 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative md:flex md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-4">2020</h3>
                <p className="text-white/80">
                  10-летие компании. Полное обновление автопарка, включение 
                  эксклюзивных моделей Porsche и других представительских автомобилей.
                </p>
              </div>
              <div className="relative">
                <div className="absolute right-0 top-0 md:-right-6 w-4 h-4 rounded-full bg-primary transform md:translate-x-full" />
                <img 
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Юбилей" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Today */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              <div className="md:text-right">
                <h3 className="text-2xl font-bold mb-4">Сегодня</h3>
                <p className="text-white/80">
                  MEOWEST - признанный лидер в сфере аренды премиальных автомобилей. 
                  Автопарк из 30+ эксклюзивных моделей, тысячи довольных клиентов и 
                  непревзойденный уровень сервиса.
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 md:-left-6 w-4 h-4 rounded-full bg-primary transform md:-translate-x-full" />
                <img 
                  src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" 
                  alt="Современность" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Наши ценности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Качество</h3>
              <p className="text-white/80">
                Мы предлагаем только лучшие автомобили, прошедшие тщательную проверку и обслуживание.
                Каждый автомобиль в нашем парке — это воплощение совершенства.
              </p>
            </div>
            
            <div className="p-8 bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Сервис</h3>
              <p className="text-white/80">
                Индивидуальный подход к каждому клиенту, внимание к деталям и стремление 
                превзойти ожидания — вот что отличает наш сервис.
              </p>
            </div>
            
            <div className="p-8 bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Инновации</h3>
              <p className="text-white/80">
                Мы постоянно развиваемся, внедряя новые технологии и совершенствуя 
                наши услуги, чтобы ваш опыт был еще лучше.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы присоединиться к нашей истории?</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Выберите автомобиль из нашей коллекции и станьте частью 
            истории MEOWEST — истории роскоши, комфорта и стиля.
          </p>
          <Link to="/cars">
            <Button className="bg-white text-black hover:bg-white/90">
              Выбрать автомобиль
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-zinc-900 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MEOWEST</h3>
              <p className="text-white/60">
                Премиальный прокат автомобилей
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-white/60 mb-2">Москва, ул. Примерная, 123</p>
              <p className="text-white/60 mb-2">+7 (999) 123-45-67</p>
              <p className="text-white/60">info@meowest.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white">Instagram</a>
                <a href="#" className="text-white/60 hover:text-white">Facebook</a>
                <a href="#" className="text-white/60 hover:text-white">Telegram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-white/60">
            © 2023 MEOWEST. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default History;
