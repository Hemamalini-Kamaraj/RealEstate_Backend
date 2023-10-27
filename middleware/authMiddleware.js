const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");

const authMiddleware = {
  verifyToken: async (req, res, next) => {
    let token = req.get("authorization");

    if (token && token.startsWith("bearer ")) {
      token = token.replace("bearer ", "");
    }

    if (!token) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    try {
      const decodedToken = jwt.verify(token, SECRET_KEY);

      req.userId = decodedToken.id;
      next();
    } catch (error) {
      console.log("Error verifying token", error);
      return res.status(401).json({ message: "Authentication failed" });
    }
  },
};

module.exports = authMiddleware;
