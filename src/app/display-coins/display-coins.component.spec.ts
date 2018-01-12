import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCoinsComponent } from './display-coins.component';

describe('DisplayCoinsComponent', () => {
  let component: DisplayCoinsComponent;
  let fixture: ComponentFixture<DisplayCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
