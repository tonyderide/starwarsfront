import { Component, OnInit } from '@angular/core';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
@Component({
  selector: 'app-protheses',
  templateUrl: './protheses.component.html',
  styleUrls: ['./protheses.component.scss']
})
export class ProthesesComponent implements OnInit {
  images: GalleryItem[];
  constructor(public gallery: Gallery) { }

  ngOnInit(): void {
    this.images = [
      new ImageItem({ src: './assets/protheses/1.JPG', thumb: './assets/protheses/1.JPG' }),
      new ImageItem({ src: './assets/protheses/1.1.jpg', thumb: './assets/protheses/1.1.JPG' }),
      new ImageItem({ src: './assets/protheses/1.2.JPG', thumb: './assets/protheses/1.1.JPG' }),
      new ImageItem({ src: './assets/protheses/1.3.JPG', thumb: './assets/protheses/1.1.JPG' }),
  ];
  }

}
