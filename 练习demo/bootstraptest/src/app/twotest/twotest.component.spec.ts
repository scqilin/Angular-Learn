import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwotestComponent } from './twotest.component';

describe('TwotestComponent', () => {
  let component: TwotestComponent;
  let fixture: ComponentFixture<TwotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
