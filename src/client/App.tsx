import * as React from 'react';
import { Chat } from './components/Chat/Chat';
import { Header } from './components/Header/Header';
import { Container } from 'semantic-ui-react';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Header />
        <Chat />
      </Container>
    );
  }
}

export default App;
