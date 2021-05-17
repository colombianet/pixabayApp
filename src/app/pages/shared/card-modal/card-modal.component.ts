import { Component, Input, OnInit } from '@angular/core';

import { ImagesService } from '../../services/pixabay.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html'
})
export class CardModalComponent implements OnInit {
  
  @Input()imageDetail: any;
  @Input() images: any;

  constructor( private imagesSvc: ImagesService ) { }

  ngOnInit(): void {
  }
  
  seeDetails(id: number) {
    this.imagesSvc.getImageById(id).subscribe(resp => {
      this.imageDetail = resp;
    })
  }

}
