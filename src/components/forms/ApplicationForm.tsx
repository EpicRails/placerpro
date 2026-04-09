"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const positions = [
  "Unarmed Security Officer",
  "Armed Security Officer",
  "Vehicle Patrol Officer",
  "Site Supervisor",
  "Fire Watch Officer",
  "Open / Any Position",
];

const availability = [
  "Full-Time",
  "Part-Time",
  "Weekends Only",
  "Overnight / Graveyard",
  "Flexible",
];

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    availability: "",
    hasGuardCard: "",
    hasFirearm: "",
    yearsExperience: "",
    background: "",
    whyUs: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at (916) 775-7274.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="text-green-600" size={32} />
        </div>
        <h3 className="text-slate-900 font-bold text-xl mb-2">
          Application received — thank you.
        </h3>
        <p className="text-slate-600 text-sm max-w-sm mx-auto">
          We review all applications and will be in touch if your background is
          a good fit. For questions, call us at{" "}
          <a href="tel:+19167757274" className="text-amber-600 font-medium">
            (916) 775-7274
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName" name="firstName" type="text" required
            value={form.firstName} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName" name="lastName" type="text" required
            value={form.lastName} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
            placeholder="Smith"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel" required
            value={form.phone} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
            placeholder="(916) 555-0000"
          />
        </div>
      </div>

      {/* Position & Availability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-1.5">
            Position Interested In <span className="text-red-500">*</span>
          </label>
          <select
            id="position" name="position" required
            value={form.position} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
          >
            <option value="">Select a position...</option>
            {positions.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-slate-700 mb-1.5">
            Availability <span className="text-red-500">*</span>
          </label>
          <select
            id="availability" name="availability" required
            value={form.availability} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
          >
            <option value="">Select availability...</option>
            {availability.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
      </div>

      {/* Credentials */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="hasGuardCard" className="block text-sm font-medium text-slate-700 mb-1.5">
            CA Guard Card? <span className="text-red-500">*</span>
          </label>
          <select
            id="hasGuardCard" name="hasGuardCard" required
            value={form.hasGuardCard} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <div>
          <label htmlFor="hasFirearm" className="block text-sm font-medium text-slate-700 mb-1.5">
            Firearm Permit?
          </label>
          <select
            id="hasFirearm" name="hasFirearm"
            value={form.hasFirearm} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <div>
          <label htmlFor="yearsExperience" className="block text-sm font-medium text-slate-700 mb-1.5">
            Years of Experience
          </label>
          <select
            id="yearsExperience" name="yearsExperience"
            value={form.yearsExperience} onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition"
          >
            <option value="">Select...</option>
            <option value="No experience">No experience</option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1–2 years">1–2 years</option>
            <option value="3–5 years">3–5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>
      </div>

      {/* Background */}
      <div>
        <label htmlFor="background" className="block text-sm font-medium text-slate-700 mb-1.5">
          Relevant Experience & Background
        </label>
        <textarea
          id="background" name="background" rows={4}
          value={form.background} onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition resize-none"
          placeholder="Describe any prior security, military, law enforcement, or loss prevention experience..."
        />
      </div>

      {/* Why us */}
      <div>
        <label htmlFor="whyUs" className="block text-sm font-medium text-slate-700 mb-1.5">
          Why do you want to join Placer Protection Group? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="whyUs" name="whyUs" rows={3} required
          value={form.whyUs} onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition resize-none"
          placeholder="Tell us a bit about yourself and why you're interested in this role..."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 text-sm shadow-md"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={16} />
            Submit Application
          </>
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        We review all applications and respond to qualified candidates. Background
        check required prior to hire.
      </p>
    </form>
  );
}
