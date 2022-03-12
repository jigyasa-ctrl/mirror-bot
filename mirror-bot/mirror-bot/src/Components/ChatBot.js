import './App.css';
import Chat from './Chat'
import React, { useEffect, useState } from 'react';
import bot from "../../src/bot.png"

function ChatBot() {
    const localData = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : []
    const [Input, setInput] = useState("")
    const [history, setHistory] = useState(localData)
    const [typing, setTyping] = useState("hidden")
    const [show, setShow] = useState(true)
    useEffect(() => {
        if (history.length > 0) {
            localStorage.setItem("history", JSON.stringify(history))
            setInput("")
        }
        var divs = document.getElementsByClassName("bot")
        var lastChild = divs[divs.length - 1];
        if (lastChild) {

            if (!show) {
                lastChild.style.visibility = "hidden"
                setTyping("visible")
            }
        }
    }, [history])

    function onSend(e) {
        if (Input.length > 0) {
            setHistory(history => history.concat(Input))
        }
        setShow(false)
        setTimeout(() => {
            var divs = document.getElementsByClassName("bot")
            var lastChild = divs[divs.length - 1];
            if (lastChild) {
                lastChild.style.visibility = "visible"
                setTyping("hidden")
            }

        }, 2000);

    }
    return (
        <div className="Body">
            <span id="span-header">
                <img src={bot} ></img>
                <p>Mirror Bot</p>
            </span>
            <Chat history={history} />
            <span id="typing" style={{ visibility: `${typing}` }}>Amber is Typing ...</span>
            <div className="footer">
                <input type="text" name="chat" placeholder="Enter your message ..." value={Input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? onSend() : ""} ></input>
                <button onClick={onSend}>Send</button>
            </div>
        </div >
    );
}

export default ChatBot;
