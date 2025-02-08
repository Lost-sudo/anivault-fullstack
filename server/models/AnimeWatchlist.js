import MediaWatchList from "./MediaWatchList.js";

class AnimeWatchList extends MediaWatchList {
    constructor() {
        super("animevault", "anime_mal_id");
    }
}

export default new AnimeWatchList();