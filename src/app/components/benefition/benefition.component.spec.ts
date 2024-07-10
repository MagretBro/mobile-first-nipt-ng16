import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitionComponent } from './benefition.component';

describe('BenefitionComponent', () => {
  let component: BenefitionComponent;
  let fixture: ComponentFixture<BenefitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitionComponent]
    });
    fixture = TestBed.createComponent(BenefitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
