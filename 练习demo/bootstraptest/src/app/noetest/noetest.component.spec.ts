import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoetestComponent } from './noetest.component';

describe('NoetestComponent', () => {
  let component: NoetestComponent;
  let fixture: ComponentFixture<NoetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
