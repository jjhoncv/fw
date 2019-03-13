import * as React from 'react';
import { Dashboard } from './../../../Components/Dashboard';
import { Users } from './../../../Components/Users';
import { Home } from './../../../Components/Home';

const NotFound: React.SFC<{}> = () => <React.Fragment>NotFound</React.Fragment>;

export const routes = [
    {
        component: Dashboard,
        routes: [
            {
                path: '/admin/dashboard',
                component: Home,
                exact: true,
            },
            {
                path: '/admin/users',
                component: Users,
                exact: true,
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
];