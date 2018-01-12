import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCoinComponent } from './add-new-coin.component';

describe('AddNewCoinComponent', () => {
  let component: AddNewCoinComponent;
  let fixture: ComponentFixture<AddNewCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
