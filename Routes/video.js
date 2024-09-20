import express from "express";
import { createVideos } from "../Controllers/videoController.js";

const router = express.Router();

router.post("/", createVideos);

export default router;
