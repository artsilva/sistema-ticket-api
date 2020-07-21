export interface RequestTicket {
    id?: number;
    icon?: string;
    statusid: number;
    status?: string;
    statusreason?: string;
    title: string;
    usertechid?: number;
    tech?: string;
    petitionerid: number;
    petitioner?: string;
    typeid: number;
    type?: string;
    area: string;
    areaid: string;
    datecreation: Date;
    datemodify?: Date;
    dateexpire: Date;
    emails?: string;
    details: string;
}