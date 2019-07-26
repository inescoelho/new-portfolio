import React from 'react';

import { menuOptions } from "App";
import { Home } from 'components/Home';
import { About } from 'components/About';
import { Portfolio } from 'components/Portfolio';

import 'components/Content.less';

interface Props {
  activeItem: string;
}

export const Content: React.FC<Props> = ({ activeItem }) =>
  <>
    {activeItem === menuOptions.home && <div className="cont"><Home /></div>}
    {activeItem === menuOptions.about && <div className="cont"><About /></div>}
    {activeItem === menuOptions.portfolio && <div className="cont"><Portfolio /></div>}
    {activeItem === menuOptions.publications && <div className="cont"><Portfolio /></div>}
    {activeItem === menuOptions.talks && <div className="cont"><Portfolio /></div>}
  </>;
