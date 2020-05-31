import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private _mostrarNavBar: boolean = true;

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
