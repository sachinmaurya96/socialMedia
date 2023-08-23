import express from "express"
import {getFeedPosts, getUserPosts,likePost} from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js"
const router = express.Router()

router
.get("/",verifyToken,getFeedPosts)
.get("/:userId/posts",verifyToken,getUserPosts)
.patch("/:id/like",verifyToken,likePost)


export default router