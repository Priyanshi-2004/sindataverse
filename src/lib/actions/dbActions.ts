import { createServerFn } from "@tanstack/react-start";
import { connectToDatabase } from "../db";
import { Project } from "../models/project";
import { TeamMember } from "../models/teamMember";
import { Official } from "../models/official";

export const getDBProjects = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      await connectToDatabase();
      const docs = await Project.find().sort({ createdAt: -1 }).exec();
      return docs.map(doc => ({
        id: doc._id.toString(),
        title: doc.title,
        category: doc.category,
        difficulty: doc.difficulty,
        description: doc.description,
        longDescription: doc.longDescription,
        technologies: doc.technologies,
        features: doc.features,
        image: doc.image,
        github: doc.github,
        demo: doc.demo,
        featured: doc.featured,
        trending: doc.trending,
      }));
    } catch (err: any) {
      console.error("Error fetching projects from DB:", err);
      throw new Error(err.message || "Failed to fetch projects");
    }
  });

export const getDBTeamMembers = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      await connectToDatabase();
      const docs = await TeamMember.find().sort({ name: 1 }).exec();
      return docs.map(doc => ({
        id: doc._id.toString(),
        name: doc.name,
        projects: doc.projects.map((proj: any) => ({
          title: proj.title,
          category: proj.category,
          description: proj.description,
          link: proj.link,
        })),
      }));
    } catch (err: any) {
      console.error("Error fetching team members from DB:", err);
      throw new Error(err.message || "Failed to fetch team members");
    }
  });

export const getDBOfficials = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      await connectToDatabase();
      const docs = await Official.find().sort({ name: 1 }).exec();
      return docs.map(doc => ({
        id: doc._id.toString(),
        name: doc.name,
        role: doc.role,
        designation: doc.designation,
        badge: doc.badge,
      }));
    } catch (err: any) {
      console.error("Error fetching officials from DB:", err);
      throw new Error(err.message || "Failed to fetch officials");
    }
  });
