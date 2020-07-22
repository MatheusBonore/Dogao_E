import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-modal-itens',
  templateUrl: './menu-modal-itens.component.html',
  styleUrls: ['./menu-modal-itens.component.scss']
})
export class MenuModalItensComponent implements OnInit {
  @Input("item") public itemSelecionado: string;
  @Output("retorno") public retornarInicio = new EventEmitter();

  public listaCategoria: Array<any> = [
    { id: 'comunidade', descricao: 'comunidade', ativado: true },
    { id: 'achado', descricao: 'achados', ativado: false },
    { id: 'doacao', descricao: 'doação', ativado: false },
    { id: 'perdido', descricao: 'perdidos', ativado: false }
  ];

  public listaPelagem: Array<any> = [
    { descricao: 'Curto' },
    { descricao: 'Longo' },
    { descricao: 'Sólido' },
    { descricao: 'Pelo Encaracolado' },
    { descricao: 'Pelo Pelagem Dupla' },
    { descricao: 'Escama' }
  ];

  public listaRaca: Array<any> = [
    { descricao: 'Golden Retriever' },
    { descricao: 'Beagle' },
    { descricao: 'Pug' },
    { descricao: 'Shih-Tzu' }
  ];

  public listaTamanho: Array<any> = [
    { descricao: '23 - 25cm' },
    { descricao: '30cm' },
    { descricao: '41 - 58cm' }
  ];

  constructor() { }

  ngOnInit(): void { }

  public fecharItem(): void {
    this.itemSelecionado = 'inicio';
    this.retornarInicio.emit('inicio');
  }

  public onScroll(): void {
    let _galeriaFotos = document.querySelector('div#galeria-fotos');
    let _fotos = _galeriaFotos.querySelector('div.fotos');

    let _controleVoltar = _galeriaFotos.querySelector('div#voltar');
    let _controleProximo = _galeriaFotos.querySelector('div#proximo');

    // Como scrollTop marca a posição do topo do viewport, nunca chegará a 100 %.
    // Para que seu cálculo funcione basta ajustar o seu valor total, ou seja, 
    // seu valor total é o tamanho do scroll menos o tamanho da 
    // página(que seria a maior posição que scrollTop pode ter).
    // É um problema mais matemático do que de programação, o cálculo ficaria:
    // 100 * scroll_atual / (scroll_total - tamanho_tela)

    let _posicaoAtual = 100 * _fotos.scrollLeft / (_fotos.scrollWidth - _fotos.clientWidth)

    if (_posicaoAtual)
      _controleProximo.classList.add('show');
    else
      _controleProximo.classList.remove('show');

    if (_posicaoAtual <= 100 && _posicaoAtual !== 100)
      _controleVoltar.classList.add('show');
    else
      _controleVoltar.classList.remove('show');
  }

  public proximaFoto(): void {
    let _fotos = document.querySelector('div#galeria-fotos div.fotos');

    _fotos.scrollBy({
      left: _fotos.querySelector('img').clientWidth,
      behavior: 'smooth'
    });
  }

  public voltarFoto(): void {
    let _fotos = document.querySelector('div#galeria-fotos div.fotos');

    _fotos.scrollBy({
      left: -_fotos.querySelector('img').clientWidth,
      behavior: 'smooth'
    });
  }

  public trocarCategoria(_button: number): void {
    this.listaCategoria.forEach(e => {
      e.ativado = false;
    });

    this.listaCategoria[_button].ativado = true;
  }
}
