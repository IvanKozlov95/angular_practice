import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexinfoComponent } from './indexinfo.component';

describe('IndexinfoComponent', () => {
  let component: IndexinfoComponent;
  let fixture: ComponentFixture<IndexinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
