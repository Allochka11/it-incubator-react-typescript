import React, {useMemo, useState} from "react";
import {Select2} from "./Select2";

export type HelperSelectType = {}

export const HelperSelect = (props: HelperSelectType) => {
    console.log('helper')
    const [city, setCity] = useState([
        {value: '0', title: 'Hlukhiv', population: 36000},
        {value: '1', title: 'Sumy', population: 170000},
        {value: '2', title: 'Shostka', population: 40000},
        {value: '3', title: 'Alupka', population: 6000},
        {value: '4', title: 'Uman', population: 80000}
    ])
    const [value, setValue] = useState<undefined | string>('Select')


    const onChangeHandler = (value: string) => {
        setValue(value)
    }
    const cityWithA = useMemo(()=>{
        console.log('cityWithA')
        return city.filter(c=> c.title.toLowerCase().includes('a'))
    }, [city]);

    const cityPopulationMin = useMemo(()=>{
        console.log('cityPopulationMin')
        return city.filter(c=> c.population === 36000)
    }, [city]);

    return(
        <div>
        <Select2  items={cityWithA} onChangeItem={(value) => onChangeHandler(value)} value={value} />
        <Select2  items={cityPopulationMin} onChangeItem={(value) => onChangeHandler(value)} value={value} />
        </div>
    );
};