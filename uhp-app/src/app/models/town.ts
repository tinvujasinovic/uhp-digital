import { BasicInfo } from "./basicInfo";
import { Contact } from "./contact";
import { County } from "./county";

export class Town extends BasicInfo{
    county: County;
    contact: Contact;
    
    constructor(id: number, name: string, county: County, contact: Contact) {
        super(id, name);
        this.contact = contact;
        this.county = county;
    }
}