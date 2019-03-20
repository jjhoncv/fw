export interface Module {
    id: number;
    name: string;
}

export interface SectionHeader {
    id: number;
    module: Module;
    name: string;
    url: string;
    status: boolean;
}