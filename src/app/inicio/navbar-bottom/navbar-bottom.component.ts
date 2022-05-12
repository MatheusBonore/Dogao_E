import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';

declare interface Item {
  name: string;
  icone: string;
  routerLink: string;
}

declare type Itens = Item[];

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit, AfterViewInit {
  public itens: Itens;

  private itemInicio: Item = {
    name: 'inicio',
    icone: 'fas fa-home',
    routerLink: '/inicio',
  };

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.itens = [
        this.itemInicio,
        {
          name: 'animais',
          icone: 'fas fa-paw',
          routerLink: '/animais',
        }, {
          name: 'notificacao',
          icone: 'fas fa-bell',
          routerLink: '/notificacao',
        }, {
          name: 'menu',
          icone: 'fas fa-bars',
          routerLink: '/menu',
        }
      ];
    });
  }
}
