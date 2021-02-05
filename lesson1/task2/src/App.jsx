import React, { Component } from 'react';
import Header from './Header';
import { UserContext, users } from './users-context';

class App extends Component {
  state = {
    userData: {
      name: 'Nicola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <div class="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
