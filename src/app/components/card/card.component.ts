import { Component, Input } from '@angular/core';

import { Card } from '../../types/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public card!: Card;
}
