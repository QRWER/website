import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3Component } from './page3.component';

describe('TastComponent', () => {
  let component: Page3Component;
  let fixture: ComponentFixture<Page3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page3Component]
    });
    fixture = TestBed.createComponent(Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
