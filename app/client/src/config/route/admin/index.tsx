import * as React from 'react';
import { App } from './../../../App';
import { Dash } from './../../../Components/Dash';
import { Admin } from './../../../Components/Admin';

const NotFound: React.SFC<{}> = () => <React.Fragment>NotFound</React.Fragment>;

export const routes = [
    {
        component: App,
        routes: [
            {
                path: '/admin',
                component: Admin,
                exact: true,
            },
            {
                path: '/admin/dashboard',
                component: Dash,
                exact: true,
            },
            {
                path: '/admin/users',
                component: Dash,
                exact: true,
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
];