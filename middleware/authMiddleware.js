import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignin = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.header.authorization, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in authentication",
      error,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        message: "Unauthorized Acess",
        success: false,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in admin",
      error,
    });
  }
};
