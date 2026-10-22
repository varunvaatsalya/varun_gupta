import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
    phone: { type: String, trim: true, maxlength: 20 },
    projectType: { type: String, required: true, maxlength: 60 },
    message: { type: String, required: true, maxlength: 3000 },
    status: {
      type: String,
      enum: ["new", "contacted", "won", "lost"],
      default: "new",
      index: true,
    },
    notified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);
