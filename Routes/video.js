import express from "express";
import { createVideos, getUrlById } from "../Controllers/videoController.js";

const router = express.Router();
// POST request for creating a video
router.post("/", createVideos);

// GET request for retrieving video by ID
router.get("/videos/:id", getUrlById);
export default router;
