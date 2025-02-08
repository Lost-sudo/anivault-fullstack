import AnimeWatchlist from "../models/AnimeWatchlist.js";
import MangaReadList from "../models/MangaReadList.js";
import res from "express/lib/response.js";
import * as assert from "node:assert";

class MediaServices {
    static async insertMediaData(mediaModel, user_id, media_title, media_id, media_img_url) {
        try {
            const dataExist = await mediaModel.getById(user_id, media_id);
            if (dataExist) {
                return null;
            }
            return await mediaModel.insert(user_id, media_title, media_id, media_img_url);
        } catch (e) {
            console.error("Error inserting media data:", e.message);
            throw new Error("Database insert failed");
        }
    }

    static async deleteMedia(mediaModel, user_id, media_id) {
        try {
            const dataExist = await mediaModel.getById(user_id, media_id);
            if (dataExist) {
                return await mediaModel.delete(user_id, media_id);
            } else {
                return new Error("Data does not exist");
            }
        } catch (e) {
            console.error("Error deleting media data:", e.message);
            throw new Error("Database delete failed");
        }
    }

    static async insertAnimeData(user_id, title, anime_id, anime_img_url) {
        return await MediaServices.insertMediaData(AnimeWatchlist, user_id, title, anime_id, anime_img_url);
    }

    static async insertMangaData(user_id, title, manga_id, manga_img_url) {
        return await MediaServices.insertMediaData(MangaReadList, user_id, title, manga_id, manga_img_url);
    }

    static async deleteAnime(user_id, anime_id) {
        return await MediaServices.deleteMedia(AnimeWatchlist, user_id, anime_id);
    }

    static async deleteManga(user_id, manga_id) {
        return await MediaServices.deleteMedia(MangaReadList, user_id, manga_id);
    }
}

export default MediaServices;
