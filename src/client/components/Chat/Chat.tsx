import * as React from 'react';
import { ChatInputBoxContainer } from './ChatInputBoxContainer';
import { User } from '../../reducers/currentUser';
import { Message } from '../../reducers/messages';
import { ChatMessage } from './ChatMessage';

interface Props {
  messages: Message[];
  me: User;
}
export class Chat extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div>
        <ol className='chat'>
          {this.props.messages
            .map(message => <ChatMessage key={message.messageID} message={message} me={this.props.me} />)
          }
        </ol>
        <ChatInputBoxContainer />
      </div>
    );
  }
}