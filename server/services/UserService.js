import User from "../models/User.js";

class UserService {
    static async register(email, password) {
        try {
            const isExistingUser = await User.findByEmail(email);

            if (isExistingUser) {
                return null;
            }

            return await User.createUser(email, password);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default UserService;
