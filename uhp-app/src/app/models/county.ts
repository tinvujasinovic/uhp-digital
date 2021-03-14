import { BasicInfo } from "./basicInfo";
import { Contact } from "./contact";

export class County extends BasicInfo{
    // contact: Contact

    constructor(id: number, name: string) {
        super(id, name);
        // this.contact = contact;
    }
}