import * as React from 'react'

import { User } from './../../../Models/User';

import { serviceUsers } from './../../../Services/Users'

interface StateUsers {
    data: User[];
    fetching: boolean;
    error: null;
}

export class ListUsers extends React.Component<any, StateUsers> {

    componentDidMount() {
        let data = serviceUsers.get();
        this.setState({ data, fetching: false })
    }

    constructor() {
        super();
        this.state = {
            data: null,
            fetching: false,
            error: null
        }
    }

    render() {
        const { fetching, error, data } = this.state;
        if (fetching) { return <div>Loading...</div> }
        if (error) { return <div>Error</div> }

        return (
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>login</th>
                    <th>password</th>
                </tr>
                {
                    // data.map((user: User, index) => (
                    //     <tr key={index}>
                    //         <td>{user.id}</td>
                    //         <td>{user.name}</td>
                    //         <td>{user.surname}</td>
                    //         <td>{user.login}</td>
                    //         <td>{user.password}</td>
                    //     </tr>
                    // )
                    // )
                }
            </table>
        )
    }
}