import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Ng2BootstrapModule } from 'ng2-bootstrap';


import { BSComponentComponent } from './bsComponent.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    Ng2BootstrapModule.forRoot(),
    BrowserModule
  ],
  declarations: [BSComponentComponent],
  exports: [BSComponentComponent]
})

export class BSComponentModule { }
