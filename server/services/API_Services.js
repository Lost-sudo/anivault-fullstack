import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL;

export const fetchData = async (endpoint) => {
    try {

        const response = await axios.get(`${BASE_URL}${endpoint}`);

        if (!response.data || !response.data.data) {
            throw new Error("Unable to retrieve data");
        }
        return response.data.data;

    } catch (error) {
        console.log(error);
        throw new Error("Invalid URL.");
    }
};

