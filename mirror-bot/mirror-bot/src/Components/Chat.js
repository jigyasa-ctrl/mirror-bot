import './App.css';

function Chat({ history }) {
    return (
        <div className="chatbody">
            { history && history.length > 0 && history.map((chat) => (
                <>
                    <span className="user">{chat}</span>
                    <span className="bot">{chat}</span>
                </>
            ))

            }
        </div>
    );
}

export default Chat;
