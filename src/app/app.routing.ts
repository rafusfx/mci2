import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { MenuComponent2 } from "./menu2/menu2.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
 
   { path: 'menu2-comp', component: MenuComponent2},
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
