import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    const obsBeer$: Observable<any> = this.service.get('../assets/beers.json');
    const treatment = (param_data: any) => {
      return param_data as IBeer[];
    };
    return obsBeer$.pipe(map(treatment));
  }
}

export interface IBeer {
  name: string;
  image: string;
}
