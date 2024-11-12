"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
  } from "@tabler/icons-react";
  import { FaReact } from "react-icons/fa";
  import { RiTailwindCssFill } from "react-icons/ri";
  import { IoMdShareAlt } from "react-icons/io";
  
import { BiLogoTypescript } from "react-icons/bi";
export function AnimatedPinDemo() {
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
     
        {
          title: "Products",
          icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Components",
          icon: (
            <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Changelog",
          icon: (
            <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
     
        {
          title: "Twitter",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
      ];
  return (
    <>
    <h1 className="text-9xl font-bold p-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
      Projects <br/>  <span className="text-2xl dark:text-white taxt-black w-full uppercase">these are some of my recent projects that I have <span className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">worked on</span></span>
    </h1>
    <div className="h-[40rem] w-full flex items-center justify-center gap-8">
      <PinContainer
        title="/machinelearning/sap.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[32rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Machine Learning
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Threat detection using python and its utilities
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 mb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <div className="flex items-center justify-between  ">

          <div className="flex items-center  ">
          <FaReact fill="#61DAFB" className="w-6 h-6 border rounded-full p-1 border-blue-300"/>
          <RiTailwindCssFill fill="#38BDF8" className="w-6 h-6 border rounded-full p-1 border-blue-300 "/>
          <BiLogoTypescript fill="#007ACC" className="w-6 h-6 border rounded-full p-1 border-blue-300" />
    </div>
    <div className="flex items-center flex-row">
    <h1>Check live site </h1> <IoMdShareAlt className="w-6 h-6 border rounded-full p-1 border-blue-300 mx-2" />
    </div>
    </div>
        </div>
      </PinContainer>
      <PinContainer
        title="/instay.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[32rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Full Stack App
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              App made using nextjs framwork
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 mb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <div className="flex items-center justify-between  ">

          <div className="flex items-center  ">
          <FaReact fill="#61DAFB" className="w-6 h-6 border rounded-full p-1 border-blue-300"/>
          <RiTailwindCssFill fill="#38BDF8" className="w-6 h-6 border rounded-full p-1 border-blue-300 "/>
          <BiLogoTypescript fill="#007ACC" className="w-6 h-6 border rounded-full p-1 border-blue-300" />
    </div>
    <div className="flex items-center flex-row">
    <h1>Check live site </h1> <IoMdShareAlt className="w-6 h-6 border rounded-full p-1 border-blue-300 mx-2" />
    </div>
    </div>
        </div>
      </PinContainer>
    </div>
    </>
  );
}
