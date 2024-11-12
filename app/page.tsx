"use client";
import DarkModeToggle from "@/components/DarkModeToogle";
import { NavbarDemo } from "@/components/Navbar";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import { Grid } from "@/components/Grid";
import { AnimatedPinDemo } from "@/components/3dContainer";
import { BackgroundGradientDemo } from "@/components/Backgroud"; 
import { EvervaultCardDemo } from "@/components/Evervault";
import Footer from "@/components/Footer"   
import { FloatingDockDemo } from "@/components/Projects";
import { MainBody } from "@/components/MainBody";
//import {CopyEmailButton} from "@/components/MainBody"
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white ">
    <header className="p-4 flex justify-end sticky z- ">
      <DarkModeToggle />
    </header>
   <NavbarDemo />
   
  <MainBody/>

    <Grid />
    <AnimatedPinDemo/>
    <FloatingDockDemo/>
   <BackgroundGradientDemo/>
  
    <EvervaultCardDemo />
      <Footer/>

  </div>
  );
}
