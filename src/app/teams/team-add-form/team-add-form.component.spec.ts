import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAddFormComponent } from './team-add-form.component';

describe('AddteamComponent', () => {
  let component: TeamAddFormComponent;
  let fixture: ComponentFixture<TeamAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
