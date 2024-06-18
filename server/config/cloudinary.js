const cloudinary = require("cloudinary").v2; //cloudinary is being required

require("dotenv").config();

exports.cloudinaryConnect = () => {
    try{
        // configuring the cloudinary to upload media
        cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        });
    }
    catch(error){
        console.log(error);
    }
}