import cloudinary from "cloudinary";
import dotenv from "dotenv";

// Configure dotenv to load environment variables from .env file
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
  
const handleUpload = async (file)=>{
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return res;
}

export const uploadController = async (req, res) => {
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);
      res.json(cldRes);
    } 
    catch (error) {
      console.log(error);
      res.send({message: error.message,});
    }
}
