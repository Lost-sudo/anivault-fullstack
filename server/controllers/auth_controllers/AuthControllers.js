import UserService from "../../services/UserService.js";
import AuthService from "../../services/AuthService.js";

class AuthController {
    static async register(req, res) {
        const { email, password } = req.body;
        try {
            const newUser = await UserService.register(email, password);
            if (!newUser) {
                res.status(409).send({message: "User already registered" });
            }
            const token = await AuthService.generateTokenForUser(newUser);
            res.status(201).json({ message: 'User created successfully', token });
        } catch (error) {
            res.status(500).json({ message: "Server Error", error });
        }
    }


    static async login(req, res, next) {
       try {
           const authResult = await AuthService.authenticateUser(req, res, next);

           if (!authResult) {
               return res.status(401).send({message: "Invalid user credentials" });
           }

           res.json({message: "User logged in successfully", token: authResult.token});
       } catch (error) {
           next(error);
       }
    }
}

export default AuthController;