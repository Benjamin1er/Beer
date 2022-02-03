import { RouterModule, Routes } from '@angular/router';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'beer', component: BeerCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
