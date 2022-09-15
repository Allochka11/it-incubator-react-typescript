import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordionMemo(props: AccordionPropsType) {
    // const [accordion, setAccordion] = useState<boolean>(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (<div>
        {/*<AccordionTitle title={props.titleValue} setAccordion={()=>setAccordion(!accordion)}/>*/}
        <AccordionTitle title={props.titleValue} setAccordion={() => {
            dispatch({type: TOGGLE_COLLAPSED})
        }}/>
        {!state.collapsed && <AccordionBody/>}
    </div>)
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo);


type AccordionTitlePropsType = {
    title: string
    setAccordion: () => void
}

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setAccordion}>{props.title}</h3>
}

const AccordionTitle = React.memo(AccordionTitleMemo);

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
