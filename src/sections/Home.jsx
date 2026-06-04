import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen relative bg-zinc-950 overflow-hidden flex items-center justify-center px-6"
    >
      <motion.div
        className="z-10 max-w-2xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
        }}
      >
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-[11px] tracking-widest text-zinc-600 uppercase font-mono mb-4"
        >
          hey, i'm
        </motion.p>

        <motion.h1
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
          className="text-6xl sm:text-7xl font-serif font-normal text-zinc-50 leading-tight mb-3"
        >
          Majcek<em className="text-teal-400 italic">210</em>
        </motion.h1>

        <motion.div
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } } }}
          style={{ originX: 0 }}
          className="h-0.5 w-10 bg-teal-400 mb-8"
        />

        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="font-serif text-xl text-zinc-400 leading-relaxed mb-4"
        >
          Student & Developer
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="font-mono text-sm text-zinc-600 leading-relaxed mb-10 max-w-md"
        >
          I try to expiriement with many diffrent things and learn along the way.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
          className="flex gap-3 flex-wrap"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 text-sm font-mono text-teal-400 border border-teal-400/40 rounded hover:border-teal-400 hover:bg-teal-400/5 transition-all duration-200"
          >
            see my work
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-mono text-zinc-400 border border-zinc-800 rounded hover:border-zinc-600 hover:text-zinc-200 transition-all duration-200"
          >
            get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-zinc-700 uppercase flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>scroll</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

export default Home;