import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDescriptionComponent } from './photo-description.component';

describe('PhotoDescriptionComponent', () => {
  let component: PhotoDescriptionComponent;
  let fixture: ComponentFixture<PhotoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
