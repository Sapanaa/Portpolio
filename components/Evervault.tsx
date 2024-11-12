import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <>
    <h1 className="text-9xl py-9 text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">My Approach </h1>
    <div className="flex items-center gap-7 justify-center mt-5">
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="Stage 1" hoverText="Holistic Problem-Solving "/>
    </div>
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="Stage 2" hoverText="Modular and Clean Code" />

    </div>  
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="Stage 3" hoverText="Polish and Launch" />

    </div>
    </div>
    </>
  );
}
