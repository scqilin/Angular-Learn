import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsaComponent } from './echartsa.component';

describe('EchartsaComponent', () => {
  let component: EchartsaComponent;
  let fixture: ComponentFixture<EchartsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
