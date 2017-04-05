import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//px imports
import { appRoutes } from './router/index';

//px imports
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/index';
import { HomeComponent }  from './home/index';
import { AboutComponent } from './about/index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  providers: [
    TranslateService
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
