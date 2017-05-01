import { Routes, RouterModule } from '@angular/router';

import { TechniquesComponent } from '.';
import { DetailComponent } from './detail';
import { ListComponent } from './list/index';
import { OilComponent } from './list/oil/oil.component';
import { WatercolorComponent } from './list/watercolor/watercolor.component';

export const routes: Routes  = [
    {
        path : '', component: TechniquesComponent, //path techniques,
        children : [
            {
                path: 'oil',
                component: OilComponent
            },
            {
                path: 'watercolor',
                component: WatercolorComponent
            },
            {
                path: ':id',
                component: DetailComponent
            },

        ]

    }
];

export default RouterModule.forChild(routes);