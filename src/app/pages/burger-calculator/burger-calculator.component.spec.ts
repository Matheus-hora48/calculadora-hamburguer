import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerCalculatorComponent } from './burger-calculator.component';

describe('BurgerCalculatorComponent', () => {
  let component: BurgerCalculatorComponent;
  let fixture: ComponentFixture<BurgerCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
