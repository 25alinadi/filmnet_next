import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import httpClient from "@/services/httpClient";
import {IVideoStoreData} from "@/types/video.type";

const initialVideoState: IVideoStoreData = {
    videos: [],
    count: 32,
    offset: 10,
    status: 'idle'
}

export const fetchVideos = createAsyncThunk('videos/fetchList', async (_, thunkAPI) => {
    await httpClient.get('video-contents', {params:{
            count: thunkAPI.getState().videos.count,
            offset: "10",
        }})
        .then(res => {
            return res?.data
        })
        .catch(err => console.log(err))
    // console.log("fetchVideos", response)
    // if (response.status !== 200) {
    //     throw new Error(`Request failed with status: ${response.status}`);
    // }
    // return response.data
})

const videoSlice = createSlice({
    name: "videos",
    initialState: initialVideoState,
    reducers: {
        resetVideos: () => initialVideoState
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state:IVideoStoreData) => {
                // if(state.status !== 'idle'){
                //     state.status = "loading"
                // }
            })
            .addCase(fetchVideos.fulfilled, (state:IVideoStoreData, action: PayloadAction<object>) => {
                // const newVendors = action.payload.data.finalResult?.filter(
                //     (item: IVendorDate) => item.type === "VENDOR"
                // );
                // state.vendors = state.vendors.concat(newVendors)
                // state.status = "succeeded";
                // state.count = action.payload.data.open_count
                // state.count++;
            })
            .addCase(fetchVideos.rejected, (state:IVendorStoreData, action: PayloadAction) => {
                // state.vendors = [];
                // state.status = "failed"
            })
    }
})

export const videoActions = videoSlice.actions

export default videoSlice.reducer