// Importing required modules
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");

// Configuring dotenv to load environment variables from .env file
dotenv.config();

// This function is used as middleware to authenticate user requests
exports.auth = async (req, res, next) => {
    try{
        // Extracting JWT from request cookies, body or header
        const token = req.cookies.token 
                        || req.body.token 
                        || req.header("Authorization").replace("Bearer ", "");
    
    // if token missing then return response
    if(!token){
        return res.status(401).json({
            success: false,
            message: 'Token is missing',
        });
    }

    // Verifying the JWT using the secret key stored in environment variables
    try{
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);
        // Storing the decoded JWT payload in the request object for further use
        req.user = decode;
    }
    catch(err){
        // verification issue
        return res.status(401).json({
            success: false,
            message: 'token is invalid',
        });
    }
    // If JWT is valid, move on to the next middleware or request handler
    next();
    }
    catch(error){
        return res.status(401).json({
            success: false,
            message: 'Something went wrong while validating the token',
        });
    }
}

// isStudent
exports.isStudent = async(req, res, next) => {
      try{
        const userDetails = await User.findOne({ email: req.user.email });

        if(userDetails.accountType !== "Student"){
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Students only',
            });
        }
        next();
      } 
      catch(error){
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again',
        });
      } 
}

//isInstructor
exports.isInstructor = async(req, res, next) => {
    try{
      const userDetails = await User.findOne({ email: req.user.email });
	  console.log(userDetails);

	  console.log(userDetails.accountType);

      if(userDetails.accountType !== "Instructor"){
          return res.status(401).json({
              success: false,
              message: 'This is a protected route for Instructor only',
          });
      }
      next();
    } 
    catch(error){
      return res.status(500).json({
          success: false,
          message: 'User role cannot be verified, please try again',
      });
    } 
}

// isAdmin
exports.isAdmin = async(req, res, next) => {
    try{
      const userDetails = await User.findOne({ email: req.user.email });

      if(userDetails.accountType !== "Admin"){
          return res.status(401).json({
              success: false,
              message: 'This is a protected route for Admin only',
          });
      }
      next();
    } 
    catch(error){
      return res.status(500).json({
          success: false,
          message: 'User role cannot be verified, please try again',
      });
    } 
}