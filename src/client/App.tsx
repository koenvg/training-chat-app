import * as React from 'react';
import { ChatContainer } from './components/Chat/ChatContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Container } from 'semantic-ui-react';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <HeaderContainer />
        <ChatContainer />
      </Container>
    );
  }
}

export default App;
