import { ListItem } from '@mui/material';
import {Link} from 'react-router-dom';
import {FC, useState} from 'react';
import { Chat } from 'src/types';
import { nanoid } from 'nanoid';

interface ChatListProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    deleteChat: (chat: string) => void;
}

export const ChatList: FC<ChatListProps> = ({chats, onAddChat, deleteChat}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(value) {
            onAddChat({
                id: nanoid(),
                name: value,
            });
            setValue('');
        }
    };

    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <ListItem key={chat.id}>
                        <Link to={`/chats/${chat.id}`} >{chat.name}</Link>
                        <button onClick={() => deleteChat(chat.id)}>Delete chat</button>
                    </ListItem>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button>Create chat</button>
            </form>
        </>
    )
}
