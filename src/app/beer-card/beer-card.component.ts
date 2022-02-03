import { BeerCardService, ICardBeer } from '../services/beerCard.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {
  private id?: number;
  public beer?: ICardBeer;
  private service: BeerCardService;
  constructor(private route: ActivatedRoute, param_service: BeerCardService) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (this.id = params['id']));
    this.service.getCardBeer().subscribe((param: ICardBeer) => {
      this.beer = param;
    });
  }
}
