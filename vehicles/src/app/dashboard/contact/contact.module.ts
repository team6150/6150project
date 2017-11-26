import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})

export class ContactModule { }
