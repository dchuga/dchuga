import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoIess } from './calculo-iess';

describe('CalculoIess', () => {
  let component: CalculoIess;
  let fixture: ComponentFixture<CalculoIess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoIess],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculoIess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
