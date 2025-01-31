import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
    if (!process.env.JWT_SECRET) {
        console.log("JWT secret not set.");
    }
    return jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'})
};

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({message: 'Access denied, no token provided'});
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.status(401).json({message: 'Invalid token or expired token'});
    }
}

export { generateToken, verifyToken };