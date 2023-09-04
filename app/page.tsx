'use client'

import useAppSelector from "@/hooks/useAppSelector";
import {selectVideoState} from "@/features/video.selectors";
import {fetchVideos} from "@/features/video.slice";
import {useEffect, useRef, useState} from "react";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import number = CSS.number;
import Skeleton from "@/components/Skeleton/Skeleton";
import * as HomeEl from "@/components/GlobalElements/HomeElelments";
import {SkeletonUl} from "@/components/Skeleton/SkeletonElements";

export default function Home() {
    const dispatch = useAppDispatch()
    const {videos, offset, status} = useAppSelector(selectVideoState)

    const observer = useRef<HTMLDivElement>(null)

    // useIsVisible(observer, () => {
    //     if(status === 'succeeded' || status === 'idle') dispatch(fetchVendors())
    // })

    useEffect(() => {
        // dispatch(fetchVideos())
    }, [])
    // const vendorItems = vendors?.map((item) => <Card key={item?.data?.id} data={item?.data}/>)

    return (
        <HomeEl.HomeDiv>
            <HomeEl.HomeSection>
                {/*<HomeEl.HomeUl>*/}
                    {/*{status === "idle" ? (Array.from({length: 4}).map((_, index) => (<Skeleton key={index}/>))) : vendorItems}*/}
                    {/*{(status === "loading") && <Skeleton/>}*/}
                    {/*<div ref={observer} />*/}
                {/*</HomeEl.HomeUl>*/}
                <Skeleton />
            </HomeEl.HomeSection>
        </HomeEl.HomeDiv>
    )
}
