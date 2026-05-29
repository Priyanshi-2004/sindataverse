import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  trending?: boolean;
  createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
  title:           { type: String, required: true },
  category:        { type: String, required: true },
  difficulty:      { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
  description:     { type: String, required: true },
  longDescription: { type: String },
  technologies:    { type: [String], required: true },
  features:        { type: [String] },
  image:           { type: String, required: true },
  github:          { type: String },
  demo:            { type: String },
  featured:        { type: Boolean, default: false },
  trending:        { type: Boolean, default: false },
  createdAt:       { type: Date, default: Date.now },
});

export const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
