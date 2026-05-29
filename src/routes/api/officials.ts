import { createFileRoute } from "@tanstack/react-router";
import { connectToDatabase } from "../../lib/db";
import { Official } from "../../lib/models/official";

export const Route = createFileRoute("/api/officials")({
  server: {
    handlers: {
      // ── GET /api/officials ─────────────────────────────────────────
      // Postman: GET http://localhost:3000/api/officials
      GET: async ({ request }) => {
        try {
          await connectToDatabase();
          const docs = await Official.find().sort({ name: 1 }).exec();
          return Response.json({
            success: true,
            count: docs.length,
            data: docs,
          });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },

      // ── POST /api/officials ────────────────────────────────────────
      // Postman: POST http://localhost:3000/api/officials
      // Body (JSON):
      // {
      //   "name": "Dr. Priya Sharma",
      //   "role": "Program Director",
      //   "designation": "Head of Data Science Division",
      //   "badge": "DIRECTOR"
      // }
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, role, designation, badge } = body as any;

          if (!name || !role || !designation || !badge) {
            return Response.json(
              { success: false, error: "Required fields: name, role, designation, badge" },
              { status: 400 }
            );
          }

          await connectToDatabase();
          const doc = await Official.create(body);

          return Response.json({ success: true, data: doc }, { status: 201 });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },
    },
  },
});
