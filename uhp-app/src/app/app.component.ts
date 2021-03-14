import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('hr');
}

  data: any = new Array<String>();
    
  ngOnInit(): void {
    this.data.push("test")
    this.data.push("test123")
  }
  
  valueChange(event:any){
    
  }

  filterChange(event:any){
    
  }

  focus(){

  }

}
