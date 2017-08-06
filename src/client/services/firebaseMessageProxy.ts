import { app, database } from 'firebase';
import { Dispatch } from 'redux';
import { Observable, } from 'rxjs';
import { setMessages } from '../actionCreators/messageActionCreators';

const mapObjectToArray = (messages: any): any[] => {
  if (!messages) {
    return [];
  }
  const array: any[] = [];
  Object
    .keys(messages)
    .forEach(key => array.push({ ...messages[key], messageID: key }));
  return array;
};
export const createFirebaseMessageProxy = (firebase: app.App, dispatch: Dispatch<{}>) => {
  const ref = firebase.database().ref('messages');
  Observable.fromEvent(ref as any, 'value')
    .map((snap: database.DataSnapshot) => snap.val())
    .map(mapObjectToArray)
    .subscribe(messages => {
      dispatch(setMessages(messages));
    });
};
