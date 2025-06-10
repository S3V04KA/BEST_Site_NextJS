import Banner from "@/public/banner.webp";
import Board from "@/public/board.png";
import Image from "next/image";
import WhitePaperBackground from "@/public/white-paper-texture.png"

export const MainPage = () => {
  return (
    <>
      <Image
        src={Banner}
        alt="BEST Ekaterinburg UrFU Banner"
        className="container"
      />
      <div className="flex justify-around mr-14 ml-14">
        <div className="items-center justify-center max-w-6/12 ml-12 mt-12">
          <div className="w-3/4 m-8 items-center text-2xl">
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
        </div>
        <Image src={Board} alt="Управляющий состав" className="mt-12 mr-12" />
      </div>
      <div className="container rela bg-[#1C1C1C] min-h-96 w-full"></div>
      <section className="relative min-h-3/4 w-full"
      >
        <Image
        src={WhitePaperBackground}
        alt="White Paper Background"
        className="container"
        >
          
        </Image>
      </section>
    </>
  );
};
