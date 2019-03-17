import { User } from './../../models/User';

export const FormatUser = (data): User => {
    let dataValue: User = {
        id: 0,
        role: '',
        name: '',
        surname: '',
        mail: '',
        photo: '',
        login: '',
        password: '',
        reading: 0,
        writing: 0,
    };
    if (Object.keys(data).length) {
        let dataUser: User = data;
        dataValue = {
            id: dataUser.id,
            role: dataUser.role,
            name: dataUser.name,
            surname: dataUser.surname,
            mail: dataUser.mail,
            photo: dataUser.photo,
            login: dataUser.login,
            password: dataUser.password,
            reading: dataUser.reading,
            writing: dataUser.writing,
        };
    }
    return dataValue;
}
