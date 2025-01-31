import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import bcrypt from "bcrypt";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_SECRET) {
    throw new Error("JWT secret must be provided");
}

passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try {
            const user = await User.findByEmail(email);
            if (!user) {
                return done(null, false, { message: 'User does not exist' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Invalid credentials' });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
);

const jwtOptions  = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(
    new JWTStrategy(jwtOptions, async (payload, done) => {
        try {
            const user = await User.findById(payload.id);
            if (!user) {
                return done(null, false, { message: 'User not found' });
            }
            return done(null, user);
        } catch (err) {
            return done(err, false);
        }
    })
)

export default passport;