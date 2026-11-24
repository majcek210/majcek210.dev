// What goes in the rack. `snapshot` is GitHub data from 2 Nov 2026,
// shown until the live API answers (or if it doesn't).

export const tools = [
  {
    repo: "mjx-client",
    name: "mjx-client",
    blurb: "My discord.js v14 framework, on npm.",
    text: "Commands, buttons and modals are files in folders instead of one giant switch statement.",
    snapshot: { pushed: "2026-10-08T16:48:22Z", lang: "TypeScript", stars: 1 },
  },
  {
    repo: "Misija",
    name: "Misija",
    blurb: "GPS mocking on Android, for QA.",
    text: "Fakes your phone's GPS position and lets you walk it around with a joystick in a floating panel.",
    snapshot: { pushed: "2026-10-06T06:53:32Z", lang: "Kotlin", stars: 0 },
  },
  {
    repo: "ghost-deps",
    name: "ghost-deps",
    blurb: "Finds Node packages you never use.",
    text: "Lists packages a project installs but never imports. Mostly written with AI, as an experiment to see how far that goes.",
    snapshot: { pushed: "2026-10-03T22:43:18Z", lang: "TypeScript", stars: 1 },
  },
];

export const terraSnapshot = { pushed: "2026-11-01T18:38:31Z", lang: "TypeScript", stars: 2 };
export const coolvecitySnapshot = { pushed: "2026-10-11T18:21:05Z", lang: "TypeScript", stars: 0 };
export const publicReposSnapshot = 15;

export const links = [
  { label: "GitHub", href: "https://github.com/majcek210", cable: "#2f6fd0" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maj-plenj%C5%A1ek-824716391", cable: "#e8c21c" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/majcek210", cable: "#c4161c" },
  { label: "SSH key", href: "#about", cable: "#2f9e52" },
];

export const sshKey =
  "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKut17t3fIPG3gCAx/NbaypxSWKZgEySgDi/hCkJjCK2 majcek210.dev";
