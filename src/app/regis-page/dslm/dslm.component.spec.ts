import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DslmComponent } from './dslm.component';

describe('DslmComponent', () => {
  let component: DslmComponent;
  let fixture: ComponentFixture<DslmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DslmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DslmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
