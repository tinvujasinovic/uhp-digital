import { BasicInfo } from "./basicInfo";
import { Contact } from "./contact";
import { County } from "./county";

export class Community extends BasicInfo
 {
    county: County;
    contact: Contact;

    constructor(id: number, name: string, county: County, contact: Contact) {
       super(id, name);
       this.county = county; 
       this.contact = contact; 
    }
}