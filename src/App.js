import './App.css';
import {Message} from "./components/Message";
import {useState} from 'react';

export const App = () => {
    const [message, setName] = useState('тут будет сообщение')

    const handleChangeName = (ev) => {
        setName(ev.target.value)
    }

    return (
        <div className="App">
            <input onChange={handleChangeName} />
            <Message message={message} />
        </div>
    )
}
