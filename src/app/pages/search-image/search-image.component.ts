import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hit } from '../interfaces/pixabay-response';

import { ImagesService } from '../services/pixabay.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html'
})
export class SearchImageComponent implements OnInit {

  images: Hit[] = [];
  error = false;

  constructor( private aRoute: ActivatedRoute, private imagesSvc: ImagesService ) { }

  ngOnInit(): void {
    this.error = false;
    this.aRoute.params.subscribe(params => {
        this.imagesSvc.getImagesByQuery(params.search).subscribe(resp => {
          this.error = false;
          this.images = resp;
        }, err => {
          this.error = true;
        })
      })
  }

}
