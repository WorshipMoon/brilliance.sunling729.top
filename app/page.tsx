import "./page.css";
export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 id="typewriter" className="font-bold text-xl">Typewriter 打字机效果</h2>
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
    </div>
  );
}
