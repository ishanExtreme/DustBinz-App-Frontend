import client from "./client";

const change_password = (password) => client.put("/users/change-pass", password);

export default {
    change_password,
};
