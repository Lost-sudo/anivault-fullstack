import {fetchData} from "../../services/API_Services.js";

class MangaController {
    async getManga(req, res) {
        try {
            const manga = await fetchData("/manga");
            res.json(manga);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to fetch manga data" });
        }
    }

    async geTopManga(req, res) {
        try {
            const topManga = await fetchData("/top/manga");
            res.json(topManga);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to fetch top manga" });
        }
    }

    async getRecommendedManga(req, res) {
        try {
            const recommendedManga = await fetchData("/recommended/manga");
            res.json(recommendedManga);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to fetch recommended manga" });
        }
    }

    async getRandomManga(req, res) {
        try {
            const randomManga = await fetchData("/random/manga");
            res.json(randomManga);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to fetch random manga" });
        }
    }

    async getMangaById(req, res) {
        try {
            const { id } = req.params;
            const mangaById = await fetchData(`/manga/${id}`);
            res.json(mangaById);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to fetch manga" });
        }
    }

    async getMangaReviews(req, res) {
        try {
            const { id } = req.params;
            const mangaReviews = await fetchData(`/manga/${id}/reviews`);
            res.json(mangaReviews);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to fetch manga reviews" });
        }
    }

    async getMangaRelations(req, res) {
        try {
            const { id } = req.params;
            const mangaRelations = await fetchData(`/manga/${id}/relations`);
            res.json(mangaRelations);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to fetch manga relations" });
        }
    }
}

export default MangaController;