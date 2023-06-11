import { Router, Response } from "express";
import { getProjects } from "../controllers/projects/ProjectsController";

const router: Router = Router();

router.get("/projects", getProjects);

export default router;
