import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandX,
  IconExchange,
  IconBrandReact,
  IconBrandVite,
  IconBrandDjango,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTailwind,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Nodejs",
      icon: (
        <IconBrandNodejs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "react",
      icon: (
        <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Django",
      icon: (
        <IconBrandDjango className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Vite",
      icon: (
  <IconBrandVite className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Tailwind",
      icon: (
        <IconBrandTailwind className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Nextjs",
      icon: (
        <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
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
  const links2 = [
    {
      title: "Java",
      proficiency: "70%",
      href: "#",
    },
    {
      title: "C++",
      proficiency: "50%",
      href: "#",
    },
    {
      title: "C",
      proficiency: "30%",
      href: "#",
    },
    {
      title: "Java",
      icon: (
        <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "C++",
      icon: (
        <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "C",
      icon: (
        <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "C#",
      icon: (
        <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <>
    <h1 className="text-7xl font-extrabold tracking-tight leading-none mb-4 text-center uppercase">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        FrameWorks That I know
      </span>
    </h1>
    <div className="flex items-center justify-center h-[20rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
   
    </>
  );
}
