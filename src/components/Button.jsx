import React from "react";
import { useDispatch } from "react-redux";
import { eqlPressed, numberPressed, signPressed } from "../Store/Slice1";

export default function Button({ type, value }) {
    const dispatch = useDispatch();

    const buttonStyle = {
        padding: '20px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        flex: '1 0 20%', // Allow buttons to grow and shrink
        margin: '5px' // Space between buttons
    };

    return (
        <button
            style={buttonStyle}
            onClick={() => {
                type === "number" 
                    ? dispatch(numberPressed(value)) 
                    : (type === "sign" ? dispatch(signPressed(value)) : dispatch(eqlPressed()));
            }}
        >
            {value}
        </button>
    );
}
