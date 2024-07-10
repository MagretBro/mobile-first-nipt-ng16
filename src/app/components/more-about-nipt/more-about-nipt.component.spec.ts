import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutNiptComponent } from './more-about-nipt.component';

describe('MoreAboutNiptComponent', () => {
  let component: MoreAboutNiptComponent;
  let fixture: ComponentFixture<MoreAboutNiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreAboutNiptComponent]
    });
    fixture = TestBed.createComponent(MoreAboutNiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
