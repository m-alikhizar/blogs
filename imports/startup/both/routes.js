import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../../ui/layouts/main/Main';
import Secondary from '../../ui/layouts/secondary/Secondary'

import Home from '../../ui/pages/home/Home';
import Subpage from '../../ui/pages/accounts/Subpage';

import Compose from '../../ui/pages/compose/Compose'
import Accounts from '../../ui/components/container/Accounts'

export default (
    <React.Fragment>
        <Accounts />
        <Route exact path="/" component={() => (<Main><Home /></Main>)} />
        <Route exact path="/compose" component={() => (<Secondary><Compose /></Secondary>)} />
    </React.Fragment>
);

