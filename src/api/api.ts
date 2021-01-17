import axios from "axios";

const instance = axios.create({
    baseURL: "https://my-json-server.typicode.com/Ke1sy/users-list/",
    withCredentials: true,
});

export const usersAPI = {
    getUsers: () => {
        return instance.get('users')
            .then(response => response.data);
    },
};
