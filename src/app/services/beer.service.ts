import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }
  public getBeer(): Observable<IBeer[]> {
    const obsBeer$: Observable<any> = this.service.get(
      'https://api.punkapi.com/v2/beers'
    );
    const treatment = (param_data: any) => {
      return param_data as IBeer[];
    };
    return obsBeer$.pipe(map(treatment));
  }
}

export interface IBeer {
  id: number;
  name: string;
  image_url: string;
  ingredients: {
    malt: IMalt[];
    hops: IHop[];
  };
}
interface IMalt {
  name: string;
}
interface IHop {
  name: string;
}
