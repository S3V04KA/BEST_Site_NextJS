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
                <a href="">О нас</a>
              </li>
              <li>
                <a href="">Наши проекты</a>
              </li>
              <li>
                <a href="">Партнерам</a>
              </li>
              <li>
                <a href="">Вопросы</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
              <div className="flex mt-5">
                <a href="" className="pr-2">
                  <Image src={TG} alt="VK icon" width={40} height={40} />
                </a>
                <a href="" className="pl-2">
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
