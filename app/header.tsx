import logo from "@/public/logo.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container mx-auto max-w-7xl">
      <nav className="mx-auto flex max-w-screen items-center justify-between p-6 lg:px-8">
        <div className="flex items-center justify-center lg:flex-1">
          <a href="" className="m-1.5 m pr-8 text-xl">
            О нас
          </a>
          <a href="" className="m-1.5 pr-8 text-xl">
            Наши проекты
          </a>
          <a href="" className="m-1.5 pr-8 text-xl">
            Партнерам
          </a>
          <a href="" className="m-1.5 pr-8 text-xl">
            Вопросы
          </a>
          <a href="" className="m-1.5 pr-8 text-xl">
            Контакты
          </a>
          <a href="/" className="m-1">
            <span className="sr-only">BEST Ekaterinburg UrFU</span>
            <Image src={logo} alt="logo" className="h-12 w-auto" />
          </a>
        </div>
      </nav>
    </header>
  );
}
