import React from "react";

function About() {
  return (
    <section id="about" className="w-full py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-[1fr_1.6fr] gap-6 sm:gap-10">
        <h2 className="text-4xl sm:text-5xl font-serif text-zinc-50">About</h2>

        <div className="font-serif text-lg text-zinc-300 leading-relaxed space-y-5">
          <p>
            I'm a student at SERS (Srednja elektro-računalniška šola Maribor),
            still learning web and software development, mostly by trying
            things myself.
          </p>
          <p>
            Most of my time goes into building things and keeping the servers
            they run on alive. That's how I got into security and automation,
            and right now I'm learning cyber security on{" "}
            <a href="https://tryhackme.com/p/majcek210" className="text-zinc-100 underline decoration-accent/60 underline-offset-4 hover:text-accent">
              TryHackMe
            </a>{" "}
            and picking up Java.
          </p>
          <p>
            Outside code I use Adobe programs, mostly After Effects, where I
            made a 3D lyric video I'm really happy with.
          </p>
          <p className="font-mono text-sm text-zinc-400 leading-relaxed pt-2">
            Day to day: TypeScript, Next.js and Node, Discord bots, Docker and
            Linux, some Lua/Luau and Kotlin.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
