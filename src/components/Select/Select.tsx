import React, {useState} from "react";
import '../Select/Select.css'

type SelectType = {
    value: any
    onChangeItem: (value: any) => void
    items: ItemType[]

}
type ItemType = {
    title: string
    value: any
}

export const Select = (props: SelectType) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div className={'select'}>
            <div onClick={toggle}>{props.value}</div>
            <div style={!open ? {display: "none"} : {display: "block"}} className={'select_items'}>
                {props.items.map((i, index )=> <div key={index} className={'select_item'} onClick={()=>props.onChangeItem(i.title)}>{i.title}</div>)}</div>
        </div>
    );
};