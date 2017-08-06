import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { ChatInputBox } from './ChatInputBox';
import { User } from '../../reducers/currentUser';
import { ChatStore } from '../../reducers/store';
import { sendChatMessage } from '../../actionCreators/messageActionCreators';

interface Props {
}

interface StateProps {
  me: User;
}

interface DispatchProps {
  sendChatMessage: (message: string, me: User) => void;
}

const mapStateToProps: MapStateToProps<StateProps, Props> = (state: ChatStore) => {
  return {
    me: state.currentUser,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, Props> = (dispatch) => {
  return {
    sendChatMessage: (message, me) => dispatch(sendChatMessage(message, me))
  };
};

export const ChatInputBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInputBox);
