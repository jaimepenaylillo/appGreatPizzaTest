import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToppingComponent } from './list-topping.component';

describe('ListToppingComponent', () => {
  let component: ListToppingComponent;
  let fixture: ComponentFixture<ListToppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListToppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
