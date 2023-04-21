import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ListCardsComponent } from './list-cards/list-cards.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ListCardsComponent,
    DetailCardComponent,
  ],
  imports: [
    CommonModule, 
    InfiniteScrollModule,
    ComponentsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
