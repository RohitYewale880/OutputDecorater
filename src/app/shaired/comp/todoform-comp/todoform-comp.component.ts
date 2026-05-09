import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TodoserviceService } from '../../service/todoservice.service';
import { Itodo } from '../../modals/todo';
import { snakbarservice } from '../../service/snakbar.service';

@Component({
  selector: 'app-todoform-comp',
  templateUrl: './todoform-comp.component.html',
  styleUrls: ['./todoform-comp.component.scss']
})
export class TodoformCompComponent implements OnInit, OnChanges {

  @ViewChild('todoItem') todoItem !: ElementRef;
  @ViewChild('isComplete') isComplete !: ElementRef;

  isinEditmode: boolean = false;

  @Output() emitarray: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() formeditobj!: Itodo
  @Output() emitupdateobj: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor(
    private _uuidservice: TodoserviceService,
    private _snakbar: snakbarservice
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formeditobj']['currentValue']) {
      this.isinEditmode = true
      this.todoItem.nativeElement.value = this.formeditobj.todoItem;
      this.isComplete.nativeElement.value = this.formeditobj.isComplete;
    }
  }

  ngOnInit(): void {

  }

  onAddtodo() {
    if (this.todoItem.nativeElement.value) {
      let todoobj: Itodo = {
        todoItem: this.todoItem.nativeElement.value,
        isComplete: this.isComplete.nativeElement.value === 'true' ? true : false,
        todoId: this._uuidservice.UUID().toString()
      }
      console.log(todoobj)

      this.emitarray.emit(todoobj);

      this.todoItem.nativeElement.value = ''
      this.isComplete.nativeElement.value = true

      this._snakbar.OpenSnakbar(`The TodoItem ${todoobj.todoItem} is Added successfully!!!`)
    }
  }
  onUpdatetodo() {
    let Updated_obj: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      isComplete: this.isComplete.nativeElement.value === 'true' ? true : false,
      todoId: this.formeditobj.todoId
    }

    this.emitupdateobj.emit(Updated_obj);

    this.todoItem.nativeElement.value = ''
    this.isComplete.nativeElement.value = true
    this.isinEditmode = false;

    this._snakbar.OpenSnakbar(`The TodoItem ${Updated_obj.todoItem} is Added successfully!!!`)
  }
}
