import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

//mongoDB data 문제, 숫자가 아님,!
//

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id", watch);
videoRouter.route("/:id/delete").get(deleteVideo);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);

export default videoRouter;
