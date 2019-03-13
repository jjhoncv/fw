import * as React from 'react'

import styled from 'styled-components';

export const Home = ({ history }) => {

    const success = () => {
        history.push('/admin/dashboard');
    };

    return (
        <h1>Home</h1>
    )

}