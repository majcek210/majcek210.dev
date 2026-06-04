import React from "react";
import { motion } from "framer-motion";

const facts = [
  {
    label: "background",
    value: "self-taught, learning by expirimenting",
  },
  {
    label: "right now",
    value: "full-stack apps, mantaining systems",
  },
  {
    label: "also into",
    value: "AI, opensource and sideprojects",
  },
];

function About() {
  return (
    <section
      id="about"
      className="w-full py-90 px-6 bg-zinc-950 font-mono"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[11px] tracking-widest text-zinc-600 uppercase mb-2">
            a bit
          </p>
          <h2 className="text-5xl font-serif font-normal text-zinc-50 leading-tight mb-3">
            about <em className="text-teal-400 italic">me</em>
          </h2>
          <div className="h-0.5 w-10 bg-teal-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-5 mb-10"
        >
          <p className="font-serif text-base text-zinc-400 leading-relaxed">
            I'm a young developer. While studying at SERS(Srednja
            Elektro-Računalniška Šola Maribor), I am still learning{" "}
            <strong className="text-zinc-200 font-medium">
               web & software development.
            </strong>
          </p>
          <p className="font-serif text-base text-zinc-400 leading-relaxed">
            Most of my time goes into{" "}
            <strong className="text-zinc-200 font-medium">
              maintaining our servers and learning new stuff
            </strong>
            . Meanwhile, I also have some expirience in Adobe programs as After Effects where, I made a really cool 3D lyrics video/animation.
          </p>
          <p className="font-serif text-base text-zinc-400 leading-relaxed">
           I care about security and automation, so I can keep our servers running.
          </p>
        </motion.div>

        <div className="h-px w-full bg-zinc-800 mb-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 border border-zinc-800 rounded-lg overflow-hidden"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="px-5 py-4 bg-zinc-900/50">
              <p className="text-[10px] tracking-widest text-zinc-600 uppercase mb-2">
                {fact.label}
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {fact.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
