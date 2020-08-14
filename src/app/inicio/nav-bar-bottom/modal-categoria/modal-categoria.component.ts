import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NavbarModal } from '../navbar-modal.interface';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styleUrls: ['./modal-categoria.component.scss']
})
export class ModalCategoriaComponent implements OnInit, NavbarModal {

  @ViewChild('template') public template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
