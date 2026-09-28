import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    } else {
      // Upload the file to Cloudinary
      const responseFromCloudinary = await cloudinary.uploader.upload(
        localFilePath,
        {
          resource_type: "auto", // Automatically detect the file type (image, video, etc.)
        }
      );
      //file has been uploaded successfully
      console.log("File uploaded to Cloudinary:", responseFromCloudinary.url);
      return responseFromCloudinary;
    }
  } catch (error) {
    fs.unlinkSync(localFilePath); // Delete the local file if upload fails
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};

export { uploadToCloudinary };
