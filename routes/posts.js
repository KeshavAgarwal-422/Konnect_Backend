import express from "express";
import { UpdatePost, createPost, deletePost, getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:userId", getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/*POST*/
router.post("/new/post", verifyToken, createPost);


/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.put("/:postId", verifyToken, UpdatePost);


/*DELETE*/
router.delete("/:postId", verifyToken, deletePost);


export default router;
