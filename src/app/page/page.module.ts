import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageRoutingModule} from './page-routing.module';
import {PageComponent} from './page.component';
import {HeaderComponent} from './templates/header/header.component';
import {NavComponent} from './templates/nav/nav.component';

const COMPONENT = [
  PageComponent
]

@NgModule({
  declarations: [...COMPONENT, HeaderComponent, NavComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule {
}
