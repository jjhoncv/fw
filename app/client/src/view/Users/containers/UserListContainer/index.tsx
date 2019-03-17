import * as React from 'react';
import { connect } from 'react-redux';

import { Page } from '../../../../Components/Page'
import { HeadPage, MainPage } from '../../../../Components/Page/styled'
import * as selectUsers from './../../state/users/selectors';
import { fetchUsers } from './../../../../view/Users/state/users/actions'
import { User } from './../../models/User';

interface Props {
    history: any;
}

class Container extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    render(): JSX.Element {
        const { users } = this.props;
        return (
            <Page>
                <HeadPage>
                    <h1>Users</h1>
                </HeadPage>
                <MainPage>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>role</th>
                                <th>name</th>
                                <th>surname</th>
                                <th>mail</th>
                                <th>photo</th>
                                <th>login</th>
                                <th>password</th>
                                <th>reading</th>
                                <th>writing</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: User) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.role}</td>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.mail}</td>
                                    <td>{user.photo}</td>
                                    <td>{user.login}</td>
                                    <td>{user.password}</td>
                                    <td>{user.reading}</td>
                                    <td>{user.writing}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </MainPage>
            </Page>
        )
    }
}



const mapStateToProps = state => ({
    users: selectUsers.getUsers(state)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);