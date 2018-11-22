import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NavigationComponent} from '../navigation/navigation.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NavigationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
