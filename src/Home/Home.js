import React, { Component } from 'react';
import './Home.css';
import FormAddTask from '../FormAddTask/FormAddTask';
import ShowTask from '../ShowTask/ShowTask';
import Alert from 'react-bootstrap/Alert';

class Home extends Component {
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
  state = {
    tasks: []
  }
  // add task
  submit = (e) => {
    e.preventDefault()
    const task = e.target.elements.task.value
    if (task) {
      const allTasks = this.state.tasks
      allTasks.push({ task })
      this.setState({
        tasks: allTasks
      })
      e.target.reset()
    }
  }

  // delete task 
  deleteTask = (id) => {
    const allTasks = this.state.tasks
    this.setState({
      tasks: allTasks.filter((task, index) => {
        return id !== index
      })
    })
  }
  render() {
    return (
      <section className="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 mb-5">
            <div className="col-sm-12 ">
              <h2 className="title text-center mb-5 text-success">ToDo_App</h2>
            </div>
              <ShowTask taskItem={this.state.tasks} deleteTask={this.deleteTask} />
            </div>
            <div className="col-sm-12 col-md-8 text-center">
              <FormAddTask handelSubmit={this.submit} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;