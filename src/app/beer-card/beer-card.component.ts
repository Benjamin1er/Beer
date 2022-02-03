import { BeerCardService, ICardBeer } from '../services/beerCard.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBeer } from '../services/beer.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {
  public id?: number;
  public beer?: ICardBeer;
  public title?: string[];

  private service: BeerCardService;
  constructor(private route: ActivatedRoute, param_service: BeerCardService) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (this.id = params['id']));
    this.service
      .getCardBeer(this.id)
      .subscribe((beer: ICardBeer) => this.setBeerDetails(beer));
  }

  setBeerDetails(beer: ICardBeer) {
    this.beer = beer;
    this.title = beer.name.split(' ');
  }
}
