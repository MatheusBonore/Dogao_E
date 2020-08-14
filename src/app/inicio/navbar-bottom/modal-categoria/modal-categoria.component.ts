import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NavbarModal } from '../navbar-modal.interface';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styleUrls: ['./modal-categoria.component.scss']
})
export class ModalCategoriaComponent implements OnInit, NavbarModal {

  @ViewChild('template') public template: TemplateRef<any>;

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

  public onScroll(): void {
    let galeriaFotos = document.querySelector('div#galeria-fotos');
    let fotos = galeriaFotos.querySelector('div.fotos');

    let controleVoltar = galeriaFotos.querySelector('div#voltar');
    let controleProximo = galeriaFotos.querySelector('div#proximo');

    // Como scrollTop marca a posição do topo do viewport, nunca chegará a 100 %.
    // Para que seu cálculo funcione basta ajustar o seu valor total, ou seja, 
    // seu valor total é o tamanho do scroll menos o tamanho da 
    // página(que seria a maior posição que scrollTop pode ter).
    // É um problema mais matemático do que de programação, o cálculo ficaria:
    // 100 * scroll_atual / (scroll_total - tamanho_tela)

    let posicaoAtual = 100 * fotos.scrollLeft / (fotos.scrollWidth - fotos.clientWidth)

    if (posicaoAtual)
      controleProximo.classList.add('show');
    else
      controleProximo.classList.remove('show');

    if (posicaoAtual <= 100 && posicaoAtual !== 100)
      controleVoltar.classList.add('show');
    else
      controleVoltar.classList.remove('show');
  }

  public proximaFoto(): void {
    let fotos = document.querySelector('div#galeria-fotos div.fotos');

    fotos.scrollBy({
      left: fotos.querySelector('img').clientWidth,
      behavior: 'smooth'
    });
  }

  public voltarFoto(): void {
    let fotos = document.querySelector('div#galeria-fotos div.fotos');

    fotos.scrollBy({
      left: -fotos.querySelector('img').clientWidth,
      behavior: 'smooth'
    });
  }

  public trocarCategoria(button: number): void {
    let modal_categoria = document.querySelector('div#categoria');

    this.listaCategoria.forEach(e => {
      if (e.ativado) {
        modal_categoria.classList.remove(e.id);
        e.ativado = false;
      }
    });

    this.listaCategoria[button].ativado = true;
    modal_categoria.classList.add(this.listaCategoria[button].id);
  }
}
