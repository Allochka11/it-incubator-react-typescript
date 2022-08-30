import React, {useState} from "react";


export function UncontrolledRating() {
    // console.log('Rating rendering')

    const [rating,setRating] = useState(0)


    return (
        <div>
            <Star selected={rating > 0} setRating={()=>setRating(1)}/>
            <Star selected={rating > 1} setRating={()=>setRating(2)}/>
            <Star selected={rating > 2} setRating={()=>setRating(3)}/>
            <Star selected={rating > 3} setRating={()=>setRating(4)}/>
            <Star selected={rating > 4} setRating={()=>setRating(5)}/>
        </div>
    )


}

type StarPropsType = {
    selected: boolean
    setRating: ()=> void
}

export function Star(props: StarPropsType) {


    return <span onClick={props.setRating}>{props.selected ? <b>Star </b> : 'Star '}</span>



}
