// Content for the site. `pushedSnapshot` is GitHub data from 2-24 Nov 2026,
// shown until the live API answers (or if it doesn't).

export const pushedSnapshot = {
  "terra-widget": "2026-11-01T18:38:31Z",
  coolvecity: "2026-10-11T18:21:05Z",
  "mjx-client": "2026-10-08T16:48:22Z",
  gimCard: "2026-11-22T18:08:04Z",
  xplrclose: "2026-11-08T19:54:33Z",
  "ghost-deps": "2026-10-03T22:43:18Z",
};

// Each group shows its first three on the page; order here decides which.
export const projects = [
  {
    repo: "terra-widget",
    group: "own",
    image: "/terra-widget.png",
    stack: "TypeScript, Electron",
    en: "Hack Club's Terra on your desktop: water goal and working hours in a corner of the screen. v1.1 came out on 25 Oct 2026.",
    sl: "Hack Clubov Terra na namizju: cilj pitja vode in delovne ure v kotu zaslona. Verzija 1.1 je izšla 25. 10. 2026.",
  },
  {
    repo: "coolvecity",
    group: "own",
    word: "cool",
    stack: "TypeScript",
    en: "A free MEE6 alternative for Discord. Open source and early, built on my own mjx-client.",
    sl: "Brezplačna alternativa MEE6 za Discord. Odprta koda, zgodnja faza, zgrajen na mojem mjx-client.",
  },
  {
    repo: "gimCard",
    group: "own",
    word: "gim",
    stack: "TypeScript, Express",
    en: "Cards with your GitHub stats to put in a profile README. Enter a username, hit generate, embed the card. Live at gimcard.majcek210.dev.",
    sl: "Kartice z GitHub statistiko za README profila. Vpišeš uporabniško ime, klikneš generate in vstaviš kartico. Teče na gimcard.majcek210.dev.",
  },
  {
    repo: "xplrclose",
    group: "own",
    word: "xplr",
    stack: "Java, Fabric",
    en: "My first Fabric mod, for Minecraft 26.3. Warns you when a player comes within a set radius, draws a box around them, and lets you ignore people.",
    sl: "Moj prvi Fabric mod za Minecraft 26.3. Opozori te, ko se igralec približa na nastavljeno razdaljo, ga obkroži s škatlo in omogoča ignoriranje ljudi.",
  },
  {
    repo: "mjx-client",
    group: "ai",
    word: "mjx",
    stack: "TypeScript",
    en: "My discord.js v14 framework, on npm. Commands, buttons and modals are files in folders instead of one giant switch.",
    sl: "Moj framework za discord.js v14 na npm. Ukazi, gumbi in modali so datoteke v mapah namesto enega ogromnega switcha.",
  },
  {
    repo: "ghost-deps",
    group: "ai",
    word: "npm",
    stack: "TypeScript",
    en: "Lists Node packages a project installs but never imports. Mostly written with AI, to see how far that goes.",
    sl: "Izpiše Node pakete, ki so nameščeni, a nikjer uvoženi. Večinoma napisan z AI, kot poskus, kako daleč to pride.",
  },
];

export const links = [
  { label: "GitHub", handle: "majcek210", href: "https://github.com/majcek210" },
  { label: "LinkedIn", handle: "Maj Plenjšek", href: "https://www.linkedin.com/in/maj-plenj%C5%A1ek-824716391" },
  { label: "TryHackMe", handle: "majcek210", href: "https://tryhackme.com/p/majcek210" },
];

// id_rsa.pub, the key I actually connect with (no passphrase).
export const sshKey =
  "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDpcY6CHmhVXB3wp42yIRJpvg2FH53u6Yq1i+GkvGODs7pardzhtMqP6XYqiG3DO1uVIwrpRpwKs7k0Ts3Y2wc86UxWqp/IntShj4NAmtnfRqeZCZM1KRPHImgfbx+To284ev2gTL9BP+ncV7a8DdAhH0GBaLLJkMs/R3AxTbEUIKcb2L6i384Wg7VLmEpGW6SlnIdcPBgP09C+QyIelnBxeftQV0JVG/VxHhQBQ2He4ftfEtjnHlF42MkSloNz31kiI6nFWgxvV9Jmo5THu5MH5Bi8j1/OQEypksClvEFVEoF7F/QvJ1xjEgKg4Hrh1GEKnH1lW+tNmUwo1RSanIqBN3f1+5Tvk1j9tynZgxGtGhRfyNRxOVCF36Dv+OCTrwxjaD0lgCmpcpYnwgOkZ2S0eZZgMfUVDW6Q0lGRBjXqSNTo+TPn3dMRyyFKgIm5Qk6XtGYR/Z3iwqDHwT7y9DfVArBkX9Xbdsa7uNXl5eJ5hTzvW0EpfCJ2DdZfwlL5pC8= majcek210.dev";
