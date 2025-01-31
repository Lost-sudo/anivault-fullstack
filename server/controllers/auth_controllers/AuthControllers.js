import User from '../../models/User.js';
import { generateToken }  from "../../config/jwt.js";
import bcrypt from "bcrypt";
import passport from "passport";

class AuthController {
    static async register(req, res) {
        const { email, password } = req.body;
        console.log("Email received:", email);

        try {
            // Check if user already exists
            const existingUser = await User.findByEmail(email);
            console.log("Existing user:", existingUser);

            if (existingUser !== null) {
                // User exists
                return res.status(409).json({ message: 'User already exists' });
            }

            // Create new user
            const newUser = await User.createUser(email, password);
            console.log("New user created:", newUser);

            const token = generateToken(newUser);
            res.status(201).json({ message: 'User created successfully', token });
        } catch (error) {
            console.error("Error during registration:", error); // Log the error for debugging
            res.status(500).json({ message: "Server Error", error });
        }
    }


    static async login(req, res, next) {
       const authMiddleware = passport.authenticate('local', {session: false}, (err, user, info) => {
           if (err) {
               return next(err);
           }
           if (!user) {
               return res.status(401).json({ message: 'Invalid credentials' });
           }
           const token = generateToken(user);

           res.json({ message: "Login successfully", token });
       })

        authMiddleware(req, res, next);
    }
}

export default AuthController;