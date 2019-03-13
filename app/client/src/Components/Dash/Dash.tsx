import * as React from 'react';

import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './../../config/route/dashboard';

export const Dash = () => (
    <>
        <Router>
            {renderRoutes(routes)}
        </Router>
    </>
)
