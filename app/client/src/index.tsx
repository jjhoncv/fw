import * as React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './../config/style';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './config/route/admin';

render(
    <>
        <GlobalStyle />
        <Router>
            {renderRoutes(routes)}
        </Router>
    </>,
    document.getElementById('root'),
);