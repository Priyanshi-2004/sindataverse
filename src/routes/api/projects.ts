import { createFileRoute } from "@tanstack/react-router";
import { connectToDatabase } from "../../lib/db";
import { Project } from "../../lib/models/project";

export const Route = createFileRoute("/api/projects")({
  server: {
    handlers: {
      // ── GET /api/projects ──────────────────────────────────────────
      // Postman: GET http://localhost:3000/api/projects
      // Optional query params: ?category=Dashboard  ?difficulty=Beginner  ?featured=true  ?trending=true
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const filter: Record<string, any> = {};

          const category   = url.searchParams.get("category");
          const difficulty = url.searchParams.get("difficulty");
          const featured   = url.searchParams.get("featured");
          const trending   = url.searchParams.get("trending");

          if (category)   filter.category   = category;
          if (difficulty) filter.difficulty  = difficulty;
          if (featured)   filter.featured   = featured === "true";
          if (trending)   filter.trending   = trending === "true";

          await connectToDatabase();
          const docs = await Project.find(filter).sort({ createdAt: -1 }).exec();

          return Response.json({ success: true, count: docs.length, data: docs });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },

      // ── POST /api/projects ─────────────────────────────────────────
      // Postman: POST http://localhost:3000/api/projects
      // Body (JSON):
      // {
      //   "title": "My Project",
      //   "category": "Dashboard",
      //   "difficulty": "Beginner",
      //   "description": "Short description",
      //   "technologies": ["Python", "Streamlit"],
      //   "image": "https://...",
      //   "demo": "https://...",
      //   "featured": false,
      //   "trending": false
      // }
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { title, category, difficulty, description, technologies, image } = body as any;

          if (!title || !category || !difficulty || !description || !technologies || !image) {
            return Response.json(
              {
                success: false,
                error: "Required fields: title, category, difficulty, description, technologies (array), image",
              },
              { status: 400 }
            );
          }

          await connectToDatabase();
          const doc = await Project.create(body);

          return Response.json({ success: true, data: doc }, { status: 201 });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },
    },
  },
});

