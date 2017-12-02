import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { GridComponent } from './grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [RouterModule , CommonModule, Ng2BootstrapModule.forRoot()],
    declarations: [GridComponent],
    exports: [GridComponent]
})

export class GridModule { }
