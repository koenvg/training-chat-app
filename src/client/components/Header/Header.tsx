import * as React from 'react';
import { CurrentUser } from '../../reducers/currentUser';

interface Props {
  currentUser: CurrentUser;
}
export const Header: React.SFC<Props> = ({ currentUser }) => {
  const now = new Date();
  return (
    <div className='menu'>
      <div className='back'>
        <i className='fa fa-chevron-left' />
        <img src={currentUser.image} />
      </div>
      <div className='name'>{currentUser.userName}</div>
      <div className='last'>{now.getHours()} : {now.getMinutes()}</div>
    </div>
  );
};

Header.displayName = 'Header';
