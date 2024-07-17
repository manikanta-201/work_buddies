const jwt = require("jsonwebtoken");
const usermodels = require("../models/UserModel");

const authUser = async (req, res, next) => {
 
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Auth token required" });
  }
 
  const token = authorization.split(" ")[1];
 
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user= await usermodels.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ error: "User is not authorized!" });
  }
};

module.exports = authUser;
