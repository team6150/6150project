import { Component, OnInit} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserService } from '../../shared/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-chat-cmp',
  templateUrl: 'chat.html'
})
export class ChatComponent { }

@Component({
  selector: 'app-notifications-cmp',
  templateUrl: 'notifications.html'
})
export class NotificationComponent { }
@Component({
  selector: 'app-detail-cmp',
  templateUrl: 'detail.html'
})
export class DetailComponent { }

@Component({
  selector: 'app-chart-cmp',
  templateUrl: 'chart.component.html'
})

export class ChartComponent implements OnInit {

  private comments = {
    '_body': '',
    'status': '',
    'ok': '',
    'statusText': '',
    'headers': '',
    'type': '',
    'url': ''
  };
  private comments2 = {
    '_body': '',
    'status': '',
    'ok': '',
    'statusText': '',
    'headers': '',
    'type': '',
    'url': ''
  };
  
 private arr_baby=[5, 3, 4, 7, 2];
 private arr_teen=[3, 4, 4, 2, 5];
 private arr_adult=[2, 5, 6, 2, 1];
 private arr_old=[3, 0, 4, 4, 3];


  constructor(private http: Http) {

  }

  ngOnInit() {
     this.getData();
     this.loadcomments();
  }
  loadcharts(){

  }
  loadcomments() {
    var x=0;
    this.getData();
    var splitted : Array<string> = this.comments['_body'].split('},');
      console.log('123'+this.comments['_body']);
    for (let entry of splitted){
      var entryy : Array<string> = entry.split(',');
      var y = 0;
      for (let entryyy of entryy){
        var entryyyy : Array<string> = entryyy.split(':');
        var z = 0;
        for(let entryyyyy of entryyyy){
          var cleaned = entryyyyy.replace(/\W/g, ""); 
          //console.log(x+','+y+','+z+','+cleaned);
          if(y==1&&z==1){
            this.arr_baby[x]=<number><any>cleaned;
          }else if(y==2&&z==1){
            this.arr_teen[x]=<number><any>cleaned;
          }else if(y==3&&z==1){
            this.arr_adult[x]=<number><any>cleaned;
          }else if(y==4&&z==1){
            this.arr_old[x]=<number><any>cleaned;
          }
          z++;
        }
        y++;
      }
      x++;
    }
    let totalActivity: any = $('#total-activity');
        totalActivity.highcharts({
            chart: {
                type: 'column'
            },

            title: {
                text: 'Total activity joined people, grouped by age'
            },

            xAxis: {
                categories: ['Skiing', 'Skating', 'Coaster', 'BumperCar', 'HobbyHorse']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Amount of people'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y;
                }
            },


            series: [{
                name: 'Baby',
                data: this.arr_baby,
                stack: '0-12'
            }, {
                name: 'Teenager',
                data: this.arr_teen,
                stack: '13-19'
            }, {
                name: 'Adults',
                data: this.arr_adult,
                stack: '20-64'
            }, {
                name: 'Olds',
                data: this.arr_old,
                stack: '65-'
            }]
        });
        let snowDepth: any = $('#temperature');
        snowDepth.highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Temperature at Husky Amusement Park, Boston'
            },
            subtitle: {
                text: 'Irregular time data in Boston MA'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'temperature (Degree Centigrade)'
                },
                min: -30
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },

            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },

            series: [{
                name: '2014-2015',
                // Define the data points. All series have a dummy year
                // of 1970/71 in order to be compared on the same x axis. Note
                // that in JavaScript, months start at 0 for January, 1 for February etc.
                data: [
                    [Date.UTC(1970, 9, 21), 18],
                    [Date.UTC(1970, 10, 4), 5],
                    [Date.UTC(1970, 10, 9), 6],
                    [Date.UTC(1970, 10, 27), 11],
                    [Date.UTC(1970, 11, 2), 1],
                    [Date.UTC(1970, 11, 26), 0],
                    [Date.UTC(1970, 11, 29), 4],
                    [Date.UTC(1971, 0, 11), -5],
                    [Date.UTC(1971, 0, 26), -9],
                    [Date.UTC(1971, 1, 3), -12],
                    [Date.UTC(1971, 1, 11), -19],
                    [Date.UTC(1971, 1, 25), -21],
                    [Date.UTC(1971, 2, 11), -4],
                    [Date.UTC(1971, 3, 11), 1],
                    [Date.UTC(1971, 4, 1), 11],
                    [Date.UTC(1971, 4, 5), 14],
                    [Date.UTC(1971, 4, 19), 15],
                    [Date.UTC(1971, 5, 3), 24]
                ]
            }, {
                name: '2015-2016',
                data: [
                    [Date.UTC(1970, 9, 21), 25],
                    [Date.UTC(1970, 10, 4), 12],
                    [Date.UTC(1970, 10, 9), 1],
                    [Date.UTC(1970, 10, 27), 15],
                    [Date.UTC(1970, 11, 2), 8],
                    [Date.UTC(1970, 11, 26), 1],
                    [Date.UTC(1970, 11, 29), 0],
                    [Date.UTC(1971, 0, 11), -9],
                    [Date.UTC(1971, 0, 26), -1],
                    [Date.UTC(1971, 1, 3), -13],
                    [Date.UTC(1971, 1, 11), -14],
                    [Date.UTC(1971, 1, 25), -25],
                    [Date.UTC(1971, 2, 11), -9],
                    [Date.UTC(1971, 3, 11), -3],
                    [Date.UTC(1971, 4, 1), 7],
                    [Date.UTC(1971, 4, 5), 15],
                    [Date.UTC(1971, 4, 19), 14],
                    [Date.UTC(1971, 5, 3), 26]
                ]
            }, {
                name: '2016-2017',
                data: [
                    [Date.UTC(1970, 9, 21), 16],
                    [Date.UTC(1970, 10, 4), 8],
                    [Date.UTC(1970, 10, 9), 9],
                    [Date.UTC(1970, 10, 27), 10],
                    [Date.UTC(1970, 11, 2), 9],
                    [Date.UTC(1970, 11, 26), 0],
                    [Date.UTC(1970, 11, 29), -3],
                    [Date.UTC(1971, 0, 11), -3],
                    [Date.UTC(1971, 0, 26), -9],
                    [Date.UTC(1971, 1, 3), -12],
                    [Date.UTC(1971, 1, 11), -19],
                    [Date.UTC(1971, 1, 25), -12],
                    [Date.UTC(1971, 2, 11), -3],
                    [Date.UTC(1971, 3, 11), -1],
                    [Date.UTC(1971, 4, 1), 0],
                    [Date.UTC(1971, 4, 17), 19],
                    [Date.UTC(1971, 4, 29), 10],
                    [Date.UTC(1971, 5, 23), 21]
                ]
            }]
        });
  }

  getData() {
      this.http.get('http://localhost/index1.php')
      .subscribe(
              data => this.comments = JSON.parse(JSON.stringify(data)),
              error => console.log(error),
              () => console.log('done' /*+ this.comments['_body']*/));
  }
  getData2() {
     return this.http.get('http://localhost/index2.php')
      .subscribe(
              data => this.comments2 = JSON.parse(JSON.stringify(data)),
              error => console.log(error),
              () => console.log('done' + this.comments2['_body']));
  }
  turnData() {
    this.getData();
    var splitted: Array<string> = this.comments['_body'].split('},');
    for (let str of splitted){
      console.log(str);
    }
  }
  turnData2(){
    this.getData2();
    console.log('doneeee' + this.comments2['_body']);
    var splitted : Array<string> = this.comments2['_body'].split(',');

   console.log('doneeee' + this.comments2['_body']); 
    console.log('turndata2'+this.comments2['_body']);
    var arr=[];
    var splitted: Array<string> = this.comments2['_body'].split('},');
    for(let str of splitted){
      console.log(str);
    }
  }
}
