
import React, { useState } from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    let [collapsed, setCollapsed]=useState(false);

    const onClickSetCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (<div>

        <AccordionTitle title={props.titleValue} onClickSetCollapsed={onClickSetCollapsed}/>

        {!collapsed && <AccordionBody/> }
    </div>)



}

type AccordionTitlePropsType = {
    title: string
    onClickSetCollapsed:()=> void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return <h3 onClick={props.onClickSetCollapsed}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;