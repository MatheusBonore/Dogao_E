import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/usuario/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['../autenticacao.component.scss']
})
export class EntrarComponent implements OnInit {

  public form = {
    email_telefone: "",
    senha: ""
  };

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void { }

  fazerLogin(): boolean {

    let formData = new FormData();
    formData.append('telefone', '14991251792');
    formData.append('senha', 'senha@123');

    let teste = this.http.post('http://localhost/autenticacao', formData).toPromise()
    .then(res => console.log(res));

    return false;
  }

  irParaPasso2() {

    document.getElementById('passo-1').hidden = true;
    document.getElementById('passo-2').hidden = false;
  }
}
