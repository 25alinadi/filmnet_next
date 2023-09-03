import {RootState} from "@/types/store.types";
import {IVideoStoreData} from "@/types/video.type";

export const selectVideoState = (state: RootState) => state.videos as Required<IVideoStoreData>
