import React, { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import { TbMenu4 } from "react-icons/tb";
import Logo from "../assets/pfp.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => setVisible(false), 3000);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 font-mono ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img src={Logo} alt="logo" className="w-7 h-7 rounded-full opacity-90" />
          <span className="hidden sm:block font-serif text-lg font-normal text-zinc-50 leading-none">
            majcek<em className="text-teal-400 italic">210</em>
          </span>
        </div>

        {/* Menu trigger — centered on lg */}
        <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 focus:outline-none"
            aria-label="open menu"
          >
            <TbMenu4 className="w-5 h-5" />
          </button>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="text-[11px] tracking-widest text-zinc-500 uppercase hover:text-teal-400 border border-zinc-800 hover:border-teal-400/30 rounded px-4 py-2 transition-all duration-200"
          >
            get in touch
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar;