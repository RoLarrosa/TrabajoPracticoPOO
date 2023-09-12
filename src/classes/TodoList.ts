interface Todo {
  id: number;
  title: string;
  done: boolean;
  date: string;
}

class TodoList {
  private todos: Todo[] = [];

  private generateId(): number {
    const ids = this.todos.map((todo) => todo.id);

    if (!ids.length) {
      return 1;
    }

    return Math.max(...ids) + 1;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.generateId(),
      title,
      done: false,
      date: new Date().toJSON().slice(0, 10),
    };

    this.todos.push(newTodo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (todo) {
      todo.done = true;
    }
  }
}

const lista = new TodoList();

lista.addTodo('My first todo');
lista.addTodo('My second todo');

console.log(lista.getTodos());

lista.deleteTodo(2);
console.log(lista.getTodos());

lista.completeTodo(1);
console.log(lista.getTodos());
