import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCardsComponent, DetailCardComponent} from './pages';

const routes: Routes = [
  {
    path: '',
    component: ListCardsComponent
  }, 
  {
    path: 'card/:id',
    component: DetailCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
