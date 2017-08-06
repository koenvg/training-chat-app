import * as React from 'react';

export const Header: React.SFC<{}> = () => {
  return (
    <div className='menu'>
      <div className='back'>
        <i className='fa fa-chevron-left' />
        <img src='https://i.imgur.com/DY6gND0.png' />
      </div>
      <div className='name'>Alex</div>
      <div className='last'>18:09</div>
    </div>
  );
};

Header.displayName = 'Header';
