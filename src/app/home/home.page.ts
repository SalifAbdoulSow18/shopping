import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Articles: any[];
  private navCtrl: any;

  constructor() {
    this.Articles = [
      {nom: 'Télevision', prix: 145, details: 'Lorem ipsum de Télevision'},
      {nom: 'Téléphone', prix: 130, details: 'Lorem ipsum de Téléphone'},
      {nom: 'Sac à dos', prix: 11, details: 'Lorem ipsum de Sac à dos'},
      {nom: 'PC', prix: 800, details: 'Lorem ipsum de PC'},
      {nom: 'Radio', prix: 33, details: 'Lorem ipsum de Radio'},
    ];
  }

  showDetails(): void {
    this.navCtrl.push(DetailsComponent);
  }

}
