import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//px imports
import { appRoutes } from './router/index';

//px imports
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/index';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
