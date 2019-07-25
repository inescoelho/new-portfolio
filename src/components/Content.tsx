import React from 'react';

import { menuOptions } from "App";
import { Home } from 'components/Home';
import { About } from 'components/About';

import 'components/Content.less';

interface Props {
  activeItem: string;
}

export const Content: React.FC<Props> = ({ activeItem }) =>
  <>
    {activeItem === menuOptions.home && <div className="cont"><Home /></div>}
    {activeItem === menuOptions.about && <div className="cont"><About /></div>}
    {activeItem === menuOptions.portfolio && <div className="cont">HELLO</div>}
  </>;
