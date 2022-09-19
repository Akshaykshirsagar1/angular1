import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignngclassComponent } from './assignngclass.component';

describe('AssignngclassComponent', () => {
  let component: AssignngclassComponent;
  let fixture: ComponentFixture<AssignngclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignngclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignngclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
