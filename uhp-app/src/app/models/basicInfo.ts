export class BasicInfo {
    ID: number;
    name: string;
    entityType: number;

    constructor(id: number, name: string, entityType: number) {
        this.ID = id;
        this.name = name;
        this.entityType = entityType;
    }
}