import { createStore, combineReducers, applyMiddleware } from 'redux';
import { CurrentUser, currentUser } from './currentUser';

export interface ChatStore {
  currentUser: CurrentUser;
}

const reducers = combineReducers<ChatStore>({
  currentUser
});

const middleware = applyMiddleware();
export const createChatStore = () => {
  return createStore<ChatStore>(reducers, middleware);
};
