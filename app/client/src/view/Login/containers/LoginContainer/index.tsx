import * as React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { Header } from '../../../../Components/Header'
import { Footer } from '../../../../Components/Footer'
import { Login } from '../../../../Components/Login'
import { successLogin } from './../../../../view/Login/state/login/actions'
import * as selectLogin from './../../state/login/selectors'

interface Props {
    successLogin: Function;
    history: any;
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

class Container extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { logged, history } = this.props;
        let token = localStorage.getItem('token')
        if (token) {
            history.push('/admin/dashboard')
        }
    }
    render(): JSX.Element {
        const { history, successLogin } = this.props;
        return (
            <AdminStyled>
                <WrapperLogin>
                    <Header />
                    <Login history={history} success={successLogin} />
                    <Footer />
                </WrapperLogin>
            </AdminStyled>
        )
    }
}



const mapStateToProps = state => ({
    logged: selectLogin.getLogged(state)
});

const mapDispatchToProps = dispatch => ({
    successLogin: (username, password, history) => dispatch(successLogin(username, password, history))
});

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);