
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Car {
  id: number;
  name: string;
  category: "porsche" | "luxury" | "business";
  price: number;
  image: string;
  description: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="group bg-zinc-900 border border-zinc-800 overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link to={`/cars/${car.id}`}>
            <Button className="w-full bg-white text-black hover:bg-white/90">
              Подробнее
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-1">{car.name}</h3>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-zinc-400 text-sm">
              {car.category === "porsche" ? "Porsche" : 
               car.category === "luxury" ? "Люкс" : "Бизнес"}
            </span>
          </div>
          <div className="text-white font-semibold">
            {car.price.toLocaleString()} ₽/день
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
