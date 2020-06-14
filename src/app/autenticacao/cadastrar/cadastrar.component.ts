import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['../autenticacao.component.scss']
})
export class CadastrarComponent implements OnInit {
  private _step: number = 1;

  public autenticacaoCadastrarForm: NgForm;
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

  public verificarNomeSobrenome(usuario: Usuario) {
    if (usuario.nome && usuario.sobrenome)
      this.avancarStep();
  }

  public verificarTelefone(usuario: Usuario) {
    if (usuario.telefone && !/[A-Z]/i.test(usuario.telefone)) {
      this.enviarCodigoVerificacao(usuario);
      this.avancarStep();
    }
  }

  public verificarCodigoVerificacao(usuario: Usuario) {
    if (this.codigoVerificacao) {
      //CARREGAR NOME DO USUARIO AQUI
      this.avancarStep();
    }
  }
}
