import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private cardService: CardService,
  ) {}

  // Properties
  public id!: string; 
  public card!: Card;

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id') ?? ''

    this.cardService.getCardById(this.id).subscribe({
      next: (response) => {
        console.log("[detail_card]", response)
        this.card = response.data[0];
      },
      error: (error) => {
        console.log("[error]", error)
      }
    })
  }
}
