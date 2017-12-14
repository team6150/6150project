import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { DashboardRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [
  ...DashboardRoutes,
  { path: '**', component: DashboardComponent }
];
