import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFastenerComponent } from './source-fastener.component';

describe('SourceFastenerComponent', () => {
  let component: SourceFastenerComponent;
  let fixture: ComponentFixture<SourceFastenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceFastenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceFastenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
