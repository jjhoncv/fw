import * as React from 'react';
import { connect } from 'react-redux';

import { Page } from '../../../../Components/Page'
import { HeadPage, MainPage } from '../../../../Components/Page/styled'

import styled from 'styled-components'

interface Props {
    history: any;
}

export const ItemForm = styled.div``;

const Container: React.SFC<Props> = ({ history }) => {

    const handleAddUser = () => {
        history.push('/admin/user/new');
    }

    return (
        <Page>
            <HeadPage>
                <h1>New User</h1>
                <button onClick={handleAddUser}>Add User</button>
            </HeadPage>
            <MainPage>
                <form action="">
                    <ItemForm>
                        <label htmlFor="">role: </label>
                        <select>
                            <option value="1">Admin</option>
                            <option value="2">Registered User</option>
                        </select>
                    </ItemForm>
                    <ItemForm>
                        <label htmlFor="">name: </label>
                        <input type="text" name="name" id=""/>
                    </ItemForm>
                    <ItemForm>
                        <label htmlFor="">surname: </label>
                        <input type="text" name="surname" id=""/>
                    </ItemForm>
                    <ItemForm>
                        <label htmlFor="">login: </label>
                        <input type="text" name="login" id=""/>
                    </ItemForm>
                    <ItemForm>
                        <label htmlFor="">password: </label>
                        <input type="text" name="password" id=""/>
                    </ItemForm>
                </form>
            </MainPage>
        </Page>
    )

}

// const mapStateToProps = state => ({
//     isLoggedIn: selectLogin.getLogin(state)
// });

const mapDispatchToProps = dispatch => ({
    // successLogin: (username, password, history) => dispatch(successLogin(username, password, history))
});

export const UserNewContainer = connect(
    null,
    mapDispatchToProps
)(Container);