import * as React from 'react';
import { Chat } from './components/Chat/Chat';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Container } from 'semantic-ui-react';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <HeaderContainer />
        <Chat />
      </Container>
    );
  }
}

export default App;
