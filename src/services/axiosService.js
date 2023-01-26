import APIRequest from "../utils/config/axios.config";

// Using axios
// Base URL = https://randomuser.me/api
export function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    });
}

export function getRandomJoke() {
    return APIRequest.get('https://api.chucknorris.io/jokes/random', {
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    });
}