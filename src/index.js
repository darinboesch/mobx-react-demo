import React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

const store = new TodoListModel();

// render(<App />, document.getElementById('root'));

render(
  <div>
    <DevTools />
    <TodoList store={store} />
  </div>,
  document.getElementById('root')
);

// registerServiceWorker();
store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;