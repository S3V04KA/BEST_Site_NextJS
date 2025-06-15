import Banner from "@/public/banner.webp";
import Board from "@/public/board.png";
import Image from "next/image";
import WhitePaperBackground from "@/public/white-paper-texture.png";

export const MainPage = () => {
  return (
    <>
      <Image
        src={Banner}
        alt="BEST Ekaterinburg UrFU Banner"
        className="container max-w-full h-auto"
      />
      <div className="relative z-10 flex max-w-screen justify-around mr-14 ml-14">
        <div className="flex items-center justify-between max-w-5xl ">
          <div className="items-center text-2xl">
            <p className="mt-5 mb-5">
              Board of European Students of Technology – <br /> это
              международная студенческая организация.
            </p>
            <p className="mt-5 mb-5">
              Наша деятельность направлена на развитие студентов за счет
              реализации крупных образовательных проектов.
            </p>
            <p className="mt-5 mb-5">
              Мы – про яркое студенчество,
              <br /> эмоции, коммьюнити
              <br /> и развитие.
            </p>
          </div>
          <Image
            src={Board}
            alt="Управляющий состав"
            className="hidden lg:block max-w-full h-auto mt-12 mr-12"
          />
          {/* <div className="container absolute z-20 bottom-2 bg-[#1C1C1C] h-28 max-w-screen"></div> */}
        </div>
      </div>

      <Image
        src={WhitePaperBackground}
        alt="White Paper Background"
        className="container max-w-full h-auto"
      >
      </Image>
    </>
  );
};
