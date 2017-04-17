//3rd party librairies imports
import { NgModule } from '@angular/core';

// pxs imports
import { AboutComponent } from './about.component';
import aboutRoutes from './about.router';

@NgModule({
    imports: [
        aboutRoutes
    ],
    declarations: [AboutComponent]
})

export default class AboutModule {

}