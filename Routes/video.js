import express from "express";
import {
  createVideos,
  getUrl,
  getUrlById,
} from "../Controllers/videoController.js";

const router = express.Router();
// POST request for creating a video
router.post("/", createVideos);

// GET request for retrieving video by ID
router.get("/videos/:_id", getUrlById);
router.get("/videos", getUrl);
export default router;
