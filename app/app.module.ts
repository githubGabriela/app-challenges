import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

//px imports
import { AppRoutes } from './app.router';
import { AppComponent }  from './app.component';
import { NotFoundComponent } from './access/not-found.component';
import { HeaderComponent } from './header/index';
import { MenuComponent } from './menu/menu.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        AppRoutes,
    ],
    declarations: [
        MenuComponent,
        HeaderComponent,
        NotFoundComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


export function createTranslateLoader(http: Http) {
    console.log('createTranslateLoader');
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
