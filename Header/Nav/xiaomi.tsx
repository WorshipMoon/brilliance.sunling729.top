"use client";
import React, { useState } from "react";
import { GitHubLog, GlobeLog } from "@/components/Logo/Logo";
import "./xiaomi.css";
import Link from "next/link";

interface MenuItem {
  name: string;
  href?: string;
  hasSubMenus: boolean;
  subMenus?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  href: string;
}

const defaultMenuItems: MenuItem[] = [
  {
    name: "首页",
    hasSubMenus: false,
    href: "/Nav/xiaomi",
  },
  {
    name: "小米汽车",
    hasSubMenus: true,
    subMenus: [
      { name: "小米SU7", href: "/Nav/xiaomi" },
      { name: "Mobile Development", href: "/Nav/xiaomi" },
    ],
  },
  {
    name: "About Us",
    hasSubMenus: true,
    subMenus: [{ name: "Mobile Development", href: "/Nav/xiaomi" }],
  },
];

export const Nav = (props: { menuItems?: MenuItem[] }) => {
  const { menuItems = defaultMenuItems } = props;
  const [isVertical, setIsVertical] = useState(false); // 控制垂直菜单的布尔状态
  // const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);
  const [openStatus, setOpenStatus] = useState<number>();

  const toggleMenuStyle = () => {
    setIsVertical(!isVertical);
  };

  const toggleSwitchSubMenus = (index: number) => {
    // setOpenSubMenus((prev) =>
    //   prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    // );
    if (openStatus == index) {
      setOpenStatus(undefined);
      return;
    }
    setOpenStatus(index);
  };

  return (
    <>
      <div
        className={`h-nav fixed top-0 w-full z-40 font-light text-slate-100 group/nav text-sm ${
          isVertical ? "vertical-menu" : ""
        }`}
      >
        <div className="absolute top-0 bottom-0 w-full backdrop-blur-2xl bg-gradient-to-r from-black/60 to-black/60 bg-[rgba(92,92,92,0.5)] opacity-0 group-hover/nav:opacity-100 transition-opacity delay-200 duration-300 block max-md:opacity-100"></div>
        <div className="min-h-nav relative md:z-20 flex justify-between items-center font-light px-8 lg:px-6 xs:pl-4 sm:pl-6 md:pl-8 md:pr-0">
          <div>
            <GitHubLog />
          </div>
          <div className={`${isVertical ? "mobile-menu" : "max-md:hidden"}`}>
            <ul className="flex justify-center max-md:flex-col max-md:space-y-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="nav-li-a group/navlia max-md:relative"
                >
                  <div
                    className="relative group/navlidiv max-md:px-6 max-md:py-2"
                    onClick={() =>
                      item.hasSubMenus && toggleSwitchSubMenus(index)
                    }
                  >
                    {item.href ? (
                      <Link href={item.href}>{item.name}</Link>
                    ) : (
                      <>
                        <span>{item.name}</span>
                        <svg
                          className={`md:hidden absolute right-12 top-[0.4rem] ${
                            openStatus == index ? "rotate-180" : "rotate-0"
                          } transition-transform duration-[400ms]`}
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.5303 7.26752C15.8232 7.56041 15.8232 8.03529 15.5303 8.32818L10 13.8585L4.46967 8.32818C4.17678 8.03529 4.17678 7.56041 4.46967 7.26752C4.76256 6.97463 5.23744 6.97463 5.53033 7.26752L10 11.7372L14.4697 7.26752C14.7626 6.97463 15.2374 6.97463 15.5303 7.26752Z"
                            fill="#FFFFFF"
                            fillOpacity="0.6"
                          ></path>
                        </svg>
                      </>
                    )}
                    <span className="max-md:hidden h-px absolute left-0 right-0 bottom-[-8px] bg-slate-200 scale-x-0 origin-top-right group-hover/navlidiv:scale-x-100 group-hover/navlidiv:origin-top-left transition-transform duration-300"></span>
                  </div>
                  {item.subMenus && (
                    <>
                      <div
                        className={`grid md:hidden top-nav left-0 right-0 transition-all duration-[400ms] ${
                          // openSubMenus.includes(index)
                          openStatus == index
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <ul
                          className={`h-0 overflow-hidden flex transition-[height] duration-[400ms] ${
                            openStatus == index ? "h-auto" : ""
                          } backdrop-blur-2xl bg-neutral-800 flex-col`}
                        >
                          {item.subMenus.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="group/subnavlia block last:mr-0 mr-0 text-slate-200 text-sm"
                            >
                              <div className="relative text-nowrap">
                                <Link
                                  className="block w-full px-6 py-4"
                                  href={subItem.href}
                                >
                                  {subItem.name}
                                </Link>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:grid hidden absolute top-nav left-0 right-0 grid-rows-[0fr] group-hover/navlia:grid-rows-[1fr] transition-all duration-[400ms] group-hover/navlia:duration-[400ms]">
                        <ul className="h-0 overflow-hidden flex justify-center transition-[height] duration-[400ms] group-hover/navlia:duration-[400ms] group-hover/navlia:h-16 backdrop-blur-2xl bg-slate-500">
                          {item.subMenus.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="group/subnavlia mr-20 last:mr-0 text-slate-200 text-sm"
                            >
                              <span className="relative md:leading-[3.6rem] text-nowrap">
                                <Link href={subItem.href}>{subItem.name}</Link>
                                <span className="h-px absolute left-0 right-0 bottom-[-8px] bg-slate-200 scale-x-0 origin-top-right group-hover/subnavlia:scale-x-100 group-hover/subnavlia:origin-top-left transition-transform duration-300"></span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="block md:hidden pr-4 transition-transform duration-[400ms]"
            onClick={toggleMenuStyle}
          >
            <svg
              className={`transition-transform duration-500 ${
                isVertical ? "rotate-90" : ""
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x={isVertical ? "3.98975" : "2"}
                y={isVertical ? "3.28247" : "3.5"}
                width={isVertical ? "18" : "16"}
                height="1"
                fill="#FFFFFF"
                fillOpacity={0.9}
                className={`transition-transform duration-500 ${
                  isVertical ? "rotate-45" : ""
                }`}
                style={{
                  transformOrigin: isVertical ? "3.98975px 3.28247px" : "0 0",
                }}
              />
              <rect
                x={isVertical ? "3.28271" : "2"}
                y={isVertical ? "16.0104" : "9.5"}
                width={isVertical ? "18" : "16"}
                height="1"
                fill="#FFFFFF"
                fillOpacity={0.9}
                className={`transition-transform duration-500 ${
                  isVertical ? "-rotate-45" : ""
                }`}
                style={{
                  transformOrigin: isVertical ? "3.28271px 16.0104px" : "0 0",
                }}
              />
              <rect
                x={isVertical ? "3.28271" : "2"}
                y={isVertical ? "22" : "15.5"}
                width={isVertical ? "18" : "16"}
                height="1"
                fill="#FFFFFF"
                fillOpacity={isVertical ? 0 : 0.9}
                className="transition-opacity duration-500"
              />
            </svg>
          </div>
          <GlobeLog className="hidden md:block" />
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
