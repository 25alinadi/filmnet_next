import {FC, Fragment} from "react";
import {IVideoItemData} from "@/types/video.type";
import * as CardEl from "@/components/Card/CardElements";
import {e2p} from "@/utils/replaceNumber";

type CardProps = {
    data: IVideoItemData
}

const Card: FC<CardProps> = ({data}) => {
    const duration = data?.duration?.split(":")
    const genre = data?.categories?.filter((item) => item?.type === 'genre')[0]
    const territory = data?.categories?.filter((item) => item?.type === 'territory')[0]

    return (
        <Fragment>
            <CardEl.CardLi>
                <CardEl.CardDiv>
                    <CardEl.CardLink href={"#"} alt={data?.title}>
                        <CardEl.CardImg src={data?.poster_image?.path} alt={data?.title}/>
                        <CardEl.CardContent>
                            <CardEl.CardContentList>
                                {genre && <CardEl.CardContentTxt>{genre?.items?.map((item, index) => `${item?.title}${index !== (genre?.items?.length - 1) ? ", " : ''}`)}</CardEl.CardContentTxt>}
                                {territory && <CardEl.CardContentTxt>{`${data?.year} / ${territory?.items?.map((item, index) => `${item?.title}${index !== (territory?.items?.length - 1) ? ", " : ''}`)}`}</CardEl.CardContentTxt>}
                                {duration && <CardEl.CardContentTxt>{`${e2p(duration && duration[0] > 0 ? (parseInt(duration[0]) < 10 ? duration[0].split("")[1] : duration[0]) + " ساعت و " : '')}${e2p(duration ? (parseInt(duration[1]) > 10 ? duration[1] : duration[1].split("")[1]) + " دقیقه" : "")}`}</CardEl.CardContentTxt>}
                                <CardEl.CardContentImdbDiv>
                                    <span>
                                        <svg viewBox="0 0 44 18" width="32" height="13" fill={"var(--white-color)"}>
                                            <path d="M0,0.2h4.6v17.5H0V0.2z M14.3,0.2l-1.1,8.2L12.6,4c-0.2-1.4-0.4-2.7-0.5-3.7H6.1v17.5h4l0-11.6l1.7,11.6h2.8
                                                l1.6-11.8l0,11.8h4V0.2H14.3z M27.3,3.4c0.2,0.1,0.3,0.3,0.3,0.5c0.1,0.2,0.1,0.7,0.1,1.5v6.8c0,1.2-0.1,1.9-0.2,2.1
                                                c-0.2,0.3-0.6,0.4-1.2,0.4V3.2C26.8,3.2,27.2,3.3,27.3,3.4z M27.3,17.8c1.1,0,1.9-0.1,2.5-0.2c0.5-0.1,1-0.3,1.4-0.6
                                                c0.4-0.3,0.6-0.7,0.8-1.2c0.1-0.5,0.2-1.6,0.2-3.2V6.4c0-1.7-0.1-2.8-0.2-3.3c-0.1-0.6-0.4-1.1-0.8-1.5c-0.4-0.5-1-0.8-1.8-1
                                                c-0.8-0.2-2-0.3-4.3-0.3h-3.4v17.5L27.3,17.8L27.3,17.8z M39.6,13.5c0,0.8,0,1.4-0.1,1.6c-0.1,0.2-0.5,0.3-0.7,0.3
                                                c-0.3,0-0.5-0.1-0.5-0.3c-0.1-0.2-0.1-0.7-0.1-1.5V9c0-0.8,0-1.3,0.1-1.5c0.1-0.2,0.3-0.3,0.5-0.3c0.3,0,0.7,0.1,0.7,0.3
                                                c0.1,0.2,0.1,0.7,0.1,1.5V13.5z M33.7,0.2v17.5h4.1l0.3-1.1c0.4,0.4,0.8,0.8,1.2,1c0.4,0.2,1.1,0.3,1.6,0.3c0.7,0,1.3-0.2,1.9-0.6
                                                c0.5-0.4,0.9-0.8,1-1.3c0.1-0.5,0.2-1.3,0.2-2.3V8.8c0-1.1,0-1.8-0.1-2.1c0-0.3-0.2-0.7-0.4-1c-0.2-0.3-0.6-0.6-1-0.8
                                                c-0.4-0.2-1-0.3-1.6-0.3c-0.5,0-1.2,0.1-1.6,0.3c-0.4,0.2-0.9,0.5-1.2,0.9V0.2H33.7z"/>
                                        </svg>
                                    </span>
                                    <span>{data?.imdb_rank_percent/10}</span>
                                </CardEl.CardContentImdbDiv>
                            </CardEl.CardContentList>
                        </CardEl.CardContent>
                    </CardEl.CardLink>
                    <CardEl.CardTitle>{data.title}</CardEl.CardTitle>
                </CardEl.CardDiv>
            </CardEl.CardLi>
        </Fragment>
    )
}

export default Card