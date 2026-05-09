import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../modals/todo';

import { snakbarservice } from '../../service/snakbar.service';
import { todoArr } from '../../consts/todo';

@Component({
  selector: 'app-todo-dashboard-componnt',
  templateUrl: './todo-dashboard-componnt.component.html',
  styleUrls: ['./todo-dashboard-componnt.component.scss']
})
export class TodoDashboardComponntComponent implements OnInit {

  constructor(
    private _snakbar: snakbarservice
  ) { }

  todoArray!: Array<Itodo>;

  editObj!: Itodo;

  ngOnInit(): void {
    if (localStorage.getItem('todoArray')) {
      this.todoArray = JSON.parse(localStorage.getItem('todoArray') || '[]');
    }
    else {
      this.todoArray = [];
    }
  }

  getObjtoadd(event: Itodo) {
    this.todoArray.push(event);
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray))
  }

  checkedObj(obj: Itodo) {
    let getindex = this.todoArray.findIndex((ele) => obj.todoId === ele.todoId)
    this.todoArray[getindex].isComplete = obj.isComplete;
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray))
    console.log(this.todoArray)
  }

  onRemoveidget(event: string) {
    let getconfirm = confirm('Are you sure do you want to delete this todoItem!!!')
    if (getconfirm) {
      let getindex = this.todoArray.findIndex((ele) => ele.todoId === event)
      let val = this.todoArray.splice(getindex, 1);
      this._snakbar.OpenSnakbar(`The todoItem ${val[0].todoItem} is removed successfully!!!`)
    }
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray))
  }

  onEditObjGet(event: Itodo) {
    this.editObj = event;
  }

  getUpdatedObj(updated_obj: Itodo) {
    let getindex = this.todoArray.findIndex((ele) => ele.todoId === updated_obj.todoId);
    this.todoArray[getindex] = updated_obj;
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray))
  }

}
