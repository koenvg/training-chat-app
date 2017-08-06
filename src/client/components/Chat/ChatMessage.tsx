import * as React from 'react';

export const ChatMessage: React.SFC<{}> = () => {
  return (
    <li className='self'>
      <div className='avatar'><img src='https://i.imgur.com/HYcn9xO.png' /></div>
      <div className='msg'>
        <p>Puff...</p>
        <p>Aún estoy haciendo el contexto de Góngora... </p>
        <p>Mejor otro día</p>
        <time>20:18</time>
      </div>
    </li>
  );
};

ChatMessage.displayName = 'ChatMessage';