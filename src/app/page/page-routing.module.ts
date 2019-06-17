import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageComponent} from './page.component';
import {HeaderComponent} from './templates/header/header.component';
import {NavComponent} from './templates/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        component: NavComponent,
        loadChildren: './containers/home-page/home-page.module#HomePageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
