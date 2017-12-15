import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Ng2BootstrapModule } from 'ng2-bootstrap';


import { BSComponentComponent } from './bsComponent.component';
import {BrowserModule} from '@angular/platform-browser';
import {ProjectItemComponent} from "./project-item/project-item.component";
import {BannerHeadComponent} from "./banner-head/banner-head.component";


@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    Ng2BootstrapModule.forRoot(),
    BrowserModule
  ],
  declarations: [BSComponentComponent,
                ProjectItemComponent,
                BannerHeadComponent],
  exports: [BSComponentComponent]
})

export class BSComponentModule { }
