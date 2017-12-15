import { RouterModule,Route } from '@angular/router';

import { BSComponentComponent } from './index';
import {ProjectItemComponent} from "./project-item/project-item.component";

export const BSComponentRoutes: Route[] = [
  {
    path: 'components',
    component: BSComponentComponent
  },
  {
    path: '',
    component: ProjectItemComponent,
    pathMatch: 'full'
  },

];
