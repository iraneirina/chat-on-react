import {FC, useEffect} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {ChatList} from "src/components/ChatList";
import {MessageList} from "src/components/MessageList";
import {Form} from "src/components/Form";
import {AUTHOR, Chat, Message, Messages} from "src/types";

interface ChatPageProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    messages: Messages;
    onAddMessage: (chatId: string, msg: Message) => void;
    deleteChat: (chat: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({
                                                chats,
                                                onAddChat,
                                                messages,
                                                onAddMessage,
                                                deleteChat
}) => {
    const {chatId} = useParams();

    useEffect(() => {
        if (
            chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
        ) {
        const timeout = setTimeout( () => {
            onAddMessage(chatId, {
                author: AUTHOR.BOT,
                value: 'I am Bot'
            });
        }, 1500);
        return () => clearTimeout(timeout);
    }
}, [chatId, messages, onAddMessage]);

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    return (
        <>
            <ChatList chats={chats} onAddChat={onAddChat} deleteChat={deleteChat}/>
            <MessageList messages={chatId ? messages[chatId] : []}/>
            <Form addMessage={onAddMessage}/>
        </>
    );
};
