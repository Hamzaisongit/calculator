import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
    const obj = useSelector(state => state);

    const displayStyle = {
        backgroundColor: '#eee',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '20px',
        textAlign: 'right',
        fontSize: '24px'
    };

    return (
        <div id="display" style={displayStyle}>
            <h3 style={{overflow:"hidden"}}>Ans: {obj.ans}</h3>
            <h1>Expression: {obj.expression}</h1>
        </div>
    );
}
