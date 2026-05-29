import { createFileRoute } from "@tanstack/react-router";
import { connectToDatabase } from "../../lib/db";
import { Project } from "../../lib/models/project";
import { TeamMember } from "../../lib/models/teamMember";
import { Official } from "../../lib/models/official";
import { Inquiry } from "../../lib/models/inquiry";

// Import offline static data
import { projects as staticProjects } from "../../data/projects";
import { officials as staticOfficials, teamMembers as staticTeamMembers } from "../../data/team";

export const Route = createFileRoute("/api/seed")({
  server: {
    handlers: {
      // ── GET /api/seed ──────────────────────────────────────────────
      // Postman: GET http://localhost:3000/api/seed
      // Invoking this endpoint once will clear and seed the entire MongoDB Atlas database
      GET: async ({ request }) => {
        try {
          await connectToDatabase();

          // 1. Clear existing collections
          await Project.deleteMany({});
          await TeamMember.deleteMany({});
          await Official.deleteMany({});
          // We can optionally keep inquiries, or clear them. Let's keep inquiries so they aren't lost, or just reset them. Let's keep inquiries unless requested.

          // 2. Seed Projects
          // Map static projects to DB schema
          const projectsToInsert = staticProjects.map(proj => ({
            title: proj.title,
            category: proj.category,
            difficulty: proj.difficulty,
            description: proj.description,
            longDescription: proj.longDescription,
            technologies: proj.technologies,
            features: proj.features,
            image: proj.image,
            github: proj.github,
            demo: proj.demo,
            featured: proj.featured || false,
            trending: proj.trending || false,
          }));
          const seededProjects = await Project.insertMany(projectsToInsert);

          // 3. Seed Officials
          const officialsToInsert = staticOfficials.map(off => ({
            name: off.name,
            role: off.role,
            designation: off.designation,
            badge: off.badge,
          }));
          const seededOfficials = await Official.insertMany(officialsToInsert);

          // 4. Seed Team Members
          const teamMembersToInsert = staticTeamMembers.map(member => ({
            name: member.name,
            projects: member.projects.map(proj => ({
              title: proj.title,
              category: proj.category,
              description: proj.description,
              link: proj.link,
            })),
          }));
          const seededTeamMembers = await TeamMember.insertMany(teamMembersToInsert);

          return Response.json({
            success: true,
            message: "Database seeded successfully into MongoDB Atlas!",
            counts: {
              projects: seededProjects.length,
              officials: seededOfficials.length,
              teamMembers: seededTeamMembers.length,
            }
          });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },
    },
  },
});
