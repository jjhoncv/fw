import * as React from 'react'

import { renderRoutes } from 'react-router-config';

import {
    HeaderStyle,
    LogoWrapper,
    NavLeft,
    NavRight,
    ItemList,
    Logo,
    FooterStyle,
    WrapperFooter
} from './styled';

// import { successLogin } from './../../view/Login/state/login/actions'
import { HeaderContainer } from './../../view/Sections/containers/HeaderContainer'

export const Dashboard = ({ route, history }) => {

    const handleLogOut = () => {
        localStorage.removeItem('token')
        location.href = '/admin';
    }

    return (
        <>
            <HeaderStyle>
                <LogoWrapper>
                    <Logo>Fw</Logo>
                </LogoWrapper>
                <NavLeft>
                    <HeaderContainer></HeaderContainer>
                </NavLeft>
                <NavRight>
                    <ItemList pos="right">
                        <li><a href="http://">User xxx</a>
                            <ul>
                                <li><a href="/admin/profile">Profile</a></li>
                                <li><a onClick={() => handleLogOut()}>Log out</a></li>
                            </ul>
                        </li>
                    </ItemList>
                </NavRight>
            </HeaderStyle>
            <main>
                {renderRoutes(route.routes)}
            </main>
            <FooterStyle>
                <WrapperFooter>
                    © Copyright Powered Fw . All rights reserved.
                </WrapperFooter>
            </FooterStyle>
        </>
    )
}