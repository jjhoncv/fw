import * as React from 'react';
import { App } from './../../App';
import { LoginContainer } from './../../view/Login/containers/LoginContainer';
import { UserListContainer } from './../../view/Users/containers/UserListContainer';
import { UserNewContainer } from './../../view/Users/containers/UserNewContainer';


import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Dashboard } from './../../Components/Dashboard';
import { Home } from './../../Components/Home';

const UserNew: React.SFC<{}> = () => <React.Fragment>UserNew</React.Fragment>;

const NotFound: React.SFC<{}> = () => <React.Fragment>NotFound</React.Fragment>;

export const routes = [
    {
        component: App,
        routes: [
            {
                path: '/admin',
                component: LoginContainer,
                exact: true
            },
            {
                path: '/admin/:page?/:action?',
                component: () => {
                    if (localStorage.getItem("token")) {
                        return (<Router>
                            {renderRoutes([
                                {
                                    component: Dashboard,
                                    routes: [
                                        {
                                            path: '/admin/dashboard',
                                            exact: true,
                                            component: Home
                                        },
                                        {
                                            path: '/admin/users',
                                            exact: true,
                                            component: UserListContainer
                                        },
                                        {
                                            path: '/admin/user/new',
                                            exact: true,
                                            component: UserNewContainer
                                        }
                                    ]
                                }]
                            )}
                        </Router>)
                    } else {
                        location.href = '/admin'
                    }
                }
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
];