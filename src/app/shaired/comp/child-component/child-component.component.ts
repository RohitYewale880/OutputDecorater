import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
  @Output() emitev : EventEmitter<string> = new EventEmitter<string>()
  ngOnInit(): void {
  }

  onClick(){
    this.emitev.emit('The msg is emited from child to parent !!!')
  }

}
