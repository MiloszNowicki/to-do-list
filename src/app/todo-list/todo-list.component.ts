import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store'
import {IAppState} from '../store'
import {REMOVE_ALL_TODOS,TOGGLE_TODO,ADD_TODO,REMOVE_TODO} from '../actions'
import {ITodo} from '../todo'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
@select() todos;
model: ITodo = {
  id: 0,
  description: "",
  isCompleted: false,
  priority: 'low',
  responsible: ""
}
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
  onSubmit() {
  this.ngRedux.dispatch({type: ADD_TODO, todo: this.model})
  }
  toggleTodo(tooo){
  this.ngRedux.dispatch({type: TOGGLE_TODO, id: tooo.id})
  }
  removeTodo(todo){
  this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id})
  }

}
