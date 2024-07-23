import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisedComponent } from './customised.component';

describe('CustomisedComponent', () => {
  let component: CustomisedComponent;
  let fixture: ComponentFixture<CustomisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomisedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
