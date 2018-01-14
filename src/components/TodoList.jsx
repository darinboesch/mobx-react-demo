import React from 'react';
import { observer } from 'mobx-react';
import TodoItem from './TodoItem';

// this decorator wraps the component 'render' method in 'autorun'
// so that state can be updated by the store
@observer
export default class TodoList extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <div>
        { store.report }
        <ul>
        { store.todos.map(
          (todo, idx) => <TodoItem todo={ todo } key={ idx } />
        ) }
        </ul>
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo({ task: (prompt('Enter a new todo:','coffee plz')) });
  }
}
