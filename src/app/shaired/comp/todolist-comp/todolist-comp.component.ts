import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../modals/todo';

@Component({
  selector: 'app-todolist-comp',
  templateUrl: './todolist-comp.component.html',
  styleUrls: ['./todolist-comp.component.scss']
})
export class TodolistCompComponent implements OnInit {
  @Input() gettodoarr! : Array<Itodo>;
  constructor() { }

  ngOnInit(): void {
  }

  trackByfun(index:number , item : Itodo){
    return item.todoId;
  }

  isCheckChange(event : any, todo : Itodo){
    todo.isComplete = event.checked // here event.checked return true/false
    let getindex = this.gettodoarr.findIndex((ele) => todo.todoId === ele.todoId)
    this.gettodoarr[getindex].isComplete = event.checked;
    console.log(this.gettodoarr)
  }
}
