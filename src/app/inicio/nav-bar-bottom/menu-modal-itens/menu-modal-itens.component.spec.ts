import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModalItensComponent } from './menu-modal-itens.component';

describe('MenuModalItensComponent', () => {
  let component: MenuModalItensComponent;
  let fixture: ComponentFixture<MenuModalItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuModalItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModalItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
