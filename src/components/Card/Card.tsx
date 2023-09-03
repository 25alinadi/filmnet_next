import {FC, Fragment} from "react";
import {IVideoItemData} from "@/types/video.type";
import * as CardEl from "@/components/Card/CardElements";
import {sp} from "@/utils/replaceNumber";
import Image from "next/image";

type CardProps = {
    data: IVideoItemData
}

const Card:FC<CardProps> = ({data}) => {
    return(
        <Fragment>

        </Fragment>
    )
}

export default Card