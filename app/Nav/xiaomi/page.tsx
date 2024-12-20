import React from "react";
import { Nav } from "@/Header/Nav/xiaomi";
export default function Page() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <Nav />
      <div className="mt-32 flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl animate-fade-up animate-duration-[800ms] animate-delay-100 animate-ease-in-out">
          animate-fade-up animate-duration-[800ms] animate-delay-100
          animate-ease-in-out
        </h2>
        <div className="mt-14">
          <a
            href="https://www.tailwindcss-animated.com/configurator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline underline-offset-4"
          >
            效果选择
          </a>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-3"></div>
    </div>
  );
}
