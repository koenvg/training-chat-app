import * as React from 'react';
import { User } from '../../reducers/currentUser';

interface Props {
  me: User;
}
export const Header: React.SFC<Props> = ({ me }) => {
  const now = new Date();
  return (
    <div className='menu'>
      <div className='back'>
        <i className='fa fa-chevron-left' />
        <img src={me.image} />
      </div>
      <div className='name'>{me.userName}</div>
      <div className='last'>{now.getHours()} : {now.getMinutes()}</div>
    </div>
  );
};

Header.displayName = 'Header';
