import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCheckoutComponent } from './self-checkout.component';

describe('SelfCheckoutComponent', () => {
  let component: SelfCheckoutComponent;
  let fixture: ComponentFixture<SelfCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
