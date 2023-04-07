import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MjY1ODMyOSIsIm5hbWUiOiJTb2NpYWxDaGFpbiIsImlhdCI6MzEwMjc1fQ.mtwgDUTy1JXRZsklVTWiguhinxebD9Exe9aenTJWxh8');//process.env.JWT_SECRET
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
