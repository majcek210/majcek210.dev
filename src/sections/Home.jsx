import React from "react";

const now = [
  { label: "Trstenko", text: "a desk assistant company, where I'm the CEO" },
  { label: "terra-widget", text: "a desktop widget for Hack Club's Terra, v1.1 just out", href: "https://github.com/majcek210/terra-widget" },
  { label: "coolvecity", text: "a free, open source alternative to MEE6", href: "https://github.com/majcek210/coolvecity" },
];

function Home() {
  return (
    <section id="home" className="w-full bg-zinc-950 px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="max-w-4xl mx-auto">
        <img
          src="/pfp-400.png"
          alt="My avatar, a cartoon bird in a red cap"
          width="88"
          height="88"
          className="w-20 h-20 sm:w-22 sm:h-22 rounded-full mb-8"
        />

        <h1 className="text-6xl sm:text-7xl font-serif text-zinc-50 leading-none mb-6">
          majcek210
        </h1>

        <p className="font-serif text-xl sm:text-2xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
          I'm Maj, a student at SERS Maribor and the CEO of Trstenko. I host
          most of what I build, which is how I ended up learning the
          infrastructure side.
        </p>

        <div className="font-mono text-sm text-zinc-400 mb-10 max-w-2xl">
          <p className="text-zinc-500 mb-3">Working on right now:</p>
          <ul className="space-y-2">
            {now.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} className="text-zinc-100 underline decoration-accent/60 underline-offset-4 hover:text-accent">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-zinc-100">{item.label}</span>
                )}
                <span className="text-zinc-400">, {item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="px-5 py-2.5 text-sm font-mono text-zinc-950 bg-accent rounded hover:bg-amber-300 transition-colors duration-200"
          >
            See projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-mono text-zinc-200 border border-zinc-700 rounded hover:border-zinc-400 transition-colors duration-200"
          >
            Write to me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
