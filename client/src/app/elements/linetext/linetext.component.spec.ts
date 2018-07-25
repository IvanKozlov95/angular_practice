import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinetextComponent } from './linetext.component';

describe('LinetextComponent', () => {
  let component: LinetextComponent;
  let fixture: ComponentFixture<LinetextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinetextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
