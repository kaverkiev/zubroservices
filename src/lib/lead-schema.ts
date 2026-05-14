import { z } from "zod";

export const leadSchema = z.object({
  address: z
    .string()
    .min(5, "Please enter the full property address")
    .max(200),
  name: z.string().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(25)
    .regex(/[0-9()+\-\s.]+/, "Phone can include digits, spaces, dashes only"),
  email: z
    .string()
    .email("Please enter a valid email")
    .max(120)
    .optional()
    .or(z.literal("")),
  condition: z
    .enum(["excellent", "good", "fair", "needs-work", "tear-down"])
    .optional(),
  timeline: z
    .enum(["asap", "30-days", "60-days", "just-curious"])
    .optional(),
  notes: z.string().max(1000).optional().or(z.literal("")),
  // Honeypot — must be empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
