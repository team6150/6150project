import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { GridComponent } from './grid.component';
import { CommonModule } from '@angular/common';
import { LivechatWidgetModule } from '@livechat/angular-widget';


@NgModule({
    imports: [RouterModule , CommonModule, Ng2BootstrapModule.forRoot(), LivechatWidgetModule],
    declarations: [GridComponent],
    exports: [GridComponent]
})

export class GridModule { }
