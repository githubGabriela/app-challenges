//3rd party librairies imports
import { NgModule } from '@angular/core';

// pxs imports
import { HomeComponent } from './home.component';
import homeRoutes from './home.router';

@NgModule({
    imports: [
        homeRoutes
    ],
    declarations: [HomeComponent],
})

export default class HomeModule {

}