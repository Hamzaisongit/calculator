import React from "react";
import Button from "./Button";

export default function Buttons() {
    const numbers = {
        'zero':0,
        'one':1,
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9
    }

    const signs = {
        'add':'+',
        'substract': '-',
        'multiply':'*',
        'divide':'/'
    }

    return (
        <>
            <div id="number-buttons" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '20px'
    }}>
                {Object.keys(numbers).map((item)=>{
                   return <Button value={item} type="number" symbol={numbers[item]}></Button>
                })}
                <Button type="number" value="decimal" symbol='.' />
            </div>

            <div id="sign-buttons" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '20px'
    }}>
                {Object.keys(signs).map((item)=>{
                   return <Button value={item} type="sign" symbol={signs[item]}></Button>
                })}
                <Button value="equals" type="eql" symbol="=" />
                <Button value="clear" type="clr" symbol="AC"></Button>
            </div>

            
        </>
    );
}
