import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        AgmCoreModule.forRoot({

        apiKey: 'AIzaSyBXzS8AKv1oaoUxxmb6RVCPDqKYuoHypQo'

    }),
        Ng2BootstrapModule.forRoot()
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})

export class ContactModule { }
