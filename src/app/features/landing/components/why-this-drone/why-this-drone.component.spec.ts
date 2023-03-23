import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyThisDroneComponent } from './why-this-drone.component';

describe('WhyThisDroneComponent', () => {
  let component: WhyThisDroneComponent;
  let fixture: ComponentFixture<WhyThisDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyThisDroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyThisDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
