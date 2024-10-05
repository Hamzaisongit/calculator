import React from "react";
import Button from "./Button";

export default function Buttons() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const signs = ['+', '-', '*', '/'];

    const buttonContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '20px'
    };

    return (
        <>
            <div id="number-buttons" style={buttonContainerStyle}>
                {numbers.map((item, i) => (
                    <Button key={`Element:${i}`} type="number" value={item} />
                ))}
                <Button type="number" value="." />
            </div>

            <div id="sign-buttons" style={buttonContainerStyle}>
                {signs.map((item, i) => (
                    <Button key={`Sign:${i}`} type="sign" value={item} />
                ))}
                <Button type="eql" value="=" />
            </div>

            
        </>
    );
}
