const jwt = require("jsonwebtoken");

const secretKey = "javainuse-secret-key";

exports. verifyToken=(req, res, next) =>{

  const token = req.headers.authorization;

  if (!token) {

    return res.status(403).json({ message: "Token not provided" });
  }


  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {

      return res.status(401).json({ message: "Invalid token" });
    }

    req.decoded = decoded;
    next(); 
  });
}
