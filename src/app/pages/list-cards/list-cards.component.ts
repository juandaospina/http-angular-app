import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {
  // Dependencies injection
  constructor(
    private cardService: CardService
  ) {}
  // Properties
  public cards: Card[] = [];
  public offset: number = 0;
  public blockInfiniteScroll: boolean = false;

  ngOnInit(): void {
    this.onLoadCards();
  }

  public onHandlerScroll() {
    this.onLoadCards();
  }

  public onLoadCards() {
    console.log("[request_load_more_cards]");
    this.cardService.getCards(this.offset).subscribe(response => {
      this.offset += 50;
      this.cards = [...this.cards, ...response.data];
    })
  }
}
