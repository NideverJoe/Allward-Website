"use client";
import { useState, useRef } from "react";

interface FormState {
  name: string;
  email: string;
  organization: string;
  message: string;
  website: string; // honeypot
}

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    organization: "",
    message: "",
    website: "",
  });
  const statusRef = useRef<HTMLDivElement>(null);

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (form.website) return; // honeypot triggered

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization: form.organization,
          message: form.message,
          honeypot: form.website,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => statusRef.current?.focus(), 50);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border bg-white text-navy placeholder-slate/40 transition-colors focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal";
  const errorClass = "text-red-600 text-sm mt-1";
  const labelClass = "block text-sm font-semibold text-navy mb-2";

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="py-8 px-6 bg-teal/10 rounded-xl border border-teal/20 text-center"
      >
        <svg className="w-10 h-10 text-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-navy font-semibold text-lg">
          Thank you for reaching out. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      {/* Honeypot field — hidden from real users */}
      <div className="opacity-0 absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update("website")}
        />
      </div>

      <div className="grid gap-5">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span className="text-teal" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            value={form.name}
            onChange={update("name")}
            className={`${inputClass} ${errors.name ? "border-red-400" : "border-slate/25"}`}
          />
          {errors.name && (
            <p id="name-error" className={errorClass} role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span className="text-teal" aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            value={form.email}
            onChange={update("email")}
            className={`${inputClass} ${errors.email ? "border-red-400" : "border-slate/25"}`}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-organization" className={labelClass}>
            Organization
          </label>
          <input
            type="text"
            id="contact-organization"
            name="organization"
            autoComplete="organization"
            value={form.organization}
            onChange={update("organization")}
            className={`${inputClass} border-slate/25`}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            What brings you here?
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            className={`${inputClass} border-slate/25 resize-none`}
          />
        </div>

        {status === "error" && (
          <p role="alert" aria-live="polite" className="text-red-600 text-sm">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-teal text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
