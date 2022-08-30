
import React from "react";
type ItemType = {
    title:string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    setAccordion: ()=> void
    value:boolean
    items: ItemType[]
    onClick:(value:any)=>void
}

function Accordion(props: AccordionPropsType) {
    return (<>

        <AccordionTitle title={props.titleValue} setAccordion={props.setAccordion}/>
        {!props.value && <AccordionBody items={props.items} onClick={props.onClick} /> }
    </>)
}

type AccordionTitlePropsType = {
    title: string
    setAccordion: ()=> void
}




function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setAccordion}>{props.title}</h3>
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {

    return (
        <ul >
            {props.items.map((i, index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

export default Accordion;