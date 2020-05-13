import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppServico } from '../app.service';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoServico implements OnInit {
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private appServico: AppServico,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void { }

}