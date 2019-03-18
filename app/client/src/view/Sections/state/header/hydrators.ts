import { SectionHeader } from './../../models/SectionHeader';

export const FormatSectionHeader = (data): SectionHeader => {
    let dataValue: SectionHeader = {
        id_section: 0,
        id_module: 0,
        name: '',
        url: '',
        status: false
    };
    if (Object.keys(data).length) {
        let dataHeader: SectionHeader = data;
        dataValue = {
            id_section: dataHeader.id_section,
            id_module: dataHeader.id_module,
            name: dataHeader.name,
            url: dataHeader.url,
            status: dataHeader.status
        };
    }
    return dataValue;
}
