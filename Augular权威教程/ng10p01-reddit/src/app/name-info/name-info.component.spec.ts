import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInfoComponent } from './name-info.component';

describe('NameInfoComponent', () => {
  let component: NameInfoComponent;
  let fixture: ComponentFixture<NameInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
