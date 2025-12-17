"use client";
import Image from "next/image";
import Header from "./ui/header";
import About from "./ui/about";
import Project from "./ui/project";
import Footer from "./ui/footer";
import { useState } from "react";
import TextMorph from "./components/TextMorph";

export default function Home() {
  const myName = [
    "Silapin Promajan",
    "Gun",
    "Guniism",
    "Gunisme",
    "Pugun",
    "Silapin",
  ];
  const [name, setName] = useState(myName[0]);
  function IMGClickHandler() {
    const random = Math.floor(Math.random() * myName.length);
    const index = random == myName.length ? myName.length - 1 : random;
    setName(myName[index]);
  }
  return (
    <div className="flex flex-col items-center bg-base">
      <Header />
      <div className="h-screen content-center">
        <div className="flex flex-col items-center space-y-3">
          <Image
            src="/profile.png"
            width={200}
            height={200}
            className="rounded-full mb-1 hover:cursor-pointer"
            alt="Silapin's Profile"
            priority={true}
            onClick={IMGClickHandler}
          />
          <p className="text-2xl">Hello I&apos;m</p>
          <h2 className="font-bold text-4xl md:text-5xl">{name}</h2>
          <p className="text-3xl">A student</p>
          {/* <div>
            <TextMorph />
          </div> */}
        </div>
      </div>
      <About />
      <Project />
      <Footer />
    </div>
  );
}
