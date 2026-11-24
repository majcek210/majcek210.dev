import { useState } from "react";
import Unit, { Vent } from "./Unit";
import { Lcd, RepoLcd } from "./Lcd";
import { usePublicRepos, useRepo } from "../../hooks/useGithub";
import { coolvecitySnapshot, links, publicReposSnapshot, sshKey, terraSnapshot, tools } from "../../data/rack";

export function HeadUnit() {
  const repos = usePublicRepos(publicReposSnapshot);
  return (
    <header className="unit head">
      <div className="plate alu" style={{ "--h": 4 }}>
        <img className="avatar" src="/pfp-400.png" alt="My avatar, a cartoon bird in a red cap" width="400" height="400" />
        <div>
          <h1>I'm Maj. I build things and keep them running.</h1>
          <p>Student at SERS Maribor and CEO of Trstenko. Everything in this rack is mine, and most of it runs on servers I look after myself.</p>
          <p className="jump">
            Jump to <a href="#trstenko">Trstenko</a>, <a href="#terra">terra-widget</a>, <a href="#coolvecity">coolvecity</a>,{" "}
            <a href="#about">about me</a> or <a href="#contact">contact</a>.
          </p>
        </div>
        <div className="side">
          <Lcd top="GITHUB MAJCEK210" bottom={`${repos} PUBLIC REPOS`} title="From the GitHub API" />
        </div>
      </div>
    </header>
  );
}

export function TrstenkoUnit() {
  return (
    <Unit
      id="trstenko"
      height={3}
      handles="pull"
      open
      trayClass="split"
      face={
        <>
          <span className="eyes" aria-hidden="true"><i /><i /></span>
          <h2 className="tape">Trstenko</h2>
          <span className="blurb">A desk assistant that wakes up when you say its name. I'm the CEO.</span>
          <Vent />
        </>
      }
    >
      <img src="/trstenko.jpg" alt="Render of the Trstenko device: a light grey cube with a screen showing two square eyes" width="900" height="771" />
      <div>
        <p>A small assistant that sits on your desk and wakes up when you say its name. I lead the company and the work on its software.</p>
        <p>It's still in development. The render is what it will look like.</p>
      </div>
    </Unit>
  );
}

export function TerraUnit() {
  const info = useRepo("terra-widget", terraSnapshot);
  return (
    <Unit
      id="terra"
      plate="alu"
      height={2}
      handles="pull"
      trayClass="split"
      face={
        <>
          <img className="icon-print" src="/terra-widget.png" alt="" width="512" height="512" />
          <h2 className="tape">terra-widget</h2>
          <span className="blurb">Hack Club's Terra on your desktop. v1.1 came out on 25 Oct 2026.</span>
          <Vent />
          <RepoLcd info={info} />
        </>
      }
    >
      <div>
        <p>A desktop widget that shows your Terra water goal and working hours, so Terra doesn't need to stay open. It sits in a corner of the screen and lives in the tray.</p>
        <p>Your token is stored encrypted on your PC and only sent to Terra, and the installer version updates itself.</p>
        <p className="stack">TypeScript, Electron</p>
        <p className="links">
          <a href="https://github.com/majcek210/terra-widget">Code on GitHub</a>
          <a href="https://github.com/majcek210/terra-widget/releases">Download the installer</a>
        </p>
      </div>
      <img src="/terra-widget.png" alt="terra-widget app icon" width="512" height="512" style={{ maxWidth: 200 }} />
    </Unit>
  );
}

export function CoolvecityUnit() {
  const info = useRepo("coolvecity", coolvecitySnapshot);
  return (
    <Unit
      id="coolvecity"
      height={2}
      handles="pull"
      face={
        <>
          <h2 className="tape">coolvecity</h2>
          <span className="blurb">A free MEE6 alternative for Discord. Open source and early.</span>
          <span className="bays" aria-hidden="true"><span /><span /><span /><span /></span>
          <RepoLcd info={info} />
        </>
      }
    >
      <p>A Discord bot without subscriptions. It has welcome messages and warn, ban and unban so far, and it runs on mjx-client, the framework one unit down.</p>
      <p className="stack">TypeScript, discord.js</p>
      <p className="links"><a href="https://github.com/majcek210/coolvecity">Code on GitHub</a></p>
    </Unit>
  );
}

export function ToolUnit({ tool }) {
  const info = useRepo(tool.repo, tool.snapshot);
  return (
    <Unit
      plate="grey"
      face={
        <>
          <h3 className="tape">{tool.name}</h3>
          <span className="blurb">{tool.blurb}</span>
          <Vent />
          <RepoLcd info={info} />
        </>
      }
    >
      <p>{tool.text}</p>
      <p className="links"><a href={`https://github.com/majcek210/${tool.repo}`}>Code on GitHub</a></p>
    </Unit>
  );
}

export const ToolUnits = () => tools.map((t) => <ToolUnit key={t.repo} tool={t} />);

export function SloBlockUnit() {
  return (
    <div className="decom">
      <Unit
        plate="grey"
        height={2}
        handles="pull"
        face={
          <>
            <span className="hazard" aria-hidden="true" />
            <h2 className="tape">SloBlock / SMC</h2>
            <span className="blurb">The Slovenian Minecraft Championship.</span>
            <Vent />
            <span className="note">Decommissioned</span>
          </>
        }
      >
        <p>I co-owned SloBlock, a Slovenian Minecraft community, where we ran SMC, the Slovenian Minecraft Championship. I built the tournament website and the plugin that ran the PvP finals.</p>
      </Unit>
    </div>
  );
}

export function AboutUnit() {
  const [copied, setCopied] = useState("Copy key");
  const copy = (e) => {
    navigator.clipboard.writeText(sshKey).then(
      () => setCopied("Copied"),
      () => {
        const r = document.createRange();
        r.selectNodeContents(e.currentTarget.previousElementSibling);
        const s = getSelection();
        s.removeAllRanges();
        s.addRange(r);
        setCopied("Selected, press Ctrl+C");
      },
    );
  };
  return (
    <Unit
      id="about"
      plate="alu"
      face={
        <>
          <h2 className="tape">About me</h2>
          <span className="blurb">School, security and After Effects.</span>
          <Vent />
        </>
      }
    >
      <p>
        I'm at SERS (Srednja elektro-računalniška šola Maribor) and learn mostly by building things and keeping them running. Keeping my own servers alive got me into
        security, which I'm learning on <a href="https://tryhackme.com/p/majcek210">TryHackMe</a>. I'm also picking up Java.
      </p>
      <p>Outside code I use After Effects. The thing I'm proudest of there is a 3D lyric video.</p>
      <p className="stack">Most days: TypeScript, Next.js, Node, Docker, Linux. Some Lua, Luau and Kotlin.</p>
      <div className="key">
        <p className="stack" style={{ marginBottom: 4 }}>My SSH public key, if you're giving me access to a server:</p>
        <code>{sshKey}</code>
        <button className="copy" type="button" onClick={copy}>{copied}</button>
        <a className="dl" href="/id_ed25519.pub" download>Download .pub</a>
      </div>
    </Unit>
  );
}

export function PatchPanel() {
  const empty = [5, 6, 7, 8];
  return (
    <div className="unit patch">
      <div className="plate steel">
        <h2 className="tape patch-title">Elsewhere</h2>
        <div className="ports">
          {links.map((l, i) => (
            <a className="port" href={l.href} key={l.label}>
              <span className="lbl">{l.label}</span>
              <span className="jack"><span className="boot" style={{ "--c": l.cable }} /></span>
              <span className="num">{i + 1}</span>
            </a>
          ))}
          {empty.map((n) => (
            <span className="port" aria-hidden="true" key={n}>
              <span className="lbl empty">&nbsp;</span>
              <span className="jack" />
              <span className="num">{n}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
