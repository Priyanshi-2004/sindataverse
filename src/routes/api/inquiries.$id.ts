import { createFileRoute } from "@tanstack/react-router";
import { connectToDatabase } from "../../lib/db";
import { Inquiry } from "../../lib/models/inquiry";

export const Route = createFileRoute("/api/inquiries/$id")({
  server: {
    handlers: {
      // ── GET /api/inquiries/:id ─────────────────────────────────────
      // Postman: GET http://localhost:3000/api/inquiries/<mongo_id>
      GET: async ({ request, params }) => {
        try {
          await connectToDatabase();
          const doc = await Inquiry.findById(params.id).exec();
          if (!doc) {
            return Response.json({ success: false, error: "Inquiry not found" }, { status: 404 });
          }
          return Response.json({ success: true, data: doc });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },

      // ── DELETE /api/inquiries/:id ──────────────────────────────────
      // Postman: DELETE http://localhost:3000/api/inquiries/<mongo_id>
      DELETE: async ({ request, params }) => {
        try {
          await connectToDatabase();
          const deleted = await Inquiry.findByIdAndDelete(params.id).exec();
          if (!deleted) {
            return Response.json({ success: false, error: "Inquiry not found" }, { status: 404 });
          }
          return Response.json({ success: true, message: "Inquiry deleted successfully" });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },
    },
  },
});

