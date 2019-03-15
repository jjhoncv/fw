import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from './../config/style';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './config/route/admin';

import configureStore from './config/store/ConfigureStore';
const store = configureStore();

render(
    <>
        <GlobalStyle />
        <Provider store={store}>
            <Router>
                {renderRoutes(routes)}
            </Router>
        </Provider>
    </>,
    document.getElementById('root'),
);