import * as React from 'react';
import { User } from '../../reducers/currentUser';

interface Props {
  me: User;
  sendChatMessage: (message: string, me: User) => void;
}

interface State {
  value: string;
}

export class ChatInputBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          className='textarea'
          type='text'
          placeholder='Type here!'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className='emojis' />
      </div>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  }

  private handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.sendChatMessage(this.state.value, this.props.me);
      this.setState({
        value: '',
      });
    }
  }
}
