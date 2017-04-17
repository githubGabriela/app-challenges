import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'my-app',
  template: ` <app-header></app-header>`,
})


export class AppComponent {


  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
