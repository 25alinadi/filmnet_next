import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import httpClient from "@/services/httpClient";
import {IVideoItemData, IVideoStoreData} from "@/types/video.type";

const initialVideoState: IVideoStoreData = {
    videos: [],
    count: 32,
    offset: 0,
    status: 'idle'
}

export const fetchVideos = createAsyncThunk('videos/fetchList', async (_, thunkAPI) => {
    try {
        const response = await httpClient.get('video-contents', {
            params: {
                count: thunkAPI.getState().videos.count,
                offset: thunkAPI.getState().videos.offset,
            }
        })
        if (response.status === 200) {
            return response.data.data as IVideoItemData[]
        } else {
            throw new Error('Invalid response structure')
        }
    } catch (error) {
        console.error('Error fetching videos:', error)
        return []
    }
});

const videoSlice = createSlice({
    name: "videos",
    initialState: initialVideoState,
    reducers: {
        resetVideos: () => initialVideoState
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending.toString(), (state:IVideoStoreData) => {
                if(state.status !== 'idle'){
                    state.status = "loading"
                }
            })
            .addCase(fetchVideos.fulfilled.toString() , (state:IVideoStoreData, {payload}: PayloadAction<Array<IVideoItemData>>) => {
                state.videos = state.videos.concat(payload)
                state.status = "succeeded"
                state.offset += state?.count!
            })
            .addCase(fetchVideos.rejected.toString(), (state:IVideoStoreData) => {
                state.videos = [];
                state.status = "failed"
            })
    }
})

export const videoActions = videoSlice.actions

export default videoSlice.reducer