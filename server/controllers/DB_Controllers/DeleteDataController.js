import MediaServices from "../../services/MediaServices.js";

class DeleteDataController {
    static async deleteAnime(req, res) {
        const { anime_id } = req.body;
        const user_id = req.user.id;

        try {
            const deleteAnimeData = await MediaServices.deleteAnime(user_id, anime_id);

            if (!deleteAnimeData) {
                res.status(204).send({message: 'Error deleting anime'});
            }
            return res.status(200).send({message: 'Successfully deleted anime'});
        } catch (e) {
            console.log("There is an error in deleteAnime: ", e.message);
            return res.status(500).send({message: 'Internal server error'});
        }
    }

    static async deleteManga(req, res) {
        const { manga_id } = req.body;
        const user_id = req.user.id;

        try {
            const deleteMangaData = await MediaServices.deleteManga(user_id, manga_id);
            if (!deleteMangaData) {
                res.status(204).send({message: 'Error deleting manga'});
            }
            return res.status(200).send({message: 'Successfully deleted manga'});
        } catch (e) {
            console.log("There is an error in deleteManga: ", e.message);
            return res.status(500).send({message: 'Internal server error'});
        }
    }
}

export default DeleteDataController;