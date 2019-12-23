import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPokeComponent } from './nav-poke.component';

describe('NavPokeComponent', () => {
  let component: NavPokeComponent;
  let fixture: ComponentFixture<NavPokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
