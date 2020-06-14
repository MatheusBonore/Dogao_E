import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['../autenticacao.component.scss']
})
export class EntrarComponent implements OnInit {
  private _step: number = 1;

  public autenticacaoEntrarForm: NgForm;
  public usuario: Usuario = new Usuario();

  set step(step: number) {
    this._step = step;
  }

  get step(): number {
    return this._step;
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  public avancarStep() {
    this.step += 1;
  }

  public verificarStep(step: number): boolean {
    return step === this.step;
  }

  public verificarEmailTelefone(usuario: Usuario) {
    if (usuario.email) {
      if (!/[A-Z]/i.test(usuario.email)) {
        usuario.telefone = usuario.email;
        delete usuario.email;
      }
      //CARREGAR NOME DO USUARIO AQUI
      this.avancarStep();
    }
  }

  public verificarSenha(usuario: Usuario) {
    if (usuario.senha) {
      localStorage.setItem('logado','true');
      this.router.navigateByUrl('/inicio');
    }
  }
}
