
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarCard, { Car } from "./CarCard";

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
  // Here we would add 2 more Porsche, 10 luxury cars and 15 business cars...
  // Adding a few samples for demonstration
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
  // Luxury cars (sample of 3 out of 10)
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
  // Business cars (sample of 3 out of 15)
  {
    id: 9,
    name: "Mercedes-Benz S-Class",
    category: "business",
    price: 28000,
    image: "https://images.unsplash.com/photo-1613467143018-49f3b9ee0d33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Флагманский седан с передовыми технологиями и исключительным комфортом"
  },
  {
    id: 10,
    name: "BMW 7 Series",
    category: "business",
    price: 26000,
    image: "https://images.unsplash.com/photo-1576377378254-011e8e89eb5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Представительский автомобиль с инновационными технологиями и превосходной динамикой"
  },
  {
    id: 11,
    name: "Audi A8",
    category: "business",
    price: 27000,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Седан представительского класса с передовым дизайном и высокотехнологичным оснащением"
  }
];

const CarsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayLimit = showAll ? 30 : 6;

  return (
    <section className="bg-black text-white py-20">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-center">Наш автопарк</h2>
        
        <Tabs defaultValue="all" className="mb-10">
          <TabsList className="bg-zinc-900 border border-zinc-800 p-1 mb-8">
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
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carsData.slice(0, displayLimit).map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="porsche">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carsData.filter(car => car.category === "porsche").slice(0, displayLimit).map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carsData.filter(car => car.category === "luxury").slice(0, displayLimit).map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="business">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carsData.filter(car => car.category === "business").slice(0, displayLimit).map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {!showAll && carsData.length > displayLimit && (
          <div className="text-center">
            <Button 
              onClick={() => setShowAll(true)}
              className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-none"
            >
              Показать все автомобили
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarsSection;
