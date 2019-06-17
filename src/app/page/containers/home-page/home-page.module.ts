import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import {HomePageComponent} from './home-page.component';

const COMPONENT = [
  HomePageComponent
];

@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
