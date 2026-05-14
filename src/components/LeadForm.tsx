"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/lead-schema";

type Variant = "hero" | "stacked";

export function LeadForm({ variant = "hero" }: { variant?: Variant }) {
  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "success" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      address: "",
      name: "",
      phone: "",
      email: "",
      website: "",
    },
  });

  async function onSubmit(values: LeadInput) {
    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Something went wrong");
      }
      setStatus({ state: "success" });
      reset();
    } catch (err) {
      setStatus({
        state: "error",
        message:
          err instanceof Error
            ? err.message
            : "Could not submit. Please call us instead.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div className="rounded-xl border border-accent-100 bg-accent-50 p-6 text-ink-900">
        <h3 className="text-lg font-semibold">Got it — we&apos;re on it.</h3>
        <p className="mt-1 text-ink-700">
          We&apos;ll review the property and get back to you with a no-obligation
          cash offer within 24 hours. Need to talk now? Call us anytime.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={
        variant === "hero"
          ? "rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100 sm:p-6"
          : "rounded-2xl border border-ink-100 bg-white p-6"
      }
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="address" className="label">
            Property address
          </label>
          <input
            id="address"
            autoComplete="street-address"
            placeholder="123 Main St, Seattle, WA 98101"
            className="field"
            {...register("address")}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="label">
              Your name
            </label>
            <input
              id="name"
              autoComplete="name"
              placeholder="Jane Doe"
              className="field"
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(206) 555-0100"
              className="field"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Honeypot for bots — hidden from real users. */}
        <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden">
          <label>
            Website
            <input tabIndex={-1} autoComplete="off" {...register("website")} />
          </label>
        </div>

        <button
          type="submit"
          disabled={status.state === "submitting"}
          className="btn-accent w-full"
        >
          {status.state === "submitting"
            ? "Sending…"
            : "Get My Cash Offer"}
        </button>

        {status.state === "error" && (
          <p className="text-sm text-red-600" role="alert">
            {status.message}
          </p>
        )}

        <p className="text-xs text-ink-400">
          By submitting, you agree to be contacted about your property. No
          obligation, no spam.
        </p>
      </div>
    </form>
  );
}
