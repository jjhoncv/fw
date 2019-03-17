import * as React from 'react'

import { FormStyled, FormItemStyled } from './styled'

interface ILogin {
    success: Function;
    history: any;
}

export interface IStateLogin {
    username: string;
    password: string;
}

export class Login extends React.Component<ILogin, IStateLogin> {
    constructor(props: ILogin) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUser(e: any) {
        this.setState({ username: e.target.value })
    }

    handlePassword(e: any) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e: any) {
        const { success, history } = this.props;
        const { username, password } = this.state;
        e.preventDefault();
        success(username, password, history);
    }

    render(): JSX.Element {
        return (
            <div>
                <FormStyled onSubmit={(e) => this.onSubmit(e)}>
                    <FormItemStyled>
                        <label>Username</label>
                        <input type="text" name="username" onChange={(e) => this.handleUser(e)} />
                    </FormItemStyled>
                    <FormItemStyled>
                        <label>Password</label>
                        <input type="password" name="password" onChange={(e) => this.handlePassword(e)} />
                    </FormItemStyled>
                    <FormItemStyled>
                        <input type="submit" value="Enviar" />
                    </FormItemStyled>
                </FormStyled>
            </div>
        )
    }
}
