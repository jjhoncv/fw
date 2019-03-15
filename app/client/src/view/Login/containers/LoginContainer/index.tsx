import * as React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { Header } from '../../../../Components/Header'
import { Footer } from '../../../../Components/Footer'
import { Login } from '../../../../Components/Login'
import { successLogin } from './../../../../view/Login/state/login/actions'

interface Props {
    successLogin: Function
}

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

class Container extends React.Component<Props> {
    render(): JSX.Element {
        console.log('props', this.props.history)
        return (
            <AdminStyled>
                <WrapperLogin>
                    <Header />
                    <Login success={this.props.successLogin} />
                    <Footer />
                </WrapperLogin>
            </AdminStyled>
        )
    }
}

// const mapStateToProps = state => ({
//     isLoggedIn: selectUser.getIsLoggedIn(state)
// });

const mapDispatchToProps = dispatch => ({
    successLogin: (username, password) => dispatch(successLogin(username, password))
});

export const LoginContainer = connect(
    null,
    mapDispatchToProps
)(Container);