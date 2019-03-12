import * as React from 'react'

export const Dashboard = ({ history }) => {

    const success = () => {
        history.push('/dashboard');
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Description</p>
        </div>
    )
}