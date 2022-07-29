import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff  from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating';


function App() {
    console.log('App rendering')

    return (
        <div className="App">
            <OnOff on={false} off={true}/>
            {/*<Accordion titleValue={'Accordeon Title'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Accordeon Hello World!'} collapsed={false}/>*/}


            {/*<Rating value={0}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
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