import { createFileRoute } from "@tanstack/react-router";
import { connectToDatabase } from "../../lib/db";
import { TeamMember } from "../../lib/models/teamMember";

export const Route = createFileRoute("/api/team")({
  server: {
    handlers: {
      // ── GET /api/team ──────────────────────────────────────────────
      // Postman: GET http://localhost:3000/api/team
      GET: async ({ request }) => {
        try {
          await connectToDatabase();
          const docs = await TeamMember.find().sort({ name: 1 }).exec();
          return Response.json({
            success: true,
            count: docs.length,
            data: docs,
          });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },

      // ── POST /api/team ─────────────────────────────────────────────
      // Postman: POST http://localhost:3000/api/team
      // Body (JSON):
      // {
      //   "name": "Ajay Saini",
      //   "projects": [
      //     {
      //       "title": "Central Knowledge Repository",
      //       "category": "Data Management",
      //       "description": "Smart library management...",
      //       "link": "https://..."
      //     }
      //   ]
      // }
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name } = body as any;

          if (!name) {
            return Response.json(
              { success: false, error: "Required fields: name" },
              { status: 400 }
            );
          }

          await connectToDatabase();
          const doc = await TeamMember.create(body);

          return Response.json({ success: true, data: doc }, { status: 201 });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },
    },
  },
});
