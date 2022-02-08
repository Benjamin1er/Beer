import { BeerService, IBeer } from '../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  filteredForm = new FormGroup({
    malt: new FormControl(''),
    hop: new FormControl('')
  });
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
  onFilter() {
    console.log(this.filteredForm.value);
    this.beers = this.beers.filter((beer) =>
      beer.ingredients.malt.includes(this.filteredForm.value.malt) &&
      beer.ingredients.hops.includes(this.filteredForm.value.hop)
        ? beer
        : null
    );
  }
}
