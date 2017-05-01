import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` <component-with-carousel></component-with-carousel> <router-outlet></router-outlet>`,
})


export class AppComponent {


  constructor() {
  }
}
