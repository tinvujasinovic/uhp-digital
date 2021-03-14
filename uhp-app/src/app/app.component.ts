import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { environment } from 'src/environments/environment';
import { BasicInfo } from './models/basicInfo';
import { Community } from './models/community';
import { Contact } from './models/contact';
import { County } from './models/county';
import { Lists } from './models/lists';
import { Town } from './models/town';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('autoComplete') autoComplete : any;

  public communities: Array<Community> = [];
  public towns: Array<Town> = [];
  public counties: Array<County> = [];
  
  countyDataSource: Array<BasicInfo> = new Array<BasicInfo>();
  communityTownDataSource: Array<BasicInfo> = new Array<BasicInfo>();


  constructor(private http: HttpClient) {
    http.get<Lists>(`${environment.serviceBase}/api/list.php`).subscribe(data => {
      this.counties = data.counties;   
      this.communities = data.communities;
      this.towns = data.towns;

      this.countyDataSource.concat(this.counties);
      this.communityTownDataSource.concat(this.communities);
      this.communityTownDataSource.concat(this.towns);
    })
  }

  countyValueChange(event: any) {

  }

  countyFilterChange(value: any) {
    this.countyDataSource = this.counties.filter((s) => s.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  focus() {
    this.autoComplete.toggle(true);
    this.autoComplete.value = "";
  }
  

}
