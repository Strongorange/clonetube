import express from "express";
import {
  getEdit,
  watch,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";
import { protectorMiddleware, videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(videoUpload.single("video"), postUpload); //multer 는 form 의 name 을 사용

export default videoRouter;
