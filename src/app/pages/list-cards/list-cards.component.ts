import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

import { debounceTime } from 'rxjs';

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
  public hasError: boolean = false;
  public queryName = new FormControl<string>(''); // tracks the value and validations of an individual form control

  ngOnInit(): void {
    // FormControl enable properties such as status, valid, invalid, also an observable valueChanges
    this.queryName.valueChanges.pipe(
      // operator debounceTime delays notifications emitted by Observable
      debounceTime(1500)
    ).subscribe(value => {
      this.cards = [];
      this.onLoadCards(value);
    })
    this.onLoadCards();
  }

  public onHandlerScroll() {
    this.onLoadCards();
    this.blockInfiniteScroll = true;
    setTimeout(() => {
      this.blockInfiniteScroll = !this.blockInfiniteScroll;
    }, 2000)
  }

  public onLoadCards(cardName: string | null = null) {
    this.cardService.getCards(this.offset, cardName).subscribe({
      next: (response) => {
        this.offset += 50;
        this.hasError = false;
        this.cards = [...this.cards, ...response.data];
      }, 
      error: (err) => {
        console.log("[error_load_carts]", err);
        this.hasError = true;
      }
    })
    
  }
}
