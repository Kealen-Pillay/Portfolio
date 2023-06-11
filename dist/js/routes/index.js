"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectsController_1 = require("../controllers/projects/ProjectsController");
const router = (0, express_1.Router)();
router.get("/projects", ProjectsController_1.getProjects);
exports.default = router;
