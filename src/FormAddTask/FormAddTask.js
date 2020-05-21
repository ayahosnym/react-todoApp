import React, { Component, Fragment } from 'react';
import './FormAddTask.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class FormAddTask extends Component {
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

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.props.handelSubmit} className="">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" name="task" placeholder="Add Task" />
          </Form.Group>
          <Button variant="primary" type="submit" >Add Task</Button>
        </Form>
        <p>
          {/* <Alert variant="danger" className="test">
            nothig to show
         </Alert> */}
        </p>
      </Fragment>
    );
  }
}
export default FormAddTask;