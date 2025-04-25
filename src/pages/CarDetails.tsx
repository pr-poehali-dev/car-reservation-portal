
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car } from "@/components/CarCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

// Используем те же данные, что и в Cars.tsx для примера
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
  // Далее идут остальные автомобили...
  // Для краткости приведу только один пример из каждой категории
  
  // Luxury
  {
    id: 6,
    name: "Lamborghini Huracan",
    category: "luxury",
    price: 65000,
    image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Итальянский суперкар с экстремальной мощностью и эффектным дизайном"
  },
  
  // Business
  {
    id: 16,
    name: "Mercedes-Benz S-Class",
    category: "business",
    price: 28000,
    image: "https://images.unsplash.com/photo-1613467143018-49f3b9ee0d33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Флагманский седан с передовыми технологиями и исключительным комфортом"
  }
];

// В реальном приложении здесь было бы больше данных, включая технические характеристики
// Добавим их для примера
const carDetails = {
  1: {
    specs: {
      engine: "3.0L Twin-Turbo Flat-6",
      power: "379 л.с.",
      acceleration: "4.2 сек. до 100 км/ч",
      topSpeed: "293 км/ч",
      transmission: "8-ступенчатая PDK",
      drive: "Задний привод"
    },
    features: [
      "Адаптивная подвеска",
      "Светодиодные фары",
      "Кожаный салон",
      "Спортивные сиденья с подогревом",
      "Система навигации",
      "Apple CarPlay/Android Auto"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503376642259-bde6a772fd93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  // Для других автомобилей могли бы быть аналогичные данные
};

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [carSpecs, setCarSpecs] = useState<any>(null);
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<string>("");
  
  useEffect(() => {
    if (id) {
      const carId = parseInt(id);
      const foundCar = carsData.find(c => c.id === carId);
      if (foundCar) {
        setCar(foundCar);
        setActiveImage(foundCar.image);
        
        // В реальном приложении здесь был бы запрос к API для получения деталей
        // Для примера используем захардкоженные данные
        const details = carDetails[carId as keyof typeof carDetails];
        if (details) {
          setCarSpecs(details);
        }
      }
    }
  }, [id]);
  
  useEffect(() => {
    if (car && dateRange.from && dateRange.to) {
      const days = Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      setTotalPrice(car.price * days);
    } else {
      setTotalPrice(0);
    }
  }, [car, dateRange]);
  
  if (!car) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-2xl">Загрузка данных...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Gallery */}
            <div className="lg:w-2/3">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={activeImage} 
                  alt={car.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {carSpecs && carSpecs.gallery && (
                <div className="grid grid-cols-3 gap-4">
                  {[car.image, ...carSpecs.gallery].slice(0, 3).map((img, index) => (
                    <div 
                      key={index}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 ${activeImage === img ? 'border-white' : 'border-transparent'}`}
                      onClick={() => setActiveImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${car.name} - изображение ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {/* 3D Model Placeholder */}
              <div className="mt-10 bg-zinc-900 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">3D Модель</h3>
                <div className="h-[300px] flex items-center justify-center border border-zinc-800 rounded-lg">
                  <p className="text-white/60">Здесь будет 3D модель автомобиля {car.name}</p>
                </div>
                <p className="mt-4 text-white/60 text-sm">
                  Для просмотра 3D модели используйте мышь. Зажмите левую кнопку и перемещайте для вращения. 
                  Колесико мыши для приближения/отдаления.
                </p>
              </div>
            </div>
            
            {/* Car Info */}
            <div className="lg:w-1/3">
              <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
              <div className="text-xl text-white/80 mb-2">{car.category === "porsche" ? "Porsche" : car.category === "luxury" ? "Люкс" : "Бизнес"}</div>
              <p className="text-3xl font-bold mb-6">{car.price.toLocaleString('ru-RU')} ₽/день</p>
              
              <p className="text-white/80 mb-8">{car.description}</p>
              
              {/* Booking Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-none w-full mb-4">
                    Забронировать
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white border-zinc-800">
                  <DialogHeader>
                    <DialogTitle>Бронирование {car.name}</DialogTitle>
                    <DialogDescription className="text-white/60">
                      Выберите даты аренды и заполните данные для бронирования
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-4 py-4">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="dates" className="font-medium">Даты аренды</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-start text-left font-normal bg-zinc-800 border-zinc-700 text-white"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateRange.from ? (
                              dateRange.to ? (
                                <>
                                  {format(dateRange.from, "PPP", { locale: ru })} -{" "}
                                  {format(dateRange.to, "PPP", { locale: ru })}
                                </>
                              ) : (
                                format(dateRange.from, "PPP", { locale: ru })
                              )
                            ) : (
                              <span>Выберите даты</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-zinc-900 border-zinc-800" align="start">
                          <Calendar
                            mode="range"
                            selected={dateRange}
                            onSelect={setDateRange as any}
                            initialFocus
                            className="bg-zinc-900 text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="font-medium">Ваше имя</label>
                      <Input id="name" placeholder="Введите ваше имя" className="bg-zinc-800 border-zinc-700 text-white" />
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="font-medium">Номер телефона</label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" className="bg-zinc-800 border-zinc-700 text-white" />
                    </div>
                    
                    {totalPrice > 0 && (
                      <div className="border-t border-zinc-800 pt-4 mt-2">
                        <p className="font-medium mb-2">Итого:</p>
                        <p className="text-xl font-bold">{totalPrice.toLocaleString('ru-RU')} ₽</p>
                      </div>
                    )}
                  </div>
                  
                  <DialogFooter>
                    <Button className="bg-white text-black hover:bg-white/90 w-full">
                      Подтвердить бронирование
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full rounded-none">
                Связаться с нами
              </Button>
              
              {/* Specs */}
              {carSpecs && carSpecs.specs && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-4">Технические характеристики</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-white/70">Двигатель</span>
                      <span className="font-medium">{carSpecs.specs.engine}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-white/70">Мощность</span>
                      <span className="font-medium">{carSpecs.specs.power}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-white/70">Разгон</span>
                      <span className="font-medium">{carSpecs.specs.acceleration}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-white/70">Макс. скорость</span>
                      <span className="font-medium">{carSpecs.specs.topSpeed}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-white/70">Трансмиссия</span>
                      <span className="font-medium">{carSpecs.specs.transmission}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-white/70">Привод</span>
                      <span className="font-medium">{carSpecs.specs.drive}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Features */}
              {carSpecs && carSpecs.features && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-4">Особенности и комплектация</h2>
                  <ul className="space-y-2">
                    {carSpecs.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="text-white mr-2">✓</span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Cars Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10">Похожие автомобили</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carsData
              .filter(c => c.category === car.category && c.id !== car.id)
              .slice(0, 3)
              .map(similarCar => (
                <Link to={`/cars/${similarCar.id}`} key={similarCar.id}>
                  <div className="bg-zinc-800 rounded-lg overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={similarCar.image} 
                        alt={similarCar.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{similarCar.name}</h3>
                      <p className="text-white/60 mb-4 line-clamp-2">{similarCar.description}</p>
                      <p className="text-xl font-bold">{similarCar.price.toLocaleString('ru-RU')} ₽/день</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы сделать выбор?</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Забронируйте {car.name} прямо сейчас или просмотрите другие автомобили в нашем автопарке.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-none">
                  Забронировать сейчас
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white border-zinc-800">
                {/* содержимое диалога такое же, как выше */}
              </DialogContent>
            </Dialog>
            <Link to="/cars">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-none">
                Посмотреть все автомобили
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

export default CarDetails;
