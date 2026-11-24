import { useEffect, useState } from "react";
import { LangContext, useLang } from "./langContext";

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") === "sl" ? "sl" : "en";
    } catch {
      return "en";
    }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // storage blocked
    }
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

// <T en="Projects" sl="Projekti" />
export function T({ en, sl }) {
  return useLang().lang === "sl" ? sl : en;
}
