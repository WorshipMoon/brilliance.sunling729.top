import "./page.css";
import { GitHubLog } from "@/components/Logo/Logo";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <a
        href="https://github.com/WorshipMoon/brilliance.sunling729.top"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-2 text-blue-500">
          <span>源码</span>
          <GitHubLog />
        </div>
      </a>
      <div>这个站的构建比较随意，放一些展示的效果，目录在博客页面</div>
      <h2 id="typewriter" className="font-bold text-xl mt-8">
        Typewriter 打字机效果
      </h2>
      <div>
        <p className="cus1">Brilliance</p>
      </div>
      <div>下方css在压缩之后会失效，已经限制了压缩模块</div>
      <div className="cus2-container mt-4">
        <p className="cus2-original">
          Picasso had a saying. He said, “Good artists copy. Great artists
          steal.” And we have always been shameless about stealing great ideas.
          And I think part of what made the Macintosh great was that the people
          working on it were musicians and poets and artists and zoologists and
          historians who also happened to be the best computer scientists in the
          world.
        </p>
        <p className="cus2">
          <span className="text">
            Picasso had a saying. He said, “Good artists copy. Great artists
            steal.” And we have always been shameless about stealing great
            ideas. And I think part of what made the Macintosh great was that
            the people working on it were musicians and poets and artists and
            zoologists and historians who also happened to be the best computer
            scientists in the world.
          </span>
        </p>
      </div>
      <div className="mt-4">
        <p className="cus3">
          Picasso had a saying.
          <span className="type">
            {" "}
            He said, “Good artists copy. Great artists steal.” And we have
            always been shameless about stealing great ideas. And I think part
            of what made the Macintosh great was that the people working on it
            were musicians and poets and artists and zoologists and historians
            who also happened to be the best computer scientists in the world.
          </span>
        </p>
      </div>
      <div>
        <h2 className="font-bold text-xl mt-8">目录</h2>
        <div className="flex flex-col gap-2 pt-2">
          <Link href="/" className="text-blue-500 underline underline-offset-4">
            Typewriter 打字机效果
          </Link>
          <a
            className="text-blue-500 underline underline-offset-4"
            href="/Nav/xiaomi"
            rel="noopener noreferrer"
          >
            仿小米汽车
          </a>
        </div>
      </div>
    </div>
  );
}
