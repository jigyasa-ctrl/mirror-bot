import './App.css';
import Chat from './Chat'

function ChatBot() {
    return (
        <div className="Body">
            <header>Mirror Bot</header>
            <Chat />
            <div className="footer">
                <input></input>
                <button>Send</button>
            </div>




        </div>
    );
}

export default ChatBot;
