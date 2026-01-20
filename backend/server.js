import dotenv from "dotenv";
dotenv.config(); 

import app from "./app.js";
import cloudinary from "cloudinary";

console.log("Mongo URI =", process.env.MONGODB_URI);

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
