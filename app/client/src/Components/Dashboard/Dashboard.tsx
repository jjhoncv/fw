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

export const Dashboard = ({ route }) => {
    return (
        <>
            <HeaderStyle>
                <LogoWrapper>
                    <Logo>Fw</Logo>
                </LogoWrapper>
                <NavLeft>
                    <ItemList>
                        <li><a href="http://">Menu</a>
                            <ul>
                                <li><a href="http://">Item 1</a></li>
                                <li><a href="http://">Item 2</a></li>
                            </ul>
                        </li>
                        <li><a href="http://">Banner</a>
                            <ul>
                                <li><a href="http://">Item 1</a></li>
                                <li><a href="http://">Item 2</a></li>
                            </ul>
                        </li>
                        <li><a href="http://">Paginas</a>
                            <ul>
                                <li><a href="http://">Item 1</a></li>
                                <li><a href="http://">Item 2</a></li>
                            </ul>
                        </li>
                    </ItemList>
                </NavLeft>
                <NavRight>
                    <ItemList pos="right">
                        <li><a href="http://">Users</a>
                            <ul>
                                <li><a href="/admin/users">New User</a></li>
                                <li><a href="http://">Item 2</a></li>
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