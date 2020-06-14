import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['../../autenticacao.component.scss']
})
export class EmailComponent implements OnInit {
  private _step: number = 1;

  public autenticacaoRecuperarEmailForm: NgForm;
  public usuario: Usuario = new Usuario();
  public codigoVerificacao: string;

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
    if (usuario.telefone) {
      //ENVIAR SMS AQUI COM O COD DE VERIFICACAO
      this.codigoVerificacao = 'DOG-2525'
    }
  }

  public verificarTelefone(usuario: Usuario) {
    if (usuario.nome && usuario.sobrenome && (usuario.telefone && !/[A-Z]/i.test(usuario.telefone))) {
      this.enviarCodigoVerificacao(usuario);
      this.avancarStep();
    }
  }

  public verificarCodigoVerificacao(usuario: Usuario) {
    if (this.codigoVerificacao) {
      //CARREGAR NOME E EMAIL DO USUARIO AQUI
      this.avancarStep();
    }
  }
}
