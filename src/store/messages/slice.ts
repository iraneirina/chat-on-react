import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AUTHOR, Message, MessagesWithId } from 'src/types';

const initialState: MessagesWithId = {
  first: [{ id: '1', author: AUTHOR.USER, value: 'hello, world' }],
  second: [{ id: '2', author: AUTHOR.BOT, value: 'hello, im bot' }],
  third: [{ id: '3', author: AUTHOR.BOT, value: 'hello, im bot' }],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      state[action.payload] = [];
    },
    addMessage: (state, action: PayloadAction<AddMessage>) => {
      const { author, value } = action.payload.message;
      state[action.payload.chatName].push({
        id: nanoid(),
        author,
        value,
      });
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWithReply',
  (payload: AddMessage, { dispatch }) => {
    const { chatName, message } = payload;

    dispatch(addMessage({ chatName, message }));

    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatName,
            message: {
              author: AUTHOR.BOT,
              value: 'Hallo! Now we can not answer. Please try later',
            },
          })
        );
      }, 1500);
    }
  }
);

export const { addChat, addMessage, deleteChat } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;

export interface AddMessage {
  chatName: string;
  message: Message;
}
