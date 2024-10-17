import z from "@/lib/zod";

export const trackCustomerRequestSchema = z.object({
  // Required
  customerId: z
    .string({ required_error: "customerId is required" })
    .trim()
    .min(1, "customerId is required")
    .max(100)
    .describe(
      "This is the unique identifier for the customer in the client's app. This is used to track the customer's journey.",
    ),

  // Optional
  customerName: z
    .string()
    .max(100)
    .optional()
    .describe("Name of the customer in the client's app."),
  customerEmail: z
    .string()
    .email()
    .max(100)
    .optional()
    .describe("Email of the customer in the client's app."),
  customerAvatar: z
    .string()
    .max(100)
    .optional()
    .describe("Avatar of the customer in the client's app."),
});

export const trackCustomerResponseSchema = z.object({
  customerId: z.string(),
  customerName: z.string().nullable(),
  customerEmail: z.string().nullable(),
  customerAvatar: z.string().nullable(),
});

// simple schema returned by /events API
export const customerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  avatar: z.string(),
});
