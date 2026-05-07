import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboardComponntComponent } from './todo-dashboard-componnt.component';

describe('TodoDashboardComponntComponent', () => {
  let component: TodoDashboardComponntComponent;
  let fixture: ComponentFixture<TodoDashboardComponntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboardComponntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboardComponntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
