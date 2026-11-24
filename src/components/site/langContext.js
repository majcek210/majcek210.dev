import { createContext, useContext } from "react";

export const LangContext = createContext({ lang: "en", setLang: () => {} });

export const useLang = () => useContext(LangContext);

export function formatDate(iso, lang) {
  return new Date(iso).toLocaleDateString(lang === "sl" ? "sl-SI" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
