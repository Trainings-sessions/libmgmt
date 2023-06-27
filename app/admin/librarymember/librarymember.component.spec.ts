import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarymemberComponent } from './librarymember.component';

describe('LibrarymemberComponent', () => {
  let component: LibrarymemberComponent;
  let fixture: ComponentFixture<LibrarymemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarymemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarymemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
