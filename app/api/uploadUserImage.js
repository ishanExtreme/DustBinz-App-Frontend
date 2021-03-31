import client from "./client";

const uploadUserImage = (file) => client.post("/uploads/user-image", file);

export default {
    uploadUserImage,
};
