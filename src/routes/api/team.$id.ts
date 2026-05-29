import { createFileRoute } from "@tanstack/react-router";
import { connectToDatabase } from "../../lib/db";
import { TeamMember } from "../../lib/models/teamMember";

export const Route = createFileRoute("/api/team/$id")({
  server: {
    handlers: {
      // ── GET /api/team/:id ──────────────────────────────────────────
      // Postman: GET http://localhost:3000/api/team/<mongo_id>
      GET: async ({ request, params }) => {
        try {
          await connectToDatabase();
          const doc = await TeamMember.findById(params.id).exec();
          if (!doc) {
            return Response.json({ success: false, error: "Team member not found" }, { status: 404 });
          }
          return Response.json({ success: true, data: doc });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },

      // ── PUT /api/team/:id ──────────────────────────────────────────
      // Postman: PUT http://localhost:3000/api/team/<mongo_id>
      // Body (JSON): { "name": "Updated Name", "projects": [...] }
      PUT: async ({ request, params }) => {
        try {
          const body = await request.json();
          await connectToDatabase();
          const doc = await TeamMember.findByIdAndUpdate(params.id, body, { new: true }).exec();
          if (!doc) {
            return Response.json({ success: false, error: "Team member not found" }, { status: 404 });
          }
          return Response.json({ success: true, data: doc });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },

      // ── DELETE /api/team/:id ───────────────────────────────────────
      // Postman: DELETE http://localhost:3000/api/team/<mongo_id>
      DELETE: async ({ request, params }) => {
        try {
          await connectToDatabase();
          const deleted = await TeamMember.findByIdAndDelete(params.id).exec();
          if (!deleted) {
            return Response.json({ success: false, error: "Team member not found" }, { status: 404 });
          }
          return Response.json({ success: true, message: "Team member deleted successfully" });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },
    },
  },
});
