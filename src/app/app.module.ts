import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './shaired/comp/child-component/child-component.component';
import { TodoDashboardComponntComponent } from './shaired/comp/todo-dashboard-componnt/todo-dashboard-componnt.component';
import { TodoformCompComponent } from './shaired/comp/todoform-comp/todoform-comp.component';
import { TodolistCompComponent } from './shaired/comp/todolist-comp/todolist-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
