import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NavbarModal } from '../navbar-modal.interface';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss']
})
export class ModalMenuComponent implements OnInit, NavbarModal {

  @ViewChild('template') public template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void { }

  public mudarCollapse(_e: number) {
    let listaCollapse: Array<any> = [
      { descricao: 'buttonCollapseFeedback' },
      { descricao: 'buttonCollapseConfiguracoes' },
      { descricao: 'buttonCollapseAjuda' }
    ];

    let button = document.querySelector('button#' + listaCollapse[_e].descricao);
    let arrow = button.querySelector('div#arrow i')
    arrow.classList.forEach(e => {
      if (e === 'fa-chevron-right') {
        arrow.classList.remove('fa-chevron-right')
        arrow.classList.add('fa-chevron-left')
      }

      if (e === 'fa-chevron-left') {
        arrow.classList.remove('fa-chevron-left')
        arrow.classList.add('fa-chevron-right')
      }
    });
  }
}
