import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OnInit, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { NAVS } from "../../../mock-data/nav-data";
import { Router } from "@angular/router";
import { PROJECTS } from "../../../mock-data/project-data";

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-bs-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bs-Component.component.html',
  styleUrls: ['./events.css']
})

export class BSComponentComponent{


  projects: any[] = PROJECTS;

  // Pagination
  public totalItems = 64;
  public currentPage = 4;

  public smallnumPages = 0;
  public numPages = 0;

  public maxSize = 5;
  public bigTotalItems = 175;
  public bigCurrentPage = 1;


  // Rating
  public x = 5;
  public y = 2;
  public maxRating = 10;
  public rate = 7;
  public isReadonly = false;

  public overStar: number;
  public percent: number;

  public ratingStates: any = [
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-heart-o' },
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-heart-o' },
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-heart-o' },
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-heart-o' },
    { stateOn: 'fa fa-heart', stateOff: 'fa fa-heart-o' }
  ];

  // Tabs
  public tabs: Array<any> = [
    { title: 'Notice', content: 'Be aware that pre-purchased theme park tickets do not guarantee entry on any given day. Please consider arriving early to begin your magical experience!'},
    { title: 'Discounts', content: 'Deluxe Annual Passport: Visit both theme parks on the same day during select days of the year  '}
  ];

  public constructor() {
}
  navChange($event) {
    console.log($event);
    this.changeData($event);
  }

  changeData(type: string) {
    this.projects = this.filterPro(type);
  }

  filterPro(type: string): any[] {
    if (!type) {
      return PROJECTS;
    }
    return PROJECTS.filter(item => {
      return item.type.includes(type);
    })
  }




  // Pagination
  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  };


  // Rating
  public hoveringOver(value: number): void {
    this.overStar = value;

  };

  public resetStar(): void {
    this.overStar = void 0;
  }
  // Tabs
  public alertMe(): void {
    setTimeout(function(): void {
      alert('You\'ve submit the rating!');
    });
  };

  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  };

  public removeTabHandler(/*tab:any*/): void {
    console.log('Remove Tab handler');
  };




  public typeaheadOnSelect(e: any): void {
    console.log(`Selected value: ${e.item}`);
  }
}
