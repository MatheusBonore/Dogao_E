import { Component, OnInit } from '@angular/core';

declare interface Filtro {
  id: number;
  nome: string;
}

declare type Filtros = Filtro[];

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private _mostrarNavBar: boolean = true;

  public filtros: Filtros = [
    {
      id: 1,
      nome: 'Curto'
    }, {
      id: 2,
      nome: 'Longo'
    }, {
      id: 3,
      nome: 'Sólido'
    }, {
      id: 4,
      nome: 'Pelo Encaracolado'
    }, {
      id: 5,
      nome: 'Pelagem Dupla'
    }, {
      id: 6,
      nome: 'Escama'
    }, {
      id: 7,
      nome: 'Golden Retriever'
    }, {
      id: 8,
      nome: 'Beagle'
    }, {
      id: 9,
      nome: 'Pug'
    }, {
      id: 10,
      nome: 'Shih-Tzu'
    }, {
      id: 11,
      nome: '23 - 25 cm'
    }, {
      id: 12,
      nome: '30 cm'
    }, {
      id: 13,
      nome: '41 - 58 cm'
    }
  ];

  set mostrarNavBar(mostrarNavBar: boolean) {
    this._mostrarNavBar = mostrarNavBar;
  }

  get mostrarNavBar(): boolean {
    return this._mostrarNavBar;
  }

  constructor() { }

  ngOnInit(): void { }

  public pesquisar() {
    this.mostrarNavBar = !this.mostrarNavBar;
  }

}
