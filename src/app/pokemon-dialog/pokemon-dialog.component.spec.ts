import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDialogComponent } from './pokemon-dialog.component';

describe('PokemonDialogComponent', () => {
  let component: PokemonDialogComponent;
  let fixture: ComponentFixture<PokemonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
