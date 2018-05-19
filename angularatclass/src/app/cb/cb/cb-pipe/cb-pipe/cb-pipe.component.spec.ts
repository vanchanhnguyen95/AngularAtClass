import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbPipeComponent } from './cb-pipe.component';

describe('CbPipeComponent', () => {
  let component: CbPipeComponent;
  let fixture: ComponentFixture<CbPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
