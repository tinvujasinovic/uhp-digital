import { BasicInfo } from "./basicInfo";
import { Contact } from "./contact";
import { County } from "./county";

export class Community extends BasicInfo
 {
    countyID: number;
    contact: Contact;

    constructor(id: number, name: string, entityType: number, countyID: number, contact: Contact) {
       super(id, name, entityType);
       this.countyID = countyID; 
       this.contact = contact; 
    }
}