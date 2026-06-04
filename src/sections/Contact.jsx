import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Turnstile from "react-turnstile";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [turnstileToken, setTurnstileToken] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;

    const payload = {
      name: form.user_name.value.trim(),
      email: form.user_email.value.trim(),
      message: form.message.value.trim(),
    };

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setMessage("sent — i'll get back to you soon.");
      form.reset();
    } catch (error) {
      setMessage("something went wrong.");
      console.log(error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const socials = [
    { href: "https://github.com/majcek210", label: "github", icon: FiGithub },
    { href: "https://www.linkedin.com/in/maj-plenj%C5%A1ek-824716391", label: "linkedin", icon: FiLinkedin },
  ];

  return (
    <section id="contact" className="w-full py-20 px-6 bg-zinc-950 font-mono">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[11px] tracking-widest text-zinc-600 uppercase mb-2">
            say hello
          </p>
          <h2 className="text-5xl font-serif font-normal text-zinc-50 leading-tight mb-3">
            get in <em className="text-teal-400 italic">touch</em>
          </h2>
          <div className="h-0.5 w-10 bg-teal-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <label className="block text-[10px] tracking-widest text-zinc-600 uppercase mb-2">
                name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="your name"
                required
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded text-zinc-200 placeholder-zinc-700 text-sm focus:outline-none focus:border-teal-400/50 transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest text-zinc-600 uppercase mb-2">
                email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded text-zinc-200 placeholder-zinc-700 text-sm focus:outline-none focus:border-teal-400/50 transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-widest text-zinc-600 uppercase mb-2">
                message
              </label>
              <textarea
                name="message"
                placeholder="what's on your mind..."
                rows="5"
                required
                className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded text-zinc-200 placeholder-zinc-700 text-sm focus:outline-none focus:border-teal-400/50 transition-colors duration-200 resize-none"
              />
            </div>
            <Turnstile
              sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onVerify={(token) => {
                setTurnstileToken(token);
              }}
              onExpire={() => {
                setTurnstileToken("");
              }}
            />

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 text-sm text-teal-400 border border-teal-400/40 rounded hover:border-teal-400 hover:bg-teal-400/5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "sending..." : "send message"}
            </button>

            {message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-teal-400 text-xs"
              >
                {message}
              </motion.p>
            )}
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-10"
          >
            <div>
              <p className="font-serif text-base text-zinc-400 leading-relaxed mb-6">
                Have something to say, or just want to say hi? Contact me, I usually respond in 1-2 days.
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-widest text-zinc-600 uppercase mb-4 pb-2 border-b border-zinc-800">
                elsewhere
              </p>
              <div className="flex gap-3">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2.5 border border-zinc-800 rounded text-zinc-500 hover:text-teal-400 hover:border-teal-400/30 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
