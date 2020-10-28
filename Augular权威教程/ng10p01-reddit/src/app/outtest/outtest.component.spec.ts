import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuttestComponent } from './outtest.component';

describe('OuttestComponent', () => {
  let component: OuttestComponent;
  let fixture: ComponentFixture<OuttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuttestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
