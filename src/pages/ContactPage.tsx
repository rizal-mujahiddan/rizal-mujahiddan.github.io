import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "rizal.mujahiddan@gmail.com";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [key]: e.target.value });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 max-w-3xl mx-auto">
      <header className="mb-12">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-white">
          Let's build something
        </h1>
        <p className="mt-4 text-slate-400 max-w-2xl">
          Open to backend engineering, application security, remote roles, and
          interesting freelance work. Reach out by email or the form below.
        </p>
      </header>

      {/* Direct channels */}
      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white text-sm transition-colors"
        >
          <Mail className="w-4 h-4" /> Email
        </a>
        <a
          href="https://github.com/rizal-mujahiddan"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white text-sm transition-colors"
        >
          <FaGithub className="w-4 h-4" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/rizal-mujahiddan"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white text-sm transition-colors"
        >
          <FaLinkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm text-slate-400 mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={form.message}
            onChange={update("message")}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
            placeholder="What are you building, or what role are you hiring for?"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-medium hover:bg-cyan-400 transition-colors"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
          {sent && (
            <span className="text-sm text-emerald-400">
              Opening your email client…
            </span>
          )}
        </div>

        <p className="text-xs text-slate-500 pt-2">
          This form opens your email client with the message pre-filled. No
          data is sent to a server.
        </p>
      </form>
    </main>
  );
}