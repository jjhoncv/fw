import * as React from 'react'
import { Login, IStateLogin } from '../../Components/Login'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { ServiceLogin } from '../../Services/Login'

import styled from 'styled-components';

interface IAdmin {

}

export const AdminStyled = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const WrapperLogin = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
`;

export const Admin = ({ history }) => {

    const success = () => {
        history.push('/dashboard');
    };

    return (
        <AdminStyled>
            <WrapperLogin>
                <Header />
                <Login success={this.success} />
                <Footer />
            </WrapperLogin>
        </AdminStyled>
    )

}