
import React from "react";

type AccordionPropsType = {
    titleValue: string,
    setAccordion: ()=> void
    value:boolean
}

function Accordion(props: AccordionPropsType) {
    return (<>

        <AccordionTitle title={props.titleValue} setAccordion={props.setAccordion}/>
        {!props.value && <AccordionBody/> }
    </>)
}

type AccordionTitlePropsType = {
    title: string
    setAccordion: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setAccordion}>{props.title}</h3>
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;