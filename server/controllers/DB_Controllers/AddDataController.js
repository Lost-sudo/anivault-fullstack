import MediaServices from "../../services/MediaServices.js";

class AddDataController {
    static async addAnime(req, res) {
        const { anime_name, anime_id, anime_img_url } = req.body;
        const user_id = req.user.id;

        try {
            const newAnime = await MediaServices.insertAnimeData(user_id, anime_name, anime_id, anime_img_url);
            if (!newAnime) {
                res.status(400).send({message: "Anime already exists"});
            }
            return res.status(201).send({message: "Anime added successfully"});
        } catch (e) {
            console.log("There is an error in addAnime: ", e.message);
            res.status(500).send({message: "Internal Server Error"});
        }
    }

    static async addManga(req, res) {
        const { manga_name, manga_id, manga_img_url } = req.body;
        const user_id = req.user.id;

        try {
            const newManga = await MediaServices.insertMangaData(user_id, manga_name, manga_id, manga_img_url);
            if (!newManga) {
                res.status(400).send({message: "Manga already exists"});
            }
            return res.status(201).send({message: "Manga added successfully"});
        } catch (e) {
            console.log("There is an error in insertManga: ", e.message);
            res.status(500).send({message: "Internal Server Error"});
        }
    }
}

export default AddDataController;