
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы код для отправки данных на сервер
    console.log("Form submitted:", formData);
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534025809080-a0584f38a4cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Контакты MEOWEST" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        </div>
        
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Контакты</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Мы всегда на связи и готовы ответить на любые вопросы 
            о нашем автопарке и услугах.
          </p>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Как с нами связаться</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Адрес</h3>
                  <p className="text-white/80">
                    Москва, ул. Примерная, 123<br />
                    Бизнес-центр "Престиж", 5 этаж
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Телефон</h3>
                  <p className="text-white/80">
                    +7 (999) 123-45-67<br />
                    +7 (999) 765-43-21
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-white/80">
                    info@meowest.com<br />
                    booking@meowest.com
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Режим работы</h3>
                  <p className="text-white/80">
                    Пн-Пт: 9:00 - 20:00<br />
                    Сб-Вс: 10:00 - 18:00
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Telegram
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваше имя"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваш email"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваше сообщение"
                    className="bg-zinc-800 border-zinc-700 text-white min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-none w-full"
                >
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Как нас найти</h2>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            {/* В реальном проекте здесь был бы iframe с картой */}
            <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-white/60">
              <p>Здесь будет карта с адресом MEOWEST</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Хотите забронировать автомобиль прямо сейчас?</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Просмотрите наш автопарк и выберите автомобиль, который подчеркнет вашу индивидуальность 
            и сделает любую поездку незабываемой.
          </p>
          <Button 
            className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-none"
            onClick={() => window.location.href = '/cars'}
          >
            Выбрать авто
          </Button>
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

export default Contacts;
