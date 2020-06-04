import { Component, OnInit } from '@angular/core';

declare interface Filtro {
  nome: string;
  tipo: string;
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
      nome: 'Curto',
      tipo: 'pelagem'
    }, {
      nome: 'Longo',
      tipo: 'pelagem'
    }, {
      nome: 'Sólido',
      tipo: ''
    }, {
      nome: 'Pelo Encaracolado',
      tipo: ''
    }, {
      nome: 'Pelagem Dupla',
      tipo: ''
    }, {
      nome: 'Escama',
      tipo: ''
    }, {
      nome: 'Golden Retriever',
      tipo: ''
    }, {
      nome: 'Beagle',
      tipo: ''
    }, {
      nome: 'Pug',
      tipo: ''
    }, {
      nome: 'Shih-Tzu',
      tipo: ''
    }, {
      nome: '23 - 25 cm',
      tipo: ''
    }, {
      nome: '30 cm',
      tipo: ''
    }, {
      nome: '41 - 58 cm',
      tipo: ''
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
