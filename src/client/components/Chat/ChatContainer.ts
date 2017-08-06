import { connect, MapStateToProps } from 'react-redux';
import { Chat } from './Chat';
import { User } from '../../reducers/currentUser';
import { Message } from '../../reducers/messages';
import { ChatStore } from '../../reducers/store';

interface Props {
}

interface StateProps {
  messages: Message[];
  me: User;
}

const mapStateToProps: MapStateToProps<StateProps, Props> = (state: ChatStore, ownProps) => {
  return {
    me: state.currentUser,
    messages: state.messages,
  };
};

export const ChatContainer = connect(
  mapStateToProps,
)(Chat);
