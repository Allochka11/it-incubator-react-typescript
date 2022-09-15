import React, {useState} from "react";

function UncontrolledRatingMemo() {

    const [rating, setRating] = useState(0)

    return (
        <div>
            <Star selected={rating > 0} setRating={() => setRating(1)}/>
            <Star selected={rating > 1} setRating={() => setRating(2)}/>
            <Star selected={rating > 2} setRating={() => setRating(3)}/>
            <Star selected={rating > 3} setRating={() => setRating(4)}/>
            <Star selected={rating > 4} setRating={() => setRating(5)}/>
        </div>
    )
}

export const UncontrolledRating = React.memo(UncontrolledRatingMemo);

type StarPropsType = {
    selected: boolean
    setRating: () => void
}

function StarMemo(props: StarPropsType) {
    return <span onClick={props.setRating}>{props.selected ? <b>Star </b> : 'Star '}</span>
}

export const Star = React.memo(StarMemo);

