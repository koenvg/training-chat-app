import { createStore, combineReducers } from 'redux';
import { CurrentUser, currentUser } from './currentUser';

export interface ChatStore {
  currentUser: CurrentUser;
}

export const createChatStore = () => {
  return createStore<ChatStore>(combineReducers({
    currentUser
  }));
};
