import { connect, MapStateToProps } from 'react-redux';
import { Header } from './Header';
import { ChatStore } from '../../reducers/store';
import { User } from '../../reducers/currentUser';

interface Props {
}

interface StateProps {
  me: User;
}

const mapStateToProps: MapStateToProps<StateProps, Props> = (state: ChatStore) => {
  return {
    me: state.currentUser,
  };
};

export const HeaderContainer = connect(
  mapStateToProps
)(Header);
