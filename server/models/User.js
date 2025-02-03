import db from '../config/db.js';
import bcrypt from 'bcrypt';

class User {
    static async findByEmail(email) {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        return result.rows.length > 0 ? result.rows[0] : null;
    }
    static async createUser(email, password) {
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [email, hashPassword]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        return result.rows.length > 0 ? result.rows[0] : null;
    }

}

export default User;