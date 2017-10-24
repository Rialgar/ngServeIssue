import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { environment } from 'environments/environment';

let ChildRoutes: Routes = [ {
  path: 'always',
  loadChildren: './always/always.module#AlwaysModule'
} ];

if ( !environment.production ) {
  ChildRoutes = ChildRoutes.concat( [ {
    path: 'sometimes',
    loadChildren: './sometimes/sometimes.module#SometimesModule'
  } ] );
}


const AppRoutes: Routes = [ {
  path: '',
  children: [
    ...ChildRoutes
  ]
} ];

const Routes = RouterModule.forRoot( AppRoutes, { useHash: true } );

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routes
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
