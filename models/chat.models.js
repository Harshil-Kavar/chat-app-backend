import { Schema, Types, model, models } from "mongoose";

const schema = new Schema(
  {
    name: { type: string, required: true },
    groupChat: { type: Boolean, required: true, default: false },
    creator: { type: Types.ObjectId, ref: "User" },
    members: [
      {
        public_id: { type: string, required: true },
        url: { type: string, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Chat = models.Chat || model("Chat", schema);
