import { model, Schema } from "mongoose";
import { IProject } from "../types/project";

const projectSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IProject>("Project", projectSchema);
