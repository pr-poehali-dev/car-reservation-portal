
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarsSection from "@/components/CarsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О нашем автопарке</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                MEOWEST - это коллекция эксклюзивных автомобилей для истинных ценителей роскоши и качества.
                Наш автопарк включает более 30 премиальных автомобилей от легендарных Porsche до
                представительских седанов бизнес-класса.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Каждый автомобиль в нашей коллекции тщательно обслуживается, чтобы обеспечить вам
                максимальный комфорт и безопасность в пути. Аренда автомобиля в MEOWEST - это не просто
                прокат машины, это опыт, который запомнится надолго.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Узнать больше
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Premium cars collection" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Cars Section */}
      <CarsSection />
      
      {/* History Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">История компании</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              MEOWEST была основана в 2010 году группой энтузиастов автомобильной индустрии, 
              которые хотели создать уникальный сервис проката премиальных автомобилей. 
              Начав с небольшой коллекции из 5 автомобилей, сегодня мы предлагаем более 
              30 эксклюзивных моделей и продолжаем расширять наш автопарк.
            </p>
            <p className="text-white/80 mb-8 leading-relaxed">
              За годы работы мы завоевали доверие тысяч клиентов и стали 
              символом качества и надежности в сфере аренды премиальных автомобилей.
            </p>
            <Link to="/history">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Читать полную историю
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

export default Index;
