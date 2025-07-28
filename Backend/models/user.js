const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true },
    phoneNo: { type: Number, unique: true },
    college: { type: String },
    rollNumber: { type: String, unique: true },
    branch: { type: String },
    year: { type: Number },
    semester: { type: Number },
    skills: { type: [String], default: [] },
    profileImage: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    resumeLink: { type: String, default: "" },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("student", studentSchema);
