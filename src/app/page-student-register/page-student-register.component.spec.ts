import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudentRegisterComponent } from './page-student-register.component';

describe('PageStudentRegisterComponent', () => {
  let component: PageStudentRegisterComponent;
  let fixture: ComponentFixture<PageStudentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStudentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStudentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
