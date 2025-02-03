import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
    if (!process.env.JWT_SECRET) {
        console.log("JWT secret not set.");
    }
    return jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'})
};

export { generateToken };