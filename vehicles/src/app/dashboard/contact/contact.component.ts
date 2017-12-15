import { UserService } from '../../shared/user.service';
import { Contact, comment } from './contact';
import {Component, Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-contact-cmp',
    templateUrl: './contact.component.html',
    providers: [],

})

export class ContactComponent {
  // Google map
  title = 'Google Maps Addeed Successfully';

  lat = 42.3398;

  lng = -71.0892;

  model = new Contact(0, '', '', '', '');

  private comments = {
    '_body': '',
    'status': '',
    'ok': '',
    'statusText': '',
    'headers': '',
    'type': '',
    'url': ''
  };

  private cardnum = 6;

  array_name = ['val1', 'val2', 'val3', 'val4', 'val5', 'val6'];   //initialization
  array_comments = ['val1', 'val2', 'val3', 'val4', 'val5', 'val6'];   //initialization

  private com: comment[] = [];

  private comm = [];

  private commm = [];

  private commentss = [{name: '', comments: ''}];

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getData();
    Observable.interval(1000 * 5).subscribe(x => {
      this.loadcomments();
    });
  }

  loadcomments() {
    this.getData();
    this.com.length = 0;
    var splitted : Array<string> = this.comments['_body'].split(',');

    this.comm.length = 0;
    this.commm.length = 0;
    for (let entry of splitted){
      var String = entry.substring(entry.lastIndexOf(':"') + 1, entry.lastIndexOf('"'));
      String = String.substr(1);
      this.comm.push(String);
    }
    this.array_name[0] = this.comm[0];
    this.array_name[1] = this.comm[2];
    this.array_name[2] = this.comm[4];
    this.array_name[3] = this.comm[6];
    this.array_name[4] = this.comm[8];
    this.array_name[5] = this.comm[10];

    this.array_comments[0] = this.comm[1];
    this.array_comments[1] = this.comm[3];
    this.array_comments[2] = this.comm[5];
    this.array_comments[3] = this.comm[7];
    this.array_comments[4] = this.comm[9];
    this.array_comments[5] = this.comm[11];

    this.commentss.length=0;
    for (var i = 0; i < 6; i++) {
      this.commentss.push({name: this.array_name[i], comments: this.array_comments[i]});
    }
    //console.log(this.array_name);
    console.log(this.commentss);

  }

  getData() {
     return this.http.get('http://localhost/index.php')
      .subscribe(
              data => this.comments = JSON.parse(JSON.stringify(data)),
              error => console.log(error),
              () => console.log('done' + this.comments['_body']));
  }

  addData() {

    if (this.model.name == null || this.model.name == '') {
      alert('Name can\'t be blank');
      return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.model.email))) {
        alert('You have entered an invalid email address!');
        return false;
    }
    if (this.model.address == null || this.model.address == '') {
      alert('Address can\'t be blank');
      return false;
    }
    if (this.model.comments == null || this.model.comments == '') {
      alert('Comments can\'t be blank');
      return false;
    }

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








