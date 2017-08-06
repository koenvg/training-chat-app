import { createStore, combineReducers, applyMiddleware } from 'redux';
import { User, currentUser } from './currentUser';
import { app } from 'firebase';
import { createFirebaseMessageProxy } from '../services/firebaseMessageProxy';
import { messages, Message } from './messages';
import { createEpicMiddleware } from 'redux-observable';
import { messageEpic } from '../epics/messageEpic';

export interface ChatStore {
  currentUser: User;
  messages: Message[];
}

const reducers = combineReducers<ChatStore>({
  currentUser,
  messages
});

export const createChatStore = (firebase: app.App) => {
  const epicMiddleware = createEpicMiddleware(messageEpic(firebase));
  const middleware = applyMiddleware(epicMiddleware);

  const store = createStore<ChatStore>(reducers, middleware);
  createFirebaseMessageProxy(firebase, store.dispatch);
  return store;
};
