import { Schema, Types, model, models } from "mongoose";

const schema = new Schema(
  {
    content: { type: string },
    sender: { type: Types.ObjectId, ref: "User", required: true },
    chat: { type: Types.ObjectId, ref: "Chat", required: true },
    attachments: [
      {
        public_id: { type: string, required: true },
        url: { type: string, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Mesasge = models.Mesasge || model("Mesasge", schema);
