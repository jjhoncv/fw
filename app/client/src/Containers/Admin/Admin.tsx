import * as React from 'react'
import { Login, IStateLogin } from '../../Components/Login'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { ServiceLogin } from '../../Services/Login'

interface IAdmin {

}

export class Admin extends React.Component<IAdmin> {
    constructor(props: IAdmin) {
        super(props)
    }

    success({ user, password }: IStateLogin) {
        ServiceLogin(user, password)
            .then()
    }

    render() {
        return (
            <div>
                <Header />
                <Login success={this.success} />
                <Footer />
            </div>
        )
    }
}