import axios, { AxiosInstance } from 'axios';

const isServer = typeof window === "undefined";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3000",
  headers: {
    Authorization: isServer ? "" : `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

export default instance;