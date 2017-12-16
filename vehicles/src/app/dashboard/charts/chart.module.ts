import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChartComponent, ChatComponent, NotificationComponent, DetailComponent} from './chart.component';

@NgModule({
    imports: [RouterModule],
    declarations: [ChartComponent, ChatComponent, NotificationComponent, DetailComponent],
    exports: [ChartComponent, ChatComponent, NotificationComponent, DetailComponent]
})

export class ChartModule { }
