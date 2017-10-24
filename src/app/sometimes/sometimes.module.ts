import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SometimesComponent } from './sometimes/sometimes.component';

const Routes = RouterModule.forChild( [ {
  path: '',
  component: SometimesComponent
} ] );


@NgModule( {
  imports: [
    CommonModule,
    Routes
  ],
  declarations: [ SometimesComponent ]
} )
export class SometimesModule {
}
