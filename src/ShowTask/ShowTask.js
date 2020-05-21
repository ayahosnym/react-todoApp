import React, { Component, Fragment } from 'react';
import './ShowTask.css';


class ShowTask extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  taskDone = (e) => {
    let element = e.target
    if (element.style.backgroundColor == "transparent")
      element.style.backgroundColor = "green"
    else
      element.style.backgroundColor = "transparent"
  }
  render() {
    const allTasks = this.props.taskItem
    const len = allTasks.length
    const task = len ? (
      allTasks.map((val, index) => {
        return (
          <li key={index}>
            <i className="task-done" onClick={this.taskDone}> </i>
            <span>{val.task}</span>
            <span className="delete-task float-right ml-4 text-danger" onClick={() => { this.props.deleteTask(index) }}>Delete</span>
            {/* <span className="edit-task float-right">Edit</span> */}
          </li>
        )
      })
    ) : (
        <h6 className="text-info">There is no tasks for now,let's get started!!</h6>
      )

    return (
      <Fragment >
        <ol>{task}</ol>
      </Fragment>
    );
  }
}

export default ShowTask;