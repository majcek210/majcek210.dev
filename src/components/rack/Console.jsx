import { useRef, useState } from "react";
import Turnstile from "react-turnstile";
import Unit, { Vent } from "./Unit";

// KVM console drawer. Posts to the same /api/contact endpoint as before, behind Turnstile.
export default function Console() {
  const formRef = useRef(null);
  const turnstileRef = useRef(null);
  const [token, setToken] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const configError = !apiUrl || !siteKey;

  async function send(e) {
    e.preventDefault();
    if (configError) return;
    if (!token) {
      setStatus("Finish the captcha first, then press Send again.");
      return;
    }
    const f = formRef.current;
    setSending(true);
    setStatus("");
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.user_name.value.trim(),
          email: f.user_email.value.trim(),
          message: f.message.value.trim(),
          turnstileToken: token,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "The message didn't go through. Try again, or write to me on LinkedIn.");
      setStatus("Sent. I'll reply to the email you gave.");
      f.reset();
      setToken("");
      turnstileRef.current?.reset();
    } catch (err) {
      setStatus(err.message || "The message didn't go through. Try again, or write to me on LinkedIn.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="console">
      <Unit
        id="contact"
        plate="grey"
        open
        face={
          <>
            <h2 className="tape">Console</h2>
            <span className="blurb">Write to me from here.</span>
            <Vent />
          </>
        }
      >
        <form
          className="kvm"
          ref={formRef}
          onSubmit={send}
          onKeyDown={(e) => e.key === "Enter" && e.ctrlKey && formRef.current.requestSubmit()}
        >
          <div className="screen">
            <h3>Write to me</h3>
            <p>About Trstenko, a bug in one of my repos, or something you'd like built.</p>
            <div className="fields">
              <div>
                <label htmlFor="cf-name">Your name</label>
                <input id="cf-name" name="user_name" required minLength={2} maxLength={50} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="user_email" type="email" required maxLength={255} autoComplete="email" />
              </div>
              <div className="full">
                <label htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" name="message" required minLength={10} maxLength={2000} />
              </div>
            </div>
            {configError ? (
              <p className="config-error">The contact form isn't set up on this copy of the site. GitHub or LinkedIn work instead.</p>
            ) : (
              <div className="captcha">
                <Turnstile ref={turnstileRef} sitekey={siteKey} theme="dark" onVerify={setToken} onExpire={() => setToken("")} />
              </div>
            )}
            <p id="status" role="status">{status}</p>
          </div>
          <div className="keyboard">
            <p>Ctrl + Enter works too.</p>
            <button className="enter" type="submit" disabled={sending || configError}>
              {sending ? "Sending…" : "Send ⏎"}
            </button>
          </div>
        </form>
      </Unit>
    </div>
  );
}
