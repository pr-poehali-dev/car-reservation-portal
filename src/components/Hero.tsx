
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background video or image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
          alt="Luxury car background"
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container relative z-10 pt-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Премиальный автопарк для особых случаев
          </h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Прокат эксклюзивных автомобилей для тех, кто ценит роскошь, стиль и комфорт. 
            Подчеркните свой статус автомобилем премиум-класса.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/cars">
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-none">
                Выбрать авто
              </Button>
            </Link>
            <Link to="/contacts">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-none">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
