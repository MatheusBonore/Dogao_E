import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  private _mostrarInicio: boolean = true;
  private _item: string;

  set mostrarInicio(mostrarInicio: boolean) {
    this._mostrarInicio = mostrarInicio;
  }

  get mostrarInicio(): boolean {
    return this._mostrarInicio;
  }

  set item(item: string) {
    this._item = item;
  }

  get item(): string {
    return this._item;
  }

  constructor() { }

  ngOnInit(): void { }

  public obterItem(item: string) {
    this.item = item;
    if (this.item != '/inicio') {
      this.mostrarInicio = false;
    }
  }

  public fecharItem() {
    this.mostrarInicio = true;
  }

}
