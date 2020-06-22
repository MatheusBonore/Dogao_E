import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() public childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  public retornarItem(path: string) {
    this.childEvent.emit(path);
  }
}
