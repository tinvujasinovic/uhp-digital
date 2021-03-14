import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    let language = localStorage.getItem("lang");

    if (!language)
      language = "en";

    translate.setDefaultLang(language);
  }

  data: any = new Array<String>();

  ngOnInit(): void {
    this.data.push("test")
    this.data.push("test123")
  }

  changeLanguage(language: string) {
    localStorage.setItem("lang", language);
    this.translate.setDefaultLang(language);
  }

  valueChange(event: any) {

  }

  filterChange(event: any) {

  }

  focus() {

  }

}
