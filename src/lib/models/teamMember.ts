import mongoose, { Schema, Document } from "mongoose";

export interface ITeamProject {
  title: string;
  category: string;
  description: string;
  link: string;
}

export interface ITeamMember extends Document {
  name: string;
  projects: ITeamProject[];
  createdAt: Date;
}

const TeamProjectSchema = new Schema<ITeamProject>(
  {
    title:       { type: String, required: true },
    category:    { type: String, required: true },
    description: { type: String, required: true },
    link:        { type: String, required: true },
  },
  { _id: false }
);

const TeamMemberSchema: Schema = new Schema({
  name:      { type: String, required: true },
  projects:  { type: [TeamProjectSchema], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export const TeamMember =
  mongoose.models.TeamMember ||
  mongoose.model<ITeamMember>("TeamMember", TeamMemberSchema);
