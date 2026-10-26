import React, { useRef } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiTryhackme } from "react-icons/si";
import Turnstile from "react-turnstile";

function Contact() {
  const formRef = useRef(null);
  const turnstileRef = useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [turnstileToken, setTurnstileToken] = React.useState("");

  const apiUrl = import.meta.env.VITE_API_URL;
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const configError = !apiUrl || !turnstileSiteKey;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (configError) {
      setMessage("configuration error: missing environment variables.");
      return;
    }

    const form = formRef.current;
    if (!turnstileToken) {
      setMessage("Please finish the captcha first.");
      return;
    }

    const payload = {
      name: form.user_name.value.trim(),
      email: form.user_email.value.trim(),
      message: form.message.value.trim(),
      turnstileToken,
    };

    setLoading(true);
    if (import.meta.env.DEV) {
      console.log(payload);
    }

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "something went wrong.");
      }

      setMessage("Sent. I'll get back to you soon.");
      form.reset();
      setTurnstileToken("");
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
    } catch (error) {
      setMessage(error.message || "something went wrong.");
      console.log(error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const socials = [
    { href: "https://github.com/majcek210", label: "GitHub", icon: FiGithub },
    {
      href: "https://www.linkedin.com/in/maj-plenj%C5%A1ek-824716391",
      label: "LinkedIn",
      icon: FiLinkedin,
    },
    { href: "https://tryhackme.com/p/majcek210", label: "TryHackMe", icon: SiTryhackme },
  ];

  return (
    <section id="contact" className="w-full py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-zinc-50 mb-12">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block font-mono text-sm text-zinc-300 mb-2">
                Your name
              </label>
              <input
                type="text"
                name="user_name"
                required
                minLength={2}
                maxLength={50}
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded text-zinc-100 text-base focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                maxLength={255}
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded text-zinc-100 text-base focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                minLength={10}
                maxLength={2000}
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded text-zinc-100 text-base focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
              />
            </div>
            {configError ? (
              <p className="text-xs text-red-400">
                Configuration error: missing required environment variables.
              </p>
            ) : (
              <Turnstile
                ref={turnstileRef}
                sitekey={turnstileSiteKey}
                theme="dark"
                onVerify={(token) => {
                  setTurnstileToken(token);
                }}
                onExpire={() => {
                  setTurnstileToken("");
                }}
              />
            )}

            <button
              type="submit"
              disabled={loading || configError}
              className="px-6 py-2.5 font-mono text-sm text-zinc-950 bg-accent rounded hover:bg-amber-300 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {message && (
              <p
                className="font-mono text-sm text-accent"
              >
                {message}
              </p>
            )}
          </form>

          {/* Info */}
          <div
            className="flex flex-col justify-between gap-10"
          >
            <div>
              <p className="font-serif text-lg text-zinc-300 leading-relaxed mb-6">
                Questions about a project, a server problem, or just want to say hi?
                Write here. I usually answer within a day or two.
              </p>
            </div>

            <div>
              <p className="font-mono text-sm text-zinc-400 mb-3">Or find me here:</p>
              <div className="flex flex-col gap-2 font-mono text-sm">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center gap-2 text-zinc-200 hover:text-accent"
                  >
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
