import React from "react";
import { GitHubLog } from "@/components/Logo/Logo";
import "./xiaomi.css";
export const Nav = () => {
  return (
    <>
      <div className="md:h-nav fixed top-0 w-full z-40 font-light text-slate-100 group/nav">
        <div className="absolute top-0 bottom-0 w-full backdrop-blur-2xl bg-gradient-to-r from-black/60 to-black/60 bg-[rgba(92,92,92,0.5)] opacity-0 transition-opacity group-hover/nav:opacity-100 group-hover/nav:duration-[400ms] delay-[400ms] duration-[400ms] block "></div>
        <div className="min-h-nav relative md:z-20 flex justify-between items-center font-light px-8 lg:px-6 xs:pl-4 sm:pl-6 md:pl-8 md:pr-0">
          <div>
            <GitHubLog />
          </div>
          <div>
            <ul>
              <li className="">首页</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <picture className="flex justify-center h-screen">
          <source media="(max-width: 760px)" srcSet="/section1x760.jpg" />
          <source media="(max-width: 1280px)" srcSet="/section1x1281.jpg" />
          <img
            className="w-full h-full object-cover"
            loading="eager"
            src="/section1x1281.jpg"
            alt="cars"
          />
        </picture>
      </div>
    </>
  );
};
