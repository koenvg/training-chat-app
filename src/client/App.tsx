import * as React from 'react';
import { UserForm } from './components/UserForm';
import { Container } from 'semantic-ui-react';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <UserForm />
      </Container>
    );
  }
}

export default App;
