import * as React from 'react';

export const ChatInputBox: React.SFC<{}> = () => {
  return (
    <div>
      <input className='textarea' type='text' placeholder='Type here!' /><div className='emojis' />
    </div>
  );
};

ChatInputBox.displayName = 'ChatInputBox';
