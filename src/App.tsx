import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff  from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import { UncontrolledRating } from './components/Rating/UncontrolledRating';


function App() {
    console.log('App rendering')

    return (
        <div className="App">
            {/*<OnOff />*/}

            <UncontrolledAccordion titleValue={'Accordeon Title'}/>



            {/*<UncontrolledRating/>*/}
        </div>

    );
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('Page title rendering')
    // debugger
    return <h1>{ props.title }</h1>
}

export default App;