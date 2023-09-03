export interface IVideoItemData{
    id: string,
    title: string,
    poster_image: string,
    duration: string,
    categories: Array<ICategoryForVideoData>,
    imdb_rank_percent: number,
    year: number,
}

export interface ICategoryForVideoData{
    type: "default" | "genre" | "territory",
    items: Array<{title: string}>
}

export interface IVideoStoreData{
    videos: Array<IVideoItemData>,
    count: number,
    offset: number
    status: "idle" | "loading" | "succeeded" | "failed";
}

export interface IFetchVideoResponse {
    data: [],
    meta: {
        total_items_count: number,
        remaining_items_count: number,
        next_url: string,
        operation_result: string,
        operation_result_code: number,
        display_message: string,
        server_date_time: string
    }
}