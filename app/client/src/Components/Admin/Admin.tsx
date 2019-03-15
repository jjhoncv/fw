import * as React from 'react'
import { Login, IStateLogin } from '../../Components/Login'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { ServiceLogin } from '../../Services/Login'

import styled from 'styled-components';

export const AdminStyled = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const WrapperLogin = styled.div`
    padding: 10px 30px;
    border: 1px solid #ccc;
`;

export const Admin = ({ history }) => {
    const success = ({ username, password }: any) => {
        ServiceLogin(username, password)
            .then(({ data }) => {
                history.push('/admin/dashboard');
            })
            .catch((error) => {
                console.log('Unauthorized');
            })
    };

    return (
        <AdminStyled>
            <WrapperLogin>
                <Header />
                <Login success={success} />
                <Footer />
            </WrapperLogin>
        </AdminStyled>
    )

}