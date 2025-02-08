import MediaWatchList from "./MediaWatchList.js";

class MangaWatchList extends MediaWatchList {
    constructor() {
        super("mangavault", "manga_mal_id");
    }
}

export default new MangaWatchList();