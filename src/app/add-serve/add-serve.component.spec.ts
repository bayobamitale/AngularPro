import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServeComponent } from './add-serve.component';

describe('AddServeComponent', () => {
  let component: AddServeComponent;
  let fixture: ComponentFixture<AddServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
