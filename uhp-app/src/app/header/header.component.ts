import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {
    let language = localStorage.getItem("lang");

    if (!language)
      language = "en";

    translate.setDefaultLang(language);
  }

  changeLanguage(language: string) {
    localStorage.setItem("lang", language);
    this.translate.setDefaultLang(language);
  }

  ngOnInit(): void {
  }

}
