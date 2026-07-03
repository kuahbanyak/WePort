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

    // TODO(Alwi): Wire this up to a form-delivery service (Formspree, EmailJS, etc.)
    // For now this just simulates a successful submission.
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 700);
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <RouteLabel path="/contact" title="Contact" />
        <SectionHeading>Let's work together</SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* direct links */}
          <div className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Open to backend roles and freelance projects involving .NET
              Core, Go, or microservice architecture. The fastest way to
              reach me is the form, or directly below.
            </p>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover-accent flex items-center justify-between rounded-lg px-4 py-3 text-sm"
                    style={{
                      backgroundColor: "var(--color-bg-elevated)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    <span style={{ color: "var(--color-text-tertiary)", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                      {link.label}
                    </span>
                    <span>{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md px-4 py-2.5 text-sm outline-none"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  border: `1px solid ${errors.name ? "#e25555" : "var(--color-border-bright)"}`,
                  color: "var(--color-text-primary)",
                }}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="mt-1.5 text-xs" style={{ color: "#e25555" }}>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md px-4 py-2.5 text-sm outline-none"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  border: `1px solid ${errors.email ? "#e25555" : "var(--color-border-bright)"}`,
                  color: "var(--color-text-primary)",
                }}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="mt-1.5 text-xs" style={{ color: "#e25555" }}>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full resize-none rounded-md px-4 py-2.5 text-sm outline-none"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  border: `1px solid ${errors.message ? "#e25555" : "var(--color-border-bright)"}`,
                  color: "var(--color-text-primary)",
                }}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1.5 text-xs" style={{ color: "#e25555" }}>{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              style={{ backgroundColor: "var(--color-accent-solid)", color: "#fff" }}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-sm" style={{ color: "var(--color-success)" }}>
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm" style={{ color: "#e25555" }}>
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
