import React from "react";
import { motion } from "framer-motion";


const skills = {
  "languages & frameworks": [
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Lua / Luau", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" },
  ],
  "data & backend": [
    { name: "MySQL",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Prisma",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", invert: true },
    { name: "Redis",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
  ],
};

const tools = [
  "VS Code", "Git & GitHub", "Vite", "After Effects",
  "Photoshop", "Raspberry Pi", "Docker",
  "Home Assistant", "REST APIs", "Figma", "Markdown", "AI"
];

function SkillChip({ name, icon, invert }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 border border-zinc-800 rounded-lg bg-zinc-900 hover:border-teal-400/30 hover:bg-teal-950/30 transition-all duration-200 cursor-default">
      <img
        src={icon}
        alt=""
        className={`w-[18px] h-[18px] object-contain shrink-0 ${invert ? "invert" : ""}`}
      />
      <span className="text-xs text-zinc-300 font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="w-full  py-90 px-6 bg-zinc-950 font-mono">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[11px] tracking-widest text-zinc-600 uppercase mb-2">what i work with</p>
          <h2 className="text-5xl font-serif font-normal text-zinc-50 leading-tight mb-3">
            skills &amp; <em className="text-teal-400 italic">tools</em>
          </h2>
          <div className="h-0.5 w-10 bg-teal-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="border-l-2 border-teal-400/20 pl-5 mb-10"
        >
          <p className="font-serif text-base text-zinc-400 leading-relaxed">
            I build web applications using{" "}
            <strong className="text-zinc-200 font-medium">Next.js and TypeScript</strong>, and I also have experience with{" "}
            <strong className="text-zinc-200 font-medium">Lua/Luau</strong> scripting. I build{" "}
            <strong className="text-zinc-200 font-medium">Discord</strong> bots, know{" "}
            <strong className="text-zinc-200 font-medium">Docker</strong> well, and am currently learning VM software such as{" "}
            <strong className="text-zinc-200 font-medium">Proxmox</strong>.
          </p>
        </motion.div>

        {Object.entries(skills).map(([group, items], gi) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * gi }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-[10px] tracking-widest text-zinc-600 uppercase pb-2 border-b border-zinc-800 mb-3">
              {group}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {items.map((skill) => (
                <SkillChip key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-2"
        >
          <p className="text-[10px] tracking-widest text-zinc-600 uppercase pb-2 border-b border-zinc-800 mb-3">
            tools &amp; workflow
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((item) => (
              <span
                key={item}
                className="text-[11px] text-zinc-500 border border-zinc-800 rounded px-2.5 py-1 tracking-wide hover:text-teal-400 hover:border-teal-400/30 transition-colors duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
