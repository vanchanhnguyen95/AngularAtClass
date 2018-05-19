import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbDirectiveComponent } from './cb-directive.component';

describe('CbDirectiveComponent', () => {
  let component: CbDirectiveComponent;
  let fixture: ComponentFixture<CbDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
