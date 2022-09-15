import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select2.module.css'
import {log} from "util";

type Select2Type = {
    value?: any
    onChangeItem: (value: any) => void
    items: ItemType[]

}
type ItemType = {
    title: string
    value: any
}

export const Select2 = (props: Select2Type) => {

    const [active, setActive] = useState(false);
    //value того на чем сейчас hover
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    let hoveredItem = props.items.find(i => i.value === hoveredElementValue);
    useEffect(() =>{
        setHoveredElementValue(props.value)
    }, [props.value])




    const toggleItems = () => setActive(!active);
    const onItemClick = (value:any) => {
        props.onChangeItem(value);
        toggleItems();
    }
    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i <props.items.length ; i++) {
                if(hoveredElementValue === props.items[i].value) {

                    const pretendentItem = e.key === 'ArrowDown' ? props.items[i+1] : props.items[i-1]
                    if(pretendentItem) {
                        props.onChangeItem(pretendentItem.value);
                        return;
                    }
                }
                if(!selectedItem) {
                    props.onChangeItem(props.items[0].value)
                }
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
            toggleItems();
        }
    }




    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main}   onClick={toggleItems}>{selectedItem ? selectedItem.title : props.value}</span>

            {
                active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        onMouseEnter={()=>{setHoveredElementValue(i.value)}}

                        className={s.item + ' ' + (i === hoveredItem ? s.selected : '') }


                                               key={i.value}
                                               onClick={() => onItemClick(i.value)}>{i.title}</div>)}
                </div>
            }

        </div>
    );
};