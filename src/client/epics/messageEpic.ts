import { Epic } from 'redux-observable';
import { ChatStore } from '../reducers/store';
import { app } from 'firebase';
import { Message } from '../reducers/messages';
import { Observable } from 'rxjs';

const putMessage = (message: Message, firebase: app.App) => {
  const newMessageRef = firebase.database().ref('messages').push();
  return newMessageRef.set(message);
};

export const messageEpic = (firebase: app.App): Epic<any, ChatStore> => action$ =>
  action$
    .ofType('SEND_CHAT_MESSAGE')
    .map(a => ({ ...a.payload, date: new Date().toISOString() }))
    .flatMap(message => putMessage(message, firebase))
    .map(() => ({ type: 'SEND_CHAT_MESSAGE_SUCCESS' }))
    .catch(error => Observable.of({
      type: 'SEND_CHAT_MESSAGE_FAILED',
      payload: error,
    }));