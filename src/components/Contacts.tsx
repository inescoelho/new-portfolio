import React from 'react';
import { Icon } from 'semantic-ui-react'

import 'components/Contacts.less';

export const Contacts: React.FC = () =>
  <div className={'iconContainer'}>
    <a href="https://twitter.com/ines_opcoelho"><Icon size='huge' name='twitter' /></a>
    <a href="https://github.com/inescoelho"><Icon size='huge' name='github' /></a>
    <a href="https://www.linkedin.com/in/inesopcoelho"><Icon size='huge' name='linkedin' /></a>
  </div>;
