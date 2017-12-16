import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { TimelineComponent, ChatComponent, NotificationComponent, FooterComponent } from './home.component';

@NgModule({
    imports: [CommonModule, Ng2BootstrapModule.forRoot()],
    declarations: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent, FooterComponent ],
    exports: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent, FooterComponent]
})

export class HomeModule { }
