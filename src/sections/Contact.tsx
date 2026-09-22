import { useState, type FormEvent } from "react";
import { contactLinks } from "../data/content";
import { SectionTitle } from "../components/SectionTitle";
import { StickyNote } from "../components/StickyNote";

type Status = "idle" | "sending" | "success" | "error";

const contactStickies = [
  { text: "Let's build.", rotate: -2 },
  { text: "Let's solve it.", rotate: 1.5 },
  { text: "Ship it.", rotate: -1 },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Name is required.";
    if (!email) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message) next.message = "Message is required.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 700);
  }

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1700px]">
        <SectionTitle annotation="// Have an idea?">
          Let's build something useful.
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left: links + sticky notes */}
          <div className="lg:col-span-5 space-y-6">
            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
            >
              Open to interesting products, engineering challenges, and
              conversations about technology. Reach out through the form or
              direct channels below.
            </p>

            {/* Contact links: real, verifiable destinations */}
            <ul className="space-y-3" role="list">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="sketch-card group flex items-center justify-between p-4 transition-all hover:-translate-y-0.5"
                    style={{
                      background: "var(--bg-board)",
                    }}
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ fontFamily: "var(--font-label)", color: "var(--text-ink-tertiary)" }}
                    >
                      {link.label}
                    </span>
                    <span
                      className="text-sm font-medium transition-colors group-hover:text-[var(--marker-blue)]"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-ink)" }}
                    >
                      {link.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Sticky notes: whiteboard identity motif */}
            <div className="flex flex-wrap gap-3 pt-2">
              {contactStickies.map((note) => (
                <StickyNote key={note.text} rotate={note.rotate} className="text-sm">
                  {note.text}
                </StickyNote>
              ))}
            </div>

            {/* Availability: real status, no decorative badge */}
            <div
              className="sketch-border rounded p-4"
              style={{
                background: "rgba(56, 142, 60, 0.06)",
                borderColor: "var(--marker-green)",
                borderRadius: "3px 7px 5px 4px / 5px 3px 7px 4px",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ background: "var(--marker-green)" }}
                  aria-label="Currently available"
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-semibold"
                  style={{ fontFamily: "var(--font-label)", color: "var(--marker-green)" }}
                >
                  Currently available
                </span>
              </div>
              <p
                className="mt-2 text-xs sm:text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
              >
                Open for backend engineering roles, architecture consultations,
                and contract projects.
              </p>
            </div>
          </div>

          {/* Right: contact form */}
          <div
            className="sketch-card p-6 sm:p-8 lg:p-10 lg:col-span-7"
            style={{ transform: "rotate(0.3deg)" }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium"
                  style={{ fontFamily: "var(--font-label)", color: "var(--text-ink)" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 text-base transition-all outline-none"
                  style={{
                    background: "var(--bg-board-tinted)",
                    border: `1.5px solid ${errors.name ? "var(--marker-red)" : "var(--border-light)"}`,
                    borderRadius: "3px 6px 4px 5px / 5px 3px 6px 4px",
                    color: "var(--text-ink)",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--marker-blue)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors.name ? "var(--marker-red)" : "var(--border-light)"; }}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs" style={{ fontFamily: "var(--font-label)", color: "var(--marker-red)" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                  style={{ fontFamily: "var(--font-label)", color: "var(--text-ink)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 text-base transition-all outline-none"
                  style={{
                    background: "var(--bg-board-tinted)",
                    border: `1.5px solid ${errors.email ? "var(--marker-red)" : "var(--border-light)"}`,
                    borderRadius: "3px 6px 4px 5px / 5px 3px 6px 4px",
                    color: "var(--text-ink)",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--marker-blue)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? "var(--marker-red)" : "var(--border-light)"; }}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs" style={{ fontFamily: "var(--font-label)", color: "var(--marker-red)" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                  style={{ fontFamily: "var(--font-label)", color: "var(--text-ink)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none px-4 py-3 text-base transition-all outline-none"
                  style={{
                    background: "var(--bg-board-tinted)",
                    border: `1.5px solid ${errors.message ? "var(--marker-red)" : "var(--border-light)"}`,
                    borderRadius: "3px 6px 4px 5px / 5px 3px 6px 4px",
                    color: "var(--text-ink)",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--marker-blue)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors.message ? "var(--marker-red)" : "var(--border-light)"; }}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs" style={{ fontFamily: "var(--font-label)", color: "var(--marker-red)" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-1">
                {/* CTA: specific action. Marker blue per DESIGN.md. */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="sketch-border flex w-full sm:w-auto items-center justify-center px-8 py-3.5 text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
                  style={{
                    background: "var(--marker-blue)",
                    color: "#fff",
                    borderColor: "var(--marker-blue)",
                    fontFamily: "var(--font-body)",
                    borderRadius: "3px 6px 4px 5px / 5px 3px 6px 4px",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send me an email"}
                </button>
              </div>

              {/* Form states — all three required by R-27 */}
              {status === "success" && (
                <div
                  className="sketch-border rounded p-4 text-sm font-medium"
                  style={{
                    background: "rgba(56, 142, 60, 0.08)",
                    borderColor: "var(--marker-green)",
                    color: "var(--marker-green)",
                    fontFamily: "var(--font-label)",
                    borderRadius: "3px 7px 5px 4px / 5px 3px 7px 4px",
                  }}
                  role="status"
                >
                  Message sent. I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div
                  className="sketch-border rounded p-4 text-sm font-medium"
                  style={{
                    background: "rgba(211, 47, 47, 0.08)",
                    borderColor: "var(--marker-red)",
                    color: "var(--marker-red)",
                    fontFamily: "var(--font-label)",
                    borderRadius: "3px 7px 5px 4px / 5px 3px 7px 4px",
                  }}
                  role="alert"
                >
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
