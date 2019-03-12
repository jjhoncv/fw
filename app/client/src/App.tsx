import * as React from 'react';
import { renderRoutes } from 'react-router-config';

export const App = ({ route }) => (
    <>
        {renderRoutes(route.routes)}
    </>
)
