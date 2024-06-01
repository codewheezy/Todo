import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items;
  }

  addItem(newItem: any) {
    if (newItem != "") {
        this.model.items.push(new TodoItem(newItem, false));
    }
  }
}
