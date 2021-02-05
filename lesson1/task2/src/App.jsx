import React, { Component } from 'react';
import Header from './Header';
import { UserContext, user } from './user-context';

class App extends Component {
  state = {
    userData: {
      name: 'Nicola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state.userData}>
        <div class="page">
          <Header />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
