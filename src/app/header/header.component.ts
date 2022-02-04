import { Component, OnInit } from '@angular/core';
import { BeerService, IBeer } from '../services/beer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public brewdogLogo = '../assets/brewdog-logo.png';
  public beers: IBeer[] = [];
  public malts: string[] = [];
  public hops: string[] = [];
  private service: BeerService;
  public isOpen: boolean = false;

  constructor(param_service: BeerService) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.service.getBeer().subscribe((param: IBeer[]) => {
      //Get all beers values
      this.beers = param;
      //Get all malts names
      this.beers.map((beer) =>
        beer.ingredients.malt.map((malt) => this.malts.push(malt.name))
      );
      this.malts = [...new Set(this.malts)];
      //Get all hops names
      this.beers.map((beer) =>
        beer.ingredients.hops.map((a) => this.hops.push(a.name))
      );
      this.hops = [...new Set(this.hops)];
    });
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
