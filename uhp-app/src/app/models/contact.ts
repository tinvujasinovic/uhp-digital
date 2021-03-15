import { BasicInfo } from "./basicInfo";

export class Contact extends BasicInfo {
    address: string;
    zip_code: number;
    phone: string;
    fax: string;
    email: string;
    web: string;
    governor: string;
    vice: string;
    vice2: string;
    vice_minorities: string;
    president_representative_body: string;

    constructor(id: number,
        name: string,
        entityType: number, 
        address: string,
        zip_code: number,
        phone: string,
        fax: string,
        email: string,
        web: string,
        governor: string,
        vice: string,
        vice2: string,
        vice_minorities: string,
        president_representative_body: string,
    ) {
        super(id, name, entityType);
        this.address = address;
        this.zip_code = zip_code;
        this.phone = phone;
        this.fax = fax;
        this.email = email;
        this.web = web;
        this.governor = governor;
        this.vice = vice;
        this.vice2 = vice2;
        this.vice_minorities = vice_minorities;
        this.president_representative_body = president_representative_body;
    }
}