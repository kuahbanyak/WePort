import { useState, type FormEvent } from "react";
import { contactLinks } from "../data/content";
import { RouteLabel, SectionHeading } from "../components/RouteLabel";

type Status = "idle" | "sending" | "success" | "error";

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
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 700);
  }

  return (
    <section id="contact" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-[1700px] 2xl:max-w-[1920px]">
        <RouteLabel path="/contact" title="Contact" accentColor="var(--color-cyan)" />
        <SectionHeading>Let's Connect</SectionHeading>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
          {/* Direct links & Availability card */}
          <div className="space-y-6 lg:col-span-5">
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Open to backend roles and contract engineering projects involving .NET
              Core, Go, or microservice architecture. Reach out via the form, or through direct channels below.
            </p>

            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-xl px-5 py-4 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-[var(--color-cyan)]"
                    style={{
                      backgroundColor: "var(--color-bg-elevated)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    <span
                      className="font-mono text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider"
                    >
                      {link.label}
                    </span>
                    <span className="flex items-center gap-1.5 group-hover:text-[var(--color-cyan)] font-medium">
                      <span>{link.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick status card */}
            <div
              className="rounded-xl border p-5"
              style={{
                backgroundColor: "rgba(9, 13, 22, 0.6)",
                borderColor: "var(--color-border-bright)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-emerald)] status-dot shrink-0" />
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-emerald)] font-semibold">
                  CURRENT AVAILABILITY
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Available for engineering conversations, architecture consultations, and backend contract roles.
              </p>
            </div>
          </div>

          {/* Form in elevated card */}
          <div
            className="rounded-2xl border p-6 sm:p-8 lg:p-10 lg:col-span-7"
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              borderColor: "var(--color-border)",
            }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg px-4 py-3 text-base outline-none transition-all focus:border-[var(--color-accent-bright)] focus:ring-1 focus:ring-[var(--color-accent-bright)]"
                  style={{
                    backgroundColor: "rgba(10, 14, 20, 0.75)",
                    border: `1px solid ${errors.name ? "#e25555" : "var(--color-border-bright)"}`,
                    color: "var(--color-text-primary)",
                  }}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg px-4 py-3 text-base outline-none transition-all focus:border-[var(--color-accent-bright)] focus:ring-1 focus:ring-[var(--color-accent-bright)]"
                  style={{
                    backgroundColor: "rgba(10, 14, 20, 0.75)",
                    border: `1px solid ${errors.email ? "#e25555" : "var(--color-border-bright)"}`,
                    color: "var(--color-text-primary)",
                  }}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-lg px-4 py-3 text-base outline-none transition-all focus:border-[var(--color-accent-bright)] focus:ring-1 focus:ring-[var(--color-accent-bright)]"
                  style={{
                    backgroundColor: "rgba(10, 14, 20, 0.75)",
                    border: `1px solid ${errors.message ? "#e25555" : "var(--color-border-bright)"}`,
                    color: "var(--color-text-primary)",
                  }}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full sm:w-auto items-center justify-center rounded-lg px-8 py-3.5 text-sm sm:text-base font-semibold transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
                  style={{ backgroundColor: "var(--color-accent-solid)", color: "#fff" }}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>

              {status === "success" && (
                <div className="rounded-lg bg-[rgba(61,220,132,0.1)] border border-[var(--color-success)] p-4 text-sm text-[var(--color-success)] font-medium">
                  ✓ Message sent successfully! I'll get back to you promptly.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-lg bg-[rgba(239,68,68,0.1)] border border-red-500 p-4 text-sm text-red-400 font-medium">
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
