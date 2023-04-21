import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule, 
    NgOptimizedImage,
  ],
  exports: [CardComponent],
})
export class ComponentsModule {}
