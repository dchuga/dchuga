import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoImc } from './calculo-imc';

describe('CalculoImc', () => {
  let component: CalculoImc;
  let fixture: ComponentFixture<CalculoImc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoImc],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculoImc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
