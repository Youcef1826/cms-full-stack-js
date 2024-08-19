// Auth JWT middleware
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, data) => {
      console.log(data);
      if (err) {
        return res.status(403).json({ message: "Forbidden : Invalid token" });
      }
      req.user = await User.findById(data.userId);
      next();
    });
  } else {
    res.status(401).json({ message: "Unauthorized : No token provided" });
  }
};
export default authenticateJWT;
