import { Reducer } from 'redux';
import { User } from './currentUser';

export interface Message {
  messageID: string;
  user: User;
  message: string;
  date: string;
}
export const messages: Reducer<Message[]> = (state = [], action: any) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload;
    default:
      return state;
  }
};
