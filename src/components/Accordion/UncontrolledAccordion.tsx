
import React, { useState } from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [accordion, setAccordion] = useState<boolean>(false)

    return (<div>
        <AccordionTitle title={props.titleValue} setAccordion={()=>setAccordion(!accordion)}/>
        {!accordion && <AccordionBody/> }
    </div>)

}

type AccordionTitlePropsType = {
    title: string
    setAccordion:()=> void
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

export default UncontrolledAccordion;