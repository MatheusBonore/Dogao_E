import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NavbarModal } from '../navbar-modal.interface';

@Component({
  selector: 'app-modal-notificacao',
  templateUrl: './modal-notificacao.component.html',
  styleUrls: ['./modal-notificacao.component.scss']
})
export class ModalNotificacaoComponent implements OnInit, NavbarModal {

  @ViewChild('template') public template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
