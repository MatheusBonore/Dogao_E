import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  public itens: Itens;

  @Output() public childEvent = new EventEmitter<string>();

  constructor(
    private location: Location
  ) {
    this.itens = [
      {
        nome: 'inicio',
        icone: 'fas fa-home',
        path: '/inicio'
      }, {
        nome: 'categoria',
        icone: 'fas fa-paw',
        path: '/inicio/categoria'
      }, {
        nome: 'notificacao',
        icone: 'fas fa-bell',
        path: '/inicio/notificacao'
      }, {
        nome: 'menu',
        icone: 'fas fa-bars',
        path: '/inicio/menu'
      }
    ];
  }

  ngOnInit(): void {
    this.retornarItem(this.itens[0]);
  }

  public seEncontraNoLink(item: Item): boolean {
    return this.location.path() == item.path;
  }

  public retornarItem(item: Item) {
    this.childEvent.emit(item.path);
  }
}
