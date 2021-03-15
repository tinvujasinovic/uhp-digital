import { BasicInfo } from "./basicInfo";
import { Contact } from "./contact";

export class County extends BasicInfo{
    contact: Contact;

    constructor(id: number, name: string, entityType: number, contact: Contact) {
        super(id, name, entityType);
        this.contact = contact;
    }
}