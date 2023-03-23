import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNowComponent } from './get-now.component';

describe('GetNowComponent', () => {
  let component: GetNowComponent;
  let fixture: ComponentFixture<GetNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
