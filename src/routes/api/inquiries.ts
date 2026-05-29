import { createFileRoute } from "@tanstack/react-router";
import { connectToDatabase } from "../../lib/db";
import { Inquiry } from "../../lib/models/inquiry";

export const Route = createFileRoute("/api/inquiries")({
  server: {
    handlers: {
      // ── GET /api/inquiries ─────────────────────────────────────────
      // Postman: GET http://localhost:3000/api/inquiries
      GET: async ({ request }) => {
        try {
          await connectToDatabase();
          const docs = await Inquiry.find().sort({ createdAt: -1 }).limit(50).exec();
          return Response.json({
            success: true,
            count: docs.length,
            data: docs,
          });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },

      // ── POST /api/inquiries ────────────────────────────────────────
      // Postman: POST http://localhost:3000/api/inquiries
      // Body (JSON): { "name": "...", "email": "...", "interest": "...", "message": "..." }
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, email, interest, message } = body as any;

          if (!name || !email || !interest || !message) {
            return Response.json(
              { success: false, error: "All fields are required: name, email, interest, message" },
              { status: 400 }
            );
          }

          await connectToDatabase();
          const doc = await Inquiry.create({ name, email, interest, message });

          return Response.json({ success: true, data: doc }, { status: 201 });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },
    },
  },
});

