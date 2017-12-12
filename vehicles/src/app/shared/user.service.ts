import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private data;

  constructor (
    private http: Http
  ) {}


  ngOnInit() {
      this.getData();
  }

  getData() {
     return this.http.get('http://localhost/index.php')
      .subscribe(
              data => this.data = JSON.stringify(data),
              error => console.log(error),
              () => console.log("done"+this.data));
  }

}
