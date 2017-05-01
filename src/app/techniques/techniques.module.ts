//3rd party librairies imports
import { NgModule } from '@angular/core';

// pxs imports
import { TechniquesComponent } from './techniques.component';
import techniquesRoutes from './techniques.router';
import { ListComponent, OilComponent, WatercolorComponent } from './list/index';
import { DetailComponent } from './detail/index';

@NgModule({
    imports: [
        techniquesRoutes
    ],
    declarations: [
        ListComponent,
        DetailComponent,
        OilComponent,
        WatercolorComponent,
        TechniquesComponent
    ],
    exports: [
        TechniquesComponent
    ]
})

export default class TechniquesModule {

}