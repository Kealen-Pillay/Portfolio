import {Document} from "mongoose";

export interface IProject extends Document {
    name: string
    technologies: Array<string>
    description: string
}