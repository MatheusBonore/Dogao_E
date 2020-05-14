import { Injectable, OnInit, Inject } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit {
  private _baseUrl: string;

  set baseUrl(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  constructor(
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void { }

  public get headers(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }
}
