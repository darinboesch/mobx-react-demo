import React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import PeopleModel from "./models/PeopleModel";

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
store.addTodo({ task: "Get Coffee" });
store.addTodo({ task: "Write simpler code" });
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo({ task: "Get a cookie as well", assignee: new PeopleModel("Me!") });
}, 5000);

setTimeout(() => {
  store.todos[1].assignee.name = "Test name";
}, 10000);

// playing around in the console
window.store = store;
