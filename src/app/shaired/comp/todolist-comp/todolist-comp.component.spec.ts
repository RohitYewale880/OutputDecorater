import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistCompComponent } from './todolist-comp.component';

describe('TodolistCompComponent', () => {
  let component: TodolistCompComponent;
  let fixture: ComponentFixture<TodolistCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
