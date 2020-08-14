import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() public childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  public retornarItem(path: string) {
    this.childEvent.emit(path);
  }
}
