import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsbComponent } from './echartsb.component';

describe('EchartsbComponent', () => {
  let component: EchartsbComponent;
  let fixture: ComponentFixture<EchartsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
