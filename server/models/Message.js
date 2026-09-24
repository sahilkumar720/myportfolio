// A message submitted through the "Contact me" form on the site.
// Stored in MongoDB so you can read them from the admin dashboard
// without needing to set up an email service.

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      required: [true, "Message content is required"],
      trim: true,
    },
    read: {
      type: Boolean,
      default: false, // lets the admin dashboard mark messages as seen
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
