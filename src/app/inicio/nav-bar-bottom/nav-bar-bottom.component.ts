import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare interface Item {
  nome: string;
  icone: string;
  path: string;
}

declare type Itens = Item[];

@Component({
  selector: 'app-nav-bar-bottom',
  templateUrl: './nav-bar-bottom.component.html',
  styleUrls: ['./nav-bar-bottom.component.scss']
})
export class NavBarBottomComponent implements OnInit {
  public itens: Itens = [
    {
      nome: 'inicio',
      icone: 'fas fa-home',
      path: '/inicio',
    }, {
      nome: 'categoria',
      icone: 'fas fa-paw',
      path: '/inicio/categoria',
    }, {
      nome: 'notificacao',
      icone: 'fas fa-bell',
      path: '',
    }, {
      nome: 'menu',
      icone: 'fas fa-bars',
      path: '',
    }
  ];

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void { }

  public seEncontraNoLink(item: Item): boolean {
    return this.location.path() == item.path;
  }

}
