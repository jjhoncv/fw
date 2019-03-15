import * as React from 'react'

import { ListUsers } from './ListUsers'

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

export const Page = styled.div`
    width: 80%;
    margin: 30px auto 0;
`;

export const HeadPage = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MainPage = styled.div`
    margin-top: 20px;
`;

export const Users = ({ history }) => {

    const success = () => {
        history.push('/admin/users/new');
    };

    return (
        <Page>
            <HeadPage>
                <h1>Users</h1>
                <button onClick={success}>New</button>
            </HeadPage>
            <MainPage>
                {/* <ListUsers /> */}
            </MainPage>
        </Page>
    )
}