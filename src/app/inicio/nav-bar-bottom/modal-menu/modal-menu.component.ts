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

  ngOnInit(): void {
  }

}
