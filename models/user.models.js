import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    name: { type: string, required: true },
    userName: { type: string, required: true, unique: true },
    password: { type: string, required: true, select: false },
    avatar: {
      public_id: { type: string, required: true },
      url: { type: string, required: true },
    },
  },
  { timestamps: true }
);

export const User = models.User || model("User", schema);
