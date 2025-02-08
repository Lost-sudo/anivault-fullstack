import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
    throw new Error("Missing environment variable");
}

const cache = {};
const cacheTTL = 60 * 1000 * 60;

const dataFetcher = (endpoint) => {
    if (!endpoint || typeof endpoint !== "string") {
        throw new Error("Invalid endpoint provided.");
    }

    return axios.get(`${BASE_URL}${endpoint}`);
};

export const fetchData = async (endpoint) => {

    if (cache[endpoint] && cache[endpoint].timeStamp > Date.now() - cacheTTL) {
        console.log("Serving from cache: ", endpoint);
        return cache[endpoint].data;
    }

    try {
        const response = await dataFetcher(endpoint);

        if (!response.data || !response.data.data) {
            return null;
        }

        cache[endpoint] = {
            data: response.data.data,
            timeStamp: Date.now(),
        }

        setTimeout(() => {
            console.log("Cache expired for: ", endpoint);
            delete cache[endpoint];
        }, cacheTTL)

        return response.data.data;

    } catch (error) {
        console.log("Error fetching data: ", error);
        throw new Error("Failed to fetch data. Please check the URL and try again.");
    }
};

