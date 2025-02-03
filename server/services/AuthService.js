import {generateToken} from "../config/jwt.js";
import passport from "passport";

class AuthService {
    static async generateTokenForUser(user) {
        try {
            return user ? generateToken(user) : null;
        } catch (error) {
            console.error("Error generating token", error);
            throw error;
        }
    }

    static async authenticateUser(req, res, next) {
        return new Promise((resolve, reject) => {
            passport.authenticate("local", {session: false}, async (err, user) => {
                if (err) return reject(err);

                if (!user) return resolve(null);

                const token = await AuthService.generateTokenForUser(user);
                return resolve({user, token});
            })(req, res, next);
        });
    }
}

export default AuthService;