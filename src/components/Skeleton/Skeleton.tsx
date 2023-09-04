import {FC, Fragment} from "react";
import {SkeletonUl} from "@/components/Skeleton/SkeletonElements";
import SkeletonItem from "@/components/Skeleton/SkeletonItem";

const Skeleton:FC = () => {
    return(
        <Fragment>
            <SkeletonUl>
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
            </SkeletonUl>
        </Fragment>
    )
}

export default Skeleton