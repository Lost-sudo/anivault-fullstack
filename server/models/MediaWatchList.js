import db from "../config/db.js";

class MediaWatchList {
    constructor(tableName, idColumn) {
        this.tableName = tableName;
        this.idColumn = idColumn;
    }

    async getById(user_id, media_id) {
        const result = await db.query(
            `SELECT ${this.idColumn} FROM ${this.tableName} WHERE user_id = $1 AND ${this.idColumn} = $2`
            ,[user_id, media_id]
        );
        return result.rows.length > 0;
    }

    async getUserList(user_id) {
        const result = await db.query(
            `SELECT * FROm ${this.tableName} WHERE user_id = $1`,
            [user_id]
        );
        return result.rows;
    }

    async insert(user_id, name, media_id, img_url) {
        const result = await db.query(
            `INSERT INTO ${this.tableName} (user_id, title, ${this.idColumn}, img_url) VALUES ($1, $2, $3, $4) RETURNING *`,
            [user_id, name, media_id, img_url]
        )
        return result.rows[0];
    }

    async delete(user_id, media_id) {
        const result = await db.query(`DELETE FROM ${this.tableName} WHERE user_id = $1 AND ${this.idColumn} = $2 RETURNING *`,
            [user_id, media_id]
        );
        return result.rows.length > 0;
    }
}

export default MediaWatchList;