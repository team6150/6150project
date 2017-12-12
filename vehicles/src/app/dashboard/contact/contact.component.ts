import { UserService } from '../shared/user.service';
import { Contact } from './contact';
import {Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-contact-cmp',
    templateUrl: './contact.component.html',
    providers: [UserService],

})

export class ContactComponent {
  // Google map
  title = 'Google Maps Addeed Successfully';

  lat = 42.3398;

  lng = -71.0892;

  model = new Contact(0, '', '', '', '');

  constructor(private userService: UserService,
              private http: Http
             ) {}


  loadUser() {
    this.userService.getData();
    console.log(this.model);

  }

  addData() {
    let test_this = { 'name': this.model.name,
                      'email': this.model.email,
                      'address': this.model.address,
                      'comments': this.model.comments
                    };

    let headers = new Headers ({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: headers, method: 'post' });

    this.http.post('http://localhost/index.php', test_this, options)
    .subscribe(res => {
      console.log('post result %o', res);
    });
  }

}








