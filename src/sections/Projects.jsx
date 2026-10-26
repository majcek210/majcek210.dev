import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Current work first, smaller things as one line each, finished things at the end.
const projects = [
  {
    title: "Trstenko",
    role: "CEO",
    description:
      "A small assistant that sits on your desk and wakes up when you say its name. I lead the company and the work on its software. It's still in development, and the render above is what it will look like.",
    image: "/trstenko.jpg",
  },
  {
    title: "terra-widget",
    role: "My latest project, v1.1",
    description:
      "A desktop widget for Hack Club's Terra that shows your water goal and working hours, so you don't need Terra open all the time. It sits in a corner of the screen and lives in the tray. Your token is stored encrypted on your PC and is only sent to Terra, and the installer version updates itself.",
    stack: "TypeScript, Electron",
    github: "https://github.com/majcek210/terra-widget",
    demo: "https://github.com/majcek210/terra-widget/releases",
    demoLabel: "download",
  },
  {
    title: "coolvecity",
    role: "Open source, early development",
    description:
      "A Discord bot that wants to be a free alternative to MEE6, without subscriptions. It has welcome messages and warn, ban and unban so far, and it's built on mjx-client, my own framework.",
    stack: "TypeScript, discord.js",
    github: "https://github.com/majcek210/coolvecity",
  },
  {
    title: "mjx-client",
    description: "A discord.js v14 framework where commands, buttons and modals are files in folders. On npm.",
    github: "https://github.com/majcek210/mjx-client",
    small: true,
  },
  {
    title: "Misija",
    description: "An Android QA tool that mocks your GPS position and lets you walk it around with a joystick in a floating panel.",
    github: "https://github.com/majcek210/Misija",
    small: true,
  },
  {
    title: "ghost-deps",
    description: "Finds dependencies a Node project installs but never uses. Mostly written with AI, as an experiment.",
    github: "https://github.com/majcek210/ghost-deps",
    small: true,
  },
];

const past = [
  {
    title: "SloBlock and SMC",
    description:
      "I co-owned SloBlock, a Slovenian Minecraft community, where we ran SMC, the Slovenian Minecraft Championship. I built the tournament website and the plugin that ran the PvP finals.",
  },
];

function Links({ project }) {
  return (
    <div className="flex gap-4 shrink-0 font-mono text-sm">
      {project.github && (
        <a href={project.github} className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-accent">
          <FiGithub size={15} /> code
        </a>
      )}
      {project.demo && (
        <a href={project.demo} className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-accent">
          <FiExternalLink size={15} /> {project.demoLabel || project.demo.replace("https://", "")}
        </a>
      )}
    </div>
  );
}

function Projects() {
  const big = projects.filter((p) => !p.small);
  const small = projects.filter((p) => p.small);

  return (
    <section id="projects" className="w-full py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-zinc-50 mb-12">Projects</h2>

        <div className="space-y-16">
          {big.map((project) => (
            <article key={project.title} className="grid sm:grid-cols-[1fr_1.6fr] gap-6 sm:gap-10">
              <div>
                <h3 className="text-2xl font-serif text-zinc-50 mb-2">{project.title}</h3>
                <p className="font-mono text-sm text-zinc-400 mb-4">{project.role}</p>
                <Links project={project} />
              </div>
              <div>
                {project.image && (
                  <img
                    src={project.image}
                    alt="Render of the Trstenko device: a white cube with a screen showing two eyes"
                    width="900"
                    height="771"
                    loading="lazy"
                    className="w-full h-auto rounded-md mb-5"
                  />
                )}
                <p className="font-serif text-lg text-zinc-300 leading-relaxed mb-3">{project.description}</p>
                {project.stack && <p className="font-mono text-sm text-zinc-500">{project.stack}</p>}
              </div>
            </article>
          ))}
        </div>

        <h3 className="text-2xl font-serif text-zinc-50 mt-20 mb-4">Smaller things</h3>
        <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
          {small.map((project) => (
            <li key={project.title} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="font-mono text-zinc-100 sm:w-36 shrink-0">{project.title}</span>
              <span className="font-serif text-zinc-300 flex-1">{project.description}</span>
              <Links project={project} />
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-serif text-zinc-50 mt-16 mb-4">Past</h3>
        <ul className="border-y border-zinc-800">
          {past.map((project) => (
            <li key={project.title} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="font-mono text-zinc-100 sm:w-36 shrink-0">{project.title}</span>
              <span className="font-serif text-zinc-400 flex-1">{project.description}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-mono text-sm">
          <a href="https://github.com/majcek210" className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 hover:text-accent">
            Everything else is on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
