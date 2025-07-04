import Image from "next/image";

import Logo from "@/public/Logo.svg";
import VK from "@/public/vk-icon.svg";
import TG from "@/public/telegram-icon.svg";
import Star from "@/public/star.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C]">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex justify-between gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <ul className="text-white dark:text-gray-400 font-normal">
              <li>
                <a href="" className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]">О нас</a>
              </li>
              <li>
                <a href="" className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]">Наши проекты</a>
              </li>
              <li>
                <a href="" className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]">Партнерам</a>
              </li>
              <li>
                <a href="" className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]">Вопросы</a>
              </li>
              <li>
                <a href="" className="bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0_1px] 
              bg-left-bottom transition-[background-size] duration-250 hover:bg-[length:100%_2px]">Контакты</a>
              </li>
              <div className="flex mt-5">
                <a href="https://t.me/+c-2Jv_ESv-Y1MjQ6" target="blank" className="pr-2">
                  <Image src={TG} alt="VK icon" width={40} height={40} />
                </a>
                <a href="https://vk.com/best_urfu" target="blank" className="pl-2">
                  <Image src={VK} alt="Telegram icon" width={40} height={40} />
                </a>
              </div>
            </ul>
          </div>
          <div>
            <div className="flex text-white dark:text-gray-400 font-medium mb-5">
              <Image
                src={Star}
                alt="BEST Logo"
                width={80}
                height={80}
                className="pl-3"
              />
              <Image
                src={Star}
                alt="BEST Logo"
                width={80}
                height={80}
                className="pl-3"
              />
              <Image
                src={Star}
                alt="BEST Logo"
                width={80}
                height={80}
                className="pl-3"
              />
            </div>
            <div className="mt-14">
              <Image
                src={Logo}
                alt="BEST Logo"
                width={120}
                height={120}
                className="ml-30"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
