import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesBasicas } from './operaciones-basicas';

describe('OperacionesBasicas', () => {
  let component: OperacionesBasicas;
  let fixture: ComponentFixture<OperacionesBasicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacionesBasicas],
    }).compileComponents();

    fixture = TestBed.createComponent(OperacionesBasicas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
