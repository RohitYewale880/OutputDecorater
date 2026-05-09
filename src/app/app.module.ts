import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './shaired/comp/child-component/child-component.component';
import { TodoDashboardComponntComponent } from './shaired/comp/todo-dashboard-componnt/todo-dashboard-componnt.component';
import { TodoformCompComponent } from './shaired/comp/todoform-comp/todoform-comp.component';
import { TodolistCompComponent } from './shaired/comp/todolist-comp/todolist-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shaired/Modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    TodoDashboardComponntComponent,
    TodoformCompComponent,
    TodolistCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
