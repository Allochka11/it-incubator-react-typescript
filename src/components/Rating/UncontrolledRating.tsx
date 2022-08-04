import React, {useState,MouseEvent} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    const [rating,setRating] = useState(0)

    const onClickStarHandler = (value: number) => {
        setRating(value)
    }


    return (
        <div>
            <Star  selected={rating > 0} onClickStarHandler={onClickStarHandler}/>
            <Star selected={rating > 1} onClickStarHandler={onClickStarHandler}/>
            <Star selected={rating > 2} onClickStarHandler={onClickStarHandler}/>
            <Star selected={rating > 3} onClickStarHandler={onClickStarHandler}/>
            <Star selected={rating > 4} onClickStarHandler={onClickStarHandler}/>
        </div>
    )


}

type StarPropsType = {
    selected: boolean
    onClickStarHandler: (value:number)=> void
}

export function Star(props: StarPropsType) {
    console.log(props)





    return (
        <span onClick={()=>props.onClickStarHandler(2)}>{props.selected ? <b>Star</b> : 'Star'}</span>
    )



}
