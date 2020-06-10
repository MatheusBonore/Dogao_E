import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['../autenticacao.component.scss']
})
export class EntrarComponent implements OnInit {
  private _step: number = 1;

  public usuario: Usuario = new Usuario();

  set step(step: number) {
    this._step = step;
  }

  get step(): number {
    return this._step;
  }

  constructor() { }

  ngOnInit(): void { }

  private avancarStep() {
    this.step += 1;
  }

  public verificarStep(step: number): boolean {
    return step === this.step;
  }

  public verificarEmailTelefone(usuario: Usuario) {
    if (!usuario.email)
      console.log('em branco')
    else {
      if (usuario.nome) {
        this.avancarStep();
      }
    }
  }

  public verificarSenha(usuario: Usuario) {

  }
}
