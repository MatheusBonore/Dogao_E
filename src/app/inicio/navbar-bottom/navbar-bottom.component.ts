import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalCategoriaComponent } from './modal-categoria/modal-categoria.component';
import { ModalNotificacaoComponent } from './modal-notificacao/modal-notificacao.component';
import { ModalMenuComponent } from './modal-menu/modal-menu.component';
import { NavbarModal } from './navbar-modal.interface';

declare interface Item {
  nome: string;
  icone: string;
  modal?: NavbarModal;
}

declare type Itens = Item[];

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit, AfterViewInit {

  @ViewChild(ModalCategoriaComponent) modalCategoriaComponent: ModalCategoriaComponent;
  @ViewChild(ModalNotificacaoComponent) modalNotificacaoComponent: ModalNotificacaoComponent;
  @ViewChild(ModalMenuComponent) modalMenuComponent: ModalMenuComponent;

  private modalRef: BsModalRef;

  public itemSelecionado: string;
  public listaItens: Itens;

  private itemInicio: Item = {
    nome: 'inicio',
    icone: 'fas fa-home'
  };

  constructor(
    private modalService: BsModalService,
  ) {}
  
  ngOnInit(): void {
    this.retornarInicio();
  }
  
  ngAfterViewInit(): void {

    setTimeout(
      () => {
        this.listaItens = [
          this.itemInicio,
          {
            nome: 'categoria',
            icone: 'fas fa-paw',
            modal: this.modalCategoriaComponent,
          }, {
            nome: 'notificacao',
            icone: 'fas fa-bell',
            modal: this.modalNotificacaoComponent,
          }, {
            nome: 'menu',
            icone: 'fas fa-bars',
            modal: this.modalMenuComponent,
          }
        ];
      }, 0
    );
  }

  public selecionarItem(item: Item) {
    this.itemSelecionado = item.nome;
    this.modalRef = this.modalService.show(item.modal.template, {});
  }

  public retornarInicio(){
    this.itemSelecionado = this.itemInicio.nome;
  }

  public fecharItem() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
