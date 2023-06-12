import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFreeComponent } from './set-free.component';

describe('SetFreeComponent', () => {
  let component: SetFreeComponent;
  let fixture: ComponentFixture<SetFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetFreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
