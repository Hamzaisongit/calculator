import React from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
    const appStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0
    };

    const containerStyle = {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        width: '320px' // Adjust as needed
    };

    return (
        <div style={appStyle}>
            <div style={containerStyle}>
                <Display />
                <Buttons />
            </div>
        </div>
    );
}

export default App;
