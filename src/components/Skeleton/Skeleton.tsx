import {FC, Fragment} from "react";
import * as SkeletonEl from "@/components/Skeleton/SkeletonElements";

const Skeleton:FC = () => {
    return(
        <Fragment>
            <SkeletonEl.SkeletonLi>
                <img src={"https://static.filmnet.ir/images/6c/ee/6ceec10923724edba632c71968d24a24.jpg?w=300"} />
            </SkeletonEl.SkeletonLi>
        </Fragment>
    )
}

export default Skeleton