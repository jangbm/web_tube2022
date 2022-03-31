import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController.js";
import { protectorMiddleware, videoUpload } from "../middleware.js";
const videoRouter = express.Router();

//mongoDB data 문제, 숫자가 아님,!
//

videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(videoUpload.single("video"), postUpload);
videoRouter.get("/:id", watch);
videoRouter.route("/:id/delete").all(protectorMiddleware).get(deleteVideo);
videoRouter
  .route("/:id/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);

export default videoRouter;
