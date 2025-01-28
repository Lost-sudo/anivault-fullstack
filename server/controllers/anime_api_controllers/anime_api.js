import { fetchData } from "../../utils/api_utility.js";

class AnimeController {
    async getAnime(req, res) {
        try {
            const anime = await fetchData("/anime");
            res.json(anime);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch anime data" });
        }
    }

    async getTopAnime(req, res) {
        try {
            const topAnime = await fetchData("/top/anime");
            res.json(topAnime);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch top anime" });
        }
    }

    async getRecommendedAnime(req, res) {
        try {
            const recommendedAnime = await fetchData("/recommendations/anime");
            res.json(recommendedAnime);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch recommended anime" });
        }
    }

    async getRandomAnime(req, res) {
        try {
            const randomAnime = await fetchData("/random/anime");
            res.json(randomAnime);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch random anime" });
        }
    }

    async getAnimeReviews(req, res) {
        try {
            const { id } = req.params;
            const animeReviews = await fetchData(`/anime/${id}/reviews`);
            res.json(animeReviews);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch anime reviews" });
        }
    }

    async getAnimeRelations(req, res) {
        try {
            const { id } = req.params;
            const animeRelations = await fetchData(`/anime/${id}/relations`);
            res.json(animeRelations);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch anime relations" });
        }
    }
}

export default AnimeController;
