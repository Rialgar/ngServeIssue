import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AlwaysComponent } from './always/always.component';

const Routes = RouterModule.forChild( [ {
  path: '',
  component: AlwaysComponent
} ] );

@NgModule( {
  imports: [
    Routes,
    CommonModule
  ],
  declarations: [ AlwaysComponent ]
} )
export class AlwaysModule {
}
