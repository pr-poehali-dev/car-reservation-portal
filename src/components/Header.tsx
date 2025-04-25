
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 text-white z-50 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="text-2xl font-semibold tracking-wider">
          MEOWEST
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="text-white/80 hover:text-white px-4 py-2 transition-colors">
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/cars">
                <NavigationMenuLink className="text-white/80 hover:text-white px-4 py-2 transition-colors">
                  Автопарк
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/80 hover:text-white bg-transparent">О нас</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-zinc-900 border-zinc-800 rounded-md">
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="p-2 hover:bg-zinc-800 rounded-md transition-colors">
                    <Link to="/history" className="block text-white text-sm">
                      История компании
                    </Link>
                  </div>
                  <div className="p-2 hover:bg-zinc-800 rounded-md transition-colors">
                    <Link to="/about" className="block text-white text-sm">
                      О нашем автопарке
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacts">
                <NavigationMenuLink className="text-white/80 hover:text-white px-4 py-2 transition-colors">
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Link to="/profile">
          <Button variant="outline" className="bg-transparent border-zinc-700 hover:bg-zinc-800 text-white">
            <User size={16} className="mr-2" />
            Личный кабинет
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
