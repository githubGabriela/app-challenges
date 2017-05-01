import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const routes: Routes  = [
    {
        path : '', component: HomeComponent //path home
    }
];

export default RouterModule.forChild(routes);