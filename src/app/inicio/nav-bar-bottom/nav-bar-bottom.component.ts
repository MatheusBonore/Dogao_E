import { Component, OnInit } from '@angular/core';

declare interface Item {
  nome: string;
  icone: string;
}

declare type Itens = Item[];

@Component({
  selector: 'app-nav-bar-bottom',
  templateUrl: './nav-bar-bottom.component.html',
  styleUrls: ['./nav-bar-bottom.component.scss']
})
export class NavBarBottomComponent implements OnInit {
  public itemSelecionado: string;
  public listaItens: Itens;

  constructor() {
    this.listaItens = [
      {
        nome: 'inicio',
        icone: 'fas fa-home'
      }, {
        nome: 'categoria',
        icone: 'fas fa-paw'
      }, {
        nome: 'notificacao',
        icone: 'fas fa-bell'
      }, {
        nome: 'menu',
        icone: 'fas fa-bars'
      }
    ];
  }

  ngOnInit(): void {
    this.retornarInicio();
  }

  public selecionarItem(_item: string) {
    this.itemSelecionado = _item;
  }

  public retornarInicio(){
    this.itemSelecionado = this.listaItens[0].nome;
  }
}
