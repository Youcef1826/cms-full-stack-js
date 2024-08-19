import Post from "../models/Post.js";

// Get all posts
export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

// Get post by ID
export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post not found !" });
    }
  } catch (error) {
    next(error);
  }
};

// Create new post
export const createPost = async (req, res, next) => {
  const { title, content } = req.body;
  const image = req.file.path; // Get file info from req

  try {
    const post = new Post({
      title,
      content,
      image,
    });

    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (error) {
    next(error);
  }
};

// Update post
export const updatePost = async (req, res, next) => {
  const { title, content } = req.body;
  const image = req.file.path; // Get file info from req

  try {
    const post = await Post.findById(req.params.id);

    if (post) {
      post.title = title || post.title;
      post.content = content || post.content;
      post.image = image || post.image;

      const updatedPost = await post.save();
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  } catch (error) {
    next(error);
  }
};

// Delete post
export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (post) {
      res.json("Post removed successfully!");
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  } catch (error) {
    next(error);
  }
};
