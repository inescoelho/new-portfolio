import React from 'react';
import { Segment, Menu as SUmenu } from 'semantic-ui-react';

import { menuOptions } from "App";

import 'components/Menu.less';

interface Props {
  activeItem: string;
  handleItemClick: (e: any, o: any) => void;
}

export const Menu: React.FC<Props> = ({ activeItem, handleItemClick }) =>
  (<Segment inverted className={"menu-container"}>
    <SUmenu inverted pointing secondary>
      <SUmenu.Item
        name={menuOptions.home}
        active={activeItem === menuOptions.home}
        onClick={handleItemClick} />
      <SUmenu.Menu position='right'>
        <SUmenu.Item
          name={menuOptions.about}
          active={activeItem === menuOptions.about}
          onClick={handleItemClick}
        />
        <SUmenu.Item
          name={menuOptions.portfolio}
          active={activeItem === menuOptions.portfolio}
          onClick={handleItemClick}
        />
        <SUmenu.Item
          name={menuOptions.talks}
          active={activeItem === menuOptions.talks}
          onClick={handleItemClick}
        />
        <SUmenu.Item
          name={menuOptions.publications}
          active={activeItem === menuOptions.publications}
          onClick={handleItemClick}
        />
      </SUmenu.Menu>
    </SUmenu>
  </Segment>
  );
