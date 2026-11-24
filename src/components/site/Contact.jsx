import { useRef, useState } from "react";
import Turnstile from "react-turnstile";
import { links } from "../../data/site";
import { T } from "./lang";
import { useLang } from "./langContext";

const MSG = {
  en: {
    captcha: "Tick the captcha first, then send again.",
    sent: "Sent. I'll reply to the email you gave.",
    failed: "That didn't go through. Try again, or message me on LinkedIn.",
    invalid: "Check the fields: a name, a real email and at least 10 characters of message.",
    busy: "Too many messages from your connection. Try again in 15 minutes.",
  },
  sl: {
    captcha: "Najprej potrdi captcho, nato pošlji znova.",
    sent: "Poslano. Odgovoril bom na e-mail, ki si ga vpisal.",
    failed: "Ni šlo skozi. Poskusi znova ali mi piši na LinkedInu.",
    invalid: "Preveri polja: ime, pravi e-mail in vsaj 10 znakov sporočila.",
    busy: "Preveč sporočil z tvoje povezave. Poskusi čez 15 minut.",
  },
};

// Posts to the contact.majcek210.dev /api/contact endpoint, behind Turnstile.
// Limits match the server: name 2-50, email up to 255, message 10-2000.
export default function Contact() {
  const { lang } = useLang();
  const formRef = useRef(null);
  const turnstileRef = useRef(null);
  const [token, setToken] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { kind: "ok" | "err", text }

  const apiUrl = import.meta.env.VITE_API_URL;
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const ready = Boolean(apiUrl && siteKey);

  async function send(e) {
    e.preventDefault();
    if (!ready) return;
    if (!token) {
      setStatus({ kind: "err", text: MSG[lang].captcha });
      return;
    }
    const f = formRef.current;
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.user_name.value.trim(),
          email: f.user_email.value.trim(),
          message: f.message.value.trim(),
          turnstileToken: token,
          website: f.website.value,
        }),
      });
      if (!res.ok) {
        const key = res.status === 422 ? "invalid" : res.status === 429 ? "busy" : res.status === 400 ? "captcha" : "failed";
        setStatus({ kind: "err", text: MSG[lang][key] });
        return;
      }
      setStatus({ kind: "ok", text: MSG[lang].sent });
      f.reset();
    } catch {
      setStatus({ kind: "err", text: MSG[lang].failed });
    } finally {
      setToken("");
      turnstileRef.current?.reset();
      setSending(false);
    }
  }

  return (
    <div className="contact">
      <form className="box note" ref={formRef} onSubmit={send}>
        <p className="intro">
          <T
            en="About Trstenko, a bug in one of my repos, or something you'd like built. It goes straight to my inbox."
            sl="O Trstenku, napaki v kateremu od mojih repozitorijev ali nečem, kar bi rad, da naredim. Pride naravnost v moj nabiralnik."
          />
        </p>
        <div className="row">
          <label>
            <span><T en="Your name" sl="Ime" /></span>
            <input name="user_name" required minLength={2} maxLength={50} autoComplete="name" />
          </label>
          <label>
            <span><T en="Email I should reply to" sl="E-mail za odgovor" /></span>
            <input name="user_email" type="email" required maxLength={255} autoComplete="email" />
          </label>
        </div>
        {/* honeypot: hidden from people, bots fill it and the API drops the message */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
        <label>
          <span><T en="Message" sl="Sporočilo" /></span>
          <textarea name="message" rows={6} required minLength={10} maxLength={2000} />
        </label>

        {ready ? (
          <div className="send">
            <Turnstile
              ref={turnstileRef}
              sitekey={siteKey}
              theme="dark"
              language={lang}
              onVerify={setToken}
              onExpire={() => setToken("")}
            />
            <button type="submit" disabled={sending}>
              {sending ? <T en="Sending…" sl="Pošiljam…" /> : <T en="Send message" sl="Pošlji" />}
            </button>
          </div>
        ) : (
          <p className="status err">
            <T
              en="The form isn't connected on this copy of the site. The links on the right work."
              sl="Obrazec na tej kopiji strani ni povezan. Povezave desno delujejo."
            />
          </p>
        )}
        <p className={`status ${status?.kind ?? ""}`} role="status">{status?.text}</p>
      </form>

      <div className="else">
        {links.map((l) => (
          <a key={l.label} href={l.href}>
            {l.label} <span>{l.handle}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
