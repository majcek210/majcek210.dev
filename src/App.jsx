import { useState } from "react";
import Contact from "./components/site/Contact";
import { DotWord, Face } from "./components/site/Dots";
import { LangProvider, T } from "./components/site/lang";
import { formatDate, useLang } from "./components/site/langContext";
import { projects, pushedSnapshot, sshKey } from "./data/site";
import { useRecentPushes } from "./hooks/useGithub";

function Header() {
  const { lang, setLang } = useLang();
  return (
    <header className="top">
      <div className="wrap">
        <a className="me" href="#top">
          <img src="/pfp-400.png" alt="" width="26" height="26" />
          majcek210
        </a>
        <nav>
          <a href="#projects"><T en="Projects" sl="Projekti" /></a>
          <a href="#trstenko">Trstenko</a>
          <a href="#about"><T en="About" sl="O meni" /></a>
          <a href="#contact"><T en="Contact" sl="Kontakt" /></a>
        </nav>
        <div className="lang" role="group" aria-label="Language">
          <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          <button type="button" aria-pressed={lang === "sl"} onClick={() => setLang("sl")}>SL</button>
        </div>
      </div>
    </header>
  );
}

function Card({ p, pushed }) {
  const { lang } = useLang();
  const name = p.repo;
  const date = pushed[p.repo];
  const inner = (
    <>
      {p.image ? (
        <div className="cv terra">
          <img src={p.image} alt={`${name} app icon`} width="540" height="540" />
        </div>
      ) : (
        <div className="cv"><DotWord word={p.word} /></div>
      )}
      <div className="b">
        <h3>{name}</h3>
        <p>{p[lang]}</p>
        <div className="m">
          <span>{p.stack}</span>
          {date && <time dateTime={date}>{formatDate(date, lang)}</time>}
        </div>
      </div>
    </>
  );
  return <a className="card" href={`https://github.com/majcek210/${p.repo}`}>{inner}</a>;
}

function SshKey() {
  const [copied, setCopied] = useState(false);
  async function copy(e) {
    try {
      await navigator.clipboard.writeText(sshKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      const code = e.currentTarget.previousSibling;
      const r = document.createRange();
      r.selectNodeContents(code);
      getSelection().removeAllRanges();
      getSelection().addRange(r);
    }
  }
  return (
    <div className="key">
      <code title={sshKey}>{sshKey}</code>
      <button type="button" onClick={copy}>
        {copied ? <T en="Copied" sl="Kopirano" /> : <T en="Copy key" sl="Kopiraj" />}
      </button>
    </div>
  );
}

function Site() {
  const { lang } = useLang();
  const { pushed, live } = useRecentPushes(pushedSnapshot);
  const recent = Object.entries(pushed).sort((a, b) => b[1].localeCompare(a[1])).slice(0, 5);

  return (
    <>
      <Header />
      <main id="top" className="wrap">
        <div className="hero">
          <Face />
          <h1>majcek210</h1>
          <p className="lede">
            <T
              en="I'm Maj. I run Trstenko, study at SERS Maribor, and code my own projects and host them myself, on my own servers."
              sl="Sem Maj. Vodim Trstenko, hodim na SERŠ Maribor ter sam programiram svoje projekte in jih gostim na svojih strežnikih."
            />
          </p>
        </div>

        <section id="projects">
          <div className="head">
            <h2><T en="Projects" sl="Projekti" /></h2>
            <a className="pill" href="https://github.com/majcek210?tab=repositories">
              <T en="All repositories" sl="Vsi repozitoriji" />
            </a>
          </div>
          <div className="group">
            <h3><T en="Written by me" sl="Napisal sam" /></h3>
            <p><T en="Code I wrote myself, without AI." sl="Kodo sem napisal sam, brez AI." /></p>
          </div>
          <div className="grid">
            {projects.filter((p) => p.group === "own").slice(0, 3).map((p) => <Card key={p.repo} p={p} pushed={pushed} />)}
          </div>
          <div className="group">
            <h3><T en="Built with AI help" sl="Narejeno s pomočjo AI" /></h3>
            <p>
              <T
                en="My ideas and design, with a good part of the code written by AI."
                sl="Moje ideje in zasnova, velik del kode pa je napisal AI."
              />
            </p>
          </div>
          <div className="grid">
            {projects.filter((p) => p.group === "ai").slice(0, 3).map((p) => <Card key={p.repo} p={p} pushed={pushed} />)}
          </div>
        </section>

        <div className="trst" id="trstenko">
          <div className="t">
            <h2>Trstenko</h2>
            <p>
              <strong>
                <T
                  en="A small assistant that sits on your desk and wakes up when you say its name."
                  sl="Majhen pomočnik, ki stoji na mizi in se zbudi, ko izgovoriš njegovo ime."
                />
              </strong>
            </p>
            <p>
              <T
                en="It's still in development; the render is what it will look like. I lead the company and the work on its software."
                sl="Še je v razvoju, render kaže, kako bo izgledal. Vodim podjetje in razvoj programske opreme."
              />
            </p>
            <p className="role"><T en="I'm the CEO." sl="Sem direktor." /></p>
          </div>
          <img
            src="/trstenko.jpg"
            alt="Render of the Trstenko device: a light grey cube with a screen showing two square eyes"
            width="900"
            height="771"
          />
        </div>

        <section id="about">
          <div className="head"><h2><T en="About" sl="O meni" /></h2></div>
          <div className="two">
            <div className="box about">
              <p>
                <T
                  en="I'm a student at SERS Maribor. Most of my free time goes into Trstenko, keeping my own servers running, and learning new stuff."
                  sl="Sem dijak na SERŠ Maribor. Večino prostega časa porabim za Trstenko, vzdrževanje svojih strežnikov in učenje novih stvari."
                />
              </p>
              <p className="q">
                <T
                  en="Right now I'm learning Java, and I do cyber security rooms on TryHackMe."
                  sl="Trenutno se učim Javo, na TryHackMe pa rešujem naloge iz kibernetske varnosti."
                />
              </p>
              <p className="q">
                <T
                  en="Before Trstenko I built the website and the PvP finals plugin for SMC, the Slovenian Minecraft Championship."
                  sl="Pred Trstenkom sem naredil spletno stran in plugin za PvP finale za SMC, slovensko prvenstvo v Minecraftu."
                />
              </p>
              <SshKey />
            </div>
            <div className="box">
              <h3><T en="Last pushed" sl="Zadnji pushi" /></h3>
              <ul className="log">
                {recent.map(([name, date]) => (
                  <li key={name}>
                    <a href={`https://github.com/majcek210/${name}`}>{name}</a>
                    <span>{formatDate(date, lang)}</span>
                  </li>
                ))}
              </ul>
              <p className="src">
                {live ? <T en="Live from GitHub." sl="V živo z GitHuba." /> : <T en="GitHub snapshot from 2 Nov 2026." sl="Posnetek z GitHuba, 2. 11. 2026." />}
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="head"><h2><T en="Contact" sl="Kontakt" /></h2></div>
          <Contact />
        </section>
      </main>

      <footer className="bottom">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Maj Plenjšek</span>
          <span>~ live, love open source</span>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  );
}
