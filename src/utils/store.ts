import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "@/features/video.slice"


const store = configureStore({
    reducer: {
        videos: videoReducer,
    },
})

export default store