import blackLogo from "@/public/black-logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container mx-auto max-w-7xl">
      <nav className="mx-auto flex max-w-screen items-center justify-between p-6 lg:px-8">
        <div className="flex items-center justify-center lg:flex-1">
          <a href="" className="m-1.5 m pr-8 text-xl">
            <span
              className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-200 hover:bg-[length:100%_2px]"
            >
              О нас
            </span>
          </a>
          <a href="" className="m-1.5 pr-8 text-xl">
            <span
              className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]"
            >
              Наши проекты
            </span>
          </a>
          <a href="" className="m-1.5 pr-8 text-xl">
            <span
              className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]"
            >
              Партнерам
            </span>
          </a>
          <a href="" className="m-1.5 pr-8 text-xl">
            <span
              className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]"
            >
              Вопросы
            </span>
          </a>
          <a href="" className="m-1.5 pr-8 text-xl">
            <span
              className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]"
            >
              Контакты
            </span>
          </a>
          <a href="/" className="m-1">
            <Image
              src={blackLogo}
              alt="BEST Logo"
              width={100}
              height={100}
              className="fill-black"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
