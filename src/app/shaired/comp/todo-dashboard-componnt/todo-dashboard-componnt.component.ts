import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../modals/todo';
import { todoArr } from '../../consts/todo';

@Component({
  selector: 'app-todo-dashboard-componnt',
  templateUrl: './todo-dashboard-componnt.component.html',
  styleUrls: ['./todo-dashboard-componnt.component.scss']
})
export class TodoDashboardComponntComponent implements OnInit {

  constructor() { }

  todoArray! : Array<Itodo>;

  ngOnInit(): void {
    this.todoArray = todoArr;
  }

  getObjtoadd(event : Itodo){
    this.todoArray.push(event);
  }

  checkedObj(obj : Itodo){
    let getindex = this.todoArray.findIndex((ele) => obj.todoId === ele.todoId)
    this.todoArray[getindex].isComplete = obj.isComplete;
    console.log(this.todoArray)
  }

}
