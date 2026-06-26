import mongoose from "mongoose";

const RedirectEventSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    target: { type: String, required: true },
    linkTitle: { type: String, default: "" },
    userAgent: { type: String, default: "" },
    ip: { type: String, default: "" },
    referrer: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const RedirectEvent = mongoose.models.RedirectEvent || mongoose.model("RedirectEvent", RedirectEventSchema);
export default RedirectEvent;
