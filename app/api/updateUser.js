import client from "./client";

const updateUser = (user) => client.put("/users/update", user);

export default {
    updateUser,
};
