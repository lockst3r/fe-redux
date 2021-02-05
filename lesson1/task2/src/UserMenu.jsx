import React, { Component } from 'react';
import { UserContext } from './user-context';

class UserMenu extends Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${this.context.name}`}</span>
        <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

// Зв'язую контекст
UserMenu.contextType = UserContext;

export default UserMenu;
