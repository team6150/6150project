import { Component, OnInit} from '@angular/core';

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
  ngOnInit() {
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
                data: [5, 3, 4, 7, 2],
                stack: '0-12'
            }, {
                name: 'Teenager',
                data: [3, 4, 4, 2, 5],
                stack: '13-19'
            }, {
                name: 'Adults',
                data: [2, 5, 6, 2, 1],
                stack: '20-64'
            }, {
                name: 'Olds',
                data: [3, 0, 4, 4, 3],
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
}
