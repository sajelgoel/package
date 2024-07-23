import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisedSectionComponent } from './customised-section.component';

describe('CustomisedSectionComponent', () => {
  let component: CustomisedSectionComponent;
  let fixture: ComponentFixture<CustomisedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomisedSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomisedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
