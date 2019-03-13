import * as React from 'react'
import styled from 'styled-components';

export const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    background: #ddd;
    align-items: center;
    border-bottom: 1px solid #cbcbcb;
`;

export const NavLeft = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
`;

export const ItemList = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    li {
        border: 1px solid #bbb;
        border-top: none;
        border-bottom: none;
        margin-right: -1px;
        position: relative;
        
        a {
            height: 40px;
            align-items: center;
            display: flex;
            padding: 0 10px;
        }
        ul {
            display: none;
            position: absolute;
        }
        &:hover {
            ul {
                display: block;
                width: 120px;
                border-bottom: 1px solid #ccc;
                ${props => (props.pos) ? 'right: 0;' : 'left: -1px;'}
                li {
                    a {
                        height: 30px;
                    }
                }
            }
        }
    }
`;

export const NavRight = styled.div`
    display: flex;
    margin-right: 25px;
`;

export const Logo = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    background: #333;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 2px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    margin: 0 25px;
`;

export const FooterStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 40px;
    background: #f1f1f1;
    bottom: 0;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
`;


export const WrapperFooter = styled.div`
    margin-left: 25px;
`;


export const Dashboard = ({ history }) => {

    const success = () => {
        history.push('/dashboard');
    };

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
                        <li><a href="http://">User</a>
                            <ul>
                                <li><a href="http://">Item 1</a></li>
                                <li><a href="http://">Item 2</a></li>
                            </ul>
                        </li>
                    </ItemList>
                </NavRight>
            </HeaderStyle>
            <main></main>
            <FooterStyle>
                <WrapperFooter>
                    © Copyright Powered Fw . All rights reserved.
                </WrapperFooter>
            </FooterStyle>
        </>
    )
}