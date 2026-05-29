import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { connectToDatabase } from "../db";
import { Inquiry } from "../models/inquiry";

const InquiryInputSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  interest: z.string().min(1, "Interest category is required"),
  message: z.string().min(1, "Message is required"),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator(InquiryInputSchema)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const newInquiry = new Inquiry(data);
      const saved = await newInquiry.save();
      return {
        success: true,
        message: "Your message has been received!",
        inquiry: {
          id: saved._id.toString(),
          name: saved.name,
          email: saved.email,
          interest: saved.interest,
          message: saved.message,
          createdAt: saved.createdAt,
        },
      };
    } catch (error: any) {
      console.error("Error submitting inquiry:", error);
      throw new Error(error.message || "Failed to submit inquiry to MongoDB");
    }
  });

export const getInquiries = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      await connectToDatabase();
      const docs = await Inquiry.find().sort({ createdAt: -1 }).limit(10).exec();
      return docs.map((doc) => ({
        id: doc._id.toString(),
        name: doc.name,
        email: doc.email,
        interest: doc.interest,
        message: doc.message,
        createdAt: doc.createdAt,
      }));
    } catch (error: any) {
      console.error("Error fetching inquiries:", error);
      throw new Error(error.message || "Failed to fetch inquiries from MongoDB");
    }
  });

export const deleteInquiry = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const deleted = await Inquiry.findByIdAndDelete(data.id).exec();
      if (!deleted) {
        throw new Error("Telemetry payload not found");
      }
      return {
        success: true,
        message: "Telemetry payload successfully purged from MongoDB.",
      };
    } catch (error: any) {
      console.error("Error purging inquiry:", error);
      throw new Error(error.message || "Failed to purge telemetry payload from MongoDB");
    }
  });

