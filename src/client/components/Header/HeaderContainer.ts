import { connect, MapStateToProps } from 'react-redux';
import { Header } from './Header';
import { ChatStore } from '../../reducers/store';
import { CurrentUser } from '../../reducers/currentUser';

interface Props {
}

interface StateProps {
  currentUser: CurrentUser;
}

const mapStateToProps: MapStateToProps<StateProps, Props> = (state: ChatStore) => {
  return {
    currentUser: state.currentUser,
  };
};

export const HeaderContainer = connect(
  mapStateToProps
)(Header);
