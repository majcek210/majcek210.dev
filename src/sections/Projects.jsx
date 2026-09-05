import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "This site is built with React, Vite, and Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Mjx client",
    description:
      "Mjx client is a discord.js wrapper that supports file based component handling.",
    tags: ["Discord.js", "TypeScript", "npm"],
    github: "https://github.com/majcek210/mjx-client",
  },
  {
    id: 3,
    title: "Ghost deps",
    description:
      "A project made with ai that detects ghost and unused dependencies in Node.js projects.",
    tags: ["TypeScript", "AI", "npm"],
    github: "https://github.com/majcek210/ghost-deps",
  },
];

function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-6 bg-zinc-950 font-mono">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[11px] tracking-widest text-zinc-600 uppercase mb-2">
            things i've built
          </p>
          <h2 className="text-5xl font-serif font-normal text-zinc-50 leading-tight mb-3">
            my <em className="text-teal-400 italic">projects</em>
          </h2>
          <div className="h-0.5 w-10 bg-teal-400" />
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row sm:items-start gap-6 p-6 border border-zinc-800 rounded-lg bg-zinc-900/40 hover:border-zinc-700 transition-all duration-200"
            >
              {/* Index */}
              <span className="text-[11px] text-zinc-700 pt-0.5 shrink-0 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base text-zinc-200 font-medium mb-2 group-hover:text-teal-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-serif text-sm text-zinc-500 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wide text-zinc-600 border border-zinc-800 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 shrink-0">
                {project.github && project.github !== "#" ? (
                  <a
                    href={project.github}
                    aria-label="github"
                    className="text-zinc-600 hover:text-teal-400 transition-colors duration-200"
                  >
                    <FiGithub size={17} />
                  </a>
                ) : (
                  <span aria-disabled="true" className="text-zinc-800 cursor-not-allowed">
                    <FiGithub size={17} />
                  </span>
                )}
                {project.demo && project.demo !== "#" ? (
                  <a
                    href={project.demo}
                    aria-label="demo"
                    className="text-zinc-600 hover:text-teal-400 transition-colors duration-200"
                  >
                    <FiExternalLink size={17} />
                  </a>
                ) : project.demo ? (
                  <span aria-disabled="true" className="text-zinc-800 cursor-not-allowed">
                    <FiExternalLink size={17} />
                  </span>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="https://github.com/majcek210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-widest text-zinc-600 uppercase hover:text-teal-400 border border-zinc-800 hover:border-teal-400/30 rounded px-4 py-2 transition-all duration-200"
          >
            more on github →
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;