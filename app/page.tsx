'use client'

import useAppSelector from "@/hooks/useAppSelector";
import {selectVideoState} from "@/features/video.selectors";
import {fetchVideos} from "@/features/video.slice";
import {useEffect, useRef, useState} from "react";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import Skeleton from "@/components/Skeleton/Skeleton";
import * as HomeEl from "@/components/GlobalElements/HomeElelments";
import {CardUl} from "@/components/Card/CardElements";
import Card from "@/components/Card/Card";
import {useIsVisible} from "@/hooks/useIsVisible";

export default function Home() {
    const dispatch = useAppDispatch()
    const {videos, offset, status} = useAppSelector(selectVideoState)

    const observer = useRef<HTMLDivElement>(undefined)

    useIsVisible(observer, () => {
        if(status === 'succeeded' || status === 'idle') dispatch(fetchVideos())
    })

    useEffect(() => {
        dispatch(fetchVideos())
    }, [])

    const videosItems = videos?.map((item) => <Card key={item?.id} data={item}/>)

    return (
        <HomeEl.HomeDiv>
            <HomeEl.HomeSection>
                <CardUl>
                    {videosItems}
                    <div ref={observer} />
                </CardUl>
                {(status === "idle" || status === "loading") && <Skeleton/>}
            </HomeEl.HomeSection>
        </HomeEl.HomeDiv>
    )
}
