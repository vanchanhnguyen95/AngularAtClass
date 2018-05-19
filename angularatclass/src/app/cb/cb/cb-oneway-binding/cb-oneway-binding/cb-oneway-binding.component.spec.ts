import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbOnewayBindingComponent } from './cb-oneway-binding.component';

describe('CbOnewayBindingComponent', () => {
  let component: CbOnewayBindingComponent;
  let fixture: ComponentFixture<CbOnewayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbOnewayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbOnewayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
