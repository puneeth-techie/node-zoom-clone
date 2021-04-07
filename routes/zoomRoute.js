import express from "express";
import { room, roomId } from "../controllers/zoomController.js";

const router = express.Router();

// @route        GET /
// @desc         Opening zoom room using uuid.
// @access       Public
router.route("/").get(room);

// @route        GET /:roomId
// @desc         Redirecting from root to room
// @access       Public
router.route("/:roomId").get(roomId);

export default router;
