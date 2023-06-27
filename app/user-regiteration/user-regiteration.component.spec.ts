import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegiterationComponent } from './user-regiteration.component';

describe('UserRegiterationComponent', () => {
  let component: UserRegiterationComponent;
  let fixture: ComponentFixture<UserRegiterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegiterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegiterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
