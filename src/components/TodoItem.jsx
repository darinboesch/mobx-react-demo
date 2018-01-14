import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoItem extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.finished }
          onChange={ this.onToggleFinished }
        />
        { todo.task }
        { todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        }
      </li>
    );
  }

  onToggleFinished = () => {
    const todo = this.props.todo;
    todo.finished = !todo.finished;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}
