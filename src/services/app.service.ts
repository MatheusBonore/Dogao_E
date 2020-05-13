import { Injectable, OnInit, Inject } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppServico implements OnInit {
  private baseUrl: string;

  constructor(
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void {  }

  public get headers(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }
}