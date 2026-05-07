import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformCompComponent } from './todoform-comp.component';

describe('TodoformCompComponent', () => {
  let component: TodoformCompComponent;
  let fixture: ComponentFixture<TodoformCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoformCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoformCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
