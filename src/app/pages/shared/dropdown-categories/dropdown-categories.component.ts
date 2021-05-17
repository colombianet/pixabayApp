import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ImagesService } from '../../services/pixabay.service';

@Component({
  selector: 'app-dropdown-categories',
  templateUrl: './dropdown-categories.component.html'
})
export class DropdownCategoriesComponent implements OnInit {

  categories: string[] = ['science', 'education', 'people', 'feelings', 'computer', 'buildings'];
  images: string[] = [];
  @Output() imagesEmit: EventEmitter<any> = new EventEmitter();

  constructor( private imagesSvc: ImagesService ) { }

  ngOnInit(): void { }

  seeCategory( category: string ) {
    this.imagesSvc.getImagesByCategory(category).subscribe(resp => {
      this.images = resp;
      this.imagesEmit.emit(this.images);
    })
  }

}
