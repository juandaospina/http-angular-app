import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Data } from '../types/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private _http: HttpClient) {}

  public getCards(offset: number): Observable<Data> {
    const params = new HttpParams().set('num', 50).set('offset', offset);
    return this._http.get<Data>(`${environment.baseUrl}`, { params });
  }
}
