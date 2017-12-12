import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {

apiKey: 'AIzaSyCs-r_5cKCUK7VRgiAth4w3WM9vMDw3GyI',
authDomain: 'angularfire-471ae.firebaseapp.com',
databaseURL: 'https://angularfire-471ae.firebaseio.com',
projectId: 'angularfire-471ae',
storageBucket: 'angularfire-471ae.appspot.com',
messagingSenderId: '46152882702'

};

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
    exports: [ContactComponent],
})

export class ContactModule { }
