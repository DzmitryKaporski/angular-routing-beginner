import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, ListComponent, ListItemComponent, AboutComponent, AboutCompanyComponent } from './routing-files';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    HomeComponent,
    AboutComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
