import { Component, OnInit } from '@angular/core';

declare interface Filtro {
  id: number;
  nome: string;
}

declare type Filtros = Filtro[];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  private _item: string;

  public itemAtivado: number = 0;

  set item(item: string) {
    this._item = item;
  }

  get item(): string {
    return this._item;
  }

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
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  public obterItem(item: string) {
    this.item = item;
    if (this.item === '/inicio') {
      this.itemAtivado = 0
    } else if (this.item.substring(7, this.item.length) === '/categorias') {
      this.itemAtivado = 1
    } else if (this.item.substring(7, this.item.length) === '/pesquisar') {
      this.itemAtivado = 2
    }
  }

  public fecharItem() {
    this.itemAtivado = 0;
    this.item = '/inicio';
  }

  public onScroll() {
    let fotosAnimais = 'div.galeria-fotos';

    let tamanhoScroll = document.querySelector(fotosAnimais).scrollWidth - 500;
    let posicaoScroll = document.querySelector(fotosAnimais).scrollLeft;

    let controleFotosProximo = document.querySelector(fotosAnimais + ' div#proximo');
    let controleFotosVoltar = document.querySelector(fotosAnimais + ' div#voltar');

    if (posicaoScroll)
      controleFotosProximo.classList.add('show');
    else
      controleFotosProximo.classList.remove('show');

    if (posicaoScroll <= tamanhoScroll && posicaoScroll !== tamanhoScroll)
      controleFotosVoltar.classList.add('show');
    else
      controleFotosVoltar.classList.remove('show');
  }

  public proximaFoto() {
    let fotosAnimais = 'div.galeria-fotos';
    let ElementofotosAnimais = document.querySelector(fotosAnimais);

    let tamanhoFoto = document.querySelector(fotosAnimais + ' img').clientHeight;

    ElementofotosAnimais.scrollBy({
      left: tamanhoFoto,
      behavior: 'smooth'
    });
  }

  public voltarFoto() {
    let fotosAnimais = 'div.galeria-fotos';
    let ElementofotosAnimais = document.querySelector(fotosAnimais);

    let tamanhoFoto = document.querySelector(fotosAnimais + ' img').clientHeight;

    ElementofotosAnimais.scrollBy({
      left: -tamanhoFoto,
      behavior: 'smooth'
    });
  }
}
