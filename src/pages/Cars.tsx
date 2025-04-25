
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import CarCard, { Car } from "@/components/CarCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Используем те же данные, что и в CarsSection для примера
const carsData: Car[] = [
  // Porsche (5 cars)
  {
    id: 1,
    name: "Porsche 911 Carrera",
    category: "porsche",
    price: 35000,
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Культовый спортивный автомобиль с непревзойденными динамическими характеристиками и узнаваемым дизайном"
  },
  {
    id: 2,
    name: "Porsche Taycan",
    category: "porsche",
    price: 42000,
    image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Инновационный электрический спорткар, сочетающий экологичность и высокую производительность"
  },
  {
    id: 3,
    name: "Porsche Panamera",
    category: "porsche",
    price: 38000,
    image: "https://images.unsplash.com/photo-1603053228171-8e870b560a0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Роскошный четырехдверный фастбэк, сочетающий комфорт и спортивный характер"
  },
  {
    id: 4,
    name: "Porsche Cayenne",
    category: "porsche",
    price: 36000,
    image: "https://images.unsplash.com/photo-1606152536277-5aa1fd33e150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Спортивный SUV с характерной динамикой Porsche и практичностью внедорожника"
  },
  {
    id: 5,
    name: "Porsche Macan",
    category: "porsche",
    price: 32000,
    image: "https://images.unsplash.com/photo-1571632822619-ba2c7d6cd7db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Компактный спортивный кроссовер, сочетающий маневренность и проходимость"
  },
  // Luxury cars (10 cars)
  {
    id: 6,
    name: "Lamborghini Huracan",
    category: "luxury",
    price: 65000,
    image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Итальянский суперкар с экстремальной мощностью и эффектным дизайном"
  },
  {
    id: 7,
    name: "Bentley Continental GT",
    category: "luxury",
    price: 55000,
    image: "https://images.unsplash.com/photo-1613289387879-33c7ae4cfe42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Роскошное купе, сочетающее элегантность и высокую производительность"
  },
  {
    id: 8,
    name: "Rolls-Royce Ghost",
    category: "luxury",
    price: 75000,
    image: "https://images.unsplash.com/photo-1631294938201-69c3dd03e137?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Воплощение роскоши и престижа, автомобиль высшего класса для особых случаев"
  },
  {
    id: 9,
    name: "Ferrari 488 GTB",
    category: "luxury",
    price: 68000,
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Легендарный итальянский суперкар с непревзойденной управляемостью и динамикой"
  },
  {
    id: 10,
    name: "Aston Martin DB11",
    category: "luxury",
    price: 60000,
    image: "https://images.unsplash.com/photo-1594502184342-2e316a948816?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Британский гран-турер, сочетающий роскошь и спортивную динамику"
  },
  {
    id: 11,
    name: "McLaren 720S",
    category: "luxury",
    price: 72000,
    image: "https://images.unsplash.com/photo-1622655753932-f22c75018b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Британский суперкар с инновационным дизайном и выдающимися техническими характеристиками"
  },
  {
    id: 12,
    name: "Bugatti Chiron",
    category: "luxury",
    price: 95000,
    image: "https://images.unsplash.com/photo-1567863686382-6d9c56c5f92b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Эксклюзивный гиперкар, воплощение роскоши и скорости"
  },
  {
    id: 13,
    name: "Lamborghini Aventador",
    category: "luxury",
    price: 78000,
    image: "https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Флагманский суперкар Lamborghini с агрессивным дизайном и мощным V12"
  },
  {
    id: 14,
    name: "Ferrari 812 Superfast",
    category: "luxury",
    price: 73000,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Элегантный и мощный гран-турер с передовыми технологиями Ferrari"
  },
  {
    id: 15,
    name: "Pagani Huayra",
    category: "luxury",
    price: 90000,
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Эксклюзивный итальянский гиперкар с уникальным дизайном и ручной сборкой"
  },
  // Business cars (15 cars)
  {
    id: 16,
    name: "Mercedes-Benz S-Class",
    category: "business",
    price: 28000,
    image: "https://images.unsplash.com/photo-1613467143018-49f3b9ee0d33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Флагманский седан с передовыми технологиями и исключительным комфортом"
  },
  {
    id: 17,
    name: "BMW 7 Series",
    category: "business",
    price: 26000,
    image: "https://images.unsplash.com/photo-1576377378254-011e8e89eb5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Представительский автомобиль с инновационными технологиями и превосходной динамикой"
  },
  {
    id: 18,
    name: "Audi A8",
    category: "business",
    price: 27000,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Седан представительского класса с передовым дизайном и высокотехнологичным оснащением"
  },
  {
    id: 19,
    name: "Lexus LS",
    category: "business",
    price: 25000,
    image: "https://images.unsplash.com/photo-1623013438264-d176fb91ee99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Японский представительский седан с безупречным качеством и комфортом"
  },
  {
    id: 20,
    name: "Genesis G90",
    category: "business",
    price: 24000,
    image: "https://images.unsplash.com/photo-1617469767053-d5d5e76c59d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Корейский премиальный седан с роскошным интерьером и впечатляющим оснащением"
  },
  {
    id: 21,
    name: "Mercedes-Benz E-Class",
    category: "business",
    price: 22000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Бизнес-седан среднего размера с комфортом и технологиями флагманских моделей"
  },
  {
    id: 22,
    name: "BMW 5 Series",
    category: "business",
    price: 21000,
    image: "https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Спортивный бизнес-седан с великолепной управляемостью и современными технологиями"
  },
  {
    id: 23,
    name: "Audi A6",
    category: "business",
    price: 20000,
    image: "https://images.unsplash.com/photo-1608985161042-31ac35fcc528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Элегантный бизнес-седан с передовым цифровым интерьером и комфортом"
  },
  {
    id: 24,
    name: "Volvo S90",
    category: "business",
    price: 19000,
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Шведский премиальный седан с минималистичным дизайном и передовыми системами безопасности"
  },
  {
    id: 25,
    name: "Jaguar XF",
    category: "business",
    price: 18500,
    image: "https://images.unsplash.com/photo-1565208895585-e2f9e3fae5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Британский спортивный седан с динамичным дизайном и отличной управляемостью"
  },
  {
    id: 26,
    name: "Maserati Ghibli",
    category: "business",
    price: 23000,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Итальянский бизнес-седан с эмоциональным дизайном и спортивным характером"
  },
  {
    id: 27,
    name: "Lexus ES",
    category: "business",
    price: 17000,
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Комфортный бизнес-седан с отличной шумоизоляцией и плавностью хода"
  },
  {
    id: 28,
    name: "Mercedes-Benz CLS",
    category: "business",
    price: 24000,
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Элегантный четырехдверный купе с выразительным дизайном и комфортом"
  },
  {
    id: 29,
    name: "Cadillac CT6",
    category: "business",
    price: 21500,
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Американский премиальный седан с просторным салоном и комфортной подвеской"
  },
  {
    id: 30,
    name: "BMW 6 Series Gran Coupe",
    category: "business",
    price: 25000,
    image: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Спортивный четырехдверный купе с роскошным интерьером и отличной динамикой"
  }
];

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");
  const [displayedCars, setDisplayedCars] = useState<Car[]>([]);
  
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveTab(category);
    }
  }, [searchParams]);
  
  useEffect(() => {
    if (activeTab === "all") {
      setDisplayedCars(carsData);
    } else {
      setDisplayedCars(carsData.filter(car => car.category === activeTab));
    }
  }, [activeTab]);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value !== "all") {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80" 
            alt="Автопарк MEOWEST" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        </div>
        
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Автопарк MEOWEST</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Выберите автомобиль, который подчеркнет ваш статус и сделает 
            каждую поездку незабываемой.
          </p>
        </div>
      </section>
      
      {/* Cars Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-10">
            <TabsList className="bg-zinc-800 border border-zinc-700 p-1 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Все автомобили
              </TabsTrigger>
              <TabsTrigger value="porsche" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Porsche
              </TabsTrigger>
              <TabsTrigger value="luxury" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Люкс
              </TabsTrigger>
              <TabsTrigger value="business" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Бизнес
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCars.map(car => (
                  <Link to={`/cars/${car.id}`} key={car.id}>
                    <CarCard car={car} />
                  </Link>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="porsche" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCars.map(car => (
                  <Link to={`/cars/${car.id}`} key={car.id}>
                    <CarCard car={car} />
                  </Link>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="luxury" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCars.map(car => (
                  <Link to={`/cars/${car.id}`} key={car.id}>
                    <CarCard car={car} />
                  </Link>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="business" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCars.map(car => (
                  <Link to={`/cars/${car.id}`} key={car.id}>
                    <CarCard car={car} />
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Не нашли подходящий автомобиль?</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подберем для вас идеальный вариант, 
            учитывая все ваши пожелания и требования.
          </p>
          <Link to="/contacts">
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-none">
              Связаться с нами
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

export default Cars;
