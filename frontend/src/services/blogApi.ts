
import axios from "@/lib/axios";
import { Post } from "@/types/post";

const POSTS_URL = "/api/posts";


// GET all
export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${process.env.API_URL}${POSTS_URL}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching posts !", error);
    throw error;
  }
};

// GET by ID
export const fetchPostByID = async (id: string): Promise<Post> => {
  try {
    const response = await axios.get(`${process.env.API_URL}${POSTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching post with id ${id} !`, error);
    throw error;
  }
};

// POST
export const addPost = async (data: Post): Promise<Post> => {
  try {
    const response = await axios.postForm(`${process.env.API_URL}${POSTS_URL}`, data);
    return response.data;
  } catch (error) {
    console.log(`Error add new post !`, error);
    throw error;
  }
};

// PUT
export const editPostByID = async (id: string, data: Post): Promise<Post> => {
  try {
    const response = await axios.putForm(`${process.env.API_URL}${POSTS_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(`Error update post with id ${id} !`, error);
    throw error;
  }
};

// DELETE
export const deletePost = async (id: string): Promise<Post> => {
  try {
    const response = await axios.delete(`${process.env.API_URL}${POSTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Error delete post with id ${id} !`, error);
    throw error;
  }
};