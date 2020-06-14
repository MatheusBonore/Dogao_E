import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.scss']
})
export class SairComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    localStorage.removeItem('logado');
    this.router.navigateByUrl('/autenticacao');
  }

  ngOnInit(): void { }

}
