import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['../../autenticacao.component.scss']
})
export class SenhaComponent implements OnInit {
  private _step: number = 3;

  public autenticacaoRecuperarSenhaForm: NgForm;
  public usuario: Usuario = new Usuario();
  public codigoVerificacao: string;
  public senhaNova: string;

  set step(step: number) {
    this._step = step;
  }

  get step(): number {
    return this._step;
  }

  constructor() { }

  ngOnInit(): void { }

  public avancarStep() {
    this.step += 1;
  }

  public verificarStep(step: number): boolean {
    return step === this.step;
  }

  public enviarCodigoVerificacao(usuario: Usuario) {
    if (usuario.telefone || usuario.email) {
      //ENVIAR EMAIL AQUI COM O COD DE VERIFICACAO
      this.codigoVerificacao = 'DOG-2525'
    }
  }

  public verificarEmailTelefone(usuario: Usuario) {
    if (usuario.email) {
      if (!/[A-Z]/i.test(usuario.email)) {
        usuario.telefone = usuario.email;
        delete usuario.email;
      }
      //CARREGAR EMAIL DO USUARIO AQUI
      this.enviarCodigoVerificacao(usuario);
      this.avancarStep();
    }
  }

  public verificarCodigoVerificacao(usuario: Usuario) {
    if (this.codigoVerificacao) {
      this.avancarStep();
    }
  }
}
