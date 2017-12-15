import {Component} from '@angular/core';
@Component({
    selector: 'app-grid-cmp',
    templateUrl: './grid.component.html',
    styleUrls: ['timeline.scss'],
})

export class GridComponent {
  licenseId:number = 8928139;
  myInterval = 5000;
  index = 0;
  slides: Array<any> = [];
  imgUrl: Array<any> = [
    `assets/img/images5.jpg`,
    `assets/img/images6.jpg`,
    `assets/img/images7.jpg`,
    `assets/img/images8.jpg`
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
