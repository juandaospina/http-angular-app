import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ListCardsComponent } from './list-cards/list-cards.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ListCardsComponent,
    DetailCardComponent,
  ],
  imports: [
    CommonModule, 
    InfiniteScrollModule,
    ComponentsModule
  ]
})
export class PagesModule { }
