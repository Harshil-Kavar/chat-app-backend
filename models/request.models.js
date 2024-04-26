import { Schema, Types, model, models } from "mongoose";

const schema = new Schema(
  {
    status: {
      type: string,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },
    sender: { type: Types.ObjectId, ref: "User", required: true },
    receiver: { type: Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Request = models.Request || model("Request", schema);
