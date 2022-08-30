import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import Accordion from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import {Input} from "./components/Input/UncontrolledInput";
import {ControlledCheckbox} from "./components/Input/ControlledCheckbox";
import {ControlledSelect} from "./components/Input/ControlledSelect";
import {ControlledInput} from "./components/Input/ControlledInput";
import {Select} from "./components/Select/Select";


function App() {




    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordion, setAccordion] = useState<boolean>(false)
    const [on,setOn] = useState<boolean>(true);

    const onClick = (id:string) =>{
        alert(`User with ${id} should be Happy!`)
    }
    const [parentValue, setParentValue] = useState<undefined| string>('Select')

    const onChangeHandler = (value:string) => {
        setParentValue(value)
    }
    return (
        <div className="App">

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Accordion titleValue={"Menu"} value={accordion} setAccordion={()=>setAccordion(!accordion)} items={[{title:'Alla', value:1}, {title:'Vladymyr', value:2}, {title:'Markiza', value:3}]}*/}
            {/*onClick={(id)=>onClick(id)}*/}

            {/*/>*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
            {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}
            {/*<UncontrolledAccordion titleValue={'Accordeon Title'}/>*/}
            {/*<Input/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            <Select value={parentValue} onChangeItem={(value)=>onChangeHandler(value)} items={[{title:'Alla', value:1}, {title:'Vladymyr', value:2}, {title:'Markiza', value:3}]}/>
            <ControlledSelect/>
        </div>

    );
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('Page title rendering')
    return <h1>{ props.title }</h1>
}

export default App;