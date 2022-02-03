import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerCardService {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }
  public getCardBeer(): Observable<ICardBeer> {
    const obsBeer$: Observable<any> = this.service.get(
      'https://api.punkapi.com/v2/beers/13'
    );
    const treatment = (param_data: any) => {
      return param_data[0] as ICardBeer;
    };
    return obsBeer$.pipe(map(treatment));
  }
}

export interface ICardBeer {
  id: number;
  name: string;
  image_url: string;
  tagline: string;
  description: string;
}
