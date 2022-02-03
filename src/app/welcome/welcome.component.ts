import { BeerService, IBeer } from '../services/beer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public beers: IBeer[] = [];
  private service: BeerService;
  constructor(param_service: BeerService) {
    this.service = param_service;
  }
  ngOnInit(): void {
    this.service.getBeer().subscribe((param: IBeer[]) => {
      this.beers = param;
    });
  }
}
