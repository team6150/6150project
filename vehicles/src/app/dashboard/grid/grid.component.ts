import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService }       from './chat.service';
@Component({
    selector: 'app-grid-cmp',
    templateUrl: './grid.component.html',
    styleUrls: ['timeline.scss'],
 /*   styles: [`
    .chat {
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      width: 10%;
      font-family: 'Georgia';
      font-size: 200%;
    }
  `],*/
  providers: [ChatService]
})

export class GridComponent implements OnInit, OnDestroy{

  messages = [];
  connection;
  message;

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

  constructor(private chatService: ChatService) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
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
