import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import errorsHandler from "./middlewares/errors.middleware.js";
import postRoutes from "./routes/posts.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const publicDir = process.env.PUBLIC_DIR || "./public/uploads/img";

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/public", express.static(publicDir));

// Routes
app.use(postRoutes);
app.use(authRoutes);

// 404 errors
app.use((req, res, next) => {
    res.status(404).send("Error 404 : Not found !");
});

// Errors middleware
app.use(errorsHandler);

// Start server
const mongoURI = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

const bootstrap = async () => {
    try {
        await mongoose.connect(`${mongoURI}${dbName}`);
        app.listen(port, () => { console.log(`Server start at http://localhost:${port}`) });
    } catch (error) {
        console.error("Error connecting to MongoDB : ", error);
        process.exit(1);
    }
};
bootstrap();