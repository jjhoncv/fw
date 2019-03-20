import { SectionHeader } from './../../models/SectionHeader';

export const FormatSectionHeader = (data): SectionHeader => {
    let dataValue: SectionHeader = {
        id: 0,
        module: {
            id: 0,
            name: ''
        },
        name: '',
        url: '',
        status: false
    };
    if (Object.keys(data).length) {
        let dataHeader: SectionHeader = data;
        dataValue = {
            id: dataHeader.id,
            module: dataHeader.module,
            name: dataHeader.name,
            url: dataHeader.url,
            status: dataHeader.status
        };
    }
    return dataValue;
}
