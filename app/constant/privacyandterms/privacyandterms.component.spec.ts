import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyandtermsComponent } from './privacyandterms.component';

describe('PrivacyandtermsComponent', () => {
  let component: PrivacyandtermsComponent;
  let fixture: ComponentFixture<PrivacyandtermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyandtermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyandtermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
