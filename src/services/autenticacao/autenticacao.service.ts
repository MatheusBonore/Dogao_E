import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppService } from '../app.service';

import { Usuario } from 'src/models/usuario';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService implements OnInit {
  private _usuario: Usuario;

  set usuario(usuario: Usuario) {
    this._usuario = usuario;
  }

  get usuario(): Usuario {
    return this._usuario;
  }

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }

  ngOnInit(): void { }

  public autenticarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.appService.baseUrl + 'api/autenticacao/verificar-login', JSON.stringify(usuario), { headers: this.appService.headers });
  }

}