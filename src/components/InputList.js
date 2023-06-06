import React, { useRef, useState } from 'react';

export default function InputList({props}) {
    const inputRef = useRef(null);
    const [inputText, setInputText] = useState(props.arr);
    const renderList = inputText.map((item, index) => <li key={index}>{item}</li>);
    const [textColor, setTextColor] = useState(props.color);
    
    const handleSubmit = () => {
        const text = inputRef.current.value;
        if (text === '') return;
        
        setInputText(prevText => {
            return [...prevText, text];
        });

        inputRef.current.value = "";
    }

    return (
        <div>
            <h2 style={{color: textColor}}>Text color</h2>
            <button id='btn_black' onClick={() => setTextColor("#000")}>Black</button>
            <button id='btn_pink' onClick={() => setTextColor("#FF00B8")}>Pink</button>
            <button id='btn_blue' onClick={() => setTextColor("#0000ff")}>Blue</button>
            <button id='btn_orange' onClick={() => setTextColor("#FF6B00")}>Orange</button>
            <br /><br />

            <h2 style={{color: textColor}}>Input</h2>
            <input ref={inputRef} type="text" placeholder='Text...'/>
            <button onClick={handleSubmit}>OK</button><br /><br />

            <h2 style={{color: textColor}}>Output</h2>
            <ul style={{color: textColor}}>{renderList}</ul><br />
            <button onClick={() => setInputText([])}>Clear list</button>
        </div>
    );
}