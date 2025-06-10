import Header  from "@/app/header"
import { MainPage } from "./main-page";
import { Footer } from "./footer";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Header />
    <MainPage />
    <Footer />
    </>
  );
}
