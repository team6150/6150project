import { Route } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { ChartRoutes } from './charts/chart.route';
import { LoginPageRoutes } from './login-page/loginPage.routes';
import { GridRoutes } from './grid/grid.routes';
import { BSComponentRoutes } from './bs-component/bsComponent.routes';
import { BSElementRoutes } from './bs-element/bsElement.routes';
import { ContactRoutes } from './contact/contact.routes';
import { DetailRoutes } from './detail/detail.routes';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        ...HomeRoutes,
        ...ChartRoutes,
        ...BSComponentRoutes,
        ...LoginPageRoutes,
        ...GridRoutes,
        ...BSElementRoutes,
        ...ContactRoutes,
        ...DetailRoutes
      ]
    }
];
