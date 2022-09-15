import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    setAccordion: () => void
    value: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionMemo(props: AccordionPropsType) {
    return (<>

        <AccordionTitle title={props.titleValue} setAccordion={props.setAccordion}/>
        {!props.value && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </>)
}

export const Accordion = React.memo(AccordionMemo);


type AccordionTitlePropsType = {
    title: string
    setAccordion: () => void
}


function AccordionTitleMemo(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setAccordion}>{props.title}</h3>
}

export const AccordionTitle = React.memo(AccordionTitleMemo);


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBodyMemo(props: AccordionBodyPropsType) {

    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    )
}

export const AccordionBody = React.memo(AccordionBodyMemo);
