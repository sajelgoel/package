import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosCardComponent } from './combos-card.component';

describe('CombosCardComponent', () => {
  let component: CombosCardComponent;
  let fixture: ComponentFixture<CombosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombosCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
