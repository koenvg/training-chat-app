import { User } from '../reducers/currentUser';

export const setMessages = (messages: any[]) => ({
  type: 'SET_MESSAGES',
  payload: messages
});

export const sendChatMessage = (message: string, user: User) => ({
  type: 'SEND_CHAT_MESSAGE',
  payload: {
    message,
    user,
  }
});
