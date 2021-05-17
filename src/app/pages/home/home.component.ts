import { Component, OnInit } from '@angular/core';

import { Hit } from '../interfaces/pixabay-response';

import { ImagesService } from '../services/pixabay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  images: Hit[] = [];

  constructor( private imagesSvc: ImagesService ) { }

  ngOnInit(): void {
    this.imagesSvc.getImages().subscribe(resp => {
      this.images = resp;
    })
   }

  inputImages(images: any) {
    this.images = images;
  }

}
