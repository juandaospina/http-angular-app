import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../../types/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(
    private _route: Router
  ) {}
  // Properties
  @Input() public card!: Card;
  

  // Methods
  public goToCardDetails() {
    this._route.navigate([`card/${this.card.id}`])
  }
}
