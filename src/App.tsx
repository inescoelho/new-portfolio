import React from 'react';

import { Menu } from 'components/Menu';
import { Content } from 'components/Content';
import { Contacts } from 'components/Contacts';

import './App.less';

export const menuOptions = {
  home: 'home',
  about: 'about',
  portfolio: 'portfolio',
  talks: 'talks',
  publications: 'publications'
}

export default class App extends React.Component{
  state = { activeItem: menuOptions.home }

  handleItemClick = (e: any, { name }: any) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div className="app">
        <Menu
          activeItem={activeItem}
          handleItemClick={this.handleItemClick} />
        <div className="content">
          <Content activeItem={this.state.activeItem} />
        </div>
        <Contacts />
      </div>
    );
  }
}
;
