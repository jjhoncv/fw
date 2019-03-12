import * as React from 'react';
import { App } from './../../App';
import { Admin } from './../../Containers/Admin';
import { Dashboard } from './../../Containers/Dashboard';

const NotFound: React.SFC<{}> = () => <React.Fragment>NotFound</React.Fragment>;

export const routes = [
    {
        component: App,
        routes: [
            {
                path: '',
                component: Admin,
                exact: true,
            },
            {
                path: '/dashboard',
                component: Dashboard,
                exact: true,
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
];