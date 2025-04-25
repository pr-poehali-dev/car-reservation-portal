
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="О нашем автопарке" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        </div>
        
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">О нашем автопарке</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Эксклюзивная коллекция премиальных автомобилей для самых требовательных 
            клиентов, ценящих комфорт, престиж и надежность.
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Наша философия</h2>
              <p className="text-white/80 mb-6">
                Мы не просто сдаем автомобили в аренду. Мы создаем для вас незабываемый 
                опыт вождения, подбирая идеальный автомобиль под ваши потребности и 
                предпочтения.
              </p>
              <p className="text-white/80 mb-6">
                Каждый автомобиль в нашем парке — это произведение искусства, 
                воплощение совершенства и инженерной мысли. Мы тщательно отбираем 
                каждую модель, чтобы она соответствовала высоким стандартам качества, 
                комфорта и престижа.
              </p>
              <p className="text-white/80">
                С MEOWEST вы получаете не просто средство передвижения, а 
                возможность подчеркнуть свой статус и индивидуальность.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Философия MEOWEST" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Наши категории автомобилей</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Porsche */}
            <div className="group relative overflow-hidden rounded-lg h-96">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Porsche" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold mb-2">Porsche</h3>
                <p className="text-white/80 mb-4">
                  Эксклюзивные модели, воплощающие спортивный характер и элегантность
                </p>
                <Link to="/cars?category=porsche">
                  <Button className="bg-white text-black hover:bg-white/90 px-6 py-2 rounded-none">
                    Выбрать Porsche
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Luxury */}
            <div className="group relative overflow-hidden rounded-lg h-96">
              <img 
                src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Люкс" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold mb-2">Люкс</h3>
                <p className="text-white/80 mb-4">
                  Роскошные автомобили премиум-класса для особых случаев
                </p>
                <Link to="/cars?category=luxury">
                  <Button className="bg-white text-black hover:bg-white/90 px-6 py-2 rounded-none">
                    Выбрать Люкс
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Business */}
            <div className="group relative overflow-hidden rounded-lg h-96">
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Бизнес" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold mb-2">Бизнес</h3>
                <p className="text-white/80 mb-4">
                  Представительские седаны для деловых поездок и важных встреч
                </p>
                <Link to="/cars?category=business">
                  <Button className="bg-white text-black hover:bg-white/90 px-6 py-2 rounded-none">
                    Выбрать Бизнес
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Преимущества нашего автопарка</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-zinc-800 rounded-lg">
              <div className="text-3xl mb-4">🏎️</div>
              <h3 className="text-xl font-bold mb-2">Эксклюзивность</h3>
              <p className="text-white/80">
                Автомобили премиум-класса, подчеркивающие ваш статус и индивидуальность
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800 rounded-lg">
              <div className="text-3xl mb-4">👌</div>
              <h3 className="text-xl font-bold mb-2">Качество</h3>
              <p className="text-white/80">
                Регулярное техническое обслуживание и тщательная подготовка каждого автомобиля
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800 rounded-lg">
              <div className="text-3xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-2">Надежность</h3>
              <p className="text-white/80">
                Гарантия безотказной работы всех систем автомобиля
              </p>
            </div>
            
            <div className="p-6 bg-zinc-800 rounded-lg">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2">Обновление</h3>
              <p className="text-white/80">
                Постоянное обновление автопарка новейшими моделями
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы выбрать свой идеальный автомобиль?</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Просмотрите наш автопарк и выберите автомобиль, который подчеркнет вашу индивидуальность 
            и сделает любую поездку незабываемой.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/cars">
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-none">
                Выбрать авто
              </Button>
            </Link>
            <Link to="/history">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-none">
                История компании
              </Button>
            </Link>
          </div>
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

export default About;
