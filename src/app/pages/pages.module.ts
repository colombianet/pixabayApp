import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { SearchImageComponent } from './search-image/search-image.component';

// shared components
import { DropdownCategoriesComponent } from './shared/dropdown-categories/dropdown-categories.component';
import { CardModalComponent } from './shared/card-modal/card-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchImageComponent,
    DropdownCategoriesComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
