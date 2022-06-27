import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'list-item', component: ListItemComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about-company', component: AboutCompanyComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
