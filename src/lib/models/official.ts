import mongoose, { Schema, Document } from "mongoose";

export interface IOfficial extends Document {
  name: string;
  role: string;
  designation: string;
  badge: string;
  createdAt: Date;
}

const OfficialSchema: Schema = new Schema({
  name:        { type: String, required: true },
  role:        { type: String, required: true },
  designation: { type: String, required: true },
  badge:       { type: String, required: true },
  createdAt:   { type: Date, default: Date.now },
});

export const Official =
  mongoose.models.Official || mongoose.model<IOfficial>("Official", OfficialSchema);
