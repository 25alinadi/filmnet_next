import {FC, Fragment} from "react";
import * as SkeletonEl from "@/components/Skeleton/SkeletonElements";

const SkeletonItem:FC = () => {
    return(
        <Fragment>
            <SkeletonEl.SkeletonLi>
                <SkeletonEl.SkeletonDiv/>
                <SkeletonEl.SkeletonP>
                    <SkeletonEl.SkeletonSpan/>
                </SkeletonEl.SkeletonP>
            </SkeletonEl.SkeletonLi>
        </Fragment>
    )
}

export default SkeletonItem