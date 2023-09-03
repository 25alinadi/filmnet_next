'use client'

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import {selectVideoState} from "@/features/video.selectors";
import {fetchVideos} from "@/features/video.slice";
import {useEffect} from "react";

export default function Home() {
    const dispatch = useAppDispatch()
    const {videos, count, status} = useAppSelector(selectVideoState)

    dispatch(fetchVideos())

    // const observer = useRef<HTMLDivElement>(null)
    //
    // useIsVisible(observer, () => {
    //     if(status === 'succeeded' || status === 'idle') dispatch(fetchVendors())
    // })

    // useEffect(() => {
    //     dispatch(fetchVideos())
    // }, [])
    //
    // const vendorItems = vendors?.map((item) => <Card key={item?.data?.id} data={item?.data}/>)

    return (
        <div>
            aaaa
            {/*{status === "idle" ? (Array.from({length: 4}).map((_, index) => (<Skeleton key={index}/>))) : vendorItems}*/}
            {/*{(status === "loading") && <Skeleton/>}*/}
            {/*<div ref={observer} />*/}
        </div>
    )
}
