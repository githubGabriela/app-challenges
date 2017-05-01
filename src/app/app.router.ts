import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//px imports
import { NotFoundComponent } from './access/not-found.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: 'app/home/home.module'},
    {path: 'about', loadChildren: 'app/about/about.module'},
    {path: 'techniques', loadChildren: 'app/techniques/techniques.module'},
    {path: '**', component: NotFoundComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

