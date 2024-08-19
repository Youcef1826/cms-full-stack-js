import express from "express";
import { getPosts, getPostById, createPost, updatePost, deletePost } from "../controllers/posts.controllers.js";
import validation from "../middlewares/validation.middleware.js";
import postSchema from "../utils/post.validation.schema.js";
import authenticateJWT from "../middlewares/auth.middleware.js";
import uploadMiddleware from "../middlewares/uploads.middleware.js";

const router = express.Router();

// GET
router.get("/api/posts", getPosts);
router.get("/api/posts/:id", getPostById);

// POST
router.post("/api/posts/", uploadMiddleware.single("image"), validation(postSchema), createPost);

// PUT
router.put("/api/posts/:id", uploadMiddleware.single("image"), validation(postSchema), updatePost);

// DELETE
router.delete("/api/posts/:id", deletePost);

export default router;