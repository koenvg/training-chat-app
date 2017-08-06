import * as React from 'react';
import { Message } from '../../reducers/messages';
import { User } from '../../reducers/currentUser';

interface Props {
  message: Message;
  me: User;
}
export const ChatMessage: React.SFC<Props> = ({ message, me }) => {
  const date = new Date(message.date);
  return (
    <li className={me.id === message.user.id ? 'self' : 'other'}>
      <div className='avatar'><img src={message.user.image} /></div>
      <div className='msg'>
        <p>{message.message}</p>
        <time>{date.getHours()}:{date.getMinutes()}</time>
      </div>
    </li>
  );
};

ChatMessage.displayName = 'ChatMessage';