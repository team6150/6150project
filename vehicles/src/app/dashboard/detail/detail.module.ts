import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [DetailComponent],
    exports: [DetailComponent]
})

export class DetailModule { }
