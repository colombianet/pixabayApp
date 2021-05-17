import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchImageComponent } from './pages/search-image/search-image.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'searchImage/:search', component: SearchImageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
