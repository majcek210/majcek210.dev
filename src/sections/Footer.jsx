import React from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 py-10 px-6 font-mono">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-50 font-serif text-lg font-normal mb-0.5">
            majcek<em className="text-teal-400 italic">210</em>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-5"
        >
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] tracking-widest text-zinc-600 uppercase hover:text-teal-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[11px] text-zinc-700"
        >
          © {year} - Built with react, vite & tailwind
        </motion.p>

      </div>
    </footer>
  );
}

export default Footer;