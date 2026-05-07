import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TodoserviceService } from '../../service/todoservice.service';
import { Itodo } from '../../modals/todo';

@Component({
  selector: 'app-todoform-comp',
  templateUrl: './todoform-comp.component.html',
  styleUrls: ['./todoform-comp.component.scss']
})
export class TodoformCompComponent implements OnInit {

  @ViewChild('todoItem') todoItem !: ElementRef;
  @ViewChild('isComplete') isComplete !: ElementRef;

  @Output() emitarray : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor(
    private _uuidservice : TodoserviceService
  ) { }

  ngOnInit(): void {
  }

  onAddtodo(){
    let todoobj : Itodo = {
      todoItem : this.todoItem.nativeElement.value,
      isComplete : this.isComplete.nativeElement.value === 'true' ? true : false,
      todoId: this._uuidservice.UUID().toString()
    }
    console.log(todoobj)

    this.emitarray.emit(todoobj);

    this.todoItem.nativeElement.value = ''
    this.isComplete.nativeElement.value = true
  }

}
