import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPokeComponent } from './footer-poke.component';

describe('FooterPokeComponent', () => {
  let component: FooterPokeComponent;
  let fixture: ComponentFixture<FooterPokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
