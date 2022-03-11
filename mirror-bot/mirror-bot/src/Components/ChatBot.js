import './App.css';
import Chat from './Chat'
import React, { useEffect, useState } from 'react';

function ChatBot() {
    const localData = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : []
    const [Input, setInput] = useState("")
    const [history, setHistory] = useState(localData)
    useEffect(() => {
        console.log(history)
        if (history.length > 0) {
            localStorage.setItem("history", JSON.stringify(history))
            setInput("")
        }
    }, [history])

    function onSend(e) {
        if (Input.length > 0) {
            setHistory(history => history.concat(Input))
        }

    }
    return (
        <div className="Body">
            <header>Mirror Bot</header>
            <Chat history={history} />
            <div className="footer">
                <input type="text" name="chat" placeholder="Enter your message ..." value={Input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? onSend() : ""} ></input>
                <button onClick={onSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatBot;
