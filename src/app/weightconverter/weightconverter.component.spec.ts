import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightconverterComponent } from './weightconverter.component';

describe('WeightconverterComponent', () => {
  let component: WeightconverterComponent;
  let fixture: ComponentFixture<WeightconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
