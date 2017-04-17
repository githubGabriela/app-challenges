import  { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(public translateService: TranslateService) {
  }

  changeLanguage(type: string) {
    this.translateService.use(type);
  }
}
