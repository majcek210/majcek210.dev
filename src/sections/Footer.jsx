import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 py-8 px-6 font-mono text-sm text-zinc-400">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-2">
        <p>© {year} Maj (majcek210)</p>
        <p>Maribor, Slovenia</p>
      </div>
    </footer>
  );
}

export default Footer;
