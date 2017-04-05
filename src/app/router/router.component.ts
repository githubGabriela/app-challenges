import { Routes } from '@angular/router/router';

//px imports
import { HomeComponent } from '../home/index';
import { AboutComponent } from '../about/index';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }

];
