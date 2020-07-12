import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPizzaToppingComponent } from './list-pizza-topping.component';

describe('ListPizzaToppingComponent', () => {
  let component: ListPizzaToppingComponent;
  let fixture: ComponentFixture<ListPizzaToppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPizzaToppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPizzaToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
