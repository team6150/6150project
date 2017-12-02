import {Component} from '@angular/core';
@Component({
    selector: 'app-grid-cmp',
    templateUrl: './grid.component.html'
})

export class GridComponent {
  myInterval = 5000;
  index = 0;
  slides: Array<any> = [];
  imgUrl: Array<any> = [
    `assets/img/slider1.jpg`,
    `assets/img/slider2.jpg`,
    `assets/img/slider3.jpg`,
    `assets/img/slider0.jpg`
  ];
  /* END */
  /* Alert component */
  
  /* END*/

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  /* Carousel */
  addSlide() {
    let i = this.slides.length;
    this.slides.push({
      image: this.imgUrl[i],
      text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
            ${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
    });
  }
  /* END */
}
