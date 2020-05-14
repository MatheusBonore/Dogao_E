import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/usuario/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  public form = {
    email_telefone: "",
    senha: ""
  };

  ngOnInit(): void {
  }

  irParaPasso2() {

    document.getElementById('passo-1').hidden = true;
    document.getElementById('passo-2').hidden = false;
  }
}
