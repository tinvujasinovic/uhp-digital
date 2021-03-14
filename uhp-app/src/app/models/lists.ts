import { Community } from "./community";
import { County } from "./county";
import { Town } from "./town";

export class Lists {
    communities: Array<Community>;
    towns: Array<Town>;
    counties: Array<County>;

    constructor(communities: Array<Community>, towns: Array<Town>, counties: Array<County>) {
        this.communities = communities;
        this.towns = towns;
        this.counties = counties;
    }
}